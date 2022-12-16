<template>
  <div class="account-settings-info-view">
    <a-row :gutter="16" type="flex" justify="center">
      <a-col :order="isMobile ? 2 : 1" :md="24" :lg="16">
        <a-modal :visible="visible" title="修改密码" @cancel="visible=false">
          <a-form layout="vertical">
            <a-form-item
              label="旧密码"
            >
              <a-input placeholder="请输入您的旧密码！" type="password" />
            </a-form-item>
            <a-form-item
              label="新密码"
            >
              <a-input placeholder="请输入您的新密码！" />
            </a-form-item>
            <a-form-item
              label="确认新密码"
            >
              <a-input placeholder="请再次输入您的新密码！" />
            </a-form-item>
          </a-form>
        </a-modal>
        <a-form layout="vertical">
          <a-form-item
            label="手机号"
          >
            <a-input placeholder="请输入您的手机号！" />
          </a-form-item>
          <a-form-item
            label="邮箱"
            :required="false"
          >
            <a-input placeholder="请输入您的邮箱"/>
          </a-form-item>
          <a-form-item
            label="备注"
          >
            <a-textarea rows="4" placeholder="请输入备注"/>
          </a-form-item>
          <a-form-item
            :wrapperCol="{ span: 24 }"
            style="text-align: center"
          >
            <a-button type="primary">{{ $t('account.settings.basic.update') }}</a-button>

            <a-button type="primary" style="margin-left: 25px" @click="Modify">修改密码</a-button>
          </a-form-item>
        </a-form>

      </a-col>
      <a-col :order="1" :md="24" :lg="8" :style="{ minHeight: '180px' }">
        <div class="ant-upload-preview" @click="$refs.modal.edit(1)" >
          <a-icon type="cloud-upload-o" class="upload-icon"/>
          <div class="mask">
            <a-icon type="plus" />
          </div>
          <img :src="avatar_user"/>
        </div>
      </a-col>

    </a-row>

    <avatar-modal ref="modal" @ok="setavatar"/>

  </div>
</template>

<script>
import AvatarModal from './AvatarModal'
import { baseMixin } from '@/store/app-mixin'

export default {
  mixins: [baseMixin],
  components: {
    AvatarModal
  },
  data () {
    return {
      // cropper
      // 原文地址： https://www.iconfont.cn/illustrations/detail?spm=a313x.7781069.1998910419.d9df05512&cid=37241
      avatar_user: 'https://iconfont.alicdn.com/p/illus/preview_image/AzlcRA9UfOLb/c8a8c66c-2e4a-4d63-bae3-27508d792341.png',
      avatar_manage: 'https://iconfont.alicdn.com/p/illus/preview_image/AzlcRA9UfOLb/7476094d-1f5b-4252-a087-5243af1ee12c.png',
      avatar_notsubmit: 'https://iconfont.alicdn.com/p/illus/preview_image/AzlcRA9UfOLb/9c966c89-e9a8-47b9-92b2-44f90fbabc04.png',
      avatar_introduce: 'https://iconfont.alicdn.com/p/illus/preview_image/AzlcRA9UfOLb/105efef5-f16d-4ccd-9a41-77f030b7b5c2.png',
      preview: {},
      visible: false,
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      }
    }
  },
  methods: {
    setavatar (url) {
      this.option.img = url
    },
    Modify () {
      this.visible = true
    }
  }
}
</script>

<style lang="less" scoped>

  .avatar-upload-wrapper {
    height: 200px;
    width: 100%;
  }

  .ant-upload-preview {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 180px;
    border-radius: 50%;
    box-shadow: 0 0 4px #ccc;

    .upload-icon {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 1.4rem;
      padding: 0.5rem;
      background: rgba(222, 221, 221, 0.7);
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .mask {
      opacity: 0;
      position: absolute;
      background: rgba(0,0,0,0.4);
      cursor: pointer;
      transition: opacity 0.4s;

      &:hover {
        opacity: 1;
      }

      i {
        font-size: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1rem;
        margin-top: -1rem;
        color: #d6d6d6;
      }
    }

    img, .mask {
      width: 100%;
      max-width: 180px;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
  }
</style>
