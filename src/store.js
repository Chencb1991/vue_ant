import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	collapsed:false
  },
  mutations: {
  	 changecoll(state,p){
     	if(p==false){
     		state.collapsed=true
     	}else{
     		state.collapsed=false
     	}
     	console.log(state);
    	}
  },
  actions: {}
});
