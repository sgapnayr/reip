import BarChart from '../DummyChart/Bar';
import News from '../News/News';
import ShowChart from '../DummyChart/Chart';
import { useState } from 'react'
import EconomicData from '../EconomicData/EconomicData';

function Tiles() {
    const [visibility, setVisibility] = useState(false)

    const handleClick = () => {
        setVisibility(!visibility)
    }

    return (
        <>
            <div className="DataContainers">
                <div className="DataContainer FirstRow">
                    <div className="DataDiv LongRow">
                        <p>Market Trend</p>
                        <div className="Chart">
                            <ShowChart />
                        </div>
                        <div className="InfoTile">
                            This is chart information.
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
                </div>

                <div className="Button">
                    <button onClick={handleClick}>{visibility ? 'Show Less' : 'Show More'}</button>
                </div>
                <div className={visibility ? 'DataContainer SecondRow' : 'None'}>
                    <div className='DataDiv'>
                        More Information...
                    </div>
                </div>

                <div className="DataContainer ThirdRow">
                    <div className="DataDiv">
                        <div className="CPI">
                            <div className="InfoWrapper">
                                <p>CPI</p>
                                <h1>6.3%</h1>
                                <p className='PopUpInfo'>The Consumer Price Index (CPI) is a measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="DataDiv LongRow2">
                        <p>Population</p>
                        <div className="Chart">
                            <BarChart />
                        </div>
                        <div className="InfoTile">
                            This is chart information.
                        </div>
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