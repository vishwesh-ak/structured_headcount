import { Box4 } from "../../../components/Dashboard/Box/Box4";
import { SubDash } from "../../../components/Dashboard/SubDash/SubDash";
import GetData from "../../../data/GetData";

export default function OnboardingSeparation(){
    const DOJData=GetData("DOJ")
    const DOLData=GetData("DOL OnlyAbsentees")
    const dashtype="OnboardingSeparation";
    return(
        <>
            <SubDash dashheading={"Onboarding / Separation"}>
                <div className="gridbg">
                    <Box4 data={DOJData} boxheading={"Onboarding"} dashtype={dashtype} boxnumber={1}/>
                    <Box4 data={DOLData} boxheading={"Separation"} dashtype={dashtype} boxnumber={2}/>
                </div>
            </SubDash>
        </>
    )
}