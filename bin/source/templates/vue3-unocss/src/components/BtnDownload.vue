<script setup lang="ts">
import downloadIcon from '@/assets/images/common/btn-google.webp'
import vw from '@/utils/inline-px-to-vw'
import { SHOW_DOWNLOAD, DOWNLOAD_URL } from '@/config/index'

interface Props {
  height?: number
  text?: string
  href?: string
}

withDefaults(defineProps<Props>(), {
  height: 35,
  text: '',
  href: DOWNLOAD_URL,
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
