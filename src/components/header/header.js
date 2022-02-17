import React, { useContext } from 'react';
import Vector from '../../assets/Vector.png'
import Minicart from '../../assets/Minicart.png'
import Menu from '../../assets/hamburguer.png'
import ContextHome from '../../context/contextHome';
import './styles.css'

const Header = () => {
    const { qtdItems } = useContext(ContextHome);

    return (
        <div>
            <div className='block'>
                <div>
                    <img src={Vector} className="icon"/>
                </div>
                <div className='inline'>
                    <div className='items'>
                        <input type="text" placeholder='O que está procurando?'/>
                    </div>
                    <div>
                        <div className='inline'>
                            <div>
                                <img src={Minicart} />
                            </div>
                            <div className='qtd'>
                                <p>{qtdItems}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block-mobile'>
                <div>
                    <img src={Menu} className="menu-icon"/>
                </div>
                <div style={{paddingLeft: '15%', paddingRight: '15%'}}>
                    <img src={Vector} className="icon"/>
                </div>
                <div className='inline'>
                    <div>
                        <img src={Minicart} style={{width: 25,  height: 25}} />
                    </div>
                    <div className='qtd'>
                        <p>{qtdItems}</p>
                    </div>
                </div>
            </div>
            <div className='block-mobile'>
                <div className='items'>
                    <input type="text" placeholder='O que está procurando?'/>
                </div>
            </div>
        </div>
    );
}

export default Header;