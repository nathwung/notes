import {defineStore} from 'pinia'
import {ref} from 'vue'
import {useStoreNotes} from '@/stores/storeNotes'
import {useRouter} from 'vue-router'
import {auth} from '@/js/firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

export const useStoreAuth = defineStore('auth', () => {
    const storeNotes = useStoreNotes()
    const router = useRouter()
    const user =  ref({})

    const init = () => {
        onAuthStateChanged(auth,(user_data) => {
            if (user_data){
                user.value.id=user_data.uid
                user.value.email=user_data.email
                // router.push("/")
                if(sessionStorage.getItem('last-route')){
                    router.push(sessionStorage.getItem('last-route'))
                }else{
                    router.push("/")
                }
                storeNotes.init()
            }else{
                user.value={}
                storeNotes.clearNotes()
                router.replace("/auth")
            }
        })
    }

    const registerUser = (credentials) => {
        createUserWithEmailAndPassword(auth,credentials.email,credentials.password)
        .then((userCredential)=>{
            const user = userCredential.user
        })
        .catch((error)=>{
            const errorCode = error.code
            const errorMessage = error.message
        })
    }

    const loginUser = (credentials) => {
        signInWithEmailAndPassword(auth,credentials.email,credentials.password)
        .then((userCredential)=>{
            const user = userCredential.user
        })
        .catch((error)=>{
            const errorCode = error.code
            const errorMessage = error.message
        })     
    }

    const logoutUser = () => {
        signOut(auth).then(()=>{
            console.log("User Logout")
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    return {init, user, registerUser, loginUser, logoutUser}
  })
