import BarChart from '../DummyChart/Bar';
import News from '../News/News';
import ShowChart from '../DummyChart/Chart';
import { useState } from 'react'
import Slider from '../Toggle/Toggle';

function Tiles() {
    const [isActive, setIsActive] = useState(false)
    const [dateValue, setDateValue] = useState(5)
    const [newsCategory1, setNewsCategory1] = useState('')
    const [sliderActive1, setSliderActive1] = useState(true)
    const [sliderActive2, setSliderActive2] = useState(true)
    const [sliderActive3, setSliderActive3] = useState(true)

    const handleNewsCategory1 = (e) => {
        const { value } = e.target
        setNewsCategory1(value.toLowerCase())
    }

    const handleSlider1 = () => {
        setSliderActive1(!sliderActive1)
        setSliderActive2(true)
        setSliderActive3(true)
    }

    const handleSlider2 = () => {
        setSliderActive2(!sliderActive2)
        setSliderActive1(true)
        setSliderActive3(true)
    }

    const handleSlider3 = () => {
        setSliderActive3(!sliderActive3)
        setSliderActive1(true)
        setSliderActive2(true)
    }

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
                    <div className='TwoByTwo'>
                        <div className={sliderActive1 ? 'DataDiv2 Deactive' : 'DataDiv2'}>
                            <div className='Slider' onClick={handleSlider1}>
                                <div className="SliderTitle">Category</div>
                                <Slider sliderActive1={sliderActive1} sliderActive2={sliderActive2} sliderActive3={sliderActive3} />
                            </div>
                        </div>
                        <div className={sliderActive1 ? 'LeftTwo Deactive' : 'LeftTwo'}>
                            <div className={sliderActive1 ? 'DataDiv DeactiveCold' : 'DataDiv'}>
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                            <div className={sliderActive1 ? 'DataDiv DeactiveCold' : 'DataDiv'}>
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                        </div>
                        <div className={sliderActive1 ? 'RightTwo Deactive' : 'RightTwo'} s>
                            <div className={sliderActive1 ? 'DataDiv DeactiveCold' : 'DataDiv'}>
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                            <div className={sliderActive1 ? 'DataDiv DeactiveCold' : 'DataDiv'}>
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                        </div>
                        <div className={sliderActive2 ? 'DataDiv2 Deactive' : 'DataDiv2'}>
                            <div className='Slider' onClick={handleSlider2}>
                                <div className="SliderTitle">Category</div>
                                <Slider />
                            </div>
                        </div>
                        <div className={sliderActive2 ? 'OnebyTwo Deactive' : 'OnebyTwo'}>
                            <div className={sliderActive2 ? 'DataDiv DeactiveCold' : 'DataDiv'}>
                                <div className="EconData">
                                    Econ Data
                                </div>
                            </div>
                            <div className={sliderActive2 ? 'DataDiv DeactiveCold' : 'DataDiv'}>
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
                        <div className={sliderActive3 ? 'DataDiv2 Deactive' : 'DataDiv2'}>
                            <div className="Slider" onClick={handleSlider3}>
                                <div className="SliderTitle">Category</div>
                                <Slider />
                            </div>
                        </div>
                        <div className={sliderActive3 ? 'TopOfTwoByThree Deactive' : 'TopOfTwoByThree'}>
                            <div className={sliderActive3 ? 'DataDiv DeactiveCold' : 'DataDiv'}>
                                <div className="Chart">
                                    Demographics
                                </div>
                            </div>
                        </div>

                        <div className={sliderActive3 ? 'DataDiv Deactive' : 'DataDiv'}>
                            <div className="Rates">
                                <div className="InfoWrapper">
                                    <p>Rates</p>
                                    <h1>7.1%</h1>
                                    <p className='PopUpInfo'>A mortgage rate is the rate of interest charged on a mortgage. Determined by the lender, mortgage rates vary for borrowers based on their credit profile.</p>
                                </div>
                            </div>
                        </div>
                        <div className={sliderActive3 ? 'DataDiv Deactive' : 'DataDiv'}>?</div>
                        <div className={sliderActive3 ? 'DataDiv Deactive' : 'DataDiv'}>
                            <div className="CPI">
                                <div className="InfoWrapper">
                                    <p>CPI</p>
                                    <h1>6.3%</h1>
                                    <p className='PopUpInfo'>The Consumer Price Index (CPI) is a measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services.</p>
                                </div>
                            </div>
                        </div>
                        <div className={sliderActive3 ? 'DataDiv Deactive' : 'DataDiv'}>?</div>
                    </div>
                </div>
                <div className="NewsHeading">
                    <div className="NewsTitle">
                        Category:
                        <select name="" id="" onChange={handleNewsCategory1}>
                            <option value="technology">Technology</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                    </div>
                    <div className="NewsTitle">
                        Category:
                        <select name="" id="">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                    </div>
                    <div className="NewsTitle">
                        Category:
                        <select name="" id="">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                    </div>
                </div>
                <div className="DataContainerNews">
                    <News />
                </div>
            </div>
        </>
    )
}

export default Tiles