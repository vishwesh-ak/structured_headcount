
/*These are the variables for storing data obtained from database!! */
import DatabaseAPI from "./FetchData";

//this is where i send the data to the files that request them

export default function GetData(choice){
    console.log("inside getdata "+choice)
    if(choice!=="DOL OnlyAbsentees"){
        return DatabaseAPI(choice).rows;
    }
    const k=DatabaseAPI("DOL").rows
    var m=[]
    for(var i=0;i<k.length;i++){
        if(k[i].key[0]!==null && k[i].key[1]!==null)
            m.push(k[i])
    }
    return m;
}