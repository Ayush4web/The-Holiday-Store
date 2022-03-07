const list = document.querySelectorAll('.item')
const btnList = document.querySelectorAll('.list-group-item')

const handle = (id) => {
 for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("active")
   
 }
 for (let i = 0; i < btnList.length; i++) {
    btnList[i].classList.remove("actv")
   
 }
 
 list[id-1].classList.add("active")
 btnList[id-1].classList.add("actv")
}
