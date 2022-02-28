import { Container } from "@mui/material";
import AppFooter from "../../components/footer/Footer";
import AppHeader from "../../components/header/Header";

type HomePageLayoutProps = {};

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>
        <Container>{children}</Container>
      </main>
      <AppFooter />
    </>
  );
};

export default HomePageLayout;
