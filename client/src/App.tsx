import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import PerihilarCCA from "@/pages/PerihilarCCA";
import IntrahepaticCCA from "@/pages/IntrahepaticCCA";
import Outcomes from "@/pages/Outcomes";
import SureLT from "@/pages/SureLT";
import FutureDirections from "@/pages/FutureDirections";
import References from "@/pages/References";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/perihilar"} component={PerihilarCCA} />
      <Route path={"/intrahepatic"} component={IntrahepaticCCA} />
      <Route path={"/outcomes"} component={Outcomes} />
      <Route path={"/sure-lt"} component={SureLT} />
      <Route path={"/future"} component={FutureDirections} />
      <Route path={"/references"} component={References} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
