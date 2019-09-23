class Gambler{
    constructor(startingValue){
        this.startingValue = startingValue;
        this.addedFunds = 0
        this.currentValue = this.startingValue + this.addedFunds
    }
    addFunds(addedMoney){
        this.addedFunds += addedMoney
        this.currentValue += addedMoney
        alert("Funds Added!")
        
    }
}

const playerOne = new Gambler(Number(prompt('Welcome Fella, please enter your initial deposit!')))



function whatToDo(){
    alert(`Welcome Player 1, your current balance is $${playerOne.currentValue}`)
    const toDo = prompt("What would you like to do? 1: Check Balance, 2: Add Money, 3: Play the Slot Machine 4: Cash Out")
    if(toDo == 1){
        alert(`Your current balance is $${playerOne.currentValue}`)
        whatToDo()
    }else if(toDo == 2){
        const addMoney = Number(prompt("How much would you like to add? (min $100)"))
        if(addMoney >= 100){
            playerOne.addFunds(addMoney)
            whatToDo()
        }else{
            prompt("You must add at least $100 in order to deposit funds!")
            whatToDo()
        }   
    }else if(toDo == 3){
        rollSlots()
        whatToDo()

    }else if(toDo == 4){
        if(playerOne.currentValue > playerOne.startingValue + playerOne.addedFunds){
            alert(`Congratulations! You won a whopping total of $${playerOne.currentValue - (playerOne.startingValue + playerOne.addedFunds)} please come again soon!`)
        }else if(playerOne.currentValue < playerOne.startingValue + playerOne.addedFunds){
            alert(`We're sorry! You lost a whopping total of $${playerOne.currentValue - (playerOne.startingValue + playerOne.addedFunds)} please come again soon!`)
        }

    }else{
        alert("Invalid Selection")
        whatToDo()
    }
    

}

function rollSlots(){
    const bet = Number(prompt('How much would you like to wager?(Min of $5)'))
    const winLose = ""

    if(bet <= playerOne.currentValue){
        if(bet >= 5){
            const row1 = Array.from({length: 3}, () => Math.ceil(Math.random() * 7));  
            const row2 = Array.from({length: 3}, () => Math.ceil(Math.random() * 7));  
            const row3 = Array.from({length: 3}, () => Math.ceil(Math.random() * 7));  
    
            const slot = `
                        ${row1[0]}     ${row1[1]}     ${row1[2]}

                        ${row2[0]}     ${row2[1]}     ${row2[2]}

                        ${row3[0]}     ${row3[1]}     ${row3[2]}`

            alert(slot)
    
            if(row1[0] == row1[1] && row1[0] == row1[2]){
                if(row1[0] == 7){
                    alert("YOU WON THE JACKPOT OF $5000!!!")
                    playerOne.currentValue += 5000
                    whatToDo()
                }else{
                    alert(`YOU WON $${bet * 7}!!!`)
                    playerOne.currentValue += (bet * 7)
                    whatToDo()
                }
            }else if(row2[0] == row2[1] && row2[0] == row2[2]){
                if(row2[0] == 7){
                    alert("YOU WON THE JACKPOT OF $5000!!!")
                    playerOne.currentValue += 5000
                    whatToDo()
                }else{
                    alert(`YOU WON $${bet * 7}!!!`)
                    playerOne.currentValue += (bet * 7)
                    whatToDo()
                }
            }else if(row3[0] == row3[1] && row3[0] == row3[2]){
                if(row3[0] == 7){
                    alert("YOU WON THE JACKPOT OF $5000!!!")
                    playerOne.currentValue += 5000
                    whatToDo()
                }else{
                    alert(`YOU WON $${bet * 7}!!!`)
                    playerOne.currentValue += (bet * 7)
                    whatToDo()
                }
            }
            else if(row1[0] == row2[0] && row1[0] == row3[0]){
                if(row1[0] == 7){
                    alert("YOU WON THE JACKPOT OF $5000!!!")
                    playerOne.currentValue += 5000
                    whatToDo()
                }else{
                    alert(`YOU WON $${bet * 7}!!!`)
                    playerOne.currentValue += (bet * 7)
                    whatToDo()
                }
            }else if(row1[1] == row2[1] && row1[1] == row3[1]){
                if(row1[1] == 7){
                    alert("YOU WON THE JACKPOT OF $5000!!!")
                    playerOne.currentValue += 5000
                    whatToDo()
                }else{
                    alert(`YOU WON $${bet * 7}!!!`)
                    playerOne.currentValue += (bet * 7)
                    whatToDo()
                }
            }else if(row1[2] == row2[2] && row1[2] == row3[2]){
                if(row1[2] == 7){
                    alert("YOU WON THE JACKPOT OF $5000!!!")
                    playerOne.currentValue += 5000
                    whatToDo()
                }else{
                    alert(`YOU WON $${bet * 7}!!!`)
                    playerOne.currentValue += (bet * 7)
                    whatToDo()
                }
            }else if(row1[0] == row2[1] && row1[0] == row3[2]){
                if(row1[0] == 7){
                    alert("YOU WON THE JACKPOT OF $5000!!!")
                    playerOne.currentValue += 5000
                    whatToDo()
                }else{
                    alert(`YOU WON $${bet * 7}!!!`)
                    playerOne.currentValue += (bet * 7)
                    whatToDo()
                }
            }else if(row1[2] == row2[1] && row1[2] == row3[0]){
                if(row1[2] == 7){
                    alert("YOU WON THE JACKPOT OF $5000!!!")
                    playerOne.currentValue += 5000
                    whatToDo()
                }else{
                    alert(`YOU WON $${bet * 7}!!!`)
                    playerOne.currentValue += (bet * 7)
                    whatToDo()
                }
            }else{
                alert("You lose, sorry!")
                playerOne.currentValue -= bet
                console.log(playerOne)
            }
        }
    }
    
        
}

whatToDo()
// rollSlots()