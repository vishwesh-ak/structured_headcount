import { SubDash } from "../../../components/Dashboard/SubDash/SubDash";
import { Box1 } from "../../../components/Dashboard/Box/Box1";
import '@carbon/charts-react/styles.css'
import { Box2 } from "../../../components/Dashboard/Box/Box2";
import { Box3 } from "../../../components/Dashboard/Box/Box3";
import "../styles.css"
import GetData from "../../../data/GetData";

export default function EmpType(){
    const EmpTypeData=GetData("EmpType");
    const DeptTypeData=GetData("Dept_EmpType");
    const dashtype="EmpType";
    return(
        <>
        <SubDash dashheading={"Employee Type"}>
            <div className="gridbg">
                <Box1 data={EmpTypeData} boxheading={"Box11"} dashtype={dashtype} boxnumber={1}/>
                <Box2 data={DeptTypeData} boxheading={"Box12"} dashtype={dashtype} boxnumber={2}/>
                <Box3 data={EmpTypeData} boxheading={"Box13"} dashtype={dashtype} boxnumber={3}/>
            </div>
        </SubDash>
        </>
    )
}