import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout Component/Header";
import Sidebar from "./Layout Component/Sidebar";
import Footer from "./Layout Component/Footer";
import Dashboard from "./Components/dashboard";
import NoPage from "./Components/nopage";
import Cards from "./Components/Cards";
import { Home } from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="Cards" element={<Cards />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Home" element={<Home />} />
            <Route path="*" element={<NoPage />} />
            {/* <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route 
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route> */}
            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
