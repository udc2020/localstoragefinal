// get all colors 
const colors = document.querySelectorAll('.color')

for (let color of colors) {

    color.addEventListener('click',()=>{
        let changeColorTo =  color.dataset.color 
        let storeToLocall = localStorage.setItem('color',changeColorTo) 
        document.documentElement.style.setProperty('--primary',changeColorTo)
        
    })

}
let getFromStoreg = localStorage.getItem('color')
document.documentElement.style.setProperty('--primary',getFromStoreg)
