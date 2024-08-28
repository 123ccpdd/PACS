<script setup>
import { UploadFilled } from '@element-plus/icons-vue'

import { BackEndURl } from '@/utils/request'
const uploadURL = `${BackEndURl}/instances`
</script>
<template>
  <el-upload class="upload-demo" drag :action="uploadURL" multiple>
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">拖拽或<em>点击上传</em></div>
    <template #tip>
      <div class="el-upload__tip">已支持上传dcm文件</div>
    </template>
  </el-upload>
</template>
<style scoped>
.el-descriptions {
  margin-top: 20px;
  margin-bottom: 60px;
}
</style>
