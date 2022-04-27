import { Route, Routes } from "react-router-dom";
import AddEvent from "./Components/Pages/Addevent/AddEvent";
import Admin from "./Components/Pages/Authorization/Admin/Admin";
import FormLogIn from "./Components/Pages/Authorization/Login/FormLogIn/FormLogIn";
import Register from "./Components/Pages/Authorization/Register/Register";
import Blogs from "./Components/Pages/Blogs/Blogs/Blogs";
import Donation from "./Components/Pages/Donation/Donation";
import Error from "./Components/Pages/Error/Error";
import Events from "./Components/Pages/Events/Events";
import Home from "./Components/Pages/Home/Home";
import RegisterList from "./Components/Pages/RagisterList/RegisterList";
import Header from "./Components/Sheared/Header/Header/header";
import RequireAuth from "./RequiredAuth/RequireAuth";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/donation"
          element={
            <RequireAuth>
              <Donation />
            </RequireAuth>
          }
        />
        <Route path="/events" element={<Events></Events>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="/login" element={<FormLogIn></FormLogIn>} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/admin" element={<Admin></Admin>}>
          <Route
            path="/admin/add-event"
            element={<AddEvent></AddEvent>}
          ></Route>
          <Route path="/admin" element={<AddEvent></AddEvent>}></Route>
          <Route path="/admin/registerList" element={<RegisterList />}></Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
