<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="columns is-mobile has-text-grey-light mt-2">
                    <small class="column">{{ dateFormatted }}</small>
                    <small class="column has-text-right">{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
            class="card-footer-item"
            :to="`/edit/${note.id}`"
            >
                Edit
            </RouterLink>
            <a
                href="#"
                class="card-footer-item"
                @click.prevent="deleteNote=true"
            >
                Delete
            </a>
        </footer>
        <ModalDeleteNote
            v-if="deleteNote"
            v-model="deleteNote"
            :noteId="note.id"
        />
    </div>
</template>

<script setup>
    import {computed, ref} from 'vue'
    import {useDateFormat} from '@vueuse/core'
    import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'

    const props = defineProps({
        note: {
            type: Object,
            required: true
        }
    })

    const characterLength = computed(() => {
        let length = props.note.content.length
        let description = length > 1? 'Characters' : 'Character'
        return `${length} ${description}`
    })

    const deleteNote = ref(false)

    const dateFormatted = computed(() => {
        let date = new Date(parseInt(props.note.date))
        let formattedDate = useDateFormat(date, 'DD-MM-YYYY ~ HH:mm')
        return formattedDate.value
    })
</script>
