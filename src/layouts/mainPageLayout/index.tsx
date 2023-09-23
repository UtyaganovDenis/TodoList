import * as ST from './styled'
import { ReactNode } from 'react'

interface IMainPageLayout {
    children: ReactNode
}

const MainPageLayout = ({ children }: IMainPageLayout) => {
    return (
        <ST.Layout>
            <ST.ToDoHeader>To Do list</ST.ToDoHeader>
            {children}
        </ST.Layout>
    )
}

export default MainPageLayout
