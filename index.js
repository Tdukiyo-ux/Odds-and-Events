//1.	State — three arrays: bank, odds, evens
//2.	Functions — addNumber(), sortOne(), sortAll()
//3.	Components — form, number bank, odds bucket, evens bucket
//4.	Render function — rerenders everything when state changes
//∙	User adds a number → update state → rerender
//∙	User clicks Sort 1 → update state → rerender
//∙	User clicks Sort All → update state → rerender


const state = {
        bank: [],
        odds: [],
        evens: [],
}


function addNumber(number){
    state.bank.push(number)
     render(state)
 }



function sortOne(){
    const number = state.bank.shift() 
    if ( number % 2 === 0){
         state.evens.push(number)
    }
    else {
        state.odds.push(number)
    }
    render(state)
}
//to remove the first item from the array to get a value use shift
// sortOne doesn’t need any parameters — it uses state directly since it’s a global variable, and shift() doesn’t need an argument

function sortAll(){
    while (state.bank.length > 0){
        sortOne()
    }
}

function Form() {
    const $form = document.createElement('div')
    $form.innerHTML = `
    <input id="numberInput" type="number" placeholder="enter a number"/> 
    <button id="addbutton">Add number</button>
    `
$form.querySelector('#addbutton') .addEventListener('click', () => {
    const input = $form.querySelector('#numberInput')
    addNumber(Number(input.value))
    input.value = ''
})
return $form
}

function Bank(bank){
    const $bank = document.createElement('div')
    $bank.innerHTML = '<h2>Number Bank</h2>'
    
    bank.forEach((number) => {
        const $number = document.createElement('p')
        $number.textContent = number
        $bank.append($number)
    })

    return $bank
}

function Even(evens){
    const $evens = document.createElement('div')
    $evens.innerHTML = '<h2>evens</h2>'

    evens.forEach((number) =>{
        const $number = document.createElement('p')
        $number.textContent = number
        $evens.append($number)
    })

    return $evens
}

function Odd(odds){
    const $odds = document.createElement('div')
    $odds.innerHTML = '<h2>odds</h2>'

    odds.forEach((number) =>{
        const $number = document.createElement('p')
        $number.textContent = number
        $odds.append($number)
    })

    return $odds
}

function render(state) {
  const $app = document.querySelector('#app')

  $app.innerHTML = `
    <h1>Odds and Evens</h1>
    <div id="form"></div>
    <div id="controls"></div>
    <div id="bank"></div>
    <div id="odds"></div>
    <div id="evens"></div>
  `

  $app.querySelector('#form').replaceWith(Form())
  $app.querySelector('#controls').replaceWith(Controls())
  $app.querySelector('#bank').replaceWith(Bank(state.bank))
  $app.querySelector('#odds').replaceWith(Odds(state.odds))
  $app.querySelector('#evens').replaceWith(Evens(state.evens))
}

render(state)


function Controls(){
    const $controls = document.createElement('div')
    $controls.innerHTML = `
    <button id="sortOne">Sort 1</button>
    <button id="sortAll">Sort All</button>
    `
    $controls.querySelector('#sortOne').addEventListener('click', () => {
        sortOne()
    })

    $controls.querySelector('#sortAll').addEventListener('click', () => {
        sortAll()
    })

    return $controls 
}



//$ before a variable name is just a convention (a naming habit) that developers use to indicate that a variable holds a DOM element.