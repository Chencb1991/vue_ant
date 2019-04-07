<template>
  <div style="min-height: 100%">
    <a-layout-sider  style="height: 100%"
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" style="background: transparent;">
        <a-icon style="font-size: 26px;color: #eee" type="aliyun" />
      </div>
      <a-menu  style="border-top: 1px solid #141539" theme="dark"  :defaultSelectedKeys="keys">
        <a-menu-item key="1">
          <router-link to="/">
            <a-icon type="user" />
            <span>系统主页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/myuser">
            <a-icon type="idcard" />
          <span>用户中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
         <router-link to="/myorder">
            <a-icon type="folder" />
            <span>我的订单</span>
         </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="cloud" />
          <span>我的工单</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="dollar" />
          <span>在线充值</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="setting" />
          <span>系统设置</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script>
export default {
  data(){
    return {
      collapsed:false,
      keys:[]
    }
  },
  mounted(){
    this.keys[0]=sessionStorage.getItem('asideskey');
  },
  methods:{
    init(){
     
    }
  }

}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
.ant-layout-header{
  text-align: left;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>