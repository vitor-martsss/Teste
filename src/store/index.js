import { createStore } from "vuex";
//import axios from 'axios';
import { useToast } from "vue-toastification";

const toast = useToast();

export default createStore({
    state: {
        loanResult: null
    },
    mutations: {
        updateLoanResult(state, result) {
            state.loanResult = result;
        }
    },
    actions: {
        async simulateLoan({ commit }, loanData) {
            try {
                const response = await axios.post('/api/simular', loanData);
                commit('updateLoanResult', response.data);
            } catch (error) {
                console.error('Erro ao simular empréstimo:', error);
                toast.error('Erro ao simular empréstimo. Por favor, tente novamente.');
            }
        }
    },
    getters: {
        loanResult(state) {
            return state.loanResult;
        }
    }
});