import React from "react";
import "./CSS/contact.css"
const Contact = () => {
    return (
        <>
            <div style={{
                width:'100%',
                height:'200px',
                backgroundColor:'#F1F1F1',
                display:'flex',
                margin:'auto',
                alignItems:'center'
            }}
            class="contact-mobile"
            >
                <h1 style={{
                    color:'#848484',
                    fontFamily:' Didot',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    margin:'auto',
                }}>GOITA</h1>
                <p style={{
                    fontFamily: 'JaapokkienchanceRegular',
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    color: 'black',
                    margin:'auto',
                }}
                class="contactme"
                >Contactez-Moi</p>
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
                </div>
            </div>
        </>
    )
}


export default Contact