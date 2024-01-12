import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing css of the application
import "./Pages/App.css";

//importing react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//importing home page
import Home from "./Pages/Home";

//importing error page
import Error from "./Pages/Error";

//importing chat page
import Chat from "./Pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/** / route goes into home page*/}
          <Route exact path="/" element={<Home />}></Route>

          {/** /home route goes into home page */}
          <Route exact path="/home" element={<Home />}></Route>

          {/** /chat route goes into chat page*/}
          <Route exact path="/chat" element={<Chat />}></Route>

          {/** if any other routes then goes into error page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
