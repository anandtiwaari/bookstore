import AllBooks from "./components/AllBooks";
import Favourite from "./components/Favourite";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>

      {/* <Card /> */}
    </div>
  );
};

export default App;
