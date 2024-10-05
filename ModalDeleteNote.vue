<template>
    <div class="modal is-active p-2">
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note?</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
            Are you sure you want to delete this note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button class="button" @click="closeModal">Cancel</button>
                <button @click="handleDelete(noteId)" class="button is-danger">Delete</button>
            </footer>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted, onUnmounted} from 'vue'
    import {onClickOutside} from '@vueuse/core'
    import {useStoreNotes} from '@/stores/storeNotes'

    const storeNotes = useStoreNotes()

    const modalRef = ref(null)
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        noteId: {
            type: Number,
            required: true
        }
    })

    const handleDelete = (id) => {
        storeNotes.deleteNote(id)
    }

    const emit = defineEmits(['update:modelValue'])

    const closeModal = () => {
        emit('update:modelValue', false)
    }

    onClickOutside(modalRef, closeModal)

    const handleKeyboard = e => {
        if (e.key=="Escape") closeModal()
    }

    onMounted( () => {
        document.addEventListener('keyup', handleKeyboard)
    })

    onUnmounted( () => {
        document.removeEventListener('keyup', handleKeyboard)
    })
</script>
