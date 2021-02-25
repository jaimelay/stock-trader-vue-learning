import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';

import stocks from './modules/stocks.modules';
import portfolio from './modules/portfolio.modules';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
})
