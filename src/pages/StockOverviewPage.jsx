import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
import trading from "../images/Screenshot from 2023-04-26 11-13-34.png"


export const StockOverviewPage = () => {
    return <div>
        <div className="text-center">
            <img  src={trading} alt="logo"/>
        </div>
        <AutoComplete/>
        <StockList/>
    </div>
}