import { useReducer } from "react"
import { tareasReducer,initialState } from "../reducers/tareasReducer"

const useTareas = () => {
    const [state, dispatch] = useReducer(tareasReducer, initialState)
    

    const addTarea = (tarea) => {
        dispatch({ type: 'ADD_TAREA', payload: tarea })
    }

    const removeTarea = (id) => {
        dispatch({ type: 'REMOVE_TAREA', payload: id })
    }
    const setFilter = (label) => {
        dispatch({ type: 'SET_FILTER', payload: label })
    }
  return {
    tareas: state.tareas,
    filter: state.filter,
    removeTarea,
    setFilter,
    addTarea
   }
}
export default useTareas