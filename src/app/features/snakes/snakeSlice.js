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
    error: null
}


export const fetchSnakes = createAsyncThunk('snakes/fetchSnakes', async(fetchData) =>{

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
        .catch(error => alert(error));
        
    return snakes;
})

export const deleteSnake = createAsyncThunk('snakes/deleteSnake', async(deleteData) => {

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

    await fetch(`/api/snakes/${snake.ownerId}/${snake.snakeId}`, requestOptions)
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => error);
})


export const saveSnake = createAsyncThunk('snakes/saveSnake', async(saveData) => {

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
             
    await fetch(`/api/snakes`, requestOptions)
        .then(response => response.text())
        .then(data => alert(data))                               
        .catch(error => alert(error));    
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
        resetSnakes: (state, action) => {            
            return initialState;       
        }
    },
    extraReducers: {
        [fetchSnakes.pending]: (state, action) => {
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
        }
    }
})

export const { setSnake, resetSnakes } = snakeSlice.actions;
export default snakeSlice.reducer;