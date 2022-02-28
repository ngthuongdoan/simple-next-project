import {
	deleteWatch,
	getWatches,
	getWatchesByCategory,
	getWatchesByColor,
} from './actions';
import { createSlice } from '@reduxjs/toolkit';
import { Watch } from 'types/Watch';

export type WatchState = {
	// Data
	watchList: Array<Watch>;

	// Loading
	getWatchIsLoading: boolean;
	getWatchesByCategoryIsLoading: boolean;
	getWatchesByColorIsLoading: boolean;
	addWatchIsLoading: boolean;
	deleteWatchIsLoading: boolean;

	// Error
	getWatchError: any;
	getWatchesByCategoryError: any;
	getWatchesByColorError: any;
	addWatchError: any;
	deleteWatchError: any;
};

const initialState: WatchState = {
	// Data
	watchList: [],

	// Loading
	getWatchIsLoading: false,
	getWatchesByCategoryIsLoading: false,
	getWatchesByColorIsLoading: false,
	addWatchIsLoading: false,
	deleteWatchIsLoading: false,

	// Error
	getWatchError: null,
	getWatchesByCategoryError: null,
	getWatchesByColorError: null,
	addWatchError: null,
	deleteWatchError: null,
};

const watchSlice = createSlice({
	name: 'watches',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// GET WATCHES
			.addCase(getWatches.pending, (state) => {
				state.getWatchIsLoading = true;
			})
			.addCase(getWatches.fulfilled, (state, action) => {
				state.getWatchIsLoading = false;
				state.watchList = action.payload;
			})
			.addCase(getWatches.rejected, (state, { payload }) => {
				state.getWatchIsLoading = false;
				state.getWatchError = payload;
			})
			// GET WATCHES BY CATEGORY
			.addCase(getWatchesByCategory.pending, (state) => {
				state.getWatchesByCategoryIsLoading = true;
			})
			.addCase(getWatchesByCategory.fulfilled, (state, { payload }) => {
				state.getWatchesByCategoryIsLoading = false;
				state.watchList = payload;
			})
			.addCase(getWatchesByCategory.rejected, (state, { payload }) => {
				state.getWatchesByCategoryIsLoading = false;
				state.getWatchesByCategoryError = payload;
			})
			// // GET WATCHES BY COLOR
			.addCase(getWatchesByColor.pending, (state) => {
				state.getWatchesByColorIsLoading = true;
			})
			.addCase(getWatchesByColor.fulfilled, (state, { payload }) => {
				state.getWatchesByColorIsLoading = false;
				state.watchList = payload;
			})
			.addCase(getWatchesByColor.rejected, (state, { payload }) => {
				state.getWatchesByColorIsLoading = false;
				state.getWatchesByColorError = payload;
			})
			// DELETE WATCH
			.addCase(deleteWatch.pending, (state) => {
				state.deleteWatchIsLoading = true;
			})
			.addCase(deleteWatch.fulfilled, (state, { payload }) => {
				state.deleteWatchIsLoading = false;
				state.deleteWatchError = null;
			})
			.addCase(deleteWatch.rejected, (state, { payload }) => {
				state.deleteWatchIsLoading = false;
				state.deleteWatchError = payload;
			});
	},
});

export default watchSlice.reducer;
