<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li :class="{'is-active' : !register}"><a @click.prevent="register = false">Login</a></li>
                <li :class="{'is-active' : register}"><a @click.prevent="register = true">Register</a></li>
            </ul>
        </div>
        <div class="card auth-form">
            <div class="card-content">
                <div class="title has-text-centered">
                    {{ formTitle }}
                </div>
                <form @submit.prevent="onSubmit">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="credentials.email">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Password" v-model="credentials.password">
                        </div>
                    </div>
                    <div class="field is-grouped is-grouped-right">
                        <p class="control">
                            <button class="button is-primary">
                                {{ formTitle }}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, computed} from 'vue'
import {useStoreAuth} from '@/stores/storeAuth'


const register = ref(false)
const storeAuth = useStoreAuth()

const formTitle = computed(() => {
    return register.value? 'Register' : 'Login'
})

const credentials = ref({
    email: '',
    password: ''
})

const onSubmit = () => {
    if (!credentials.value.email || !credentials.value.password){
        alert("Please enter an email and password")
    } else {
        if (register.value){
            storeAuth.registerUser(credentials.value)
        } else {
            storeAuth.loginUser(credentials.value)

        }
    }
}

</script>
