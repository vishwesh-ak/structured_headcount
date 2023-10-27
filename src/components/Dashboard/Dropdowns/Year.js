import { Dropdown } from "@carbon/react"
import { useEffect } from "react";

const YearDropdown=({setYear})=>{
    const currentyear=new Date().getFullYear();
    
    useEffect(() => {
        {setYear(currentyear)}
      }, []);

    return(
        <Dropdown 
            id="yeardropdown" 
            label="Year"  
            items={[
                {id:2020,label:"2020"},{id:2021,label:"2021"},
                {id:2022,label:"2022"},{id:2023,label:"2023"},
            ]}
            initialSelectedItem={{id:currentyear,label:currentyear.toString()}}
            onChange={(event)=>{setYear(event.selectedItem.id)}}
        />
    )
}
export default YearDropdown;