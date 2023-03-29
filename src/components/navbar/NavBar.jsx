import navStyles from './NavBar.module.css'
import logo from '../../../assets/flick_logo.svg'

export const NavBar = () => {
    return (
        <header className={navStyles.navContainer}>
            <img src={logo} alt='Flick Logo'/>
            <nav className={navStyles.nav}>
                <ul className={navStyles.navItems}>
                    <li className={navStyles.item}><a className={navStyles.navLink} href="#">Business</a></li>
                    <li className={navStyles.item}><a className={navStyles.navLink} href="#">Pricing</a></li>
                    <li className={navStyles.item}><a className={navStyles.navLink} href="#">About Us</a></li>
                    <li className={navStyles.item}><a className={navStyles.navLink}
                                                      href="#">Developer <span>&#8964;</span></a>
                        <div className={navStyles.dropdownContent}>
                            <a className={navStyles.navLink} href="#">Overview</a>
                            <a className={navStyles.navLink} href="#">Api Documentation</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}