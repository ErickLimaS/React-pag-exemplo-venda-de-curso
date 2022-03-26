import './styles.css'

export const Footer = () => {
    return (
        <div className='footer-div'>
            <div className='ul-list'>
                <ul>
                    <li><a href='#'>Sobre Nós</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
                <ul>
                    <li><a href=''>Facebook</a></li>
                    <li><a href=''>Twitter</a></li>
                    <li><a href=''>YouTube</a></li>
                </ul>
            </div>
            <hr />
            <small>Feito apenas para portfólio. Todo conteúdo é fictício.</small>
        </div>
    )
}