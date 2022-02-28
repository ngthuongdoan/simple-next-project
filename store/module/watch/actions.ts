import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Watch } from 'types/Watch';
import { InputValue } from 'components/AddForm/AddForm';

const WATCH_MODULE = 'watch';

const WATCH_ACTIONS = {
	GET_WATCHES: WATCH_MODULE + '/getWatches',
	GET_WATCHES_BY_CATEGORY: WATCH_MODULE + '/getWatchesByCategory',
	GET_WATCHES_BY_COLOR: WATCH_MODULE + '/getWatchesByColor',
	ADD_WATCH: WATCH_MODULE + '/addWatch',
	DELETE_WATCH: WATCH_MODULE + '/deleteWatch',
};

export const getWatches = createAsyncThunk<Array<Watch>, number>(
	WATCH_ACTIONS.GET_WATCHES,
	async (_, thunkApi) => {
		try {
			const response = await axios.get<Array<Watch>>(
				'http://localhost:3200/api/v1/watches'
			);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const getWatchesByCategory = createAsyncThunk<Array<Watch>, string>(
	WATCH_ACTIONS.GET_WATCHES_BY_CATEGORY,
	async (category_ids, thunkApi) => {
		try {
			const response = await axios.get<Array<Watch>>(
				'http://localhost:3200/api/v1/categories/' + category_ids
			);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const getWatchesByColor = createAsyncThunk<Array<Watch>, string>(
	WATCH_ACTIONS.GET_WATCHES_BY_COLOR,
	async (color, thunkApi) => {
		try {
			const response = await axios.get<Watch[]>(
				'http://localhost:3200/api/v1/watches/' + color
			);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const deleteWatch = createAsyncThunk<void, string>(
	WATCH_ACTIONS.DELETE_WATCH,
	async (watch_ids, thunkApi) => {
		try {
			await axios.delete('http://localhost:3200/api/v1/watches/' + watch_ids);
			return Promise.resolve();
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

/**
 * InputValue is type of adding watch form
 */
export const addWatch = createAsyncThunk<void, InputValue>(
	WATCH_ACTIONS.ADD_WATCH,
	async (data, thunkApi) => {
		try {
			await axios.post('http://localhost:3200/api/v1/watches', { data });
			return Promise.resolve();
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
