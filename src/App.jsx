import Homepage from "./pages/Homepage";
import Response from "./pages/Response";
import { BrowserRouter ,Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/barchart" element={<Homepage></Homepage>}></Route>
      <Route exact path="response" element={<Response></Response>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
