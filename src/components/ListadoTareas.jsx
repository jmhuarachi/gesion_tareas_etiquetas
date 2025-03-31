import { useTareasContext } from "../context/TareasContex"

export default function ListadoTareas() {    
    const {tareas, removeTarea, filter} = useTareasContext()
    
    const filteredTareas = tareas.filter(tarea => {
        if (filter === "") return true
        return tarea.label.toUpperCase() === filter
    })
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Lista de Tareas</h2>
            {filteredTareas.map((tarea => (
                <div key={tarea.id} className="bg-white shadow-md px-5 py-10 rounded-lg mb-5">
                    <span>{tarea.text}</span>
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded-lg ml-5"
                        onClick={() => removeTarea(tarea.id)}   >
                        Eliminar
                    </button>
                </div>
            )))}
        </div>
    )
}