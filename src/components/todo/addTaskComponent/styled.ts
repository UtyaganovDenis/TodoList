import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
`
export const AddTaskWrapper = styled.form`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    position: sticky;
    bottom: 0;
    background: #efefef;
`

export const InputWrapper = styled(Wrapper)`
    width: 85%;
`

export const ButtonWrapper = styled(Wrapper)`
    width: 15%;
    height: 80%;
`
