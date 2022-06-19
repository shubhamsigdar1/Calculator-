//Required abilities(function) of a calculator
//accept user inputs of number
//accept decimal number
//store inputs
//recognize inputs abd perform calculation
//return a result

//optional features that mayan added:
//should accept longer arithmetic operation
//display the input as it is being entered
//store previous total as start of next operation
//clear buttin should clear all entries

//should prevent invalid inputs (operators next to each other, two decimal points)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event =>{
        const {target} = event;
        const {value} = target;
        if(!target.matches('button')){
            return;
        }else{
            //pass to parse method
            calculator.parseInput(value)//tell input where to go
            console.log(`thing is ${event}`)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){  //it going to take input and do particular action
        //have any of the "special button" been clicked
        switch (value){
            case '=' :
                //calculate the answer
                this.calcAnswer(this.displayText)
                break;
            case 'AC' :
                //clear screen and store value
                this.clearAll()
                break;
            case '.':
                if(this.displayText==0){
                    //pass '0.' into add text method
                    this.addText(0.)
                }else{
                    //add value to text string
                    this.addText(value)
                }
                break;
            case 'DEL':
                let del= this.displayText.slice(0, -1)
                this.outputText(del)
            default:
                this.addText(value)
                //add value to text string
                
            }

        },

        addText(value){
            if(this.displayText === '0'){ //display default value
                this.displayText = ''
            } else if( this.prevTotal != null){
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if(isNaN(+(value)) && isNaN(+(this.displayText))){ /*user has enter an invalid sequence don't proceed*/
                 if(isNaN(this.displayText.slice(-1))){
                    return; /*2.2.2 or 2.. problem*/ 
                 }
            }
            this.displayText += value //showup on screen or concatination
            //output dispay text to screen 
            this.outputText(this.displayText)
        },
        
        outputText(text){
            document.querySelector('.calculator-screen').value = text 
        },

        calcAnswer(equation){
             console.log(eval(equation))
             let result = eval(equation)
            // let result = Function("return" + equation)()//we passing a concatinated string i.e.say return equation of our expression 
            this.outputText(result)
        },
        clearAll(){ //clear the display
            this.displayText = '0',
            this.prevTotal = null,
            this.outputText(this.displayText)//back to 0
        },
      
}


    
