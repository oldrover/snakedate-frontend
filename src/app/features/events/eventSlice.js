import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    events: [],    
    status: 'idle',
    error: null
}

export const fetchEvents = createAsyncThunk('events/fetchEvents', async(fetchData) => {

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
    
    const events = await fetch(`/api/events/${snake.snakeId}`, requestOptions)
        .then(response => response.json())
        .then(data => data) 
        .catch(error => alert(error))

    return events;
});

export const saveEvent = createAsyncThunk('events/saveEvent',async(saveData) => {

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
            
    await fetch(`/api/events`, requestOptions) 
        .then(response => response.text())
        .then(data => alert(data))                       
        .catch(error => alert(error));
});

export const deleteEvent = createAsyncThunk('events/deleteEvent', async(deleteData) => {

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

    await fetch(`/api/events/${snakeId}/${eventId}`, requestOptions) 
        .then(response => response.text())
        .then(data => alert(data))                      
        .catch(error => alert(error));
});  

const eventSlice = createSlice({
    name:'event',
    initialState: initialState,
    reducers: {
        resetEvents: (state, action) => {
            return initialState;
        }
    }, 
    extraReducers: {
        [fetchEvents.pending]: (state, action) => {
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
        }
    }
        
})

export default eventSlice.reducer;
export const { resetEvents } = eventSlice.actions;

