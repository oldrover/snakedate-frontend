import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const Snake = {
    snakeId: '',
    ownerId: '',
    name: '',
    species: '',
    sex: '',
    birthYear: null,
    weight: null,
    size: null,
    image: ''
  }

const initialState = {
    snakes: [],
    chosenSnake: Snake,
    status: 'idle',
    error: null,
    message: null
}


export const fetchSnakes = createAsyncThunk('snakes/fetchSnakes', async(fetchData, { rejectWithValue }) =>{

    const { userId, jwt} = fetchData;
    
    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': jwt              
        }
    };

    const snakes = await fetch(`/api/snakes/${userId}`, requestOptions)    
        .then(response => response.json()) 
        .then(data => data)       
        .catch(_error => rejectWithValue('Error'));
        
    return snakes;
})

export const deleteSnake = createAsyncThunk('snakes/deleteSnake', async(deleteData, { rejectWithValue }) => {

    const { snake, jwt } = deleteData;    

    const requestOptions = {
        method: 'DELETE',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': jwt 
        }
    };

    const deleteResponse = await fetch(`/api/snakes/${snake.ownerId}/${snake.snakeId}`, requestOptions)
        .then(response => response.text())
        .then(data => data)
        .catch(_error => rejectWithValue('Error'));

    return deleteResponse;
})


export const saveSnake = createAsyncThunk('snakes/saveSnake', async(saveData, { rejectWithValue }) => {

    const { snake, jwt } = saveData;
    
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': jwt               
        },            
        body: JSON.stringify(snake)
    };  
             
    const saveResponse = await fetch(`/api/snakes`, requestOptions)
        .then(response => response.text())
        .then(data => data)                               
        .catch(_error => rejectWithValue('Error'));  
    
    return saveResponse;
})


const snakeSlice = createSlice({
    name: 'snake',
    initialState: initialState,
    reducers: {
        setSnake: (state, action) => {
            return {
                ...state,
                chosenSnake: action.payload
            }
        },
        resetSnakes: (_state, _action) => {            
            return initialState;       
        },
        resetSnakeMessage: (state, _action) => {
            return {
                ...state,
                message: null
            }
        }
    },
    extraReducers: {
        [fetchSnakes.pending]: (state, _action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchSnakes.fulfilled]: (state, action) => {
            if(state.status === 'loading') {
                state.snakes = action.payload;
                if(state.chosenSnake.snakeId === ''){
                    state.chosenSnake = action.payload[0];
                }                 
                state.status = 'succeeded';                
            } 
        },
        [fetchSnakes.rejected]: (state, action) => {
            if(state.status === 'loading') {
                state.status = 'failed';
                state.error = action.payload;
            }
        },               
        [deleteSnake.fulfilled]: (state, action) => {                       
            state.message = action.payload;  
            state.status = 'idle';          
        },
        [deleteSnake.rejected]: (state, action) => {
            state.message = action.payload;
        },               
        [saveSnake.fulfilled]: (state, action) => {
            state.message = action.payload;
            state.status = 'idle'
        },
        [saveSnake.rejected]: (state, action) => {
            state.message = action.payload;
        },
        
    }
})

export const { setSnake, resetSnakes, resetSnakeMessage } = snakeSlice.actions;
export default snakeSlice.reducer;