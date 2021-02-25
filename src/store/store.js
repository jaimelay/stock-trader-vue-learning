import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks.modules';
import portfolio from './modules/portfolio.modules';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
})
