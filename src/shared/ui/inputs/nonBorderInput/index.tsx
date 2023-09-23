import * as ST from './styled'
interface INonBorderInput {
    placeholder: string
    setStateForText: (value: string) => void
    text?: string
}

const NonBorderInput = ({ placeholder, setStateForText, text }: INonBorderInput) => {
    return (
        <ST.StyledInput
            type={'text'}
            value={text}
            placeholder={placeholder}
            onChange={(event) => setStateForText(event.target.value)}
        />
    )
}
export default NonBorderInput
