<template>
    <nav class="navbar is-success" role="navigation" aria-label="main-navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Notes
                </div>
                <a @click.prevent="showMobileNav = !showMobileNav" role="button" class="navbar-burger" :class="showMobileNav?'is-active' : ''" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" ref="navbarBurgerRef">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" id="navbarBasicExample" :class="showMobileNav?'is-active' : ''" ref="navbarMenuRef">
                <div class="navbar-end">
                    <div v-if="storeAuth.user.id" class="navbar-start">
                        <div class="navbar-item">
                            Logged in as {{ storeAuth.user.email }}
                        </div>
                        <button class="button is-small is-info mt-3 ml-3 mr-3" @click="storeAuth.logoutUser()">
                            Log Out
                        </button>
                    </div>
                    <RouterLink
                    @click="showMobileNav = false"
                    :to="{name: 'home'}" class="navbar-item" active-class="is-active">
                        Notes
                    </RouterLink>
                    <RouterLink
                    @click="showMobileNav = false"
                    :to="{name: 'stats'}" class="navbar-item" active-class="is-active">
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
    <!-- <input ref = 'firstName'> -->
</template>

<style>
    @media (max-width: 1023px){
        .navbar-menu {
            position: absolute;
            left: 0;
            width: 100%;
        }
    }
</style>

<script setup>
import {ref} from 'vue'
import {useStoreAuth} from '@/stores/storeAuth.js'
const showMobileNav = ref(false)
const firstName = ref(null)
const storeAuth = useStoreAuth()
console.log(firstName.value)
</script>
