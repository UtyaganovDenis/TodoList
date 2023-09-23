import { styled } from 'styled-components'

export const TaskWrapper = styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    align-items: center;
    border-top: 1px solid #cccccc;
    padding: 0 25px;
    user-select: none;
    &:last-of-type {
        border-bottom: 1px solid #cccccc;
    }
`

export const ManageTaskBlock = styled.div``
