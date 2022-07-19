<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'


const { user } = getUser();
const loading = ref(false);
const router = useRouter()

const handleClick = async () => {
    loading.value = true;
    const  { error, logout } = useLogout()
    await logout();
    loading.value = false;
    if(error.value) {
        aler(error.value)
    }
    router.push({ name: 'login'})
}

</script>

<template>
    <nav v-if="user" class="nav container">
        <div class="">
            <h3 class="nav-title">Hello, <span>{{ user.displayName }}</span></h3>
            <p class="nav-sub">You are logged in as <span>{{user.email}}</span></p>
        </div>
        <button @click="handleClick">{{ loading ? 'Please wait...' : 'Logout'}}</button>
    </nav>
</template>

<style>
    nav { 
        border-bottom: px solid var(--color-border);
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-title {
        color: var(--color-heading)
    }

    .nav-title span {
        text-transform: uppercase;
    }

    .nav-sub span {
        color: var(--color-primary)
    }
</style>