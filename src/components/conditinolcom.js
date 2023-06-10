import Counter from "./Counter"
import { useState } from "react"

export default  function Conditinolcom(){

    const [display]=useState(true);
    
    if(display){
        
        return(
        <div>  
             <Counter/>
              
        </div>
    
    );
    }else{
        return(
        <div>
        <h3>nothing to seee</h3>
        </div>
        );
        
    }
    

}
