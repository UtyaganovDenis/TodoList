import * as ST from './styled'

import React from 'react'

interface IButtonWithBorder {
    innerText: string
    selected?: boolean
    type?: 'button' | 'submit' | 'reset' | undefined
    onClickFromState?: () => void
}
const ButtonWithBorder = ({ innerText, selected, onClickFromState }: IButtonWithBorder) => {
    return (
        <ST.Button
            $is_selected={selected !== undefined ? selected : false}
            onClick={onClickFromState}>
            {innerText}
        </ST.Button>
    )
}

export default ButtonWithBorder
