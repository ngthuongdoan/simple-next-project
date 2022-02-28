import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'store';

function MyApp({ Component, pageProps }: AppProps) {
	// Component -> đại diện cho 1 page match với url
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
export default MyApp;
