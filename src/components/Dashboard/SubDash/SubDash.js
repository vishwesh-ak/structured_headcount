import "./styles.css";

export const SubDash=({children,dashheading})=>{
    return(
        <div style={{border:"4px solid black",borderRadius:"10px",padding:"15px",margin:"15px"}}>
            <div className="subdashheader">{dashheading}</div>
            {children}
        </div>
    )
}