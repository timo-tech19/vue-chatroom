<template>
    <NavBar />
    <div class="container">
        <div class="content">
            <div v-if="messages.length" ref="msgContainer" class="message-container">
                <ul>
                    <li class="message" v-for="message in messages" :key="message.id">
                        <div class="message-top">
                            <p class="message-user">{{ message.userName}}</p>
                            <p class="message-time">{{ message.createdAt }} ago</p>
                        </div>
                        <p class="message-content">{{ message.content }}</p>
                    </li>
                </ul>
            </div>
            <PostMessage />
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onUnmounted,onUpdated,ref } from 'vue';
import NavBar from '../components/NavBar.vue'
import PostMessage from '../components/PostMessage.vue';
import getCollectionDocs from '../composables/getCollectionDocs'

import { formatDistance } from 'date-fns';


const { unsubscribe, docs, error } = getCollectionDocs('messages')
const msgContainer = ref(null)

const messages = computed(() => {
    return docs.value.map((doc) => {
        return {...doc, createdAt: doc.createdAt ? formatDistance(doc?.createdAt?.toDate(), new Date()): null}
    })
})


onUpdated(() => {
 if(msgContainer.value) msgContainer.value.scrollTop = msgContainer.value.scrollHeight
})

onUnmounted(() => {
    unsubscribe()
})

</script>

<style>
    .content {
        max-width: 700px;
        height: 70vh;
        margin: 0 auto;
    }

    ul {
        padding: 20px;
    }

    .message {
        list-style: none;
        margin-bottom: 1rem;
    }

    .message-container {
        background-color: #0f0f0f;
        margin-bottom: 16px;
        border-radius: 10px;
        height: 100%;
        overflow-y: scroll;
    }

    .message-top {
        display: flex;
        align-items: center;
    }

    .message-user {
        margin-right: 16px;
        color: #fff;
    }

    .message-time {
        font-size: 14px;
    }

    .message-content {
        color: #fff;
        font-weight: 600;
    }
</style>