import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { CategoryDetailPage } from "./pages/CategoryDetailPage";
import ConditionDetailPage from "./pages/ConditionDetailPage";
import { GamePage } from "./pages/GamePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import { TermsPage } from "./pages/legal/TermsPage";
import { PrivacyPage } from "./pages/legal/PrivacyPage";
import { MedicalDisclaimerPage } from "./pages/legal/MedicalDisclaimerPage";
import { AccessibilityPage } from "./pages/legal/AccessibilityPage";
import { SafetyGuidelinesPage } from "./pages/legal/SafetyGuidelinesPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="categories/:categoryId" element={<CategoryDetailPage />} />
            <Route path="categories/:categoryId/conditions/:conditionId" element={<ConditionDetailPage />} />
            <Route path="categories/:categoryId/conditions/:conditionId/games/:gameTitle" element={<GamePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="legal/terms" element={<TermsPage />} />
            <Route path="legal/privacy" element={<PrivacyPage />} />
            <Route path="legal/medical-disclaimer" element={<MedicalDisclaimerPage />} />
            <Route path="legal/accessibility" element={<AccessibilityPage />} />
            <Route path="legal/safety-guidelines" element={<SafetyGuidelinesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* Auth pages outside main layout */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
