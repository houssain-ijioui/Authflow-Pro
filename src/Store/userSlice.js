import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk(
    "auth/login",
    async (userCredenials) => {
        const response = await axios.post("http://localhost:8000/api/users/login", userCredenials);
        
    }
)


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        error: null
    }
});


export default userSlice.reducer;