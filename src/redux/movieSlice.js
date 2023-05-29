const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const movieSlice = createSlice({
    initialState: {
        movie: [],
        loading: false
      },
      name: "movie",
      reducers: {
        setLoading: (state, action) => {
          console.log("state", state);
          state.loading = action.payload;
        }
      },
      extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
          state.movie = action.payload;
          state.loading = false;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
          console.log("action rejected", action);
          state.movie = [];
          state.loading = false;
        });
        builder.addCase(fetchMovies.pending, (state, action) => {
          console.log("action pending", action);
        });
      }
    });

export const { setLoading } = movieSlice.actions;
export default movieSlice.reducer;

// Thunks
export const fetchMovies = createAsyncThunk('Movies/fetch',
 async () => {
    const res = await fetch('https://www.omdbapi.com/?s=action&apikey=cc627d4&page=1');
    const data = await res.json();
    console.log(data.Search)
    return data.Search;
   
});

