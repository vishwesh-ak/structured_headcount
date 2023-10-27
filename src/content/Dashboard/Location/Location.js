import { SubDash } from "../../../components/Dashboard/SubDash/SubDash"
import { Box1 } from "../../../components/Dashboard/Box/Box1";
import { Box2 } from "../../../components/Dashboard/Box/Box2";
import { Box3 } from "../../../components/Dashboard/Box/Box3";
import GetData from "../../../data/GetData";

export default function Location(){
    const LocationData=GetData("Location");
    const DeptTypeData=GetData("Dept_Location");
    const dashtype="Location";
    return(
        <>
            <SubDash dashheading={"Location"}>
                <div className="gridbg">
                    <Box1 data={LocationData} boxheading={"Box31"} dashtype={dashtype} boxnumber={1}/>
                    <Box2 data={DeptTypeData} boxheading={"Box32"} dashtype={dashtype} boxnumber={2}/>
                    <Box3 data={LocationData} boxheading={"Box33"} dashtype={dashtype} boxnumber={3}/>
                </div>
            </SubDash>
        </>
    )
}