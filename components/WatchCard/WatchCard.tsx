import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { deleteWatch } from 'store/module/watch/actions';
import { useRouter } from 'next/router';

export type WatchCardProps = {
	id: string;
	title: string;
	imageUrl: string;
	description: string;
};

const WatchCard: React.FC<WatchCardProps> = ({
	id,
	title,
	imageUrl,
	description,
}) => {
	const dispatch = useAppDispatch();

	const router = useRouter();

	async function onDeleteWatch() {
		try {
			await Promise.all([dispatch(deleteWatch(id)).unwrap(), redirect()]);
		} catch (error) {
			console.log(error);
		}
	}

	function redirect() {
		router.push('/');
	}

	return (
		<Card sx={{ padding: '16px', border: '1px solid #ddd' }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="200"
				image={imageUrl}
			/>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					{title || 'No title'}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description.slice(0, 60) + '...' || 'No description'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="medium"
					fullWidth
					variant="contained"
					color="primary"
					onClick={onDeleteWatch}
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default WatchCard;
