import { useLocation } from "react-router-dom";
import axios from "axios"; 
import { useState, useEffect } from "react";



function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const Result = () =>{
    let query = useQuery();
    let string1 = query.get("start")
    let string2 = query.get("end")
    const [data,setData] = useState<string[]>()
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    // https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=2021-08-01&end=2021-08-07
    useEffect(()=>{
        axios.get("https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start="+string1+"&end="+string2)
        .then(resp =>{ 
            let sarr = []
       
            for (const [key, value] of Object.entries(resp.data.bpi)) {
                sarr.push(`${key} - ${Number(value).toLocaleString()} THB`)
            }
            setData(sarr)
            setLoading(false)
      
        })
        .catch(err => setErr(true))
    },[])
    
    const render =()=>{
        if(loading) return (
            <div className='text-center space-y-3'>
                <p className='text-2xl'>Loading ...</p>
            </div>)
        else if(err) return(
            <div className='text-center space-y-3'>
         <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
         </div>)
        else return(
            <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Historical price</p>
            <p className='text-xl font-semibold'> ( From {string1} To {string2})</p>
            <ul>
           
                {data?.map(x => <li className='text-xl'>{x} THB</li> )}
            
            </ul>
          </div>
    
        )
    }
    return(
        <div>
            {render()}
        </div>
    )
}
export default Result