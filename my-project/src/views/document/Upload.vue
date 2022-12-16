<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper title="上传教学文档" content="">

    <a-card
      class="project-list"
      :loading="loading"
      style="margin-bottom: 24px;"
      :bordered="false"
      title="未完成提交文档"
      :body-style="{ padding: 0 }"
    >
      <a slot="extra">全部文档</a>
      <div>
        <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in projects">
          <a-card :bordered="false" :body-style="{ padding: 0 }" @click="detail(item.title,item.semester,item.deadline)">
            <a-card-meta>
              <div slot="title" class="card-title">
                <a-avatar size="small" :src="avatar_notsubmit" />
                <a>{{ item.title }}</a>
              </div>
              <div slot="description" class="card-description">
                学年学期：{{ item.semester }}
                <br />
                截止日期：{{ item.deadline }}
              </div>
            </a-card-meta>
            <div class="project-item">
              <a href="/#/">{{ item.author }}</a>
              <span class="datetime">{{ item.updatedAt }}</span>
            </div>
          </a-card>
        </a-card-grid>
      </div>
    </a-card>
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-card :bordered="false">
        <a-descriptions title="请先选择上方要提交的课程" v-if="state=='1'">
        </a-descriptions>
        <a-descriptions title="具体课程文档提交" v-if="state=='2'">
          <a-descriptions-item label="课程名">{{ title }}</a-descriptions-item>
          <a-descriptions-item label="学年学期">{{ semester }}</a-descriptions-item>
          <a-descriptions-item label="截止日期">{{ deadline }}</a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="当前没有需要提交的任务" v-if="state=='3'">
        </a-descriptions>
      </a-card>
      <a-form>
        <!-- https://blog.csdn.net/yehaocheng520/article/details/125374714 -->
        <a-upload-dragger
          style=""
          accept=".xlsx,.xls,.csv"
          :file-list="form.file"
          :remove="handleRemove"
          :before-upload="beforeUpload"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text">请选择上传文件</p>
          <p class="ant-upload-hint" style="color: red">
            可拖拽或者选择文件，请选择后缀.txt/.doc/.docx/.ppt/.pptx/.pdf/.rar/.zip格式文件
          </p>
        </a-upload-dragger>

        <a-form-item
          :wrapperCol="{ span: 24 }"
          style="text-align: center"
        >
          <a-button htmlType="submit" type="primary">提交</a-button>
          <a-button style="margin-left: 8px">取消</a-button>
        </a-form-item>
      </a-form>

    </a-card>
  </page-header-wrapper>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      form: this.$form.createForm(this),
      // 原文地址： https://www.iconfont.cn/illustrations/detail?spm=a313x.7781069.1998910419.d9df05512&cid=37241
      avatar_user: 'https://iconfont.alicdn.com/p/illus/preview_image/AzlcRA9UfOLb/c8a8c66c-2e4a-4d63-bae3-27508d792341.png',
      avatar_manage: 'https://iconfont.alicdn.com/p/illus/preview_image/AzlcRA9UfOLb/7476094d-1f5b-4252-a087-5243af1ee12c.png',
      avatar_notsubmit: 'https://iconfont.alicdn.com/p/illus/preview_image/AzlcRA9UfOLb/9c966c89-e9a8-47b9-92b2-44f90fbabc04.png',
      avatar_introduce: 'https://iconfont.alicdn.com/p/illus/preview_image/AzlcRA9UfOLb/105efef5-f16d-4ccd-9a41-77f030b7b5c2.png',
      projects: [],
      title: '',
      semester: '',
      deadline: '',
      // 表示状态（状态1表示未选择，状态2表示选择，状态3表示不存在）
      state: '1'
    }
  },
  mounted () {
    this.getProjects()
  },
  methods: {
    // 提交
    detail (t, s, d) {
      this.title = t
      this.semester = s
      this.deadline = d
      this.state = '2'
    },
    getProjects () {
      this.$http.get('/list/search/projects').then(res => {
        this.projects = res.result && res.result.data
        this.loading = false
      })
    },
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
