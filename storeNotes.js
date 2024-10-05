import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStoreAuth } from '@/stores/storeAuth'
import {collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc, query, orderBy} from "firebase/firestore"
import {db} from '@/js/firebase'

let noteCollectionRef
let noteCollectionQuery
let getNotesSnapshot=null

export const useStoreNotes = defineStore('notes', () => {
  const storeAuth = useStoreAuth()

  const notes = ref([
    // {content:'New Notes1', date:Date.now(),id: 1},
    // {content:'New Notes2', date:Date.now(),id: 2},
    // {content:'New Notes3', date:Date.now(),id: 3}
  ])

  const notesLoaded = ref(true)

  const init=()=>{
    noteCollectionRef=collection(db,"users",storeAuth.user.id,"notes")
    noteCollectionQuery=query(noteCollectionRef,orderBy("date","desc"))
    getNotes()
  }
  
  const getNotes=async()=>{
    notesLoaded.value=false
    getNotesSnapshot=onSnapshot(noteCollectionQuery, (querySnapshot)=>{
      let notes_arr=[]
      querySnapshot.forEach((doc)=>{
        let note={
          id: doc.id,
          content:doc.data().content,
          date:doc.data().date
        }
        notes_arr.push(note)
      });
      notes.value=notes_arr
      notesLoaded.value=true
    }, error =>{
      console.log(error.message)
    })
  }

  const clearNotes=()=>{
    notes.value=[]
    if(getNotesSnapshot) getNotesSnapshot()
  }

  const getNoteContent = (noteId) => {
    let data = ""
    notes.value.forEach((note, i)=> {
      if (noteId == note.id ) {
        data = note.content
      }
    })
    return data
  }

  const createNote = async(noteContent) => {
    let currentDate =  new Date().getTime(),
      date=currentDate.toString()
    await addDoc(noteCollectionRef,{
      content: noteContent,
      date
    })
  }

  const updateNote = async(noteId, noteContent) => {
    await updateDoc(doc(noteCollectionRef, noteId), {
      content: noteContent
    })
  }

  const deleteNote = async(noteId) => {
    await deleteDoc(doc(noteCollectionRef,noteId))
  }

  const getTotalNotes = () => {
    return notes.value.length
  }

  const getTotalCharacters = () => {
    let sum = 0
    notes.value.forEach((note, i) => {
      sum += note.content.length
    })
    return sum
  }

  return {init, notes, notesLoaded, getNoteContent, updateNote, deleteNote, createNote, getTotalNotes, getTotalCharacters, clearNotes}
})
