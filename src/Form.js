import { useState } from 'react';
import "./Form.css"
import Head from "./Head"
import Test from './Test';

export default function(){

const [isVesible,setIsVesible]=useState(false)
const [content,setContent]=useState("")


 


  function handleDivClick(){
    if (isVesible == true)
   { console.log("div is clicked")
    setIsVesible(false)}
  }
  

    function handleButtonClick(event){
      event.preventDefault();
        if (10>form.phone.length || form.phone.length > 12){
        
          
          setContent("phone number is uncorrect")
          setIsVesible(true)
          
        
         
       }


       else if(18>form.age || form.age>100){
        setContent("age is unallowed")
        
        setIsVesible(true)
        

}

else{
  setContent("the form is submitted successfully")
   setIsVesible(true)
 

}

}

const [form,setForm]=useState({name:"",
phone:"",
age:"",
emp: false ,
salary: ""})



const btnIsDisabled =form.name =="" || form.phone=="" || form.age=="";


return(

    <div

    onClick={handleDivClick}
    
    className="flex" style={{flexDirection :"column" }} >

    <form  id="loan-form" style={{display :"flex" ,flexDirection :"column" }}>
    <Head/>
    <hr />
    

Name <input value={form.name} onChange={(event)=>{

setForm({...form , name : event.target.value})
}}/>
phone <input value={form.phone} onChange={(event)=>{

setForm({...form , phone : event.target.value})
}}/>


age <input value={form.age} onChange={(event)=>{

setForm({...form , age : event.target.value})
}}/>





are you an employee? <input type="checkbox" checked={form.emp} onChange={(event)=>{

setForm({...form , emp : event.target.checked})
}}/>


slary
<select 
value={form.salary}
 onChange={(event)=>{

  setForm({...form , salary : event.target.value})
  }}
>
  <option>less than 500 $</option>


  <option>between 500 and 2000</option>
  <option> more than 2000</option>
</select>




<button 
className={btnIsDisabled ? "disabled" : ""}
id="submit-button" onClick={handleButtonClick} disabled={btnIsDisabled}  >submit</button>
    </form>

    <Test vesible={isVesible} content={content}/> 

</div>

)



}