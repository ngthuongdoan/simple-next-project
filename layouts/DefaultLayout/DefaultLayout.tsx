import { Breakpoint, Container } from '@mui/material';
import AppFooter from './Footer/Footer';
import AppHeader from './Header/Header';

type DefaultLayoutProps = {
	size?: Breakpoint;
};
const DefaultLayout: React.FC<DefaultLayoutProps> = ({
	children,
	size = 'lg',
}) => {
	return (
		<>
			<AppHeader />
			<main>
				<Container maxWidth={size}>{children}</Container>
			</main>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
