import { Container } from "@mui/material";
import AppFooter from "../../components/footer/Footer";
import AppHeader from "../../components/header/Header";

type CollectionLayoutProps = {};
const CollectionLayout: React.FC<CollectionLayoutProps> = ({ children }) => {
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

export default CollectionLayout;
