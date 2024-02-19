<template>
    <div v-if="loanResult" class="card-simulated-value">
        <div class="container">
            <h1>Resultados da simulação</h1>
            <span class="rectangle"></span>
            <div class="result-info">
                <p>Instituição: {{ loanResult.institution }}</p>
                <p>Valor solicitado: {{ formatCurrency(loanResult.requestedValue) }}</p>
                <p>Quantidade de parcelas x Valor: <strong>{{ loanResult.installments }}</strong></p>
                <p>Taxa de juros ao mês: {{ loanResult.interestRate }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        loanResult: Object, // Objeto contendo os resultados da simulação de empréstimo
    },
    methods: {
        formatCurrency(value) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        }
    }
}
</script>

<style scoped>
.container {
    margin: 30px;
}

h1 {
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

.result-info p {
    font-family: 'Roboto';
    font-size: 16px;
    color: #444444;
    margin-top: 8px;
    margin-bottom: 8px;
}

.rectangle {
    position: absolute;
    width: 55px;
    height: 3px;
    left: 420px;
    top: 690px;
    background: #EF6C00;
    border-radius: 22px;
}
</style>