import { Box1 } from "../../../components/Dashboard/Box/Box1";
import { Box2 } from "../../../components/Dashboard/Box/Box2";
import { Box3 } from "../../../components/Dashboard/Box/Box3";
import { SubDash } from "../../../components/Dashboard/SubDash/SubDash";
import GetData from "../../../data/GetData";


export default function Diversity(){
    const DiversityData=GetData("Diversity");
    const DeptTypeData=GetData("Dept_Diversity");
    const dashtype="Diversity";
    return(
        <>
        <SubDash dashheading={"Diversity"}>
            <div className="gridbg">
                <Box1 data={DiversityData} boxheading={"Box21"} dashtype={dashtype} boxnumber={1}/>
                <Box2 data={DeptTypeData} boxheading={"Box22"} dashtype={dashtype} boxnumber={2}/>
                <Box3 data={DiversityData} boxheading={"Box23"} dashtype={dashtype} boxnumber={3}/>
            </div>
        </SubDash>
        </>
    )
}