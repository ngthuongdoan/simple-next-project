import { NextPage } from 'next';
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import PostContainer from 'containers/PostContainer/PostContainer';

const PostPage: NextPage = () => {
	return (
		<DefaultLayout>
			<PostContainer />
		</DefaultLayout>
	);
};

export default PostPage;
