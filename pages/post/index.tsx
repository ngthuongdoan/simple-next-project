import PostContainer from "../../containers/PostContainer/PostContainer";
import PostWatchLayout from "../../layouts/PostLayout/PostLayout";

const Post: React.FC = () => {
  return (
    <PostWatchLayout>
      <PostContainer />
    </PostWatchLayout>
  );
};

export default Post;
