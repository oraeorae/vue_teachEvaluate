<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <a href="" target="_blank">联系信息</a>
      <a href="" target="_blank">计算机学院</a>
      <a href="" target="_blank"> (C)版权所有 2022-2023</a>
    </template>
    <template v-slot:copyright>
      <a href="https://github.com/vueComponent" target="_blank">华南师范大学计算机学院</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
