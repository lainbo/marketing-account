<script setup lang="ts">
import { copywritingData } from '@/assets/copywritingData.ts'
const userInput = ref('')
const paragraph3Last =
  '大家可能会感到很惊讶，%s为什么是这样的？%s究竟为什么火起来了呢？但事实就是这样，小编也感到非常惊讶。'
// const resultText = ref('')
const paragraph1 = ref('')
const paragraph2 = ref('')
const paragraph3 = ref('')
const paragraph4 = ref('')
const last = ref('')
const title = ref('')
// 生成文章

function generateArticle() {
  title.value = createTitle().replaceAll('%s', userInput.value)
  paragraph1.value = (
    createTitleQ() +
    createTitleQ() +
    createTitleQ()
  ).replaceAll('%s', userInput.value)
  paragraph2.value = (createParagraph2() + createEditorBehavior()).replaceAll(
    '%s',
    userInput.value
  )
  paragraph3.value = (createParagraph3() + paragraph3Last).replaceAll(
    '%s',
    userInput.value
  )
  paragraph4.value = createParagraph4().replaceAll('%s', userInput.value)
  last.value = createLast().replaceAll('%s', userInput.value)
}

// 创建编辑行为
function createEditorBehavior(): string {
  const arr = copywritingData.editorBehavior
  const behaviorLength = getArrLength(arr)
  return arr[getRandomIntInclusive(0, behaviorLength - 1)]
}

// 创建最后一句
function createLast(): string {
  const arr = copywritingData.paragraphLast
  const paragraphLastLength = getArrLength(arr)
  return arr[getRandomIntInclusive(0, paragraphLastLength - 1)]
}

// 创建第四段
function createParagraph4(): string {
  const arr = copywritingData.paragraph4
  const paragraph4Length = getArrLength(arr)
  return arr[getRandomIntInclusive(0, paragraph4Length - 1)]
}

// 创建第三段
function createParagraph3(): string {
  const arr = copywritingData.paragraph3
  const paragraph3Length = getArrLength(arr)
  return arr[getRandomIntInclusive(0, paragraph3Length - 1)]
}

// 创建第二段
function createParagraph2(): string {
  const arr = copywritingData.paragraph2
  const paragraph2Length = getArrLength(arr)
  return arr[getRandomIntInclusive(0, paragraph2Length - 1)]
}

// 创建Title
function createTitle(): string {
  const titleH = createTitleH()
  const titleQ = createTitleQ()
  return titleQ + titleH
}

// 创建title前半段
function createTitleQ(): string {
  const arr = copywritingData.titleQ
  const titleQLength = getArrLength(arr)
  return arr[getRandomIntInclusive(0, titleQLength - 1)]
}

// 创建title后半段
function createTitleH(): string {
  const arr = copywritingData.titleH
  const titleHLength = getArrLength(arr)
  return arr[getRandomIntInclusive(0, titleHLength - 1)]
}

// 返回随机数
function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 获取数组长度
function getArrLength(arr: any[]): number {
  return arr.length || 0
}
</script>

<template>
  <div class="flex h-screen w-screen">
    <div class="left grid-c p-30px flex-1">
      <div class="card p-24px rounded-10px w-full">
        <h3 class="mb-24px text-24px">营销号文案生成器</h3>
        <div>
          <a-input
            v-model="userInput"
            size="large"
            :max-length="30"
            show-word-limit
            placeholder="输入你的营销主题"
            allow-clear
          />
        </div>
        <div class="mt-16px">
          <a-button long type="primary" @click="generateArticle()"
            >生成</a-button
          >
        </div>
      </div>
    </div>
    <div class="flex-1 grid-c">
      <div class="bg-light-500 rounded-10px h-90vh w-11/12 space-y-16px p-24px">
        <section class="text-20px font-bold">{{ title }}</section>
        <div class="text-16px leading-6">
          <div class="indent-2em">{{ paragraph1 }}</div>
          <div class="indent-2em">{{ paragraph2 }}</div>
          <div class="indent-2em">{{ paragraph3 }}</div>
          <div class="indent-2em">{{ paragraph4 }}</div>
          <div class="indent-2em">{{ last }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid #e5e6eb;
  box-shadow: 2.8px 2.8px 2.2px -4px #00000005, 6.7px 6.7px 5.3px -4px #00000007,
    12.5px 12.5px 10px -4px #00000009, 22.3px 22.3px 17.9px -4px #0000000b,
    41.8px 41.8px 33.4px -4px #0000000d, 100px 100px 80px -4px #00000012;
}
.left {
}
</style>
