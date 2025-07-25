import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { MobileCTA } from "@/components/mobile-cta";
import Landing from "@/pages/landing";
import Search from "@/pages/search";
import Vault from "@/pages/vault";
import Workbook from "@/pages/workbook";
import Booking from "@/pages/booking";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/search" component={Search} />
      <Route path="/vault" component={Vault} />
      <Route path="/workbook" component={Workbook} />
      <Route path="/booking" component={Booking} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Router />
          <MobileCTA />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
