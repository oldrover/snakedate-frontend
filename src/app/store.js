import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import snakeReducer from './features/snakes/snakeSlice';
import eventReducer from './features/events/eventSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        snake: snakeReducer,
        event: eventReducer

    }
})