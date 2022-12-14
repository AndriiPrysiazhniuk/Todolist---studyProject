type StateType = {
    age: number
    childrenCount: number
    name: string
    surname: string
}
type ActionType = {
    type: string
    [key: string]: any
}
export const tasksReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case'First case - Increment age': {
            const newState = state.age = state.age + 1
            return newState
        }
        case'Second case - Decrement childrenCount': {
            const newState = state.childrenCount = state.childrenCount - 1
            return newState
        }
        case'Interesting case - Add name and surname': {
            const newState = state.name = state.name + state.surname
            return newState
        }

        default:
            throw new Error("I don`t understand this action type!")
    }
}
