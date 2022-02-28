import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Showcase from 'components/Showcase/Showcase';
import { useAppDispatch } from 'hooks/useAppDispatch';

import { getWatchesByCategory } from 'store/module/watch/actions';
import { WatchState } from 'store/module/watch/reducers';
import { RootState } from 'types/Redux';

export type CollectionParamType = {
	category_ids: string;
};

const CollectionContainer: FC = () => {
	const dispatch = useAppDispatch();

	const router = useRouter();

	const category_ids = router.query.category_ids as string;

	const { watchList } = useSelector<RootState, WatchState>(
		(state) => state.watches
	);

	const fetchWatchesByCategory = useCallback(async () => {
		try {
			await dispatch(getWatchesByCategory(category_ids)).unwrap();
		} catch (error) {
			console.log(error);
		}
	}, [dispatch, category_ids]);

	useEffect(() => {
		fetchWatchesByCategory();
	}, [fetchWatchesByCategory]);

	return (
		<Container sx={{ marginTop: 10 }}>
			<Showcase title={category_ids.toUpperCase()} productList={watchList} />
		</Container>
	);
};

export default CollectionContainer;
