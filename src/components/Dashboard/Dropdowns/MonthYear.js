import MonthDropdown from "./Month"
import YearDropdown from "./Year"

export const MonthYearDropdown=({setMonth,setYear})=>{
    return(
        <div className="datemonthflex">
            <MonthDropdown setMonth={setMonth}/>
            <YearDropdown setYear={setYear}/>
        </div>
    )
}