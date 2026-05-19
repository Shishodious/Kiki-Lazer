import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { SiteContentProvider } from "./context/SiteContentContext";

const StudioPage = lazy(() => import("./pages/StudioPage"));

export default function App() {
  const location = useLocation();
  const isStudioRoute = location.pathname.startsWith("/studio");

  return (
    <SiteContentProvider>
      {!isStudioRoute ? <Loader /> : null}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/studio/*"
          element={
            <Suspense fallback={<div className="studio-shell" />}>
              <StudioPage />
            </Suspense>
          }
        />
      </Routes>
    </SiteContentProvider>
  );
}
