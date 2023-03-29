import bodyStyles from './Body.module.css'
import {Hero} from "../UI/hero/Hero.jsx";

export const Body = () => {
    return (
        <div className={bodyStyles.pageBody}>
            <Hero />
        </div>
    )
}