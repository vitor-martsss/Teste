<template>
    <div>
        <footer>
            <div class="container">
                <div class="col-sm-2 ocult-mobile">
                    <h4>A Empresta</h4>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Trabalhe Conosco</a></li>
                        <li><a href="#">Diretrizes de marca</a></li>
                        <li><a href="#">Políticas de privacidade</a></li>
                        <li><a href="#">Dicas de segurança</a></li>
                    </ul>
                </div>
                <div class="col-sm-2 ocult-mobile">
                    <h4>Atendimento</h4>
                    <ul>
                        <li><a href="#">Quero ser franqueado</a></li>
                        <li><a href="#">Marketplace de Crédito</a></li>
                        <li><a href="#">Problema com seu FGTS?</a></li>
                        <li><a href="#">WhatsApp Oficial 31 97202-4450</a></li>
                    </ul>
                </div>
                <div class="col-sm-2 ocult-mobile">
                    <h4>Nossos produtos</h4>
                    <ul>
                        <li><a href="#">Empréstimo Consignado</a></li>
                        <li><a href="#">Antecipação do saque FGTS</a></li>
                        <li><a href="#">Empréstimo pessoal</a></li>
                    </ul>
                </div>
                <div class="col-sm-2 ocult-mobile">
                    <h4>Novidades por e-mail</h4>
                    <ul>
                        <li><a href="#"> Assine a nossa newsletter</a></li>
                    </ul>
                </div>
                <div class="col-sm-2  flex-align ">
                    <h4>WhatsApp Oficial </h4>
                    <div class="aling-colum">
                        <div class="banner-number">
                            <p>
                                31 97202-4450
                            </p>
                        </div>
                        <img src="../assets/whataspp.png" alt="whatsaap">
                    </div>

                </div>
                <div class="col-sm-2 mobile-follow">
                    <h4>Siga a gente</h4>
                    <ul>
                        <a href="https://www.facebook.com/emprestabemmelhor/?locale=pt_BR" target="_blank">
                            <img src="../assets/Facebook-icon.png" alt="facebook">
                        </a>
                        <a href="https://www.instagram.com/emprestabemmelhor/" target="_blank">
                            <img src="../assets/Instagram-icon.png" alt="Instagram">
                        </a>
                        <a href="https://twitter.com/Empresta" target="_blank">
                            <img src="../assets/Twitter-icon.png" alt="Twitter">
                        </a>
                        <a href="https://www.linkedin.com/company/empresta-solucoes-e-negocios/?originalSubdomain=br" target="_blank">
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
    background:  #EF6C00
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

    background: #273E74;
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
