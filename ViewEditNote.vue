<template>
    <div class="edit-note">
        <AddEditNote
        v-model="noteContent"
        byColor="link"
        placeholder="Edit note"
        label="Edit Note"
        ref="addEditNoteRef"
        >
            <template v-slot:buttons>
                <RouterLink to="/" class="button is-link is-light mr-2">Cancel</RouterLink>
                <button @click="handleSave" class="button is-link has-background-link" :disabled="!noteContent">Save Note</button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {RouterLink, useRoute, useRouter} from 'vue-router'
    import AddEditNote from '@/components/Notes/AddEditNote.vue'
    import {useStoreNotes} from '@/stores/storeNotes'

    const storeNotes = useStoreNotes()
    const route = useRoute()
    const router = useRouter()
    const noteContent = ref(storeNotes.getNoteContent(route.params.id))

    const handleSave = () => {
        storeNotes.updateNote(route.params.id, noteContent.value)
        router.push('/')
        // router.push({name: 'home'})
    }


</script>
