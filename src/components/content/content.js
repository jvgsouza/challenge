import React, { useContext, useEffect, useState } from 'react';
import SetaDireita from '../../assets/setadireita.png'
import SetaEsquerda from '../../assets/setaesquerda.png'
import ContextHome from '../../context/contextHome';
import './styles.css'

const Content = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const { addItem, getProductsList, productsList } = useContext(ContextHome);

    const per_page = 4;
    const per_page_mobile = 2;
    const offset = currentPage * per_page;
    const offsetMobile = currentPage * per_page_mobile;
    let pageCount;
    let pageCountMobile;

    useEffect(async () => {
        await getProductsList();
        if(productsList){
            pageCount = Math.ceil(productsList.length / per_page);
            pageCountMobile = Math.ceil(productsList.length / per_page_mobile);
        }
    }, []);

    const pageValue = () => {
        const number = currentPage + 1;
        setCurrentPage(number);
    }

    const pageValueBack = () => {
        const number = currentPage - 1;
        setCurrentPage(number);
    }

    const addItemFunction = () => {
        addItem();
    }

    const formatValue = (valor) => {
        return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    const listMobile = 
        <div className='list-content'>
            {
                productsList && 
                    <div className='inline'>
                        {
                            productsList.slice(offsetMobile, offsetMobile + per_page_mobile)
                            .map((result, i) => {
                                return <div className='div-list'>
                                    <img src={result.imageUrl} className="image-list"/>
                                    <div style={{textAlign: 'center'}}>
                                        <p style={{width: 120}}>{result.productName}</p>
                                        <p style={{fontWeight: 'bold'}}>por {formatValue(result.price)}</p>
                                        <button 
                                            style={{
                                                width: 100,
                                                height: 25, 
                                                backgroundColor: 'black',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: 5,
                                                fontSize: 10
                                            }}

                                            onClick={() => addItemFunction()}
                                        >
                                            COMPRAR
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
            }
        </div>
    
    const list = 
        <div className='list-content'>
            {
                productsList && 
                    <div className='inline'>
                        {
                            productsList.slice(offset, offset + per_page)
                            .map((result, i) => {
                                return <div className='div-list'>
                                    <img src={result.imageUrl} className="image-list"/>
                                    <div style={{textAlign: 'center'}}>
                                        <p>{result.productName}</p>
                                        <p style={{fontWeight: 'bold'}}>por {formatValue(result.price)}</p>
                                        <button 
                                            style={{
                                                width: 100,
                                                height: 25, 
                                                backgroundColor: 'black',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: 5,
                                                fontSize: 10
                                            }}

                                            onClick={() => addItemFunction()}
                                        >
                                            COMPRAR
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
            }
        </div>

    return (
        <div className='block-content'>
            <div style={{marginBottom: 50}}>
                <div className='mais-vendidos'>
                    Mais Vendidos
                    <div style={{borderBottom: "3px solid rgb(212, 212, 212)", width: 50}}></div>
                </div>
                <div className='inline block-content-list'>
                    <button onClick={() => pageValueBack()} 
                        style={{
                            height: 30,
                            border: 'none',
                            backgroundColor: 'white'
                        }}
                    >
                        <img src={SetaEsquerda}/>
                    </button>
                    <div className='list-mobile'>
                        {listMobile}
                    </div>
                    <div className='list-desktop'>
                        {list}
                    </div>
                    <button onClick={() => pageValue()} 
                        style={{
                            height: 30,
                            border: 'none',
                            backgroundColor: 'white'
                        }}
                    >
                        <img src={SetaDireita}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Content;