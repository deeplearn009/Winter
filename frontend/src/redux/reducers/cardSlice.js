import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getProductsThunk = createAsyncThunk('/products/get', async () => {
    const res = await axios.get('http://localhost:6060/products')
    return res.data
})

export const postProductThunk = createAsyncThunk('/products/post', async (data) => {
    await axios.post('http://localhost:6060/products', data)
    return data
})

export const deleteProductThunk = createAsyncThunk('/products/delete', async (id) => {
    await axios.delete(`http://localhost:6060/products/${id}`, id)
    return id
})

const cardSlice = createSlice({
    name: "products",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder

        //For get

        .addCase(getProductsThunk.pending, (state) => {
            state.loading = false
        })
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getProductsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        //For post

        .addCase(postProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products.push(action.payload)
        })

        //For delete

        .addCase(deleteProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = state.products.filter(item => item._id != action.payload)
        })
    }
})

export default cardSlice.reducer