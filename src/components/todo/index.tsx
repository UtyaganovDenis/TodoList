import TaskComponent from './task'
import * as ST from './styled'
import AddTaskComponent from './addTaskComponent'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { createContext, useState } from 'react'
import ManageBlockComponent from './manageBlock'
import { FilterContextType } from 'shared/types/FilterContextType'
import { FILTER_BUTTONS } from 'shared/enums/filterButtonEnum'

export const FilterContext = createContext<FilterContextType | null>(null)
const ToDoComponent = () => {
    const [state, setState] = useState<FILTER_BUTTONS>(FILTER_BUTTONS.all)
    const todos = useAppSelector((state) => state.todosReducer.todos)
    return (
        <ST.TodoWrapper>
            <FilterContext.Provider
                value={{
                    filteredBy: state,
                    setFilter: setState
                }}>
                <ManageBlockComponent />
            </FilterContext.Provider>
            {todos.map((item) => (
                <TaskComponent
                    key={`task${item.id}`}
                    id={item.id}
                    todoText={item.todoText}
                    complete={item.complete}
                />
            ))}
            <AddTaskComponent />
        </ST.TodoWrapper>
    )
}

export default ToDoComponent
