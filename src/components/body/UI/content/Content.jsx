import contentStyle from './Content.module.css'
import {Trust} from "./trustComponent/Trust.jsx";
import {FlickBanner} from "./BannerComponent/FlickBanner.jsx";
import {FastPayment} from "./BannerComponent/FastPayment.jsx";
import {Overview} from "./BannerComponent/Overview.jsx";

export const Content = () => {
    return(
        <div className={contentStyle.main}>
            <Trust />
            <FlickBanner />
            <FastPayment />
            <Overview />
        </div>
    )
}