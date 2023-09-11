import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <ItemListContainer greeting="Where art meets Jewelry"/>
    </div>
  )
}

export default App
