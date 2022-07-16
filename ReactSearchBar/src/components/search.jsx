import axios from "axios"
import { useEffect, useState } from "react"

export const Search = () => {

    const [country , setCountry] = useState([])
    const [text,setText] = useState("")

    const handleChnage = () => {
        console.log(text)
    }

    
    useEffect(()=>{

        axios({
            url : "http://localhost:8000/cities",
            method : "GET"
        })
        .then( (res) => {
            // console.log(res.data[0])
            setCountry(res.data[0])
        })
        .catch( (e) => {
            console.log(e)
        })

    },[])

    

  
    
    return (
        <div>
            <input type={'text'} placeholder='enter city name' onChange={(e) => setText(e.target.value.toLowerCase())}></input>
            <button onClick={() => handleChnage()}>Search</button>
            {country.filter( (val) => {
                if(text == "")
                {
                    return val
                }
                else if(val.country.toLowerCase().includes(text.toLowerCase()))
                {
                    return val
                }
            }).map( (item,key) => (
                <div key={key}><p>{item.country}</p></div>
             ))}  
        </div>
    )
}