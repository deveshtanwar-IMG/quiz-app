import { BrowserRouter, Route, Routes } from "react-router-dom"
import Instruction from "./screens/Instruction/Instruction"
import Questions from "./screens/Question"
import Result from "./screens/Result/Result"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Instruction />} />
        <Route path="/questions" exact element={<Questions />} />
        <Route path="/result" exact element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App