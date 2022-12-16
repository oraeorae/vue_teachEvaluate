<template>
  <page-header-wrapper title="公告详情" >
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <div class="notice-detail">
        <h1 class="notice-detail-title">{{ noticeTitle }}</h1>
        <div class="notice-detail-info">
          <p class="notice-detail-author">作者：{{ noticeAuthor }}</p>
          <span class="notice-detail-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <p class="notice-detail-date">发布时间：{{ noticeDate }}</p>
        </div>
        <p class="notice-detail-content">{{ noticeContent }}</p>

      </div>
    </a-card>
  </page-header-wrapper>
</template>
<script>

import { getone } from '@/api/bulletin'
export default {
  name: 'Detail',
  // 定义 Vue 组件
  data () {
    return {
      noticeTitle: '公告标题', // 定义公告标题
      noticeContent: '由中国人工智能学会主办、社会计算与社会智能专委、新疆工程学院共同承办的CAAI第八届全国大数据与社会计算学术会议（China National Conference on Big Data & Social Computing，简称BDSC2023）将于2023年7月7-9日在乌鲁木齐召开！该会议创建于2012年，旨在搭建全国大数据与社会计算学术交流平台，培育社会计算与社会智能学科发展，助力社会计算与社会智能领域人才成长。会议组织者社会计算与社会智能专委是学会下设的体现交叉学科特色的学术组织，其宗旨是建设“有仁、有信、有情”的学术共同体，现有委员九十余人，分别来自社会科学、复杂系统、计算机科学、地理信息系统等领域，2021年被评为学会优秀专委。 \n' +
        ' 本次大会的主题为“数字化转型与可持续发展”，面向全球气候变化、疫情传播与多重不确定性的叠加等可持续发展挑战，立足全球数字化转型的治理与政策实践，通过跨学科交叉视野探索，通过数字化推动可持续发展的全球经验与中国智慧。本次会议面向全国开展大数据与社会计算领域的研究者征文，重点探讨数字型可持续发展的基础性、前瞻性和战略性理论、方法及其应用，探讨数字型可持续发展的若干重大命题，发掘数字型可持续发展的经验与规律，交流新思想、探索新方法、挖掘新趋势、展望新愿景。 \n' +
        '------------------------------------\n' +
        '作者：陈阳\n' +
        '来源：学者网\n' +
        '原文：https://www.scholat.com/vpost.html?pid=200589\n' +
        '本文为该学者原创文章，转载请附上文章链接！\n' +
        '\n', // 定义公告内容
      noticeAuthor: '张三', // 定义公告作者
      noticeDate: '2022-12-11' // 定义公告发布时间
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail: function () {
      // 调用获取get后面的参数
      const id = this.$route.query.id
      // 到时需要对着实际改改
      getone(id).then(res => {
        this.noticeTitle = res.result.subject
        this.noticeContent = res.result.content
        this.noticeAuthor = res.result.operator
        this.noticeDate = res.result.issueTime
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.notice-detail {
  /* 定义容器的样式 */
}

.notice-detail-title {
  /* 定义标题的样式 */
  text-align: center; /* 居中显示 */
  font-size: 24px; /* 字体大小 */
  line-height: 30px;
  word-break: break-word;
  text-align: center;
  font-weight: bold;

}

.notice-detail-info {
  display: flex; /* 设置为 flex 布局 */
  justify-content: center; /* 居中显示 */
}

.notice-detail-content {
  /* 定义内容的样式 */
  text-align: center; /* 居中显示 */
  font-size: 16px; /* 字体大小 */
  margin: auto;
  font-size: 16px;
  line-height: 26px;
  padding-right: 10px;
  word-wrap: break-word;
  word-break: normal;
  padding-bottom: 10px;
  font-family: 'Georgia', Georgia, 'Times New Roman', Times, 'Microsoft YaHei', SimSun, SimHei, serif;
  height: auto !important;
  min-height: 300px;
  width: 85%;
  text-align: justify;
  /* 解决没有识别换行符问题 */
  white-space: pre-wrap;
}

.notice-detail-author {
  /* 定义作者的样式 */
  color: #8b9d9d;
  font-size: 16px;
  display: inline-block;
  line-height: 29px;
}

.notice-detail-date {
  /* 定义日期的样式 */
  color: #8b9d9d;
  font-size: 16px;
  display: inline-block;
  line-height: 29px;
}
</style>
