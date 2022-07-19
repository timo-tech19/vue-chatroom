<template>
    <form>
        <textarea @keypress.enter.prevent="handleSubmit" v-model="message" name="message"  id="message" placeholder="Type in a message and press Enter to send."></textarea>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'


    const message = ref('')
    const { user } = getUser()
    const { createDoc, error } = useCollection('messages')

    const handleSubmit = async () => {
         await createDoc({
            content: message.value,
            userId: user.value.uid,
            userName: user.value.displayName
        })

        message.value = ''
    }

</script>


<style scoped>
    textarea {
        width: 100%;
        background-color: transparent;
        border: 1px solid var(--color-primary);
        border-radius: 100px;
        padding: 10px 20px 0;
        font-size: 16px;
        font-family: inherit;
        color: #fff;
    }

</style>