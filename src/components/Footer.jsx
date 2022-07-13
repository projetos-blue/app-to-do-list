import '../App.css';
import logo from '../img/logo_b.png'


const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="copy">
                    <div>
                        <p className='textFooter'>2022 © Todos os direitos reservados.</p>
                    </div>
                    <div>
                        <img class="logoFooter" src={logo}/> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;