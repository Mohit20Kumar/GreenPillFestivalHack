import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Our Journey</span>

            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span></span>Meals We Served<span>Till Now</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Meals</span><span> {groupNumber(42056)}</span>
                </div>

                <div className={css.card}>
                    <span>Money Saved</span><span>₹ 37,00,00</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average Serve</span><span> {groupNumber(115)}</span>
                </div>
            </div>


            <StatisticsChart />
        </div>
    )
}

export default Statistics