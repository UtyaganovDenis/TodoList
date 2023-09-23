import * as ST from './styled'
import NonBorderInput from 'shared/ui/inputs/nonBorderInput'
import IconButton from 'shared/ui/buttons/iconButton'
import { ReactComponent as PlusIcon } from 'assets/icons/plus-icon.svg'
import { useState } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { todosSlice } from 'store/reducers/todosReducer'

const placeholderForInput = 'Type new task'

const AddTaskComponent = () => {
    const [newTaskText, setNewTaskText] = useState<string>('')
    const { todoAdded } = todosSlice.actions
    const dispatch = useAppDispatch()

    const addNewTask = () => {
        if (newTaskText.length) dispatch(todoAdded(newTaskText))
    }

    return (
        <ST.AddTaskWrapper
            onSubmit={(e) => {
                e.preventDefault()
                addNewTask()
            }}>
            <ST.InputWrapper>
                <NonBorderInput
                    placeholder={placeholderForInput}
                    setStateForText={setNewTaskText}
                />
            </ST.InputWrapper>
            {newTaskText.length ? (
                <ST.ButtonWrapper>
                    <IconButton
                        type={'submit'}
                        disabled={!newTaskText.length}
                        onClick={() => addNewTask}>
                        <PlusIcon />
                    </IconButton>
                </ST.ButtonWrapper>
            ) : null}
        </ST.AddTaskWrapper>
    )
}

export default AddTaskComponent
