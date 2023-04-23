import { createStore } from "vuex";
import { useToast } from "vue-toastification";

const toast = useToast();

export default createStore({
    state: {
      vehicleList: [],
      vehicleSelect : [],
      selectedInstallment : '',
      installments: {}
    },
    mutations: {
      updateVehicleList (state, vehicleList) {
        state.vehicleList = vehicleList
      },
      updateVehicleSelect(state, vehicleSelect){
        state.vehicleSelect = vehicleSelect
      },
      updateInstallments(state, installments){
        state.installments = installments
      }
    },
    actions: {
      getVehicles ({ commit }) {
        fetch( 'http://127.0.0.1:8484/api/vehicle/index', {
            method: 'GET',
            header: {
              'Accept': 'application/json',
              "Access-Control-Allow-Origin": "*"
            }
        } )
        .then(response=>response.json())
        .then(data=>{ 
            commit('updateVehicleList', data)
        }).catch(error => {
          toast.error('Falha ao estabelecer conexão com o banco de dados.')
        })
      },
      updateVehicleSelect({ commit }, data){
        commit('updateVehicleSelect', data)
      }
    },
    getters: {
      //usar os valores parcelados aqui, pq ele atualiza.
      totalValueLoan(state) {
        state.valueLoan 
        
        return state.valueLoan
      },


    }
  });