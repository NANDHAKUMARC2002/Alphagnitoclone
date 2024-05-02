import { BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "../pages/Home"
import AboutPage from "../pages/AboutPage";



const AppRoute =()=> {
    return(
        <BrowserRouter>
            <Routes>
            
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutPage/>}/>
              
              
                
                
                

                
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;