import React from 'react'

function TickerCarousel() {
    return (
        <>
            <div className="CarouselWrapper">
                <div className="Carousel">
                    <div className="CarouselInfo1">
                        ↑CPI: 2.3%
                    </div>
                </div>
                <div className="Carousel">
                    <div className="CarouselInfo2">
                        Rates: +0.3%
                    </div>
                </div>
                <div className="Carousel">
                    <div className="CarouselInfo3">
                        Banking info
                    </div>
                </div>
                <div className="Carousel">
                    <div className="CarouselInfo4">
                        HPI increases
                    </div>
                </div>
            </div>
        </>
    )
}

export default TickerCarousel