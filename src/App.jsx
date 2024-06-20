import React from 'react'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';




export default function App() {
  
 function PageOutlet() {
  
   return (
     <>
      <Header />
      <Outlet />
     </>
   );
 }

 const Routes = createBrowserRouter([
  {
    path: "/",
    element: <PageOutlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: (
      <>
      <Header />
      <Footer />
      </>
    ),
  },
 ]);

 return(
  <div>
    <RouterProvider router={Routes}></RouterProvider>
  </div>
 );
}


