import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    user: null,
    isLogged: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            console.log("Pending");
        }).addCase(login.fulfilled, (state) => {
            state.isLogged = true
            console.log("Success");
        }).addCase(login.rejected, () => {
            console.log("Login Rejected");
        })
    }
});


export const login = createAsyncThunk(
    "auth/login",
    async (data) => {
        const { email, password } = data;

        await axios.post("http://localhost:8000/api/users/login", {
            email,
            password
        })
    }
)


export default authSlice.reducer;