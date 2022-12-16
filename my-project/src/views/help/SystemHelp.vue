<template>
  <page-header-wrapper title="系统帮助" >
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <div class="help">
        <div v-for="(qa, index) in qaList" :key="index" class="qa">
          <p class="question" :class="{ 'bg-color-primary': index % 2 === 0 }">{{ qa.question }}</p>
          <p class="answer" :class="{ 'bg-color-secondary': index % 2 === 0 }">{{ qa.answer }}</p>
        </div>
      </div>
    </a-card>
  </page-header-wrapper>
</template>
<script>
export default {
  name: 'SystemHelp',
  // 定义 Vue 组件
  data () {
    return {
      qaList: [
        {
          question: '【问】：如何使用系统？',
          answer: '答：使用系统需要先登录，登录后即可使用系统的功能。'
        },
        {
          question: '【问】：如何注册？',
          answer: '答：网站不提供在线用户注册功能，由管理员预先创建用户账号并启用后，用户才能够登录网站。如有疑惑，请联系文档管理员。'
        },
        {
          question: '【问】：第一次登录需要注意什么？',
          answer: '答：第一次登录后请先修改密码，密码要求至少是14位及以上的字符，必须包含大小写字母、数字和特殊字符。'
        },
        {
          question: '【问】：现在系统有什么功能是可以用的',
          answer: '答：v1.0暂只支持文档相关的功能模块，其他功能模块正在紧急开发中，敬请期待。'
        },
        {
          question: '【问】：我对网站开发有建议。',
          answer: '答：欢迎各位老师对网站开发进行批评指正，如果反馈功能用不了，可以向开发者邮箱【cs20borall@163.com】发送建议。'
        }
        ]
    }
  }
}
</script>

<style scoped>
.question {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.answer {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.question,
.answer {
  padding: 8px;
}

.question {
  background-color: #f5f5f5;
}

.answer {
  background-color: #fafafa;
}
</style>
