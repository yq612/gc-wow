<script setup lang="ts">
import downloadIcon from '@/assets/images/common/btn-google.png'
import vw from '@/utils/inline-px-to-vw'
import { SHOW_DOWNLOAD } from '@/config/index'

interface Props {
  height?: number
  text?: string
  href?: string
}

withDefaults(defineProps<Props>(), {
  height: 35,
  text: '',
  href: 'https://play.google.com/store/apps/details?id=com.ultra.cash.naira.loan.quicky&hl=en-gb&gl=ng',
})
</script>

<template>
  <a
    v-if="SHOW_DOWNLOAD"
    target="_blank"
    :href="href"
    class="inline-block cursor-pointer"
    :style="{ height: vw(height) }"
  >
    <img :src="downloadIcon" class="block h-full w-auto" alt="download">
    <span v-if="text" class="text-sm">{{ text }}</span>
  </a>
</template>
