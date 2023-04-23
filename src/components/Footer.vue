<template>
    <div>
        <footer>
            <div class="container">
                <div class="col-sm-2 ocult-mobile">
                    <h4>Encontre seu veículo</h4>
                    <ul>
                        <li><a href="#">Encontre seu veículo</a></li>
                        <li><a href="#">Lojas</a></li>
                        <li><a href="#">Promoções</a></li>
                        <li><a href="#">Vantagens</a></li>
                        <li><a href="#">Garantia Mais</a></li>
                    </ul>
                </div>
                <div class="col-sm-2 ocult-mobile">
                    <h4>A Empresa</h4>
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Aviso de Privacidade</a></li>
                        <li><a href="#">Blog Seminovos</a></li>
                    </ul>
                </div>
                <div class="col-sm-2 ocult-mobile">
                    <h4>Atendimento</h4>
                    <ul>
                        <li><a href="#">Perguntas Frequentes</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Pós-vendas</a></li>
                    </ul>
                </div>
                <div class="col-sm-2 ocult-mobile">
                    <h4>Lojistas</h4>
                    <ul>
                        <li><a href="#"> Acesse Seminovos Atacado </a></li>
                    </ul>
                </div>
                <div class="col-sm-2  flex-align ">
                    <h4>Atendimento ao cliente</h4>
                    <div class="aling-colum">
                        <div class="banner-number">
                            <p>
                                0800 000 000
                            </p>
                        </div>
                        <img src="../assets/whataspp.png" alt="whatsaap">
                    </div>

                </div>
                <div class="col-sm-2 mobile-follow">
                    <h4>Siga a gente</h4>
                    <ul>
                        <a href="https://www.facebook.com/listraweb" target="_blank">
                            <img src="../assets/Facebook-icon.png" alt="facebook">
                        </a>
                        <a href="https://www.instagram.com/listradigital/" target="_blank">
                            <img src="../assets/Instagram-icon.png" alt="Instagram">
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <img src="../assets/Twitter-icon.png" alt="Twitter">
                        </a>
                        <a href="https://www.linkedin.com/company/listradigital" target="_blank">
                            <img src="../assets/linkedin-icon.png" alt="Linkedin">
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    width: 100%;
    height: 264.35px;
    background: rgba(52, 58, 64, 0.8);
}

.aling-colum {
    display: flex;
    justify-content: center;
    align-items: center;
}


.col-sm-2>ul>a {
    margin-right: 10px;
}

.banner-number {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 128px;
    height: 42.57px;

    background: #7D28F7;
    border-radius: 4px;

    margin-right: 16px;
}

.banner-number>p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;

    color: #FFFFFF;

}

.container {
    display: flex;
    margin: 15px;
}


.col-sm-2 {
    width: 16.6666666667%;
    margin: 15px;
}

.col-sm-2>h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;
}

.flex-align {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.col-sm-2 li a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    /* or 214% */
    color: #FFFFFF;

    text-decoration: none;
}

ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}

@media only screen and (max-width: 414px) {
    .ocult-mobile {
        display: none;
    }

    .col-sm-2{
        width: 100%;
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    .mobile-follow{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
  

}
</style>
