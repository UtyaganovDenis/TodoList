import { combineReducers } from '@reduxjs/toolkit'
import TodosReducer from './todosReducer'
export const rootReducer = combineReducers({ todosReducer: TodosReducer })
