import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    events: [],    
    status: 'idle',
    error: null,
    message: null
}

export const fetchEvents = createAsyncThunk('events/fetchEvents', async(fetchData, { rejectWithValue }) => {

    const { snake, jwt } = fetchData;

    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': jwt              
            }      
    }; 
    
    return fetch(`/api/events/${snake.snakeId}`, requestOptions)
        .then(response => response.json())
        .then(data => data) 
        .catch(_error => rejectWithValue('Error'));    
});

export const saveEvent = createAsyncThunk('events/saveEvent',async(saveData, { rejectWithValue }) => {

    const { eventData, jwt } = saveData;

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': jwt               
        },            
        body: JSON.stringify(eventData)
    };  
            
    return fetch(`/api/events`, requestOptions) 
        .then(response => response.text())
        .then(data => data)                       
        .catch(_error => rejectWithValue('Error'));
});

export const deleteEvent = createAsyncThunk('events/deleteEvent', async(deleteData, { rejectWithValue }) => {

const { eventId, snakeId, jwt } = deleteData; 

    const requestOptions = {
        method: 'DELETE', 
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': jwt               
        }            
    };        

    return fetch(`/api/events/${snakeId}/${eventId}`, requestOptions) 
        .then(response => response.text())
        .then(data => data)                      
        .catch(_error => rejectWithValue('Error'));
});  

const eventSlice = createSlice({
    name:'event',
    initialState: initialState,
    reducers: {
        resetEvents: (_state, _action) => {
            return initialState;
        },
        resetEventMessage: (state, _action) => {
            return {
                ...state,
                message: null
            }
        }
    }, 
    extraReducers: {
        [fetchEvents.pending]: (state, _action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchEvents.fulfilled]: (state, action) => {
            if(state.status === 'loading') {
                state.events = action.payload;                              
                state.status = 'succeeded';                
            } 
        },
        [fetchEvents.rejected]: (state, action) => {
            if(state.status === 'loading') {
                state.status = 'failed';
                state.error = action.payload;
            }
        },        
        [deleteEvent.fulfilled]: (state, action) =>{            
            state.message = action.payload;
            state.status = 'idle';            
        },
        [deleteEvent.rejected]: (state, action) => {
            state.message = action.payload;
        },        
        [saveEvent.fulfilled]: (state, action) => {
            state.message = action.payload;
            state.status = 'idle';
        },
        [saveEvent.rejected]: (state, action) => {
            state.message = action.payload;
        },

    }
        
})

export default eventSlice.reducer;
export const { resetEvents, resetEventMessage } = eventSlice.actions;

