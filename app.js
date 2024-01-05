let btnSuccess = document.querySelector('.success')
let btnWarning = document.querySelector('.warning')
let btnError = document.querySelector('.error')
let list = document.querySelector('#notification')
let toast = document.querySelector('.toast')

let arrStatus =[`<div class="toast toast-success">
<i class="fa-solid fa-circle-check"></i>
<span>This is a success message</span>
<span class="time-line"></span>
</div>`, `       <div class="toast toast-warning">
<i class="fa-solid fa-triangle-exclamation"></i>
<span>This is a warning message</span>
<span class="time-line"></span>
</div>`,`<div class="toast toast-error">
<i class="fa-solid fa-circle-exclamation"></i>
<span>This is a error message</span>
<span class="time-line"></span>
</div>`]
console.log(arrStatus)

btnSuccess.addEventListener('click',function(){
    // let status = 1
    // arrStatus.push(status)
    // console.log(arrStatus)
    // arrStatus=[]
    list.innerHTML=''
    list.innerHTML +=`<div class="toast toast-success">
    <i class="fa-solid fa-circle-check"></i>
    <span>This is a success message</span>
    <span class="time-line"></span>
</div>`
})

btnWarning.addEventListener('click',function(){
    // let status = 2
    // arrStatus.push(status)
    // arrStatus=[]
    // console.log(arrStatus)
  
    list.innerHTML =`       <div class="toast toast-warning">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span>This is a warning message</span>
    <span class="time-line"></span>
</div>`
})
btnError.addEventListener('click',function(){
    // let status = 3
    // arrStatus.push(status)
    // arrStatus=[]
    // console.log(arrStatus)
    
    list.innerHTML =`<div class="toast toast-error">
    <i class="fa-solid fa-circle-exclamation"></i>
    <span>This is a error message</span>
    <span class="time-line"></span>
</div>`
})