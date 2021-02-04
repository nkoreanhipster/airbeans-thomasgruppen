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
        orders: [], // eta & orderNr
        user: {
            name: '',
            email: ''
        },
        message: ''
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
        SET_USER: (state, newValue) => {
            state.user = newValue
        },
        ADD_ORDER: (state, newValue) => {
            console.log({ADD_ORDER:newValue})
            state.orders.push(newValue)
        },
    },
    actions: {
        async postOrder({ commit, state }) {
            let r = await Api.postOrder(state.cart)
            commit('ADD_ORDER', r)
            return r
        },
        setUser: ({ commit, state }, newValue) => {
            commit('SET_USER', newValue)
            return true
        },
    },
    modules: {
    },
    getters: {
        getUser:state => {
            return state.user
        },
        isLoggedIn: state => {
            let loggedInBool = state.user.name !== ''
                && state.user.email !== ''
                && state.user.name.length > 0
                && state.user.email.length > 0;
            return loggedInBool
        },
        // order: state => {
        //     if (state.orders.length < 1)
        //         return { eta: -1, orderNr: 'NULL' }
        //     return state.orders.pop()
        // },
        orders: state => {
            return state.orders
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
