<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper title="发布系统公告">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          label="公告标题"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            v-decorator="[
              'name',
              {rules: [{ required: true, message: $t('form.basic-form.title.required') }]}
            ]"
            name="name"
            placeholder="请输入公告标题" />
        </a-form-item>
        <a-form-item
          label="公告作者"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            v-decorator="[
              'name',
              {rules: [{ required: true, message: $t('form.basic-form.title.required') }]}
            ]"
            name="name"
            placeholder="请输入公告作者" />
        </a-form-item>
        <a-form-item
          label="公告时间"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-date-picker
            name="buildTime"
            style="width: 50%"
            v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: $t('form.basic-form.date.required') }]}
            ]" />
          <a-time-picker
            name="buildTime"
            style="width: 50%"
            v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: $t('form.basic-form.date.required') }]}
            ]" />
        </a-form-item>
        <a-form-item
          label="推送时间"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-date-picker
            name="buildTime"
            style="width: 50%"
            v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: $t('form.basic-form.date.required') }]}
            ]" />
          <a-time-picker
            name="buildTime"
            style="width: 50%"
            v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: $t('form.basic-form.date.required') }]}
            ]" />
        </a-form-item>
        <a-form-item
          label="过期时间"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-date-picker
            name="buildTime"
            style="width: 50%"
            v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: $t('form.basic-form.date.required') }]}
            ]" />
          <a-time-picker
            name="buildTime"
            style="width: 50%"
            v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: $t('form.basic-form.date.required') }]}
            ]" />
        </a-form-item>
        <a-form-item
          label="公告主体内容"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea
            rows="4"
            placeholder="请输入公告主体内容（建议先在其他地方写好，再复制过来）"
            v-decorator="[
              'description',
              {rules: [{ required: true, message: $t('form.basic-form.goal.required') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          style="text-align: center"
        >
          <a-button htmlType="submit" type="primary">发布</a-button>
          <a-button style="margin-left: 8px">取消</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
export default {
  name: 'Publish',
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
