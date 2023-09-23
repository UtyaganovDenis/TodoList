import { useContext } from 'react'
import * as ST from './styled'
import ButtonWithBorder from 'shared/ui/buttons/buttonWithBorder'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { FilterContext } from '../index'
import { FilterContextType } from 'shared/types/FilterContextType'
import { FILTER_BUTTONS } from 'shared/enums/filterButtonEnum'
const ManageBlockComponent = () => {
    // const [selectedButton, setSelectedButton] = useState<FILTER_BUTTONS>(FILTER_BUTTONS.all)
    const todosLength = useAppSelector((state) => state.todosReducer.todos.length)
    const { filteredBy, setFilter } = useContext(FilterContext) as FilterContextType
    const filterTodos = (button: FILTER_BUTTONS) => {
        switch (button) {
            case FILTER_BUTTONS.all:
                if (!(filteredBy === FILTER_BUTTONS.all)) {
                    setFilter(FILTER_BUTTONS.all)
                }
                break
            case FILTER_BUTTONS.active:
                setFilter(FILTER_BUTTONS.active)
                break
            case FILTER_BUTTONS.completed:
                setFilter(FILTER_BUTTONS.completed)
                break
        }
    }

    return (
        <>
            {todosLength > 0 ? (
                <ST.ManageBlockWrapper>
                    <ST.ShowButtonsBlock>
                        Show:
                        <ButtonWithBorder
                            innerText={'all'}
                            selected={filteredBy === FILTER_BUTTONS.all}
                            onClickFromState={() => filterTodos(FILTER_BUTTONS.all)}
                        />
                        <ButtonWithBorder
                            innerText={'active'}
                            selected={filteredBy === FILTER_BUTTONS.active}
                            onClickFromState={() => filterTodos(FILTER_BUTTONS.active)}
                        />
                        <ButtonWithBorder
                            innerText={'completed'}
                            selected={filteredBy === FILTER_BUTTONS.completed}
                            onClickFromState={() => filterTodos(FILTER_BUTTONS.completed)}
                        />
                    </ST.ShowButtonsBlock>
                    <ST.ClearButtonsBlock>
                        <ButtonWithBorder innerText={'Clear completed'} />
                    </ST.ClearButtonsBlock>
                </ST.ManageBlockWrapper>
            ) : null}
        </>
    )
}

export default ManageBlockComponent
