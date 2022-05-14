import './styles.css';
import { Youtube, Facebook, Twitter } from 'react-bootstrap-icons'

export const Footer = () => {
    return (
        <div className='footer-div'>
            <div className='ul-list'>
                <ul>
                    <li><a href='#'>Sobre Nós</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
                <ul>
                    <li><a href=''><Facebook fill='#4267B2' /> Facebook</a></li>
                    <li><a href=''><Twitter fill='#1DA1F2' /> Twitter</a></li>
                    <li><a href=''><Youtube fill='#FF0000' /> YouTube</a></li>
                </ul>
            </div>
            <hr />
            <small>Site para o <a href='https://erick-lima.netlify.app/' target='_blank' rel='noreferrer'>Meu Portfólio</a>.</small>
        </div>
    )
}
