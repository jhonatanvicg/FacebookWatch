import Post from "../container/Post";
import axios from "../hooks/useAxios"
import request from "../hooks/useRequest";
import { createClient } from 'pexels';
const query = ['Nature','Dogs','Cats','Animals','People','Sea','Funny'];
import { useEffect,useState, useRef, ReactDOM } from "react";

const HomePage = ()=>{
    
    const API_KEY =process.env.NEXT_PUBLIC_API_KEY;
    const client = createClient(API_KEY);
    const [posts,setPosts] = useState('')
    const [urlVideos, setUrlVideos] = useState('')
    const targetObserver = useRef();
    const containerPosts = useRef();
    const [numberPage, setNumberPage] = useState(1)
    const intersectionOptions = {
        threshold:1
    }


    const onIntersect = ([entry])=>{
        
        if(entry.isIntersecting){
            getData()

        }
    }


    async function getData(){
        const answer = await axios.get(request.fetchPosts)
        setPosts(answer.data.data)
        
        let genre = query[Math.floor(Math.random() * 8 )]
        client.videos.search({query:genre,page:numberPage}).then(response => {
            let tempArrVideos = [];
            response.videos.forEach((el)=>{
                let randomVideoValue = Math.floor(Math.random()* 16)
                if( response.videos[randomVideoValue] != undefined){
                    tempArrVideos.push(response.videos[randomVideoValue].video_files[0].link)
                }
            })
            setUrlVideos(tempArrVideos)
            //cleanUp(response.next_page)
            //renderItems()

        });

    }
   
    
    const cleanUp = (nextPage)=>{
        if(nextPage!=null){
            setNumberPage(numberPage + 1)
        }
    }
    
    const renderItems = ()=>{
        try {
            posts.forEach((item,index)=>{
                containerPosts.current.appendChild(createItem(item,index))
            })
        } catch (error) {
            console.log(error)
        }

        
    }

    const createItem = (item,index) =>{
        return  (
                <Post
                    key={index}
                    videoLink={urlVideos[index]}
                    pageName={item.pageName} 
                    comments={item.comments} 
                    date={item.date} 
                    description={item.description} 
                    share={item.share} 
                    likes={item.likes}  
                />
        )
    }
    
    useEffect(()=>{
        if(window !=undefined){
            let observer = new IntersectionObserver(onIntersect, intersectionOptions)
            observer.observe(targetObserver.current)

        }
        getData()

    },[])

    return <>
        {
            posts == '' || urlVideos == '' || urlVideos== undefined ? null  :
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

            //<div ref={containerPosts} className="containerPosts">

          //  </div>
        }
        <div ref={targetObserver} className="targetObserver"></div>
        
    </>
}

export default HomePage;