import { Pagination } from './Pagination';

export type Watch = {
	// _id: string;
	id: string;
	title: string;
	imageUrl: string;
	description: string;
	price: string;
	quantities: number;
	categories: Array<string>;
};

// export type WatchResponse = Pagination<Watch>;
export type WatchResponse = Array<Watch>;
