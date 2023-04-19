import './App.css';
import Calendar from "./Calendar";
import Footer from "./Footer";

function App() {
    return (
        <div className="App d-flex flex-column">
                <div className="bg-dark flex-grow-1">
                <div className="container pt-lg-3 w-75 h-100">
                    <div className="calendar-container"><Calendar/></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
