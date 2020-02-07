import React from "react";
import "./CSS/contact.css"
import FB from  "../images/facebook.png"
import INSTA from  "../images/instagram-sketched.png"
const Contact = () => {
    return (
        <>
            <div class="contact-mobile" id="Conntact">
                <div class="three">
                    <h1 style={{
                        color:'#848484',
                        fontFamily:' Didot',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        margin:'auto',
                    }}>GOITA</h1>
                </div>
                <div class="three">
                    <p style={{
                        fontFamily: 'JaapokkienchanceRegular',
                        fontSize: '16px',
                        letterSpacing: '0.5px',
                        color: 'black',
                        margin:'auto',
                    }}
                    class="contactme"
                    >Contactez-Moi</p>
                </div>
                <div class="three">
                    <div style={{
                        display:'flex',
                        margin:'auto',
                        flexDirection:'column'
                    }}>
                        <p style={{
                            fontFamily: 'JaapokkienchanceRegular',
                            fontSize: '16px',
                            letterSpacing: '0.5px',
                            color: 'black',
                            margin:'auto',
                        }}>Email : goitag868@gmail.com</p>
                        <p style={{
                            fontFamily: 'JaapokkienchanceRegular',
                            fontSize: '16px',
                            letterSpacing: '0.5px',
                            color: 'black',
                            margin:'auto',
                        }}>Téléphone : 07 55 22 67 90</p>
                        <div class="contact-network">
                            <a href="https://www.facebook.com/gaoussou.goita.7">
                                <img src={FB}></img>
                            </a>
                            <a>
                                <img src={INSTA}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copy">
                <h2>Goïta Création Styliste Modéliste Création sur mesure. Copyright © Goita. Tous droits réservés.</h2>
            </div>
        </>
    )
}


export default Contact