<script setup>
import {
  Management,
  Promotion,
  User,
  Crop,
  EditPen,
  House
} from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
onMounted(() => {
  userStore.getUser()
})

const handleCommand = async (key) => {
  if (key === 'logout') {
    await ElMessageBox.confirm('确定退出登录吗', '温馨提示', {
      type: 'warning',
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    })
    userStore.removeToken()
    userStore.setUser({})
    router.push(`/login`)
  } else {
    router.push(`/user/${key}`)
  }
}

//打开Orthanc
function openOthanc() {
  window.location.href = 'http://localhost:8042/app/explorer.html'
}
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <div class="el-aside__logo"></div>
      <el-menu
        background-color="#f3f6f9"
        :default-active="$route.path"
        text-color="#767676"
        router
      >
        <el-menu-item index="/show">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item @click="openOthanc">
          <el-icon><Promotion /></el-icon>
          <span>诊断系统</span>
        </el-menu-item>
        <el-menu-item index="/Analysis">
          <el-icon><Management /></el-icon>
          <span>病灶分割</span>
        </el-menu-item>
        <el-sub-menu index="/user">
          <template #title>
            <el-icon><User /></el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="/user/profile">
            <el-icon><User /></el-icon>
            <span>基本资料</span>
          </el-menu-item>
          <el-menu-item index="/user/password">
            <el-icon><EditPen /></el-icon>
            <span>重置密码</span>
          </el-menu-item>
          <el-menu-item @click="handleCommand('logout')">
            <el-icon><Crop /></el-icon>
            <span>切换账号</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>PACS ©2024 Created by woaihuazi</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  .el-aside {
    border-right: 1px solid rgba(90, 90, 90, 0.1);
    background-color: #f3f6f9;
    &__logo {
      height: 120px;
      background: url('@/assets/logo.png') no-repeat center / 180px auto;
    }
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-dropdown__box {
      display: flex;
      align-items: center;
      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
