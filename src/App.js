import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Group from './Components/Group';
import Meal from './Components/Meal';
import Layout from './Components/Layout';


function App() {
  const routing = createHashRouter([
    {path: "",
    element: <Layout/>,
    children: [{ index: true,element:<Group/>},
    { path: "meal/:id", element: <Meal /> },

  ],
},
]);
  return (<>
  <RouterProvider router={routing} />
    </>
    
  );
}

export default App;
