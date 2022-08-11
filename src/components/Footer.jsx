import '../App.css';
import logo from '../img/logo_b.png'


const Footer = () => {
    return (
        <div class="container">
            <div class="copy">
                <div>
                    <p className='textFooter'>2022 © Todos os direitos reservados.</p>
                </div>
            </div>
            <div>
                    <img class="logoFooter" src={logo}/> 
                </div>
        </div>
    )
}

export default Footer;