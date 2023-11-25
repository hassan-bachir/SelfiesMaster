import { BrowserRouter } from "react-router-dom";
import {
    Navbar,
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Tech,
    Works,
} from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat">
                    <Navbar />
                    <Hero />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
