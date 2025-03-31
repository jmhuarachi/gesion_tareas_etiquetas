import { useState } from 'react'
import FormularioTareas from './components/FormularioTareas'
import FiltroTareas from './components/FiltroTareas'
import ListadoTareas from './components/ListadoTareas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='bg-yellow-200 mx-auto p-4 max-w-2xl text-3xl font-bold mb-4 text-center' >Gestor de Tareas</div>
       <div className='bg-slate-300 mx-auto p-4 max-w-2xl mb-4'>
        <FormularioTareas/>
        <FiltroTareas/>
        <ListadoTareas/>
       </div>
       
    </>
  )
}

export default App
