import { Container } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Showcase from 'components/Showcase/Showcase';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getWatches } from 'store/module/watch/actions';
import { WatchState } from 'store/module/watch/reducers';
import { RootState } from 'types/Redux';

const HomePageContainer: React.FC = () => {
	const dispatch = useAppDispatch();

	const { watchList } = useSelector<RootState, WatchState>(
		(state) => state.watches
	);

	const fetchWatches = useCallback(async () => {
		try {
			await dispatch(getWatches(0)).unwrap();
		} catch (error) {
			console.log(error);
		}
	}, [dispatch]);

	useEffect(() => {
		fetchWatches();
	}, [fetchWatches]);

	return (
		<Container sx={{ marginTop: 10 }}>
			<Showcase title="ALL WATCH" productList={watchList} />
		</Container>
	);
};

export default HomePageContainer;
