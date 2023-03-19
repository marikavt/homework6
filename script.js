// davaleba pirveli

// let btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor ='black'
//   btn.style.background = 'transparent'
// })



/////////////////////////////////////////////////

// davaleba meore

let input = document.getElementById('input')
let btn = document.getElementById('btn')

let value
input.addEventListener('change', () => {
  value = input.value
  btn.addEventListener('click', () => {
    if(value === 'red'){
      document.body.style.backgroundColor = 'red'
    }else if(value === 'blue'){
      document.body.style.backgroundColor = 'blue'
    }else if(value === 'green'){
      document.body.style.backgroundColor = 'green'
    }else if(value === 'black'){
      document.body.style.backgroundColor = 'black'
    }else if(value === 'white'){
      document.body.style.backgroundColor = 'white'
    }else{
      alert('enter one of the given colors')
    }
  })
})


