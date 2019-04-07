
<template>
	<div class="myorder">
			<a-layout id="components-layout-demo-custom-trigger">
		  		<HelloWorld ></HelloWorld>
		     <a-layout>
		      <Header/>
		      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '800px' }">

		      	<a-spin :spinning="spinning">
			      <div class="spin-content">
			          <!-- 订单列表 -->
			           <a-table :columns="columns" :dataSource="data"  :rowSelection="rowSelection" bordered>
						    <template slot="name" slot-scope="text">
						      <a href="javascript:;">{{text}}</a>
						    </template>
						   <!--  //订单删除 -->
						    <template slot="operation" slot-scope="text, record">
						        <a-popconfirm
						          v-if="data.length"
						          title="删除订单?"
						          @confirm="() => onDelete(record.key)">
						          <a href="javascript:;">删除</a>
						        </a-popconfirm>
						     </template>
						     <!-- //订单+号详情展开i -->
    						<p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{record.description}}</p>
						    

						    <template slot="title" slot-scope="currentPageData">
						      我的订单
						    </template>
						    <template slot="footer" slot-scope="currentPageData">
						      订单合计
						    </template>

						 </a-table>
					<!-- 订单列表 -->
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
	</div>
   
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
       collapsed: false,
       spinning: true,
       rowSelection:{
		  onChange: (selectedRowKeys, selectedRows) => {
		    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		  },
		  onSelect: (record, selected, selectedRows) => {
		    console.log(record, selected, selectedRows);
		  },
		  onSelectAll: (selected, selectedRows, changeRows) => {
		    console.log(selected, selectedRows, changeRows);
		  },
		},
       columns:[{
		  title: '订单时间',
		  className: 'column-money',
		  dataIndex: 'time',
		},{
		  title: '订单商品名称',
		  dataIndex: 'name',
		  scopedSlots: { customRender: 'name' },
		}, {
		  title: '订单金额',
		  className: 'column-money',
		  dataIndex: 'money',
		}, {
		  title: '订单状态',
		  dataIndex: 'ordercore',
		}, {
		  title: '支付状态',
		  dataIndex: 'address',
		},, {
        title: '订单操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
      }],
		data:[{
		  key: '1',
		  time:'2019',
		  name: 'John Brown',
		  money: '￥300,000.00',
		  ordercore:'1',
		  address: 'New York No. 1 Lake Park',
		  description:'1'
		}, {
		  key: '2',
		  time:'2019',
		  name: 'John Brown',
		  money: '￥300,000.00',
		  ordercore:'1',
		  address: 'London No. 1 Lake Park',
		  description:'1'
		}, {
		  key: '3',
		  time:'2019',
		  name: 'John Brown',
		  money: '￥300,000.00',
		  ordercore:'1',
		  address: 'Sidney No. 1 Lake Park',
		  description:'1'
		}]
    }
  },
  methods:{
  	init(){
  		 this.spinning = false
  	},
  	onDelete (key) {
      const data = [...this.data]
      this.data = data.filter(item => item.key !== key)
    },
  	
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
