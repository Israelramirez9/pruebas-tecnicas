import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import '../styles/Footer.css'
function Footer() {
    return (
        <footer>
            <div><h4>Encontranos en:</h4></div>
            <div><h4>Abierto de:</h4></div>
            <div><h4>E-mail:</h4></div>
            <div><h4>Redes:</h4></div>
            <div>
                <p>Palermo Hollywood
                    <br />Recoleta
                    <br />San Isidro
                    <br />Villa Crespo
                    <br />Villa Urquiza
                    <br />Cañitas
                    <br />Caballito
                </p>
            </div>
            <div>
                <p>Lunes a Domingos
                    <br />de 8:30 - 21:00
                </p>
            </div>
            <div>
                info@libreriasReact.com.ar
            </div>
            <div>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <AiOutlineFacebook className="icon-facebook icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <AiOutlineInstagram className="icon-instagram icon" />
                </a>
                <a href="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=0CDgQw7AJahcKEwiw9qWSip-AAxUAAAAAHQAAAAAQAw&url=https%3A%2F%2Ftwitter.com%2F%3Flang%3DES&psig=AOvVaw0CxM25Vk48j_MpBgnLijJ6&ust=1690004116875212&opi=89978449" target="_blank" rel="noreferrer">
                    <AiOutlineTwitter className="icon-twitter icon" />
                </a>

            </div>
        </footer>
    )
}

export default Footer