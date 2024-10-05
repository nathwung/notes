<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ storeNotes.getTotalNotes() }}</td>
                </tr>
                <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ storeNotes.getTotalCharacters() }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {useStoreNotes} from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

</script>
