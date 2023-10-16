import React, { Component, useState } from 'react'

function Game (){

    const [checkWord, setCheckWord] = useState('');
    const [word, setWord] = useState([]);


    function randomCommand(){
        const command = ["pull", "branch", "checkout", "init", "add", "remote"]

        var i = Math.floor(Math.random() * command.length)

        return(command[i])
    }

    function GoCheckWord(letter){
        alert(`UwU : ${letter}`);
    }
    

    return (
        <div>
            <h3> git {randomCommand()} </h3>

            <form onSubmit={() => GoCheckWord(checkWord)}>
                <input type="text" className=' input-group-text' onChange={(e) => setCheckWord(e.target.value)} />
            </form>
        </div>
    )
}
export default Game;