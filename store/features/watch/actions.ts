
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Watch } from "../../../types/Watch";
import { Message } from "../../../types/error";

import { InputValue } from "../../../components/postForm/AddForm";
import { CollectionParamType } from "../../../containers/CollectionContainer/CollectionContainer";

const WATCH_MODULE = "watch";

const WATCH_ACTIONS = {
  GET_WATCHES: WATCH_MODULE + "/getWatches",
  GET_WATCHES_BY_CATEGORY: WATCH_MODULE + "/getWatchesByCategory",
  GET_WATCHES_BY_COLOR: WATCH_MODULE + "/getWatchesByColor",
  ADD_WATCH: WATCH_MODULE + "/addWatch",
  DELETE_WATCH: WATCH_MODULE + "/deleteWatch",
};

export const getWatches = createAsyncThunk<Watch[], number>(
  WATCH_ACTIONS.GET_WATCHES,
  async (_, thunkApi) => {
    try {
      const response = await axios.get<Watch[]>(
        "http://localhost:3200/api/v1/watches"
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getWatchesByCategory = createAsyncThunk<
  Watch[],
  CollectionParamType
>(WATCH_ACTIONS.GET_WATCHES_BY_CATEGORY, async ({ category_ids }, thunkApi) => {
  try {
    const response = await axios.get<Watch[]>(
      "http://localhost:3200/api/v1/categories/" + category_ids
    );
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getWatchesByColor = createAsyncThunk<Watch[], string>(
  WATCH_ACTIONS.GET_WATCHES_BY_COLOR,
  async (color, thunkApi) => {
    try {
      const response = await axios.get<Watch[]>(
        "http://localhost:3200/api/v1/watches/" + color
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteWatch = createAsyncThunk<Message, string>(
  WATCH_ACTIONS.DELETE_WATCH,
  async (watch_ids, thunkApi) => {
    try {
      await axios.delete<Watch[]>(
        "http://localhost:3200/api/v1/watches/" + watch_ids
      );
      return { message: "Successfully deleted" };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

/**
 * InputValue is type of adding watch form
 */
export const addWatch = createAsyncThunk<Message, InputValue>(
  WATCH_ACTIONS.ADD_WATCH,
  async (data, thunkApi) => {
    try {
      await axios.post("http://localhost:3200/api/v1/watches", { data: data });
      return { message: "Successfully added" };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
