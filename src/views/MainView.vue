<script setup lang="ts">
import { IconCopy } from '@arco-design/web-vue/es/icon'
import { Message } from '@arco-design/web-vue'
import copywritingData from '../assets/copywritingData'
const { copy } = useClipboard() // 复制结果功能
const userInput = ref('不能生吞玻璃')
const paragraph3Last =
  '大家可能会感到很惊讶，%s为什么是这样的？%s究竟为什么火起来了呢？但事实就是这样，小编也感到非常惊讶。'
const paragraph1 = ref<string>('')
const paragraph2 = ref<string>('')
const paragraph3 = ref<string>('')
const paragraph4 = ref<string>('')
const last = ref<string>('')
const title = ref<string>('')

// 生成文章
function generateArticle() {
  title.value = replaceStr(createTitle()) // 标题
  paragraph1.value = replaceStr(
    [...new Set([createTitleQ(), createTitleQ(), createTitleQ()])].join('')
  ) // 第一段
  paragraph2.value = replaceStr(createParagraph(2) + createEditorBehavior()) // 第二段
  paragraph3.value = replaceStr(createParagraph(3) + paragraph3Last) // 第三段
  paragraph4.value = replaceStr(createParagraph(4)) // 第四段
  last.value = replaceStr(createLast()) // 最后一句
}

// 替换所有的%s为用户输入的字符串
function replaceStr(str: string): string {
  return str.replaceAll('%s', userInput.value)
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

// 创建段落
function createParagraph(num: 1 | 2 | 3 | 4): string {
  const field = `paragraph${num}`
  const arr = copywritingData[field]
  const length = getArrLength(arr)
  return arr[getRandomIntInclusive(0, length - 1)]
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

// 复制结果
function copyResult() {
  const result = `${title.value}
${paragraph1.value}
${paragraph2.value}
${paragraph3.value}
${paragraph4.value}
${last.value}`

  copy(result)
  Message.success('复制成功')
}

onMounted(() => {
  generateArticle()
})
</script>

<template>
  <div class="flex h-screen w-screen bg-[#ebecf0]">
    <div class="grid-c p-24px flex-1">
      <div class="card p-24px rounded-8px w-full max-w-400px">
        <h3 class="mb-24px text-24px">营销号文案生成器</h3>
        <input
          v-model="userInput"
          class="input"
          type="text"
          placeholder="输入你的营销主题"
          maxlength="15"
        />
        <div class="flex space-x-16px w-full">
          <button
            class="block flex-1 block mt-16px btn"
            type="button"
            @click="generateArticle"
          >
            生成
          </button>
          <button
            class="block w-48px block mt-16px btn"
            type="button"
            @click="copyResult"
          >
            <icon-copy style="color: #61677c" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex-1 flex-col overflow-auto text_wrapper">
      <section class="text-20px font-bold leading-8 p-16px pb-0">
        {{ title }}
      </section>
      <div class="text-16px leading-6 flex-1 p-16px pt-0 mt-16px">
        <div class="indent-2em">{{ paragraph1 }}</div>
        <div class="indent-2em">{{ paragraph2 }}</div>
        <div class="indent-2em">{{ paragraph3 }}</div>
        <div class="indent-2em">{{ paragraph4 }}{{ last }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$ruler: 16px;
$color-bg: #ebecf0;
$color-shadow: #babecc;
.btn,
.input {
  background-color: $color-bg;
  text-shadow: 1px 1px 0 #fff;
  @apply border-0 outline-none text-16px rounded-10px p-16px;
}
.btn {
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px $color-shadow;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px $color-shadow;
  }
  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px #fff;
  }
  @apply text-[#61677c] font-bold cursor-pointer;
}

.input {
  width: 100%;
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px #fff;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px #fff;
  }
}

.card {
  border-radius: 10px;
  background: $color-bg;
  box-shadow: 20px 20px 60px #c8c9cc, -20px -20px 60px #ffffff;
}
.text_wrapper {
  border-left: 2px solid #ffffff9a;
}
</style>
