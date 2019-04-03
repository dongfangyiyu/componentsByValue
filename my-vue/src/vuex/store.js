import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
	nodeVoteCount:0,
	vueVoteCount:0,
}
const mutations = {
	ADDNODEVOTE(state,value){
		state.nodeVoteCount+=value;
	},
	ADDVUEVOTE(state,value){
		state.vueVoteCount+=value;
	}
}
const getters = {
	// 求总票数之和
	sumCount(state){
		return state.nodeVoteCount+state.vueVoteCount
	}
}
export default new Vuex.Store({
	state,
	mutations,
	getters
})