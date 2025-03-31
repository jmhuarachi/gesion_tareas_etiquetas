export const initialState = {
    tareas: [],
    filter: ''
};

export const tareasReducer = (state = initialState, action) => {
    if(action.type === 'ADD_TAREA') {
        return {
            ...state,
            tareas: [...state.tareas, action.payload]
        }
    }
    if(action.type === 'REMOVE_TAREA') {
        return {
            ...state,
            tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
        }
    }
    if(action.type === 'SET_FILTER') {
        return {
            ...state,
            filter: action.payload
        }
    }
    return state
}