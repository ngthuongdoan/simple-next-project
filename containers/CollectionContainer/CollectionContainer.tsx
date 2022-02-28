import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import Showcase from "../../components/showcase/Showcase";
import { useAppDispatch } from "../../hooks/useRedux";

import { getWatchesByCategory } from "../../store/features/watch/actions";
import { WatchState } from "../../store/features/watch/reducers";
import { RootState } from "../../types/redux";

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

  async function fetchWatchesByCategory() {
    try {
      await dispatch(getWatchesByCategory({ category_ids }));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWatchesByCategory();
  }, [category_ids]);

  return (
    <Showcase title={category_ids.toUpperCase()} productList={watchList} />
  );
};

export default CollectionContainer;
