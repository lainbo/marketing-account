<script setup lang="ts">
let userInput = $ref('')
function fn() {
  userInput = 'hello'
}
</script>

<template>
  <div class="flex h-screen w-screen">
    <div class="left grid-c p-30px flex-1">
      <div class="form_wrapper rounded-10px w-400px">
        <h1>营销号文案生成器</h1>
        <div>
          <a-textarea
            v-model="userInput"
            :max-length="30"
            show-word-limit
            placeholder="输入你的营销主题"
            allow-clear
          />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <a-button @click="fn"> 测试按钮</a-button>
      {{ userInput }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left {
  .form_wrapper {
    border: 1px solid #e5e6eb;
    box-shadow: 2.8px 2.8px 2.2px -4px #00000005,
      6.7px 6.7px 5.3px -4px #00000007, 12.5px 12.5px 10px -4px #00000009,
      22.3px 22.3px 17.9px -4px #0000000b, 41.8px 41.8px 33.4px -4px #0000000d,
      100px 100px 80px -4px #00000012;
  }
}
</style>
