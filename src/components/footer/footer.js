import React from 'react';
import Vector from '../../assets/Vector.png'
import Minicart from '../../assets/Minicart.png'
import './styles.css'

const Footer = () => {

    return (
        <div className='background-footer'>
            <div className='block-footer'>
                <div className='items-footer'>
                    <div className='localize'>
                        <div className='title'>
                            <p>Localização</p>
                            <div style={{borderBottom: "3px solid rgb(212, 212, 212)", width: 50}}></div>
                        </div>
                        <div>
                            <p>Avenida Teste, 300. Bloco T</p>
                        </div>
                        <div>
                            <p>Centro</p>
                        </div>
                        <div>
                            <p>email@teste.com.br</p>
                        </div>
                        <div>
                            <p>+55 31 9999 9999</p>
                        </div>
                    </div>
                </div>
                <div className='items-footer mid-item'>
                    <div>
                        <div>
                            <button className='footer-button'>
                                Entre em contato
                            </button>
                        </div>
                        <div>
                            <button className='footer-button'>
                                Fale com o nosso consultor online
                            </button>
                        </div>
                    </div>
                </div>
                <div className='items-footer'>
                    <div className='localize'>
                        <div>
                            <p className='created-by'>Created by</p>
                        </div>
                        <div>
                            <p className='souza'>souza.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;