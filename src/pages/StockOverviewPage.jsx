import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
import trading from "../images/Logo.png"


export const StockOverviewPage = () => {
    return <div>
        <div className="text-center">
            <img  src={trading} alt="logo"/>
        </div>
        <AutoComplete/>
        <StockList/>
    </div>
}