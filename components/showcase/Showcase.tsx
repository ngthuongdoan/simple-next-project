import { Container, Grid, Pagination, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { findPageSize, pagination } from '../../helpers/pagination';
import { Watch } from '../../types/Watch';
import WatchCard from '../WatchCard/WatchCard';

type ShowcaseProps = {
	title: string;
	productList: Watch[];
};

const Showcase: React.FC<ShowcaseProps> = ({ title, productList }) => {
	const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);

	// Number of product on page;
	const maxItems: number = 12;

	const maxPage = findPageSize({
		maxItems: maxItems,
		pageCurrent: currentPageNumber,
		list: productList,
	});

	function handlePage(event: React.ChangeEvent<unknown>, value: number) {
		setCurrentPageNumber(value);
	}

	const listOnPage = pagination({
		maxItems: maxItems,
		pageCurrent: currentPageNumber,
		list: productList,
	});

	return (
		<>
			<Stack spacing={2}>
				<Grid container spacing={1} justifyContent="center">
					<Typography variant="h5">{title ? title : 'SHOWCASE'}</Typography>
				</Grid>
				<Grid container spacing={2}>
					{listOnPage
						? listOnPage.map((value, index) => {
								return (
									<Grid item xs={3} key={value.id}>
										<WatchCard
											id={value.id}
											title={value.title}
											imageUrl={value.imageUrl}
											description={value.description}
										/>
									</Grid>
								);
						  })
						: 'Khong'}
				</Grid>
				<Grid container justifyContent={'center'}>
					<Pagination count={maxPage} shape="rounded" onChange={handlePage} />
				</Grid>
			</Stack>
		</>
	);
};

export default Showcase;
