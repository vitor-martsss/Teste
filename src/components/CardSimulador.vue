<template>
    <div>
        <h1>
            Simulação de Financiamento
        </h1>
        <span class="rectangle"></span>
        <div class="card-simulador">
            <div class="container">
                <div class="title">
                    <h3> Selecione um veiculo que deseja simular o financiamento </h3>
                </div>
                <div class="inputs">
                    <select name="" id="" v-model="vehicleSelect" @change="updateVehicleSelect">
                        <option :value="vehicle" v-for="vehicle in vehicleList['vehicles']" :key="vehicle.id">
                            {{ vehicle.make }}</option>
                    </select>
                </div>
                <div v-show="vehicleSelect != ''">
                    <div class="title">
                        <h3> Digite o valor de entrada </h3>
                    </div>
                    <div class="mobile-colum">
                        <CurrencyInput :class="{ borderRed: errorValidate }" v-model="entryValue"
                        :options="{ currency: 'BRL' }" />
                         <button v-if="true" @click="validateInputs(vehicleSelect)"> Simular </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useToast } from "vue-toastification";
import CurrencyInput from './lib/CurrentInput.vue'


export default {
    props: {
        vehicleList: []
    },
    data() {
        return {
            vehicleSelect: '',
            entryValue: '',
            errorValidate: false
        }
    },
    setup() {
        const toast = useToast();
        return { toast }
    },
    components: { CurrencyInput },
    methods: {
        validateInputs(vehicle) {
            let erros = []
            this.errorValidate = false;

            if (!this.vehicleSelect) {
                erros.push('Por favor, selecione um veículo');

            }
            if (!this.entryValue && this.vehicleSelect && Number(this.entryValue) !== 0) {
                erros.push('Por favor, preencha um valor de entrada.');
            }
            if (this.entryValue > vehicle?.price) {
                erros.push('O valor inserido não pode ser superior ao valor total do veículo. Por favor, insira um valor válido.');
            }

            if (Number(this.entryValue) === 0) {
                erros.push('Por favor, insira um valor válido. O valor não pode ser zero');
            }

            if (Number(this.entryValue) == vehicle?.price) {
                erros.push('Por favor, insira um valor válido. O valor de entrada não pode ser igual ao valor do veiculo');
            }

            if (erros.length > 0) {
                this.errorValidate = true;
                for (let index = 0; index < erros.length; index++) {
                    const erro = erros[index];
                    this.toast.error(erro);
                }
                return;
            }

            this.simulateLoan()

        },
        simulateLoan() {

            const valueAfterEntry = this.vehicleSelect.price - this.entryValue

            if (!this.vehicleSelect) {
                this.toast.error("Selecione um veiculo !!");
                return;
            }

            const loan = {
                sixTimes: parseFloat((valueAfterEntry / 6).toFixed(2)),
                twelveTimes: parseFloat((valueAfterEntry / 12).toFixed(2)),
                fortyEightTimes: parseFloat((valueAfterEntry / 48).toFixed(2)),
                valueAfterEntry
            }

            this.$store.commit('updateInstallments', loan)

        },
        updateVehicleSelect() {
            this.$store.commit('updateInstallments', {})
            this.$store.dispatch('updateVehicleSelect', this.vehicleSelect)
        }
    },

}
</script>

<style scoped>
body {
    background-color: #f5f5f5;
}

.borderRed {
    border: 1px solid red;
}

.rectangle {
    position: absolute;
    width: 55px;
    height: 3px;
    left: 55px;
    top: 218px;

    background: #7D28F7;
    border-radius: 22px;
}

.container {
    margin: 33px;
}

.card-simulador {
    background-color: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 45px;
    margin-right: 45px;
}

h1 {
    padding-top: 84px;
    padding-left: 38px;
    margin-bottom: 42px;

    font-family: 'Roboto';
    font-weight: 700;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #444444;
}

h3 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #444444;
}

select {
    margin-left: 1px;
    background: #FFFFFF;
    width: 301px;
    height: 50px;
    border: 1px solid #E5E5E5;
    text-align: initial;
    padding-left: 15px;
}

button {
    background-color: #7D28F7;
    cursor: pointer;
    border: none;
    color: white;
    border-radius: 50px;
    width: 187px;
    height: 39px;
    font-style: normal;
    padding: 10px, 32px, 10px, 32px;

    font: 'Roboto';
    font-weight: 900;
    text-align: center;

    transition: background-color 0.3s ease-in-out;

}

input {
    margin-left: 1px;
    background: #FFFFFF;
    width: 285px;
    height: 50px;
    border: 1px solid #E5E5E5;
    margin-right: 20px;
    text-align: initial;
    padding-left: 15px;
}



button:hover {
    font-weight: 1000;
}

@media only screen and (max-width: 414px) {


    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;

        padding: 0;
        margin-top: 81px;
    }

    select {
        width: 258px;
        height: 30px;
        margin: 0 auto;

    }

    h3 {
        font-weight: 700;
        font-size: 13px;
        line-height: 15px;
    }

    input {
        width: 230px;
        height: 30px;
        margin-bottom: 10px;
    }

    button {
        padding: 10px 32px;
    }

    .card-simulador {
        min-width: 300px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .mobile-colum{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .rectangle{
        display: none;
    }
}
</style>
