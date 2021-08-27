import axios from "axios"; 
import { useEffect, useState} from "react";

const Current =()=>{
    const [upd,setUpd] = useState<string>("")
    const [price,setPrice] = useState<Float32Array>()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://api.coindesk.com/v1/bpi/currentprice/thb.json')
        .then(resp =>{
            setUpd(resp.data.time.updated)
            setPrice(resp.data.bpi.THB.rate_float)
            setLoading(false)
        })
        .catch(err => console.log(err))
    })
    const render = () =>{
        if (loading) return (
            <div className='text-center space-y-3'>
                <p className='text-2xl'>Loading ...</p>
            </div>)
        else return (
            <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
           
            <p className='text-2xl'>{price?.toLocaleString()} THB</p>
            <p> (Last updated {upd}) </p>
          </div>
        )
    }
    return (
        <div>
            {render()}
        </div>
    )
}
export default Current