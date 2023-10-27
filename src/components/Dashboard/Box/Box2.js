import { GroupedBarChart} from "@carbon/charts-react"
import { Box, BoxArea, BoxHeader } from "./Box"
import { useState } from "react"
import { MonthYearDropdown } from "../Dropdowns/MonthYear"
import BarOptions from "../ChartOptions/BarOptions"
import GenerateGroupedBarChart from "../Functions/GenerateGroupedBarChart"


export const Box2=({data,boxheading,dashtype,className,boxnumber})=>{
    const [month2,setMonth2]=useState(new Date().getMonth()+1);
    const [year2,setYear2]=useState(new Date().getFullYear());
    return(
        <Box className={"box box2 "+className} link={`/dashnew?a=${dashtype}&b=${boxnumber}&c=&d=`}>
            <BoxHeader>{boxheading}</BoxHeader>
            <BoxArea>
                <MonthYearDropdown setMonth={setMonth2} setYear={setYear2}/>
                <GroupedBarChart data={GenerateGroupedBarChart(data,month2,year2)} options={BarOptions}/>
            </BoxArea>
        </Box>
    )
}