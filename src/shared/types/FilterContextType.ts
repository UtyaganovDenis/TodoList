import { FILTER_BUTTONS } from 'shared/enums/filterButtonEnum'

export type FilterContextType = {
    filteredBy: FILTER_BUTTONS
    setFilter: (filter: FILTER_BUTTONS) => void
}
