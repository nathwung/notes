<template>
    <div class="notes">
        <AddEditNote
            v-model="newNote"
            placeholder="Add a new note"
            ref="addEditNoteRef"
        >
            <template v-slot:buttons>
                <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>
            </template>
        </AddEditNote>

        <progress v-if="!storeNotes.notesLoaded" class="progress is-medium is-success"></progress>

        <template v-else>
            <Note 
                v-for="note in storeNotes.notes"
                :key="note.id"
                :note="note"
            />

            <div v-if="!storeNotes.notes.length" class="is-size-4 has-text-centred has-text-grey-light is-family-monospace py-6">
                No notes here yet...
            </div>
        </template>
    </div>
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import Note from '@/components/Notes/Note.vue'
import {ref} from 'vue'
import {useStoreNotes} from '@/stores/storeNotes.js'

const newNote = ref('')
const storeNotes = useStoreNotes()

const addNote = () => {
    storeNotes.createNote(newNote.value)
    newNote.value = ''
}

</script>
