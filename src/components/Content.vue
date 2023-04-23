<template>
    <div>
        <body>
            <CardSimulador :vehicleList="vehicleList" />
            <div class="container">
                <CardPhoto :selectVehicle="selectVehicle" />
                <CardSimulatedValue />
            </div>
        </body>
    </div>
</template>

<script >

import CardSimulador from './CardSimulador.vue'
import CardPhoto from './CardPhoto.vue'
import CardSimulatedValue from './CardSimulatedValue.vue'
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            vehicleList: state => state.vehicleList,
            selectVehicle: state => state.selectVehicle
        })
    },
    data() {
        return {
            teste: this.$store.state.vehicleList
        }
    },
    methods: {

    },
    mounted() {
        this.$store.dispatch('getVehicles');
    },
    components: {
        CardSimulador,
        CardPhoto,
        CardSimulatedValue
    }
}


</script>



<style scoped>
.container {
    display: flex;
    margin-top: 84px;
    margin-bottom: 84px;
}


@media only screen and (max-width: 414px) {
    .container {
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
}
</style>
