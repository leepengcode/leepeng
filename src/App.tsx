import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    // <main>
    //   <img
    //     className="absolute top-0 right-0 opacity-60 -z-10"
    //     src={gradient}
    //     alt="bg-image"
    //   />

    //   <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63]-rotate-[30deg] -z-100"></div>
    //   <Header />
    //   <Hero />
    // </main>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<AuthApp />} /> */}
      </Routes>
    </Router>
  );
}

export default App; // ✅ This is required
