import { createStore } from "vuex";
import ChocolateServices from "../services/ChocolateServices";

export default createStore({
  state: {
    chocolates: [],
    user: "Caio"
  },
  mutations: {
    SET_CHOCOLATES(state, chocolates){
      state.chocolates = chocolates;
    }
  },
  actions: {
    fetchChocolates(context){
      ChocolateServices.getChocolates().then(response =>{
        context.commit("SET_CHOCOLATES", response.data);
      })
    }
  },
  getters:{
    getChocolate: (state) => (id) => {
      return state.chocolates.find(choc => choc.id==id)
    }
  },
  modules: {},
});
