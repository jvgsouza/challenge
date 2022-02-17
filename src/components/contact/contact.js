import React, { useContext, useEffect, useState } from 'react';
import SetaDireita from '../../assets/setadireita.png'
import SetaEsquerda from '../../assets/setaesquerda.png'
import ContextHome from '../../context/contextHome';
import './styles.css'

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const { contact } = useContext(ContextHome);

    const sendContact = async () => {
        const verify = verifyInput();
        if(verify){
            await contact(email, name).then((res) => {
                console.log(res)
                if(res.status != 200){
                    alert("Erro ao enviar contato!");
                } else {
                    alert("Contato enviado com sucesso!");
                }
            }).catch((error) => {
                alert("Erro ao enviar contato!");
            });;
        }
    }

    const verifyInput = () => {
		if(verifyName() && verifyEmail()){
            return true;
        } else {
            return false;
        }
    }

    const verifyName = () => {
		if(name.replace(/\s+/g, '').length < 1 || name.length < 1){
            alert("Por favor preencha todos os campos!");
			return false;
		} else {
			return true;
		}
    }

    const verifyEmail = () => {
		if(email.replace(/\s+/g, '').length < 1 || email.length < 1){
            alert("Por favor preencha todos os campos!");
			return false;
		} else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
            alert("Por favor escolha um email válido.");
			return false;
		} else {
            return true;
        }
    }

    return (
        <div style={{backgroundColor: '#F2F2F2'}}>
            <div className='block-contact'>
                <div>
                    <div>
                        <div className='news'>
                            <p>Participe de nossas news com promoções e novidades!</p>
                        </div>
                    </div>
                    <div className='padding-bottom block-contact'>
                        <div className="form">
                            <input type="text" placeholder='Digite seu nome' 
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="form">
                            <input type="email" placeholder='Digite seu email'
                            value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="form">
                            <button 
                                style={{
                                    width: 100,
                                    height: 43, 
                                    backgroundColor: 'black',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 5,
                                    fontSize: 12
                                }}
                                onClick={() => sendContact()}
                            >
                                Eu quero!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;