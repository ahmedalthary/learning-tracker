<template>
    <div class="register">
        <h1> Register</h1>
        <form @submit.prevent="register">
            <input v-model="email" type="email" name="email" placeholder="Email">
            <input v-model="password" type="password" name="password" placeholder="Password">
            <div class="error" v-html="error" v-if="error"></div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AuthenticationService from '../services/AuthenticationService';
const email = ref("")
const password = ref("")
let error = ref(null)

const register = async () => {

    try {
        const response = await AuthenticationService.register({
            email: email.value,
            password: password.value
        })
        console.log(response.data)
    } catch (err) {
        error.value = err.response.data.error
    }
}
</script>

<style scoped>
.register {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    padding: 20px;
    width: 400px;
    max-width: 100%;
}

.register h1 {
    padding-bottom: 20px;
    text-align: center;
}

.register form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

form input {
    padding: 15px;
    border: 0;
    background-color: #eef5fc;
    border-radius: 5px;
    color: #6a737c;
    caret-color: auto;
}

form input:focus {
    outline: none;
}

form .error {
    background-color: #fd3939;
    border-radius: 5px;
    width: fit-content;
    padding: 8px;
    color: #fff;
    margin: 0 auto;
}

form button {

    background-color: #0069d1;
    color: #fff;
    padding: 15px 20px;
    border: 0;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    width: fit-content;
    margin: 20px auto 0;
    transition: 0.3s;
}

form button:hover {
    background-color: #0151a1;
}
</style>