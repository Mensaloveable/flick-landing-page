import footerStyle from './Footer.module.css';
import logo from '../../../assets/FlickLogo2.svg'
import apple from '../../../assets/downloadApple.svg';
import android from '../../../assets/downloadAndriod.svg';

export const Footer = () => {
    return(
        <footer className={footerStyle.footer}>
            <img src={logo} alt='Flick Logo'/>
        </footer>
    )
}