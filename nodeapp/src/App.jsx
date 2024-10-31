import { useState } from "react";
import arfLogo from './images/icon48.png'
import './App.css'

function App() {
    let a = 15; // {} kullanarak return içine javascript kodları yerleştirebiliriz. 
    // return içine html dışına javascript yazılır.
    return (
        <div id="root"><p>Arfhe Wallet</p>
            a değeri {a}

        </div>
    )

}

export default App // Export etmeden başka bir componenentler kullanabilsin diye