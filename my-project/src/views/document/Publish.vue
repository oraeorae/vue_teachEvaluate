<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper title="发布提交任务清单">
    <a-drawer
      height="90%"
      title="筛选课程"
      placement="bottom"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <a-card :bordered="false">
        <div class="table-page-search-wrapper">
          <a-form layout="inline">
            <a-row :gutter="48">
              <a-col :md="8" :sm="24">
                <a-form-item label="课程代码">
                  <a-input v-model="queryParam.id" placeholder=""/>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="课程名称">
                  <a-input v-model="queryParam.id" placeholder=""/>
                </a-form-item>
              </a-col>

              <template v-if="advanced">
                <a-col :md="8" :sm="24">
                  <a-form-item label="课程性质">
                    <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                      <a-select-option value="0">必修</a-select-option>
                      <a-select-option value="1">选修</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="考核类型">
                    <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                      <a-select-option value="0">考试</a-select-option>
                      <a-select-option value="1">考查</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="课程负责人">
                    <a-input v-model="queryParam.id" placeholder=""/>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="学分">
                    <a-input v-model="queryParam.id" placeholder=""/>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="适用作业">
                    <a-input v-model="queryParam.id" placeholder=""/>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="开课学期">
                    <a-input v-model="queryParam.id" placeholder=""/>
                  </a-form-item>
                </a-col>
              </template>
              <a-col :md="!advanced && 8 || 24" :sm="24">
                <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
                  <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                  <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
                  <a @click="toggleAdvanced" style="margin-left: 8px">
                    {{ advanced ? '收起' : '展开' }}
                    <a-icon :type="advanced ? 'up' : 'down'"/>
                  </a>
                </span>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <s-table
          ref="table"
          size="default"
          rowKey="key"
          :columns="columns"
          :data="loadData"
          :alert="true"
          :rowSelection="rowSelection"
          showPagination="auto"
        >
          <span slot="serial" slot-scope="text, record, index">
            {{ index + 1 }}
          </span>
          <span slot="status" slot-scope="text">
            <a-badge :status="text | statusTypeFilter" :text="text | statusFilter" />
          </span>
          <span slot="description" slot-scope="text">
            <ellipsis :length="4" tooltip>{{ text }}</ellipsis>
          </span>

          <span slot="action" slot-scope="text, record">
            <template>
              <a @click="handleEdit(record)">配置</a>
              <a-divider type="vertical" />
              <a @click="handleSub(record)">订阅报警</a>
            </template>
          </span>
        </s-table>
        <step-by-step-modal ref="modal" @ok="handleOk"/>
      </a-card>
    </a-drawer>
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          label="选择课程"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-button @click="showDrawer" type="primary">选择</a-button>
        </a-form-item>
        <a-form-item
          label="学年学期"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-select placeholder="请选择学年学期" v-decorator="[ 'owner', {rules: [{ required: true, message: '请选择学年学期'}]} ]">

            <a-select-option value="2022-2023(1)">2022-2023(1)</a-select-option>
            <a-select-option value="2022-2023(2)">2022-2023(2)</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="截止日期"
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
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'

import StepByStepModal from '../list/modules/StepByStepModal'
import CreateForm from '../list/modules/CreateForm'

const columns = [
  {
    title: '#',
    scopedSlots: { customRender: 'serial' }
  },
  {
    title: '编号',
    dataIndex: 'no'
  },
  {
    title: '学年学期',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' }
  },
  {
    title: '课程',
    dataIndex: 'callNo',
    sorter: true,
    needTotal: true,
    customRender: (text) => text + ' 次'
  },
  {
    title: '学分',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '教师',
    dataIndex: 'updatedAt'
    // sorter: true
  },
  {
    title: '班级组成',
    dataIndex: 'updatedAt'
    // sorter: true
  },
  {
    title: '课程性质',
    dataIndex: 'updatedAt'
    // sorter: true
  },
  {
    title: '考核类型',
    dataIndex: 'action',
    // width: '150px',
    scopedSlots: { customRender: 'action' }
  },
  {
    title: '已选人数',
    dataIndex: 'action',
    // width: '150px',
    scopedSlots: { customRender: 'action' }
  }
]

const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}

export default {
  name: 'Publish',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    StepByStepModal
  },
  data () {
    this.columns = columns
    return {
      form: this.$form.createForm(this),
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getServiceList(requestParameters)
          .then(res => {
            return res.result
          })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  created () {
    getRoleList({ t: new Date() })
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
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
    },
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    handleAdd () {
      this.mdl = null
      this.visible = true
    },
    handleEdit (record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleOk () {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          if (values.id > 0) {
            // 修改 e.g.
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then(res => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('修改成功')
            })
          } else {
            // 新增
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then(res => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('新增成功')
            })
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>
