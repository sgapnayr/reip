import BarChart from '../DummyChart/Bar';
import News from '../News/News';
import ShowChart from '../DummyChart/Chart';
import { useState } from 'react'
import EconomicData from '../EconomicData/EconomicData';

function Tiles() {
    const [isActive, setIsActive] = useState(false)
    const [dateValue, setDateValue] = useState(5)

    const handleActive = (e) => {
        const value = e.target.value

        if (value === '24h') {
            setDateValue(5)
        } else if (value === '7d') {
            setDateValue(7)
        } else if (value === '30d') {
            setDateValue(30)
        } else if (value === '1yr') {
            setDateValue(365)
        }
    }

    const Button = ({ value }) => {
        return (
            <>
                <button className={isActive ? 'Hover DateButton' : 'DateButton'} onClick={handleActive} value={value}>{value}</button>
            </>
        )
    }

    return (
        <>
            <div className="DataContainers">
                <div className="DataContainer FirstRow">
                    <div className="FourByFour">
                        <div className="LeftTwo">
                            <div className="DataDiv">
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                            <div className="DataDiv">
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                        </div>
                        <div className="RightTwo">
                            <div className="DataDiv">
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                            <div className="DataDiv">
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DataDiv2 LongRow">
                        <p>Market Trend</p>
                        <div className="Chart">
                            <ShowChart value={dateValue} />
                        </div>
                        <div className="DateDiv">
                            <Button value={'24h'} />
                            <Button value={'7d'} />
                            <Button value={'30d'} />
                            <Button value={'1yr'} />
                        </div>
                    </div>
                    <div className="TwoByThree">
                        <div className="TopOfTwoByThree">
                            <div className="DataDiv">
                                <div className="Chart">
                                    <BarChart />
                                </div>
                            </div>
                        </div>

                        <div className="DataDiv">
                            <div className="Rates">
                                <div className="InfoWrapper">
                                    <p>Rates</p>
                                    <h1>7.1%</h1>
                                    <p className='PopUpInfo'>A mortgage rate is the rate of interest charged on a mortgage. Determined by the lender, mortgage rates vary for borrowers based on their credit profile.</p>
                                </div>
                            </div>
                        </div>
                        <div className="DataDiv">?</div>
                        <div className="DataDiv">
                            <div className="CPI">
                                <div className="InfoWrapper">
                                    <p>CPI</p>
                                    <h1>6.3%</h1>
                                </div>
                            </div>
                            <div className="PopUpDiv">
                                <p className='PopUpInfo'>The Consumer Price Index (CPI) is a measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services.</p>
                            </div>
                        </div>
                        <div className="DataDiv">?</div>
                    </div>
                </div>

                <div className="DataContainer SecondRow">
                    <div className="DataDiv">
                        #
                    </div>
                    <div className="DataDiv">
                        #
                    </div>
                    <div className="DataDiv">
                        #
                    </div>
                </div>
                <div className="DataContainer">
                    <News />
                </div>
            </div>
        </>
    )
}

export default Tiles