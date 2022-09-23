import { useState, useEffect } from 'react'
import axios from 'axios'

function News() {
    const [news, setNews] = useState([])

    const newUrl = 'https://newsdata.io/api/1/news?apikey=pub_1122295a0600dd09ce2e7948214b07ef822fb&q=Real%20Estate '

    async function GetNews() {
        await axios.get(newUrl).then(res => setNews(res.data.results))
    }

    useEffect(() => {
        GetNews()
    }, [])

    return (
        <>
            <div className="NewsDiv">
                <div className="News">
                    {news.map(n => {
                        return (
                            <>
                                <h2>{n.title}</h2>
                                <p className='NewsInfo'>
                                    {n.content}
                                </p>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default News