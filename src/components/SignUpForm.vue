<template>
    <form @submit.prevent="handleSubmit">
        <h3 class="form-title">Sign Up</h3>
        <p class="error" v-if="error">{{ error }}</p>
        <input type="text" required name="displayName" placeholder="Display Name" v-model="displayName">
        <input type="email" required name="email" placeholder="Email" v-model="email">
        <input type="password" required name="password" placeholder="Password" v-model="password">
        <p class="text">Already have an account? <router-link :to="{ name: 'login'}">Login here</router-link></p>
        <button type="submit">{{ loading ? 'Please Wait...' : 'Sign Up'}}</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useSignup from '../composables/useSignup'


const email = ref('')
const displayName = ref('')
const password = ref('')
const loading = ref('')
const { signup, error } = useSignup()
const router = useRouter()

const handleSubmit = async () => {
    loading.value = true
    await signup(email.value, password.value, displayName.value);
    if(error.value) { 
        setTimeout(() => { error.value = '' }, 3000)
    } else {
        router.push({ name: 'chatroom'})
    }
    loading.value = false
}
</script>

<style scope>
    .text {
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .form-title {
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        margin-top: 20px;
    }

    .error {
        font-size: 14px;
        color: #ff4500;
        text-align: center;
    }
</style>