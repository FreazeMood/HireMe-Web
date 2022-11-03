import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/landing";
import Messages from "./views/messages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
