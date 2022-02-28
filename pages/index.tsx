import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import HomePageContainer from 'containers/HomeContainer/HomeContainer';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<DefaultLayout>
			<HomePageContainer />
		</DefaultLayout>
	);
};

export default HomePage;
