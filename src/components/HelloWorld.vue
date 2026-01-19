<script setup lang="ts">
import { ossSession } from '@wwhihi2008_vue/oss';
import { ElUpload, type UploadRequestOptions, type UploadUserFile } from 'element-plus';
import { ref } from 'vue'

const props = defineProps<{ msg: string }>()

const count = ref(0);

const files = ref<UploadUserFile[]>([])

async function uploadFiles(options: UploadRequestOptions): Promise<void> {
  const file = await ossSession.upload(options.file).response;
  console.log(file);
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <ElUpload v-model:file-list="files" :http-request="uploadFiles" list-type="picture-card">
    <span>添加</span>
  </ElUpload>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
