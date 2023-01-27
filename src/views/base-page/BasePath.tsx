import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import api from "../../api/api";
import CompilaRichiesta from "../pages/CompilaRichiesta";
import Homepage from "../pages/Homepage";
import PreventiviPage from "../pages/PreventiviPage";
import PreventivoPage from "../pages/PreventivoPage";

function BasePath() {
    return ( 
        <BrowserRouter>
        <Routes>
             <Route path={api.endpointsPage?.home} element={<Homepage />}></Route>
                   <Route path={api.endpointsPage?.preventivoPage} element={<PreventivoPage />}></Route>
                   <Route path={api.endpointsPage?.preventiviPage} element={<PreventiviPage />}></Route>
                   <Route path={api.endpointsPage.compilaRichiesta} element={<CompilaRichiesta />}></Route>
        </Routes>
        </BrowserRouter>
          
        
     );
}

export default BasePath;