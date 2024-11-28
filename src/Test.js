
import "./Form.css"
export default function({vesible,content }){
    if (vesible )
    {
        if(content=="the form is submitted successfully")
            {return(
                <div id="modal">
                            <div id="modal-content">
        
                 <h1 >
                     {content}</h1>
                
                </div>
                </div>
        
            )}

            else{
                return(
                    <div id="modal">
                            <div id="modal-content" className="red">
        
                 <h1 >
                     {content}</h1>
                
                </div>
                </div>
                )
            }
    }

 
}