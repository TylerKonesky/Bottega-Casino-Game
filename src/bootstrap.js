class Gambler{
    constructor(startingValue){
        this.startingValue = startingValue;
        this.addedFunds = 0
        this.currentValue = this.startingValue + this.addedFunds
    }
    addFunds(addedMoney){
        this.addedFunds += addedMoney
        this.currentValue += addedMoney
        
    }
}

const playerOne = new Gambler(100)
playerOne.addFunds(Number(250))

console.log(playerOne)

function rollSlots(){
    const row1 = Array.from({length: 3}, () => Math.ceil(Math.random() * 6));  
    const row2 = Array.from({length: 3}, () => Math.ceil(Math.random() * 6));  
    const row3 = Array.from({length: 3}, () => Math.ceil(Math.random() * 6));  
    
    const slot = `
                ${row1[0]}     ${row1[1]}     ${row1[2]}

                ${row2[0]}     ${row2[1]}     ${row2[2]}
                
                ${row3[0]}     ${row3[1]}     ${row3[2]}`
                
    alert(slot)
    
    if(row1[0] == row1[1] && row1[0] == row1[2]){
        console.log(1, "WINNER")
    }else if(row2[0] == row2[1] && row2[0] == row2[2]){
        console.log(2, "WINNER")
    }else if(row3[0] == row3[1] && row3[0] == row3[2]){
        console.log(3, "WINNER")
    }
    else if(row1[0] == row2[0] && row1[0] == row3[0]){
        console.log(4, "WINNER")
    }else if(row1[1] == row2[1] && row1[1] == row3[1]){
        console.log(5, "WINNER")
    }else if(row1[2] == row2[2] && row1[2] == row3[2]){
        console.log(6, "WINNER")
    }else if(row1[0] == row2[1] && row1[0] == row3[2]){
        console.log(6, "WINNER")
    }else if(row1[2] == row2[1] && row1[2] == row3[0]){
        console.log(6, "WINNER")
    }else{
        console.log("YOU LOSE")
    }
        
}

rollSlots()