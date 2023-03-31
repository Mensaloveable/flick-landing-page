import bannerStyle from './Banner.module.css';
import fastPayment from '../../../../../../assets/payFaster.svg'

export const FastPayment = () => {
    return (
        <div className={`${bannerStyle.section} ${bannerStyle.right}`}>
            <div className={bannerStyle.rightContent}>
                <div className={`${bannerStyle.animated} ${bannerStyle.fadeInUp}`}>
                    <h1>Pay anyone 7x faster</h1>
                    <p>Pay friends, businesses and family, no matter what bank account they use. They get credited
                        instantly and securely.</p>
                </div>
            </div>
            <div className={`${bannerStyle.animated} ${bannerStyle.rightSlide}`}>
                <img src={fastPayment} alt={'Fast Payment'}/>
            </div>
        </div>
    )
}