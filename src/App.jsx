import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home'
import HomeLayout from './layout/HomeLayout'
import RecetaDetailContainer from './components/RecetaDetailContainer/RecetaDetailContainer'
import Sigin from './pages/Sigin'
import NavBar from './components/NavBar/NavBar'
import Protected from "./pages/Protected"
import FormularioPosteo from './pages/FormularioPosteo'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
        <BrowserRouter>
            <AuthContextProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<HomeLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/receta-detail/:id" element={<RecetaDetailContainer/>}/>
                        <Route path="/sigin" element={<Sigin/>}/>
                        <Route path="/postear" element={<Protected><FormularioPosteo/></Protected>}/>
                    </Route>
                </Routes>
                <Footer/>
            </AuthContextProvider>
        </BrowserRouter>
  )
}

export default App
