import HomePageContainer from "../containers/HomeContainer/HomeContainer";
import HomePageLayout from "../layouts/HomeLayout/HomeLayout";

export default function Home() {
  return (
    <div>
      <HomePageLayout>
        <HomePageContainer />
      </HomePageLayout>
    </div>
  );
}
