
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Consent from "./pages/Consent";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import ArticleAnxiety from "./pages/webapp/ArticleAnxiety";
import ArticleRelationships from "./pages/webapp/ArticleRelationships";
import ArticleDepression from "./pages/webapp/ArticleDepression";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/articles/anxiety" element={<ArticleAnxiety />} />
          <Route path="/articles/relationships" element={<ArticleRelationships />} />
          <Route path="/articles/depression" element={<ArticleDepression />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;