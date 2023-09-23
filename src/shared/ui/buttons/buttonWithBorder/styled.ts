import styled from 'styled-components'

interface IButton {
    $is_selected: boolean
}
export const Button = styled.button<IButton>`
    border: 1px solid black;
    border-radius: 4px;
    background: none;
    border: ${(props) => (props.$is_selected ? ' 1px solid black' : 'none')};
    box-sizing: border-box;
    cursor: pointer;
`
