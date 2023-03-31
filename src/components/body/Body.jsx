import bodyStyles from './Body.module.css'
import {Hero} from "./UI/content/hero/Hero.jsx";
import {Content} from "./UI/content/Content.jsx";
import {DownloadApp} from "./UI/content/downloadApp/DownloadApp.jsx";

export const Body = () => {
    return (
        <div className={bodyStyles.pageBody}>
            <Hero />
            <Content />
            <DownloadApp />
        </div>
    )
}