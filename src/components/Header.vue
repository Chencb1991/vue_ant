<template>
  <div>
     <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="changecoll(collapsed)"
        />
        <div style="width: 180px;float: right;">
          <a-dropdown>
            <a class="ant-dropdown-link" href="#" style="margin-bottom: 10px">
              <a-avatar :size="44" icon="user" />
            </a>

            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">个人中心</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">修改密码</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">退出系统</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <span style="display: inline-block;padding-left: 10px">真心英雄</span>
        
        </div>
      </a-layout-header>
  </div>
</template>
<script>
export default {
  data(){
    return {
      collapsed: false
    }
  },
  watch:{
    // collapsed:function(val){
    //   sessionStorage.setItem('showcoll',val);
    // }
  },
  mounted(){

  },
  methods:{
    
  }
}
</script>
<style>

</style>