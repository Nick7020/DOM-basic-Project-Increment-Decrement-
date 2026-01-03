var inc=document.querySelector('#inc')
var dnc=document.querySelector('#dnc')
var h2=document.querySelector('h2')

count=0
inc.addEventListener('click',function(){
    count++
    h2.innerHTML=count
    h2.style.color='green'
})
dnc.addEventListener('click',function(){
    count--
    h2.innerHTML=count
    h2.style.color='red'
})









