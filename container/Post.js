import HeaderPost from "../components/HeaderPost";
import VideoPost from "../components/VideoPost";
import Interactions from "../components/Interactions";
import styles from '../styles/container/Post.module.css';

const Post = ({videoLink,pageName, comments,date, description,share,likes}) => {
    return ( 
        <div className={styles.post}>
            <HeaderPost pageName={pageName} description={description} date={date} />
            <VideoPost videoLink={videoLink} />
            <Interactions comments={comments} share={share} likes={likes}/>
        </div>
     );
}
 
export default Post;