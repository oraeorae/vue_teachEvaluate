<template>
  <a-button @click="TT">测试</a-button>
</template>

<script>
import { Test } from '@/api/test'
export default {
  name: 'Test',
  data () {
    return {
      qq: '123'
    }
  },
  methods: {
    TT: function () {
      Test().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
