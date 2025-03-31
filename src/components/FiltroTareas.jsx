import { useTareasContext } from "../context/TareasContex"

export default function FiltroTareas() {

    
    const {tareas, filter,setFilter} = useTareasContext()

    const labels = Array.from(new Set(tareas.map(tarea => tarea.label.toUpperCase())))
    console.log(labels)

    const handleFilterChange = (e) => {
        const selectedLabel = e.target.value.toUpperCase()
        console.log(selectedLabel)
        setFilter(selectedLabel)
        // Aquí puedes agregar la lógica para filtrar las tareas según la etiqueta seleccionada
    }
    
    return (
        <div  className="mb-4 " >
            <h2 className="text-xl font-bold mb-2">Filtrar por Etiqueta</h2>
            <select
                name="etiqueta"
                id="etiqueta"
                onChange={handleFilterChange}
                value={filter}
                className="border-0 p-2 mb-2 rounded bg-amber-50 w-full"
                
            >
                <option value="">
                    -- Toda las Etiquetas --
                    
                </option>
                {labels.map((label, index) => (
                    <option key={index} value={label}>
                        {label}
                        
                    </option>
                ))}
                
            </select>
        </div>
    )
}