import React from 'react';
import BannerImage from '../../assets/Banner.png'
import Image from '../../assets/image2.png'
import './styles.css'

const Banner = () => {
    return (
        <div>
            <div className='block-header'>
                <div style={{width: '50%'}}>
                    <img src={BannerImage} style={{width: '50%', height: 400, position: 'absolute'}}/>
                    <div style={{color: 'white', position: 'absolute', width: 300, marginLeft: '12%', marginTop: 100}}>
                        <p style={{fontSize: 20, fontWeight: 'bold', height: 5}}>
                            Olá, o que você está buscando?
                        </p>
                        <p style={{fontSize: 32, fontWeight: 'bold'}}>
                            Criar ou migrar seu e-commerce?
                        </p>
                    </div>
                </div>
                <div style={{marginLeft: 50, width: '70%', height: 400,}}>
                    <img src={Image} style={{width: '100%', height: '100%'}}/>
                </div>
            </div>
            <div className='inline'>
                <div className='block-mobile-banner' style={{width: '100%', height: 200}}>
                    <img src={Image} style={{width: '100%', height: 200, position: 'absolute'}}/>
                    <div style={{color: 'white', position: 'absolute', width: 300, marginLeft: '12%', marginTop: 20}}>
                        <p style={{fontSize: 20, fontWeight: 'bold', height: 5}}>
                            Olá, o que você está buscando?
                        </p>
                        <p style={{fontSize: 32, fontWeight: 'bold'}}>
                            Criar ou migrar seu e-commerce?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;