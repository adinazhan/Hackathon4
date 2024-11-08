import { useEffect, useState } from "react";
import key from "../keys";
import AuthorsImages from "./AuthorsImages";

function AuthorsInfo(){
    
const[author, setAuthor] = useState(null)
const[authorName, setAuthorName] = useState("ana_tavares")

const loadData = async () =>{
    const response = await fetch(`https://api.unsplash.com/users/${authorName}?client_id=${key}`)
    const data = await response.json()
    console.log(data);
    setAuthor(data)
}

useEffect(()=>{
loadData()
},[])


    
    return(
        <div>
            <h1>
            Username: {author && author.username}
            </h1>
            <h4>{author && author.bio}</h4>
            <div>
                Name: {author && author.name} <br />
                Total likes: {author && author.total_likes} <br />
                Followers count: {author && author.followers_count}
            </div>
            <div>
                <AuthorsImages />
            </div>
        </div>
    )
}

export default AuthorsInfo;
