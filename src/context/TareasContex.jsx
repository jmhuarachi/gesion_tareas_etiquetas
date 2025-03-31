import { createContext } from "react"
import useTareas from "../hooks/useTareas"
import { useContext } from "react"

const TareasContext = createContext()

export const TareasProvider = ({children}) => {
    const {tareas,filter ,addTarea, removeTarea,setFilter} = useTareas()

    return (
        <TareasContext.Provider value={{tareas,filter,addTarea,removeTarea,setFilter}} >
            {children}
        </TareasContext.Provider>
    )
}

export const useTareasContext = () => {
    const context = useContext(TareasContext)
    if (!context) {
        throw new Error('useTareasContext debe ser usado dentro del tareasProvider')
    }
    return context
}