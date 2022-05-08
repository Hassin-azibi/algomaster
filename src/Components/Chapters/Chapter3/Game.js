import Cards from './Cards';
import { Routes, Route, Link } from "react-router-dom";
import './cards.css';

function Game() {
    return (
        <div className="App">
            <h1>Your reward: Concentration game</h1>
            <Cards />
        
            <div style={{ width: "100px", left: "100px"  }} >
                <nav>
                    <Link to="/Chapters" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                 </nav>
            </div>
        </div>
    );
}

export default Game;