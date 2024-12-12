import { Routes, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Home from './components/Home'
function App() {
  return (
    <Routes path = '/'>
      <Route path = '/home' element = {<Home></Home>}></Route>
      <Route path = '/about' element = {<AboutUs></AboutUs>}></Route>
      <Route path = '/contact' element = {<Contact></Contact>}></Route>
    </Routes>
  )
}

export default App
