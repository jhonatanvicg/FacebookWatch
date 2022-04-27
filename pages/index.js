import Post from "../container/Post";
import axios from "../hooks/useAxios"
import request from "../hooks/useRequest";
import { createClient } from 'pexels';
const query = ['Nature','Dogs','Cats','Animals','People','Sea','Funny'];
import { useEffect,useState } from "react";

const HomePage = ()=>{
    
    const API_KEY =process.env.NEXT_PUBLIC_API_KEY;
    const client = createClient(API_KEY);
    const [posts,setPosts] = useState('')
    const [urlVideos, setUrlVideos] = useState('')
    useEffect(()=>{
         async function getData(){
            const answer = await axios.get(request.fetchPosts)
            setPosts(answer.data.data)
            
            let genre = query[Math.floor(Math.random() * 8 )]
            console.log("este es ek gn}enero:",genre)
            client.videos.search({query:genre}).then(response => {
                let tempArrVideos = [];
                console.log(response)
                response.videos.forEach((el)=>{
                    let randomVideoValue = Math.floor(Math.random()* 16)
                    if( response.videos[randomVideoValue] != undefined){
                        console.log(response.videos[Math.floor(Math.random()* 16)])
                        tempArrVideos.push(response.videos[randomVideoValue].video_files[0].link)
                    }
                })
                setUrlVideos(tempArrVideos)
            });
        }
        getData()



    },[])

    return <>
        {
            posts == '' || urlVideos == '' ? null || urlVideos== undefined :
            posts.map((page,index)=>(
                <Post
                    key={index}
                    videoLink={urlVideos[index]}
                    pageName={page.pageName} 
                    comments={page.comments} 
                    date={page.date} 
                    description={page.description} 
                    share={page.share} 
                    likes={page.likes}  
                />
            ))
        }
    </>
}

export default HomePage;