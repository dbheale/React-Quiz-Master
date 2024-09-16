import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OptionValue } from "../../components/DescriptiveSelectList";

const initialState = {
  isLoading: true,
  categories: new Array<OptionValue>({value: undefined, label:"Loading..."}),
};

export const fetchCategories = createAsyncThunk<any[], void>(
  'fetchCategories',
  async () => {
    const result = await fetch('https://opentdb.com/api_category.php')
    const data = await result.json()

    if (data && 'trivia_categories' in data) {
      return data.trivia_categories
    }

    return []
  }
)

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = [{label: "Any", value: undefined}, ...action.payload.map(v => ({label: v.name, value: v.id}))];
      state.isLoading = false;
    }),
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    })
  }
});

export default categoriesSlice.reducer;
