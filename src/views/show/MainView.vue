<script setup>
import pic1 from '@/assets/001.png'
import pic2 from '@/assets/002.png'
import pic3 from '@/assets/003.png'
import pic4 from '@/assets/004.png'
import pic5 from '@/assets/005.png'
import pic6 from '@/assets/006.png'
const imageSource1 = [{ url: pic1 }, { url: pic2 }, { url: pic5 }]
const imageSource2 = [{ url: pic3 }, { url: pic6 }]
const bannerHeight = 300
</script>

<template>
  <h1>MedSAM医学辅助诊断系统</h1>
  <div class="title">
    <div class="title_1"><strong>操</strong>作<strong>步</strong>骤</div>
    <div class="line"></div>
  </div>
  <div class="cont_p">
    <p style="text-align: center">仅需3步轻松完成</p>
  </div>
  <div class="option">
    <img :src="pic4" alt="" />
  </div>
  <div class="title">
    <div class="title_1"><strong>识</strong>别<strong>效</strong>果</div>
    <div class="line"></div>
  </div>
  <div class="cont_p">
    <p style="text-align: center">精准且快速的识别</p>
  </div>
  <el-carousel :interval="4000" type="card" :height="bannerHeight + 'px'">
    <el-carousel-item v-for="item in imageSource1" :key="item.url">
      <img :src="item.url" alt="" class="bannerimg" />
    </el-carousel-item>
  </el-carousel>
  <div class="title">
    <div class="title_2">MedSAM</div>
    <div class="line"></div>
  </div>
  <div class="cont_p">
    <p style="text-align: center">更加优异且稳定的表现</p>
  </div>
  <el-carousel :interval="4000" type="card" :height="bannerHeight + 'px'">
    <el-carousel-item v-for="item in imageSource2" :key="item.url">
      <img :src="item.url" alt="" class="bannerimg" />
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 40px; /* 设置较大的字体大小 */
  color: #333; /* 设置文字颜色 */
  font-weight: bold; /* 设置加粗 */
  text-align: center; /* 居中文本 */
  margin-top: 20px; /* 上边距 */
  margin-bottom: 20px; /* 下边距 */
  padding: 10px; /* 内边距 */
  background-color: #f5f5f5; /* 背景颜色 */
  border-radius: 5px; /* 边框圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
.top-block {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 添加间隔 */
}
.bannerimg {
  width: 100%;
  height: inherit;
}
.title_1,
.title_2 {
  font-size: 30px;
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
}
.title .line {
  width: 80px;
  height: 1px;
  background: rgb(150, 150, 150);
  margin: 15px auto 10px;
}
.title strong {
  color: #7caf24;
  font-weight: bold;
}
.cont_p p {
  color: #666;
}
</style>
