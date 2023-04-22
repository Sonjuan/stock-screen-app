import {useState, useEffect} from "react"
import finnHub from "../apis/finnHub"

export const StockList = () => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await finnHub.get(`/quote?symbol=MSFT&token=${process.env.REACT_APP_FINNHUB_API_KEY}`)
                console.log(response)
            }catch (err) {

            }
        }
        fetchData()
    }, [])

    return <div>StockList</div>
}