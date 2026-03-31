let Addtocart = ()=>{
    let n = document.getElementById("cartcount");
    let count = Number(n.innerText)
    count+=1;
    n.innerText = count
}