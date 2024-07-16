<script setup>
import { watch, ref, onMounted } from 'vue';
import { useMainStore } from '~~/stores/main';

const scrollContainer = ref(null);
const store = useMainStore()

const scrollToBottom = async (sec) => {
  setTimeout(() => {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
  }, sec)
};

watch(store.currentDialogMessages, () => {
  scrollToBottom(100);
});

onMounted(() => {
  scrollToBottom(500);
});

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
</script>

<template>
  <div class="flex flex-col px-4 overflow-y-scroll h-full pb-20 pt-20" id="chatWrapper" ref="scrollContainer">
    <BaseMessage
      v-for="message in store.currentDialogMessages"
      :key="message.id"
      :message="message.body"
      :date="formatDate(message.datetime)"
      :isMe="message.toSocket == 'client'"
    />
  </div>
</template>