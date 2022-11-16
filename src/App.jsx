import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home'
import HomeLayout from './layout/HomeLayout'
import RecetaDetail from './components/RecetaDetail/RecetaDetail'
import Sigin from './pages/Sigin'
import NavBar from './components/NavBar/NavBar'
import Protected from "./pages/Protected"
import FormularioPosteo from './pages/FormularioPosteo'

function App() {
  
  return (
        <BrowserRouter>
            <AuthContextProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<HomeLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/receta-detail/:id" element={<RecetaDetail/>}/>
                        <Route path="/sigin" element={<Sigin/>}/>
                        <Route path="/postear" element={<Protected><FormularioPosteo/></Protected>}/>
                    </Route>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
  )
}

export default App
