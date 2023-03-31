import trustStyle from './Trust.module.css'

export const Trust = () => {
    return (
        <div className={trustStyle.trustAnimation}>
            <div className={trustStyle.container}>
                <h1 className={trustStyle.title}>Customers all over Nigeria trust Flick to transact faster.</h1>
                <div className={trustStyle.inner}>
                    <p className={trustStyle.description}>Connect your bank accounts, view your net worth in a glance, and make contactless payments.</p>
                <div className={trustStyle.metrics}>
                </div>
                    <div className={trustStyle.count}>
                        <h1 className={trustStyle.header1}>20<span>+</span></h1>
                    </div>
                    <div className={trustStyle.count}></div>
                    <div className={trustStyle.count}></div>
                </div>
            </div>
        </div>
    )
}