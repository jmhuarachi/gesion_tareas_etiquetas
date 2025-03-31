import { useState } from "react"
import { useTareasContext } from "../context/TareasContex"


export default function FormularioTareas() {
    const [text, setText] = useState('')
    const [label, setLabel] = useState('')

    const { addTarea } = useTareasContext()

    const  handleAddTarea = (e) => {
        if(text && label){
            addTarea({
                id: Date.now(),
                text,
                label,
            })
            setText('')
            setLabel('')
        }
    }

    return (
        <div className="mb-4" >
            <h2 className="text-xl font-bold mb-2">Añadir Tarea</h2>
            <input

                type="text"
                className="border-0 p-2 mb-2 rounded bg-amber-50 w-full "
                placeholder="Descripción de la tarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h2 className="text-xl font-bold mb-2">Añadir Etiqueta</h2>
            <input
                type="text"
                className="border-0 p-2 mb-2 rounded bg-amber-50 w-full"
                placeholder="Etiqueta"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 mx-auto block"
                onClick={handleAddTarea}
            >
                Añadir

            </button>
        </div>
    )
}