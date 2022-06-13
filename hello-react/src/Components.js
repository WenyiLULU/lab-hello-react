import ironhackLogo from "./images/ironhack-logo-xs.png"
import menuTop from "./images/menu-top-xs.png"
import icon1 from "./images/icon1.png" 
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function Component(){
    return (
        <div>
            <div className="header">
                <div className="navbar">
                    <div><img src={ironhackLogo} alt="Ironhack Logo" /></div>
                    <div><img src={menuTop} alt="Menu Top" /></div>
                </div>
                <h1> Say hello to ReactJS</h1>
                <p>You will learn how to use</p>
                <p>the most popular frontend library</p>
                <p>and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
            <div className="elements">
                <div className="card">
                    <div><img src={icon1} alt="icon1"/></div>
                    <h4>Declarative</h4>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className="card">
                    <div><img src={icon2} alt="icon2"/></div>
                    <h4>Components</h4>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div className="card">
                    <div><img src={icon3} alt="icon3"/></div>
                    <h4>Single-Way</h4>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>
                <div className="card">
                    <div><img src={icon4} alt="icon4"/></div>
                    <h4>JSX</h4>
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
        
    )
    
}

export default Component;