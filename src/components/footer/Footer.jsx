import footerStyle from './Footer.module.css';
import logo from '../../../assets/FlickLogo2.svg'
import apple from '../../../assets/downloadApple.svg';
import android from '../../../assets/downloadAndriod.svg';

export const Footer = () => {
    return (
        <footer className={footerStyle.footer}>
            <div className={footerStyle.container}>
                <div className={footerStyle.footerMain}>
                    <div className={footerStyle.row}>
                        <div className={footerStyle.column1}>
                            <div className={footerStyle.firstHalf}>
                                <div className={footerStyle.newsletter}>
                                    <img className={footerStyle.image} src={logo} alt='Flick Logo'/>
                                    <p className={footerStyle.subTitle}>One secure platform to pay, get paid, and manage
                                        all
                                        your finances better!</p>
                                    <div className={footerStyle.footerDownloadLink}>
                                        <a className={footerStyle.downloadLink}
                                           href="#">
                                            <img className={footerStyle.image} src={android} alt={'GooglePlayStore'}/>
                                        </a>
                                        <a className={footerStyle.downloadLink}
                                           href="#">
                                            <img className={footerStyle.image} src={apple} alt={'AppleStore'}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={footerStyle.column2}>
                            <div className={footerStyle.row}>
                                <div className={footerStyle.smallCol}>
                                    <div className={footerStyle.widget}>
                                        <p className={footerStyle.footerTitle}>Company</p>
                                        <div className={footerStyle.footerItems}>
                                            <ul className={footerStyle.list}>
                                                <li>
                                                    <a className={footerStyle.listItem} href="#">About Us</a>
                                                </li>
                                                <li>
                                                    <a className={footerStyle.listItem} href="#">Pricing</a>
                                                </li>
                                                <li>
                                                    <a className={footerStyle.listItem} href="#">FAQs</a>
                                                </li>
                                                <li>
                                                    <a className={footerStyle.listItem} href="#">Terms & Conditions</a>
                                                </li>
                                                <li>
                                                    <a className={footerStyle.listItem} href="#">Private Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={footerStyle.smallCol}>
                                    <div className={footerStyle.widget}>
                                        <p className={footerStyle.footerTitle}>Developers</p>
                                        <div>
                                            <ul className={footerStyle.list}>
                                                <li>
                                                    <a className={footerStyle.listItem} href="#">Overview</a>
                                                </li>
                                                <li>
                                                    <a className={footerStyle.listItem} href="#">Api Documentation</a>
                                                </li>
                                                <li>
                                                    <a className={footerStyle.listItem} href="#">Support</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={footerStyle.smallCol}>
                                    <div className={footerStyle.widget}>
                                        <p className={footerStyle.footerTitle}>Address</p>
                                        <div>
                                            <p className={footerStyle.footerTitle}>Nigeria:</p>
                                            <span className={footerStyle.footerSpan}>6th Floor, Landmark Towers, 5B Water Corporation Road, Victoria Island, Lagos</span>
                                            <p className={footerStyle.footerTitle}>United States:</p>
                                            <span className={footerStyle.footerSpan}>2261 Market Street #4664 San Francisco, CA 9114</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footerStyle.footerBottom}>
                    <div className={footerStyle.rowBottom}>
                        <div className={footerStyle.halfCol}>
                            <div>
                                <span className={footerStyle.bottomSpan}>Copyrighting © 2023 Flick. All rights reserved • A product of QRaba Inc. </span>
                            </div>
                        </div>
                        <div className={footerStyle.halfCol}>
                            <div className={footerStyle.pageLink}>
                                <ul className={footerStyle.bottomLink}>
                                    <li>
                                        <a href="https://www.facebook.com/getflick.africa/">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 320 512" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={footerStyle.pageLink}>
                                <ul className={footerStyle.bottomLink}>
                                    <li className={footerStyle.bottomLi}>
                                        <a href="#">unsubscribe</a>
                                    </li>
                                    <li className={footerStyle.bottomLi}>
                                        <a href="#">delete profile</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}