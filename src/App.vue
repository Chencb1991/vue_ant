<template>
  <div id="app">
    
    <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  mounted(){
    // var a=sessionStorage.getItem('showcoll');
    // this.collapsed=eval(a.toLowerCase());//toLowerCase
    if(!sessionStorage.getItem('asideskey')){
        sessionStorage.setItem('asideskey','1');
      }
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        console.log(val);
        if(val.name=='myorder'){
          sessionStorage.setItem('asideskey','3')
        }
        if(val.name=='myuser'){
          sessionStorage.setItem('asideskey','2')
        }
        if(val.name=='home'||val.name=='/'){
          sessionStorage.setItem('asideskey','1')
        }
       
      },
      // 深度观察监听
      deep: true
    }
  }

}
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ant-menu .anticon{

}
#app .ant-layout-content{
  
}
</style>
