import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>{" "}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
