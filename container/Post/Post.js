import HeaderPost from "../../components/HeaderPost/HeaderPost";
import VideoPost from "../../components/VideoPost/VideoPost";
import Interactions from "../../components/Interactions/Interactions";
import styles from "./Post.module.css"

const Post = ({children}) => {
    return ( 
        <div className={styles.Post}>
            <HeaderPost />
            <VideoPost />
            <Interactions/>
        </div>
     );
}
 
export default Post;