import './App.css'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Header from './Components/header'
import NavBar from './Components/navBar'
import ReviewContainer from './Components/reviewContainer'
import Homepage from './Components/homepage'
import Review from './Components/review'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/reviews" element={<ReviewContainer/>}/>

    <Route path="/reviews/:review_id" element={<Review/>}/>
    </Routes>
    
    
    </BrowserRouter>


    
  )
}

export default App
