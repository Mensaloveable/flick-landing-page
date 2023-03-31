import reviewStyle from './Review.module.css';
import member1 from '../../../../../../assets/member3.jpeg';
import member2 from '../../../../../../assets/member4.jpeg';

export const Review = () => {
    return(
    <div className={reviewStyle.container}>
        <div className={reviewStyle.wrapper}>
            <div className={reviewStyle.reviews}></div>
        </div>
    </div>
        )
}