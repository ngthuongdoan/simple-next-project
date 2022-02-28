import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import Showcase from "../../components/showcase/Showcase";
import { useAppDispatch } from "../../hooks/useRedux";
import { getWatches } from "../../store/features/watch/actions";
import { WatchState } from "../../store/features/watch/reducers";
import { RootState } from "../../types/redux";

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
    <>
      <Showcase title="ALL WATCH" productList={watchList} />
    </>
  );
};

export default HomePageContainer;
