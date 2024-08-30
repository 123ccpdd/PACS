<script setup>
import { UploadFilled } from '@element-plus/icons-vue'

import { BackEndURl } from '@/utils/request'
const uploadURL = `${BackEndURl}/instances`
</script>
<template>
  <div class="uploadBox">
    <h1
      class="tracking-wider text-2xl text-gray-700 mb-2 dark:text-gray-100"
      style="text-shadow: -4px 4px 0 rgb(0 0 0 / 10%)"
    >
      上传影像文件
    </h1>
    <p class="text-gray-500 text-sm dark:text-gray-300">
      目前支持上传文件格式为dcm和npz<br />
      请勿在诊断系统内上传，否则将无法得到分析结果<br />
    </p>
    <el-upload class="upload-demo" drag :action="uploadURL" multiple>
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">拖拽或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">
          请勿上传大量无关图片，否则您的IP将会被记录
        </div>
      </template>
    </el-upload>
  </div>
</template>
<style scoped>
.el-descriptions {
  margin-top: 20px;
  margin-bottom: 60px;
}
.uploadBox {
  padding: 14px;
  margin-top: 32px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 1rem rgba(33, 37, 41, 0.175);
  z-index: 1;
  backdrop-filter: blur(2px);
  border-radius: 1em;
  background-color: #fff;
}
</style>
