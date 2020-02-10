import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import ValidatedLoginForm from './ValidatedLoginForm';
function App() {
    return(
        <div className ="container">
            <div className="header">
                <div className="imgcontainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h1-ndFdLmk7IIzAoADDo1GqzkdAXqI48XTKKuDyhBe5ZEH-R&s" alt="Avatar" className="avatar"/>
                </div>
            </div>
            <ValidatedLoginForm/>
        </div>
    );
       
    
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

