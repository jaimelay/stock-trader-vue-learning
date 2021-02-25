import stocks from '@/data/stocks.data';

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks;
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit('buyStock', order);
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks;
        }
    }
}
