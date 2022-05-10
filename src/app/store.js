import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import snakeReducer from './features/snakes/snakeSlice';
import eventReducer from './features/events/eventSlice';
import modalReducer from './features/modal/modalSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        snake: snakeReducer,
        event: eventReducer,
        modal: modalReducer
    }
})