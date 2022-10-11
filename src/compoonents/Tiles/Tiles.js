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

        if (value === '1d') {
            setDateValue(1)
        } else if (value === '5d') {
            setDateValue(5)
        } else if (value === '1M') {
            setDateValue(30)
        } else if (value === '3M') {
            setDateValue(90)
        } else if (value === '6M') {
            setDateValue(180)
        } else if (value === '1yr') {
            setDateValue(365)
        } else if (value === '2yr') {
            setDateValue(730)
        } else if (value === '5yr') {
            setDateValue(1825)
        } else if (value === 'Max') {
            setDateValue(2525)
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
                    <div className="TwoByTwo">
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
                            <Button value={'1d'} />
                            <Button value={'5d'} />
                            <Button value={'1M'} />
                            <Button value={'3M'} />
                            <Button value={'6M'} />
                            <Button value={'1yr'} />
                            <Button value={'2yr'} />
                            <Button value={'5yr'} />
                            <Button value={'Max'} />
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