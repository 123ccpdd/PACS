<template>
  <div>
    <!-- 假设你想在这里显示从API获取的数据 -->
    <p v-if="data">获取到的数据: {{ data }}</p>
    <p v-else>正在加载数据...</p>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'

export default {
  data() {
    return {
      // 初始化data为null或空对象，具体取决于你的数据结构
      data: null
    }
  },
  created() {
    // 在组件创建时发送请求
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        // 发送GET请求到localhost:8800/data
        const response = await axios.get('http://localhost:8800/instances')
        // 将获取到的数据赋值给data
        this.data = response.data
      } catch (error) {
        // 处理请求错误
        console.error('请求失败:', error)
        // 可以在这里处理错误，比如显示错误消息
        this.data = '请求失败，请稍后再试'
      }
    }
  }
}
</script>

<style scoped>
/* 你的样式 */
</style>
