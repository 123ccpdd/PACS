<script setup>
import { Right } from '@element-plus/icons-vue'
import dcm1 from '@/assets/dcm1.jpg'
const url = dcm1
const srcList = [dcm1]
</script>

<template>
  <h1>MedSAM医学辅助诊断系统</h1>
  <div class="top-block">
    <div class="demo-image__preview">
      <el-image
        style="width: 200px; height: 200px"
        :src="url"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="srcList"
        :initial-index="4"
        fit="cover"
      />
    </div>
    <el-icon class="icon-right"><Right /></el-icon>
    <div class="demo-image__preview">
      <el-image
        style="width: 200px; height: 200px"
        :src="url"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="srcList"
        :initial-index="4"
        fit="cover"
      />
    </div>
  </div>
  <div class="top-block">
    <div class="demo-image__preview">
      <el-image
        style="width: 200px; height: 200px"
        :src="url"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="srcList"
        :initial-index="4"
        fit="cover"
      />
    </div>
    <el-icon class="icon-right"><Right /></el-icon>
    <div class="demo-image__preview">
      <el-image
        style="width: 200px; height: 200px"
        :src="url"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="srcList"
        :initial-index="4"
        fit="cover"
      />
    </div>
  </div>

  <div class="table-block">数据表格展示部分</div>
</template>

<style lang="scss" scoped>
.top-block {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
}
.icon-right {
  height: 200px;
  width: 100px;
}
.demo-image__preview {
  width: 200px;
  height: 200px;
  margin: 10px 150px;
}
//照片预览
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
