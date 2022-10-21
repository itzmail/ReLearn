import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
}

export default App;
