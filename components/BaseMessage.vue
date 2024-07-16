<script setup>
    defineProps({
        message: {
            type: String
        },
        date: {
            type: String
        },
        isMe: {
            type: Boolean
        }
    })
</script>
<template>
    <div class="flex-col items-start">
        <span class="text-sm flex flex-row w-full" :class="isMe ? 'justify-end' : 'justify-start'">{{ date }}</span>
        <div class="flex flex-row  my-1" :class="isMe ? 'justify-end' : 'justify-start'">
            <div class="p-2 rounded-b-lg w-2/3" :class="isMe ? 'bg-green-200 rounded-tl-lg' : 'bg-gray-200 rounded-tr-lg'">
                <p class="text-gray-800 dark:text-slate-800">
                    {{ message }}
                </p>
            </div>
        </div>
    </div>
</template>