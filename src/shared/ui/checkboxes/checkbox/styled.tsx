import { styled } from 'styled-components'

export const CheckboxWrapper = styled.label`
    cursor: pointer;
`

interface ICheckboxInput {
    checked: boolean
}
export const CheckboxInput = styled.input<ICheckboxInput>`
    cursor: pointer;
`

export const CheckboxLabel = styled.span``
