<template>
   <a-layout id="components-layout-demo-custom-trigger">
  		<HelloWorld ></HelloWorld>
     <a-layout>
      <Header/>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '800px' }">

      	<a-spin :spinning="spinning">
	      <div class="spin-content">
	         <!-- 卡片 -->
		        <div style="padding: 20px;">
				    <a-row :gutter="16">
				      <a-col :span="6">
				        <a-card style="background: #59d05d;color: #fff" title="今日注册" :bordered=false>
				          <p style="font-size: 24px">20人</p>
				        </a-card>
				      </a-col>
				      <a-col :span="6" >
				        <a-card style="background: #ff646d;color: #fff" title="一个月内" :bordered=false>
				          <p style="font-size: 24px">322人</p>
				        </a-card> 
				      </a-col>
				      <a-col :span="6">
				        <a-card style="background: #1D62F0;color: #fff" title="总注册人数" :bordered=false>
				          <p style="font-size: 24px">521633人</p>
				        </a-card>   
				      </a-col>
				    </a-row>
				    <!-- 折线图 -->
				    <a-row :gutter="16" style="padding: 50px 0 0 0;text-align: left;">
				    	<a-col :span="12">用户增长趋势图</a-col>
				    	<div id="c1" style="text-align: left;"></div>
				    </a-row>
		  		</div>
		  		<!-- 卡片 -->
	      </div>
	    </a-spin>

      	

  		<div id="components-back-top-demo-custom">
		    <a-back-top>
		      <div class="ant-back-top-inner">UP</div>
		    </a-back-top>
		  </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Asides.vue";
import Header from "@/components/Header.vue"
import G2 from '@antv/g2';
export default {
  name: "home",

  components: {
    HelloWorld,
    Header
  },
  mounted(){
  	this.init()
  },
  data(){
    return {
     
       spinning: true
    }
  },
  methods:{
  	init(){
  		var that = this;
  		var data = [{
		    year: '1991',
		    value: 3
		  }, {
		    year: '1992',
		    value: 4
		  }, {
		    year: '1993',
		    value: 3.5
		  }, {
		    year: '1994',
		    value: 5
		  }, {
		    year: '1995',
		    value: 4.9
		  }, {
		    year: '1996',
		    value: 6
		  }, {
		    year: '1997',
		    value: 7
		  }, {
		    year: '1998',
		    value: 9
		  }, {
		    year: '1999',
		    value: 13
		  }];
		  var chart = new G2.Chart({
		    container: 'c1',
		    width : 900, // 指定图表宽度
        height : 400 // 指定图表高度
		  });
		  chart.source(data);
		  chart.scale('value', {
		    min: 0
		  });
		  chart.scale('year', {
		    range: [0, 1]
		  });
		  chart.tooltip({
		    crosshairs: {
		      type: 'line'
		    }
		  });
		  chart.line().position('year*value');
		  chart.point().position('year*value').size(4).shape('circle').style({
		    stroke: '#fff',
		    lineWidth: 1
		  });
		  chart.render();
		 that.spinning = false
  	}
  	
  }
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
.spin-content{
  
    
  }
.ant-layout-header{
  text-align: left;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.ant-card-head{
	border-bottom: none!important;
	color: #fff!important
}
.ant-card-body{
	padding: 0!important
}
.ant-card-body:{
	cursor: pointer;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
#components-back-top-demo-custom .ant-back-top {
    bottom: 100px;
  }
  #components-back-top-demo-custom .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
