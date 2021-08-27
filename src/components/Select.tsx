import { useHistory } from "react-router"
import { useState } from "react"

const Select =()=>{

    const [date1,setDate1] = useState("")
    const [date2,setDate2] = useState("")
    let history = useHistory();
    function inputupdater1(e:string){
        setDate1(e)
    }
    function inputupdater2(e:string){
        setDate2(e)
    }
    function handleClick() {
        if(date1 === ""|| date2 === "") alert("Please Select start date and end date correctly")
        else{
        let d1 = new Date (date1)
        let d2 = new Date (date2)
        let d3 = new Date (Date.now())
        if(d1.getTime()>d2.getTime()||d2.getTime()>d3.getTime()) alert("Please Select start date and end date correctly")
        else {
            let push = "/history/result?start="+date1+"&end="+date2;
            history.push(push);
      }
    }
    }
    return(
        <div className='text-center space-y-3 space-x-3'>
        <p className='text-2xl font-semibold'>Select historical range</p>
        <span>From date</span>
        <input type='date' onChange={e => inputupdater1(e.target.value)}></input>
        <span>To date</span>
        <input type='date' onChange={e => inputupdater2(e.target.value)}></input>
        <br />
        <button type ="button" onClick={handleClick}>Get data</button>
      </div>
    )
}
export default Select