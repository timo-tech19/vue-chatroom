<template>
    <form @submit.prevent="handleSubmit">
        <h3 class="form-title">Login</h3>
        <p class="error" v-if="error">{{ error }}</p>
        <input type="email" required name="email" placeholder="Email" v-model="email">
        <input type="password" required name="password" placeholder="Password" v-model="password">
        <p class="text">Do not have an account? <router-link :to="{ name: 'signup'}">Sign Up here</router-link></p>
        <button type="submit">{{ loading ? 'Please Wait...' : 'Login'}}</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useLogin from '../composables/useLogin';

const email = ref('')
const password = ref('')
const loading = ref(false);
const { login, error} = useLogin()
const router = useRouter();

const handleSubmit = async () => {
    loading.value = true;
    await login(email.value, password.value);
    if(error.value) { 
        setTimeout(() => { error.value = '' }, 3000)
    } else {
        router.push({ name: 'chatroom'});
    }
    loading.value = false;
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
</style>