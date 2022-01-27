import FooterLogo from '../../assets/logo-kasa-footer.svg'
import '../../styles/Footer.css'



function Footer() {
    return (
        <footer>
            <img src={FooterLogo}  alt='Logo de bas de page' className='footerLogo' />
            <span className='footerInfo'> © 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer