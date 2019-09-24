// We are building a casino!
// You are to build one casino game, black jack, slots, roulette, etc, ( these are the ones I have seen built out before.)
// requirements
// Build the game. *** Completed
// Push individual commits to github. *** Completed
// In addition,
// the player will have a wallet, they can add money to the wallet, any winnings they get will be added to the wallet. ** Completed
// If the wallet goes empty they must add more money or they have to stop playing.
// They need to be able to stop playing and cash out the wallet at anytime. (bonus if the cash out proccess tells them if they made a profit or not)
// let the player set the dollar/cents amount of the bet (in the game).
// let them continue playing as long as they have money or decide to cash out.

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
    if(playerOne.currentValue <= 4){
        const newMoney = Number(prompt("You do not have enough money to keep playing. Please add more to coninue playing! (min $100)"))
        if(newMoney >= 100){
            playerOne.addFunds(newMoney)
            whatToDo()
        }else{
            const lastCall = prompt("You must add more money! Press 1 to add more funds or press 2 to Cash out!")
            if(lastCall == 1){
                whatToDo()
            }else if(lastCall == 2){
                if(playerOne.currentValue > playerOne.startingValue + playerOne.addedFunds){
                    alert(`Congratulations! You won a whopping total of $${playerOne.currentValue - (playerOne.startingValue + playerOne.addedFunds)} please come again soon!`)
                    return("Game Over")
                }else if(playerOne.currentValue < playerOne.startingValue + playerOne.addedFunds){
                    alert(`We're sorry! You lost a whopping total of $${-1*(playerOne.currentValue - (playerOne.startingValue + playerOne.addedFunds))} please come again soon!`)
                    return("Game Over")
                }
            }
        }
    }else{
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
                return("Game Over")
            }else if(playerOne.currentValue < playerOne.startingValue + playerOne.addedFunds){
                alert(`We're sorry! You lost a whopping total of $${playerOne.currentValue - (playerOne.startingValue + playerOne.addedFunds)} please come again soon!`)
                return("Game Over")
            }

        }else{
            alert("Invalid Selection")
            whatToDo()
        }
    }
}
    

function rollSlots(){
    const bet = Number(prompt('How much would you like to wager?(Min of $5)'))
    const winLose = ""

    let slotImages = {
        1: ' :) ',
        2: ' # ', 
        3: ' * ', 
        4: ' & ', 
        5: ' @ ',
        6: ' % ',
        7: ' 7 ' 
    }

    if(bet <= playerOne.currentValue){
        if(bet >= 5){
            const row1 = Array.from({length: 3}, () => Math.ceil(Math.random() * 7));  
            const row2 = Array.from({length: 3}, () => Math.ceil(Math.random() * 7));  
            const row3 = Array.from({length: 3}, () => Math.ceil(Math.random() * 7));  
    
            const slot = `
                        ${slotImages[row1[0]]}     ${slotImages[row1[1]]}     ${slotImages[row1[2]]}

                        ${slotImages[row2[0]]}     ${slotImages[row2[1]]}     ${slotImages[row2[2]]}

                        ${slotImages[row3[0]]}     ${slotImages[row3[1]]}     ${slotImages[row3[2]]}`

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