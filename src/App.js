import { useState } from "react";
import Header from "./components/header";
import Menu from  "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from  "./pages/history";
import Home from   "./pages/home";
import Library from  "./pages/library";
import Categoria from "./components/categoria";
import { UserStorage }  from "./context/UserContext";
import Login from "./pages/login";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return ( 
    <UserStorage>
      <BrowserRouter>
        <div className="App">
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/> 
            <Categoria/> 
            <div style={{ width:'100%', display: 'flex', }}>
                <Menu openMenu={openMenu} /> 
                <div style={{ width: '100%', padding:'55px 70px', boxSizing: 'border-box'}}>       
                  <Routes>
                    <Route path='/' element={<Home openMenu={openMenu}/>}/>
                    <Route path='/library' element={<Library/>}/>
                    <Route path='/history' element={<History/>} />
                    <Route path='/login' element={<Login/>} />
                  </Routes>
                </div>
            </div>
        </div>
     </BrowserRouter>
    </UserStorage>
  );
}
export default App;