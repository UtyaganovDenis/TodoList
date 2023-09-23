import * as ST from './styled'

interface ICustomCheckbox {
    isCheckedFromProps: boolean
    onCheckChange: () => void
    label: string
}
const CustomCheckbox = ({ isCheckedFromProps, onCheckChange, label }: ICustomCheckbox) => {
    return (
        <ST.CheckboxWrapper>
            <ST.CheckboxInput
                type={'checkbox'}
                onChange={onCheckChange}
                checked={isCheckedFromProps}
            />
            <ST.CheckboxLabel> {label}</ST.CheckboxLabel>
        </ST.CheckboxWrapper>
    )
}

export default CustomCheckbox
