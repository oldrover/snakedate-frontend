import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    show: false
}



const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers:{
        showModal: (state, action) => {            
            return {text: action.payload, show: true}
        },
        hideModal: (state, action) => {
            return initialState;
        }
    } 

})

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;