import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import GitCard from './Components/GitCard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <div>
        <Header title="its header"></Header>
          


        <GitCard></GitCard>

        <Footer title="its footer"></Footer>
      </div>
      
    </>
  )
}

export default App
