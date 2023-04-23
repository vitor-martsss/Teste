<template>
    <div v-if="vehicleSelect.length != ''" class="card-photo">
        <img :src="vehicleSelect.photo" class="img-car">
        <p class="location-tag">
            <img src="../assets/location.png" alt="">
            {{ vehicleSelect.city }}
        </p>
        <div class="description">
            <h4>{{ vehicleSelect.make }}</h4>
            <h5>{{ vehicleSelect.description }}</h5>
            <div>
                <p class="flex-aling-center">
                    <img src="../assets/calendar.png" alt="">
                    {{ vehicleSelect.year }}
                </p>
                <p class="flex-aling-center">
                    <img src="../assets/mileage.png" alt="">
                    {{ vehicleSelect.mileage }}
                </p>
                <p class="flex-aling-center">
                    <img src="../assets/transmission_type.png" alt="">
                    {{ vehicleSelect.transmission_type }}
                </p>
            </div>
            <p>{{ formatCurrency(vehicleSelect.price) }}</p>
        </div>

    </div>
</template>


<script>
import { mapState } from 'vuex';
import { formatCurrency } from '../../helper';

export default {
    computed: {
        ...mapState({
            vehicleSelect: state => state.vehicleSelect
        }),
        formatCurrency() {
            return formatCurrency;
        }
    }
}
</script>

<style scoped>
.description {
    margin: 15px;
}

.location-tag {
    display: flex;
    align-items: center;
    padding: 5px 8px;
    background: #FFFFFF;
    border-radius: 0px 16px 16px 0px;


    position: absolute;
    top: 770px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;

}

.location-tag>img {
    /* margin-right: 4px;
    margin-left: 4px; */
    padding-left: 4px;
    padding-right: 4px;

}

p {
    margin: 0;
}

.flex-aling-center {
    display: flex;
    align-items: center;
}

.flex-aling-center>img {
    margin-right: 5px;
}

.description>p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #444444;
    margin: 0px;
    padding: 0px;
}


.description>h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    line-height: 23.44px;
    color: #444444;
    padding-bottom: 8px;

    margin: 0px;
}

.description>h5 {
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 14px;
    font-size: 14px;
    color: #444444;
    margin: 0px;
    padding-bottom: 17px;

}

.description div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 17px;
}

.description>div>p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #444444;
}

body {
    background: #F5F5F5;
}

.img-car {
    background-color: red;
    height: 191px;
    width: 300px;

}

.card-photo {
    width: 300px;
    height: 346px;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    margin-left: 46px;
    margin-right: 28px;

}

@media only screen and (max-width: 414px) {
    .card-photo {
        margin-left: 10px;
        margin-right: 10px;
    }

    .description>h4 {
        font-size: 20px;
    }

    .location-tag {
        top: 665px;
    }
}
</style>
