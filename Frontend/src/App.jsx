import { Home } from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import AnimeDetails from "./pages/AnimeDetails";
export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:id" element={<AnimeDetails />} />
    </Routes>
  )
}