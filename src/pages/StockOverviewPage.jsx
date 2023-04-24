import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
import trading from "../images/photo-1444653614773-995cb1ef9efa.avif"


export const StockOverviewPage = () => {
    return <div>
        <div className="text-center">
            <img style={{ width: 600, height: 300}} src={trading} alt="logo"/>
        </div>
        <AutoComplete/>
        <StockList/>
    </div>
}