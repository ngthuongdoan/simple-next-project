import { useRouter } from "next/router";
import CollectionContainer from "../../../containers/CollectionContainer/CollectionContainer";
import CollectionLayout from "../../../layouts/CollectionLayout/CollectionLayout";

const CollectionWithCategory: React.FC = () => {
  const router = useRouter();
  const { category_ids } = router.query;
  return (
    <CollectionLayout>
      <CollectionContainer />
    </CollectionLayout>
  );
};
export default CollectionWithCategory;
