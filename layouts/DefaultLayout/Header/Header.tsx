import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
const AppHeader: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              INTERNSHIP
            </Typography>
            <div className="options">
              <Link href="/">
                <a className="options__item">HOME</a>
              </Link>
              <Link href="/collection/Mens Watches">
                <a className="options__item">Mens Watches</a>
              </Link>
              <Link href="/collection/Womens Watches">
                <a className="options__item">Womens Watches</a>
              </Link>
              <Link href="/post">
                <a className="options__item">Post Watch</a>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
