import { Container } from "@mui/material";
import AppFooter from "../../components/footer/Footer";
import AppHeader from "../../components/header/Header";

type PostWatchLayoutProps = {};
const PostWatchLayout: React.FC<PostWatchLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>
        <Container maxWidth="md">{children}</Container>
      </main>
      <AppFooter />
    </>
  );
};

export default PostWatchLayout;
