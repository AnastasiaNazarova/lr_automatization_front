import Vue from 'vue';
import Vuex from 'vuex';
import Actors from "@/actors";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
        id:-1,
        action:1
    },
    getters: {
        getProducts: state => state.products
    },
    mutations: {
        setProducts(state, obj) {
            state.products = obj.data
        }
    },
    actions: {
        async setProductsAction({commit}) {
            commit('setProducts', await Actors.getProducts())
        },
        async addProduct({commit}, product) {
            await Actors.addProduct(product)
        },
        async deleteProduct({commit}, id) {
            await Actors.deleteProduct(id);
        }
    }
});

export default store;
