import HeaderPost from "../components/HeaderPost";
import VideoPost from "../components/VideoPost";
import Interactions from "../components/Interactions";

const Post = () => {
    return ( 
        <div className="Post">
            <HeaderPost />
            <VideoPost />
            <Interactions/>
        </div>
     );
}
 
export default Post;