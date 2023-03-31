import contentStyle from './Content.module.css'
import {Trust} from "./trustComponent/Trust.jsx";

export const Content = () => {
    return(
        <div className={contentStyle.main}>
            <Trust />
        </div>
    )
}