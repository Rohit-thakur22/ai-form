import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "../../libs/types/formDataType";

const initialState: initialStateType = {
  data: {
    age: "",
    buyFor: "",
    country: "",
    description: "",
    gender: "",
    gift: "",
    occasion: "",
    spendAmount: '400',
  },
  isLoading: false,
};

export const formDataSlice = createSlice({
  name: "form-data",
  initialState,
  reducers: {
    formSubmit(state, { payload }) {
      state.data = payload;
    },
    handleLoader(state, { payload }) {
      state.isLoading = payload;
      console.log("payload-redux", payload);
    },
  },
});

export const { formSubmit, handleLoader } = formDataSlice.actions;
export default formDataSlice.reducer;
