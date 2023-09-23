import * as ST from './styled'
import { ReactNode } from 'react'

interface IIconButton {
    children: ReactNode
    label?: string
    onClick: () => void
    type?: 'button' | 'submit' | 'reset' | undefined
    disabled?: boolean
}

const IconButton = ({ children, label, onClick, type, disabled }: IIconButton) => {
    return (
        <ST.Button
            disabled={disabled !== undefined ? disabled : false}
            type={type ? type : 'button'}
            onClick={onClick}>
            {label}
            {children}
        </ST.Button>
    )
}
export default IconButton
