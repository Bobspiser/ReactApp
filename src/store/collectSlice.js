import { createSlice } from "@reduxjs/toolkit";

export const collectSlice = createSlice({
    name: "saved",
    initialState: {
        saved: []
    },
    reducers: {
        Addproduct: (state, action) => {
            //Tjekker om der allerede er en med det samme url
            const productExist = state.saved.some(
                (product) => product.url === action.payload.url
            )
            //Hvis der ikke er en kopi er den samme vil programmet push
            if (!productExist){
                state.saved.push(action.payload)
            }
        }
    }
})

export const {Addproduct} = collectSlice.actions;
export default collectSlice.reducer;