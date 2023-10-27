import Diversity from "./Diversity/Diversity";
import EmpType from "./EmpType/EmpType";
import Location from "./Location/Location";
import OnboardingSeparation from "./OnboardingSeparation/OnboardingSeparation";



export default function Dashboard(){
    return(
        <>
            <EmpType/>
            <Diversity/>
            <Location/>
            <OnboardingSeparation/>
        </>
    )
}