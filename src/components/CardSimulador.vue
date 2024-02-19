<template>
    <div>
        <h1>
            Simulação de Empréstimo
        </h1>
        <span class="rectangle"></span>
        <div class="card-simulador">
            <div class="container">
                <div class="form-column">
                    <div class="title">
                        <h3> Digite o valor desejado </h3>
                    </div>
                    <div class="mobile-colum">
                        <CurrencyInput :class="{ borderRed: errorValidate }" v-model="entryValue" :options="{ currency: 'BRL' }" />
                    </div>

                    <div class="title">
                        <h3> Instituição bancária </h3>
                    </div>
                    <div class="inputs">
                        <select v-model="selectedInstitution">
                            <option v-for="institution in institutions" :key="institution.id" :value="institution.id">
                                {{ institution.name }}
                            </option>
                        </select>
                    </div>
                </div>
                
                <div class="form-column">
                    <div class="title">
                        <h3>Quantidade de parcelas</h3>
                    </div>
                    <div class="inputs">
                        <select v-model="selectedTerm">
                            <option value="36">36</option>
                            <option value="48">48</option>
                            <option value="60">60</option>
                            <option value="72">72</option>
                            <option value="84">84</option>
                        </select>
                    </div>
                    
                    <div class="title">
                        <h3> Convênio bancário </h3>
                    </div>
                    <div class="inputs">
                        <select v-model="selectedAgreement">
                            <option v-for="agreement in agreements" :key="agreement.id" :value="agreement.id">
                                {{ agreement.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-column button-column">
                    <button @click="validateAndSimulateLoan"> Simular Empréstimo</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useToast } from "vue-toastification";
import CurrencyInput from './lib/CurrentInput.vue';
//import axios from 'axios';

export default {
    props: {
        institutions: Array, // Lista de instituições bancárias vindas da API
        agreements: Array, // Lista de convênios bancários vindos da API
    },
    data() {
        return {
            selectedInstitution: null,
            selectedAgreement: null,
            entryValue: '',
            selectedTerm: null,
            errorValidate: false,
            loanResult: null,
        }
    },
    setup() {
        const toast = useToast();
        return { toast }
    },
    components: { CurrencyInput },
    methods: {
        validateAndSimulateLoan() {
            if (this.validateInputs()) {
                this.simulateLoan();
            }
        },
        async simulateLoan() {
            try {
                const response = await axios.post('HOST/api/simular', {
                    valor_emprestimo: parseFloat(this.entryValue),
                    instituicoes: [this.selectedInstitution],
                    convenios: [this.selectedAgreement],
                    parcela: parseInt(this.selectedTerm)
                });
                this.loanResult = response.data; 
            } catch (error) {
                console.error('Erro ao simular empréstimo:', error);
            }
        },
        validateInputs() {
            let errors = [];

            if (!this.selectedInstitution) {
                errors.push('Por favor, selecione uma instituição bancária.');
            }

            
            if (!this.selectedAgreement) {
                errors.push('Por favor, selecione um convênio bancário.');
            }

            if (!this.entryValue || isNaN(parseFloat(this.entryValue))) {
                errors.push('Por favor, preencha um valor de empréstimo válido.');
            }

            if (!this.selectedTerm) {
                errors.push('Por favor, selecione a quantidade de parcelas.');
            }
            

            if (errors.length > 0) {
                this.errorValidate = true;
                errors.forEach(error => {
                    this.toast.error(error);
                });
                return false;
            } else {
                this.errorValidate = false;
                return true;
            }
        },
        simulateLoan() {
        },
    },
}
</script>


<style scoped>
  .container {
        display: flex;
        flex-wrap: wrap;
    }

    .form-column {
        width: calc(50% - 120px);
        margin-bottom: 20px;
    }

    .button-column {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        .form-column {
            width: 100%;
        }
    }
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

    background: #EF6C00;
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
    background-color:  #273E74;
    cursor: pointer;
    border: none;
    color: white;
    border-radius: 5px;
    width: 764px;
    height: 45px;
    font-style: normal;
    padding: 10px 32px;
    margin-left: -0,2px;
    margin-top: 20px;
    font: 'Roboto';
    font-weight: 500;
    font-size: 17px;
    text-align: center;

    transition: background-color 0.3s ease-in-out;
}

button:hover {
    background-color:  #162445;
    font-weight: 500;
    font-size: 17px;
    text-align: center;
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
    font-weight: 500;
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
