import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let jwt = '';

const initialState = {
    id: '',
    name: '',
    image: '',
    jwt:'',
    status:'idle',
    error: null
};

const userRequestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: null
};


export const fetchUser = createAsyncThunk('users/fetchUser', async(login) => {

    userRequestOptions.body = JSON.stringify(login);
    
    const user = await fetch('/api/users/login', userRequestOptions)
                    .then(response => {
                        jwt = response.headers.get('Authentication');
                        return response.json();
                    })
                    .then(data => data)
                    .catch(error => error);

    return user;
})

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        logoutUser: (_state, _action) => {
           return initialState;
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state, _action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUser.fulfilled]: (state, action) => {
            if(state.status === 'loading') {
                state.id = action.payload.id;
                state.name = action.payload.email;                
                state.image = '';
                state.jwt = jwt;
                state.status = 'succeeded';
            }
        },
        [fetchUser.rejected]: (state, _action) => {
            if(state.status === 'loading') {
                state.status = 'failed';
                state.error = 'action.payload'
            }
        }
    }
})

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;