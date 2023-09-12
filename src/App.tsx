import {Menu} from "./components/menu/Menu.tsx";
import {Box} from "@radix-ui/themes";
import {Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./routes/Home.tsx";
import {FadeTransition} from "./components/animation/fade-transition/FadeTransition.tsx";
import {useState} from "react";
import {RechargePoints} from "./routes/RechargePoints.tsx";
import {PageUnderConstruction} from "./routes/PageUnderConstruction.tsx";
function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  
  return (
    <Box>
      <Menu />
       <FadeTransition
         displayLocation={displayLocation}
         onTransitionEnd={setDisplayLocation}
       >
         <Routes location={displayLocation}>
           <Route path="/" element={<Home />} />
           <Route path="/pontos-recarga" element={<RechargePoints />} />
           <Route path="/segmentos-e-solucoes" element={<PageUnderConstruction />} />
           <Route path="/loja-virtual" element={<PageUnderConstruction />} />
           <Route path="/contato" element={<PageUnderConstruction />} />
         </Routes>
       </FadeTransition>
    </Box>
  );
}

export default App
