import { useState, useEffect } from 'react'
import axios from 'axios'

function News() {
    const [news1, setNews1] = useState([])
    const [news2, setNews2] = useState([])

    const newUrl = 'https://newsdata.io/api/1/news?apikey=pub_1122295a0600dd09ce2e7948214b07ef822fb&q=Real%20Estate '

    async function GetNews1() {
        await axios.get(newUrl).then(res => setNews1(res.data.results))
    }

    useEffect(() => {
        GetNews1()
    }, [])

    return (
        <>
            <div className="News">
                <div className="NewsCol1">
                    {news1.map(n => {
                        return (
                            <>
                                <div className="NewsCard">
                                    <img src={n?.image_url} className={n?.image_url ? 'NewsImage' : 'none'} alt="" />
                                    <h2>{n?.title}</h2>
                                    <p>{n?.content?.slice(0, 200) + ' [...]'}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="NewsCol2">
                    {news1.map(n => {
                        return (
                            <>
                                <div className="NewsCard">
                                    <p>{n.title}</p>

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default News