import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MiNavBar from './components/navbar/NavBar'
import Contenedor from './components/ItemListConteiner/ItemListConteiner'

function App() {

  return (
    <div>
      <MiNavBar />
      <Contenedor greeting="Bienvenidos" />
    </div>
  )
}

export default App
