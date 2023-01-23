import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import api from "../../api/api";
import Homepage from "../pages/Homepage";
import PreventivoPage from "../pages/PreventivoPage";

function BasePath() {
    return ( 
        <BrowserRouter>
        <Routes>
             <Route path={api.endpointsPage?.home} element={<Homepage />}></Route>
             <Route path={api.endpointsPage?.preventivoPage} element={<PreventivoPage />}></Route>
        </Routes>
        </BrowserRouter>
          
        
     );
}

export default BasePath;