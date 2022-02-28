import { NextPage } from 'next';
import { useRouter } from 'next/router';
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import CollectionContainer from 'containers/CollectionContainer/CollectionContainer';

const CollectionWithCategory: NextPage = () => {
	const router = useRouter();
	const { category_ids } = router.query;

	return (
		<DefaultLayout>
			<CollectionContainer />
		</DefaultLayout>
	);
};
export default CollectionWithCategory;
