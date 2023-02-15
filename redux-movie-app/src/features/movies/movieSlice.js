import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      .catch((err) => {
        console.log("err: ", err);
      });
    // console.log("response: ", response);
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${term}&type=series`)
        .catch((err) => {
          console.log("err: ", err);
        });
      // console.log("response: ", response);
      return response.data;
    }
  );

  export const fetchAsyncMovieOrShowsDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowsDetail",
    async (id) => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
      // console.log("response: ", response);
      return response.data;
    }
  );

const initialState = {
  movies: {},
  shows:{},
  selectedMovieOrShow:{}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow : (state) => {
        state.selectedMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected..");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        console.log("fulfilled");
        return { ...state, shows: payload };
      },
    [fetchAsyncMovieOrShowsDetail.fulfilled]: (state, { payload }) => {
        console.log("fulfilled");
        return { ...state, selectedMovieOrShow: payload };
      },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
