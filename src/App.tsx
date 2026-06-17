import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { FAQs } from "./pages/faqs";
import { Committee } from "./pages/committee";
import { AssociationRules } from "./pages/association_rules";
import { Membership } from "./pages/membership";
import { ContactUs } from "./pages/contact_us";

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

        <Route path="/faqs" element={<Layout><FAQs /></Layout>} />
        <Route path="/committee" element={<Layout><Committee /></Layout>} />
        <Route path="/association-rules" element={<Layout><AssociationRules /></Layout>} />
        <Route path="/membership" element={<Layout><Membership /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />

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