<template>
    <div>
        <h1> Register</h1>
        <form @submit.prevent="register">
            <input v-model="email" type="email" name="email" placeholder="Email">
            <input v-model="password" type="password" name="password" placeholder="Password">
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AuthenticationService from '../services/AuthenticationService';
const email = ref("")
const password = ref("")

const register = async () => {
    const response = await AuthenticationService.register({
        email: email.value,
        password: password.value
    })
    console.log(response.data)
}
</script>

<style scoped></style>