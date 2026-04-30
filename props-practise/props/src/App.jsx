import React from 'react'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/About'
import Login from './components/Login'
import { Routes,Route } from 'react-router-dom'
import ProtectedRoute from './components/protectedRoute'






const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Login/>}/>


    <Route path='/home' element={
      <ProtectedRoute>

        <Home/>
      </ProtectedRoute>
      } />
  

    <Route path='/about' element={
      <ProtectedRoute>

        <About/>
      </ProtectedRoute>
      }/>
    <Route path='/contact' element={
      <ProtectedRoute>

        <Contact/>
      </ProtectedRoute>
      } />
  </Routes>
  )
}

export default App





// import Form from './components/Form'
// import image from "./assets/image.jpg";
// import Count from './components/Count';
// import LoginForm from './components/LoginForm ';
// import Cond from './components/Cond';

// const App = () => {
//  const users = [
//   {
//     img: image,
//     name: "Ali",
//     email: "ali@gmail.com",
//     passwd: "123",
//     btn: "Submit Ali"
//   },
//   {
//     img: image,
//     name: "Sara",
//     email: "sara@gmail.com",
//     passwd: "456",
//     btn: "Submit Sara"
//   }
// ];
//   return (
//     <div>
//  <div style={{ display: "flex", flexDirection:"row",justifyContent:"center",gap:"50px" , flexWrap: "wrap" }}>
//   {users.map((user, index) => (
//     <Form key={index} pp={user} />
//   ))}
// </div>
//     {/* <Count/> */}
//     {/* <LoginForm/> */}
//     <Cond/>
//     </div>
//   )
// }

// export default App
