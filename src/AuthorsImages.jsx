import { useEffect, useState } from "react"
import key from "../keys"

function AuthorsImages(){

    const[images, setImages] = useState(null)
    const[imgAuthor, setImgAuthor] = useState("ana_tavares")

    const loadData = async () =>{
        const response = await fetch(`https://api.unsplash.com/users/${imgAuthor}/photos?per_page=100&client_id=${key}`)
        const data = await response.json()
        console.log(data);
        setImages(data)
    }

    useEffect(()=>{
        loadData()
    },[])

    return(
        <div>
        Images: {images && images.map((result, index)=> {
         return (
        <div key={index}>
            <img src={result.urls.small} alt="img" />  
        </div>
            )
        })}
        </div>
    )
}

export default AuthorsImages;