// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@/api'

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuItems: [],
        cart: [],
        order: {}, // eta & orderNr
    },
    mutations: {
        async loadMenu() {
            let r = await Api.getMenuItems()
            this.state.menuItems = r
        },
        assToCart(state, payload) {
            const record = state.cart.find(p => p.id === payload.id)
            if (!record) {
                payload.quantity = 1
                state.cart.push(payload)
            } else {
                record.quantity += 1
                state.cart.push(record)
            }

        },
    },
    actions: {
        async postOrder({ commit, state }) {
            let r = await Api.postOrder(state.cart)
            state.order = r
            return r
        },
    },
    modules: {
    },
    getters: {
        order:state => {
            return state.order
        },
        getMenuItems: state => {
            return state.menuItems
        },
        getCartItems: state => {
            return state.cart
        },
        getCartTotalItemCount: state => {
            return state.cart.length
        },
        getCartTotalSum: state => {
            let sum = 0;
            state.cart.map(item => {
                sum += item.price
            })

            return sum
        },
    }
})
