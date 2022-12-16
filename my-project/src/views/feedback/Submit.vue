<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper title="提交反馈" content="欢迎各位老师进行批评指正，我们会尽快处理您的反馈，谢谢！">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          label="反馈"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea
            rows="4"
            placeholder="请输入反馈意见"
            v-decorator="[
              'description',
              {rules: [{ required: true, message: '反馈意见不能为空' }]}
            ]" />
        </a-form-item>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          style="text-align: center"
        >
          <a-button htmlType="submit" type="primary" @click="handleSubmit">提交反馈</a-button>
          <a-button style="margin-left: 8px">取消</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
// import { notDeveloped } from '@/utils/util'
export default {
  name: 'Submit',
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  created () {
    this.$message.error('该功能还在紧急开发中，敬请期待。如有疑问，请看【系统帮助】模块。')
  },
  methods: {
    // handler
    handleSubmit () {
    //  this.$message.error('该功能还在紧急开发中，敬请期待。如有疑问，请看【系统帮助】模块。')
    }
  }
}
</script>
