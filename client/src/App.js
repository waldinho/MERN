import React from "react";
import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

const App = () => {
 return (
   <div>
    <Provider store={store}>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
    </Provider>
   </div>
 );
};

export default App;