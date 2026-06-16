import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";

import { BusRoutes } from "./pages/routes/routes";
import { RoutePS1 } from "./pages/routes/ps1";
import { Route855 } from "./pages/routes/855";

import { Layout } from "./components/layout";

import "./styles/main.css";

function App() {

  return (

    <main className="dark text-foreground bg-[#191919]">

      <Routes>

        {/* Dashboard */}
        <Route path="/" element={<Layout><Home /></Layout>} />

        <Route path="/routes">
          <Route path="" element={<Layout><BusRoutes /></Layout>} />
          <Route path="ps1" element={<Layout><RoutePS1 /></Layout>} />
          <Route path="855" element={<Layout><Route855 /></Layout>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </main>

  )

}

export default App