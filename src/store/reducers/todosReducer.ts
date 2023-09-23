import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqueId from 'lodash/uniqueId'
import { ITodo } from 'shared/types/taskType'

interface TodosState {
    todos: ITodo[]
}

const initialState: TodosState = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        todosInit(state, action: PayloadAction<ITodo[]>) {
            state.todos = action.payload
        },
        todoAdded(state, action: PayloadAction<string>) {
            state.todos.push({ id: +uniqueId(), todoText: action.payload, complete: false })
        },
        todoDelete(state, action: PayloadAction<number>) {
            state.todos.splice(action.payload, 1)
        },
        todoUpdateText(state, action: PayloadAction<{ text: string; id: number }>) {
            const index = state.todos.findIndex((item) => item.id === action.payload.id)
            state.todos[index].todoText = action.payload.text
        },
        todoUpdateComplete(state, action: PayloadAction<number>) {
            state.todos[action.payload].complete = !state.todos[action.payload].complete
        }
    }
})

export default todosSlice.reducer
