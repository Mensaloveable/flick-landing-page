import bodyStyles from './Body.module.css'
import {Hero} from "./UI/content/hero/Hero.jsx";
import {Content} from "./UI/content/Content.jsx";
import {DownloadApp} from "./UI/content/downloadApp/DownloadApp.jsx";
import {Review} from "./UI/content/reviews/Review.jsx";
import {JoinFlick} from "./UI/content/joinFlick/JoinFlick.jsx";

export const Body = () => {
    return (
        <div className={bodyStyles.pageBody}>
            <Hero />
            <Content />
            <DownloadApp />
            <Review />
            <JoinFlick />
        </div>
    )
}