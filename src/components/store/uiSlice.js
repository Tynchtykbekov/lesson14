

import { createSlice } from "@reduxjs/toolkit";



export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isShow: false
    } ,
    reducers: {
toggle: (state) => {
     
    state.isShow = !state.isShow
}
    }
})
export const {toggle} = uiSlice.actions