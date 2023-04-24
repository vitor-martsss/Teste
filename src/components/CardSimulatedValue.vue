<template>
    <div v-if="Object.keys(installments).length" class="card-simulated-value">
        <div class="container">
            <h1>Valores simulados para você</h1>
            <p class="mobile-title">Clique nos valores abaixo para obter o preço total do veículo</p>
            <span class="rectangle"></span>
            <div class="card-large focus-installments" @mouseover="UpdateTotalVehicle('sixTimes')">
                <p>6x</p>
                <p>{{ installments.sixTimes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </p>
                <p class="tag-ipva">IPVA GRÁTIS</p>
            </div>
            <div class="flex flex-mobile">
                <div class="card-small focus-installments" @mouseover="UpdateTotalVehicle('twelveTimes')">
                    <p>12x</p>
                    <p>{{ installments.twelveTimes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</p>
                </div>
                <div class="card-small focus-installments" @mouseover="UpdateTotalVehicle('fortyEightTimes')">
                    <p>48x</p>
                    <p>{{ installments.fortyEightTimes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
                    </p>
                </div>
            </div>
            <div class="falarConsultor">
                <button class="btn-whatsaap" @click="openWhatsaapConsultor">
                    <img src="../assets/whatsaap-icon-btn.png" alt="">
                    Falar com consultor</button>
                <p>(31) 3441-0240</p>
            </div>
        </div>
        <div class="container mobile-value-total">
            <h1>Valor total do veiculo</h1>
            <h5>Passe o mouse sobre os valores parcelados ao lado para ver o valor total do veículo.</h5>
            <p class="valueTotal">{{ formatCurrency }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { formatCurrency } from '../../helper';

export default {
    data() {
        return {
            totalVehicle: 0
        }
    },
    computed: {
        ...mapState({
            installments: state => state.installments,
            vehicleSelect: state => state.vehicleSelect
        }),
        formatCurrency() {
            return formatCurrency(this.totalVehicle);
        }
    },
    methods: {
        UpdateTotalVehicle(installments) {
            switch (installments) {

                case 'sixTimes':
                    this.totalVehicle = Number((this.installments.valueAfterEntry * (1 + 0.1247)).toFixed(2))
                    break;
                case 'twelveTimes':
                    this.totalVehicle = Number((this.installments.valueAfterEntry * (1 + 0.1556)).toFixed(2))
                    break;
                case 'fortyEightTimes':
                    this.totalVehicle = Number((this.installments.valueAfterEntry * (1 + 0.1869)).toFixed(2))
                default:
                    break;
            }
        },
        openWhatsaapConsultor() {
            const phoneNumber = '+5571986901876';
            const message = `Olá, gostaria de mais informações sobre o seu financiamento do ${this.vehicleSelect.make} no valor final de R$: ${this.totalVehicle}`;
            const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

            window.open(url);
        }
    }

}
</script>

<style scoped>
p {
    margin: 0;
}

.rectangle {
    position: absolute;
    width: 55px;
    height: 3px;
    left: 420px;
    top: 690px;
    background: #7D28F7;
    border-radius: 22px;
}


.valueTotal {
    font-family: 'Roboto';
    font-size: 40px;
    font-weight: 800;
    line-height: 29px;
    color: #7D28F7;
}

.focus-installments:hover {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    transform: scale(1.1);
}

.focus-installments:hover>.tag-ipva {
    position: absolute;
    left: 221px;
}

.falarConsultor>p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
}



.btn-whatsaap {
    cursor: pointer;
    width: 257px;
    height: 40px;
    background-color: #1ABB59;
    color: #FFFFFF;
    border-radius: 50px;
    margin-right: 16px;
    border: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-whatsaap>img {
    margin-right: 10px;
}

.falarConsultor {
    display: flex;
    align-items: center;
    margin-top: 20px;
}


.card-small {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 162px;
    height: 77px;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-right: 13px;
}

.card-small p {
    margin-left: 16px;
}

.flex {
    display: flex;
}

.value-parcelado {
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: 700;
    line-height: 29px;
    color: #7D28F7;
}


.card-simulated-value .container div:nth-of-type(2)>p:nth-of-type(2) {
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: 700;
    line-height: 29px;
    color: #7D28F7;
}

.tag-ipva {
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #7D28F7;
    position: absolute;
    left: 651px;
    background-color: #7D28F7;
    color: white;
    width: 85px;
    height: 14px;
    border-radius: 16px 0px 0px 16px;
    padding: 5px 8px;
}

.card-simulated-value .container div:first-of-type p:nth-of-type(3):hover {
    position: fixed;
    left: 651px;
    top: 735px;
}

.card-simulated-value .container div:first-of-type>p:nth-of-type(2) {
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: 700;
    line-height: 29px;
    color: #7D28F7;
}

.card-simulated-value .container div:first-of-type p:first-of-type {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #444444;
}


.card-large {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 8px;
    width: 339px;
    height: 77px;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}

.card-large>p {
    margin-left: 16px;

}

.container>h1 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    color: #444444;
    margin-top: 0px;
    margin-bottom: 36px;

}

.card-simulated-value {
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    display: flex;
    margin-right: 45px;

}

.container {
    margin: 30px
}

.mobile-title {
    display: none;
}

h5 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    color: #444444;
    margin-top: 0px;
    margin-bottom: 36px;
}


@media only screen and (max-width: 414px) {
    .card-simulated-value {
        margin-top: 13px;
        display: flex;
        flex-direction: column;
        margin-left: 14px;
        margin-right: 14px;
    }

    .container>h1 {
        display: none;
    }

    .card-large {
        width: 100%;
        margin-left: 14px;
        margin-right: 14px;
    }

    .card-small {
        width: 100%;
        margin-left: 14px;
        margin-right: 14px;
        margin-bottom: 12px;
    }

    .flex-mobile {
        flex-direction: column;
    }

    .focus-installments {
        margin: 0 auto;
        margin-bottom: 12px;

    }

    .falarConsultor {
        margin-top: 18px;
        flex-direction: column;
    }

    .btn-whatsaap {
        margin: 0 auto;
        margin-bottom: 18px;

    }

    .valueTotal {
        font-size: 30px;
    }

    .mobile-value-total {
        display: flex;
        justify-items: center;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 32px;
    }

    .mobile-title {
        display: block;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 20px;
        color: #444444;
        margin-top: 0px;
        margin-bottom: 36px;
    }

    .rectangle {
        display: none;
    }

    h5 {
        display: none;
    }
}
</style>
