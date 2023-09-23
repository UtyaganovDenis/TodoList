import * as ST from './styled'
import CustomCheckbox from 'shared/ui/checkboxes/checkbox'
import { useState } from 'react'
import { ITodo } from 'shared/types/taskType'
import ButtonWithBorder from 'shared/ui/buttons/buttonWithBorder'
import NonBorderInput from 'shared/ui/inputs/nonBorderInput'
import { todosSlice } from 'store/reducers/todosReducer'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

type TTaskComponent = {
    something?: string
} & ITodo
const TaskComponent = ({ todoText, complete, id }: TTaskComponent) => {
    const [isComplete, setIsComplete] = useState<boolean>(complete ? complete : false)
    const [textInInput, setTextInInput] = useState<string>(todoText)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const { todoUpdateText } = todosSlice.actions
    const dispatch = useAppDispatch()
    const handleIsEditing = () => {
        setIsEditing((prevState) => !prevState)
    }
    const handleUpdateTodoText = () => {
        dispatch(todoUpdateText({ text: textInInput, id: id }))
        handleIsEditing()
    }

    return (
        <ST.TaskWrapper
            onSubmit={(e) => {
                e.preventDefault()
            }}>
            {!isEditing ? (
                <CustomCheckbox
                    isCheckedFromProps={isComplete}
                    onCheckChange={() => setIsComplete((prev) => !prev)}
                    label={todoText}
                />
            ) : (
                <NonBorderInput
                    placeholder={textInInput}
                    setStateForText={setTextInInput}
                    text={textInInput}
                />
            )}
            <ST.ManageTaskBlock>
                {!isEditing ? (
                    <>
                        <ButtonWithBorder
                            innerText={'Edit'}
                            onClickFromState={() => setIsEditing((prevState) => !prevState)}
                        />
                        <ButtonWithBorder innerText={'Delete'} />
                    </>
                ) : (
                    <>
                        <ButtonWithBorder
                            type="submit"
                            innerText={'Apply'}
                            onClickFromState={handleUpdateTodoText}
                        />
                        <ButtonWithBorder innerText={'Cancel'} onClickFromState={handleIsEditing} />
                    </>
                )}
            </ST.ManageTaskBlock>
        </ST.TaskWrapper>
    )
}

export default TaskComponent
