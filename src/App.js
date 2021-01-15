import pic from './pic.jpg';
import './App.css';
// import anime from "animejs";
// import Letterize from "letterizejs";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={pic} className="Daemr-bg" alt="daemr" />
                <h3 className="Typewriter-title">
                    I am Damaris Schmid.
                </h3>
                <a className="Typewriter-cs">
                    Computer Science Student.
                </a>
                <a className="Typewriter-dt">
                    Digital Troubleshooter.
                </a>
                <a className="Typewriter-pa">
                    Process Acrobat.
                </a>
                <a className="Mailaddress" href="mailto:schmid.damaris@bluewin.ch?Subject=Hi%20Damaris"
                   target="_top">Say hello!
                </a>
            </header>
        </div>
    );
}

export default App;
