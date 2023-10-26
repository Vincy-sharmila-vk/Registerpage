import './App.css';
import Crud from './Components/Crud';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Register from './Components/Register';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';




const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Crud/>}/>
          <Route path='register' element={<Register/>}/>

      </Route>
  )
)
function App() {
  return (
    <div className="App">
               <RouterProvider router={router}/>

    </div>
  );
}

export default App;
