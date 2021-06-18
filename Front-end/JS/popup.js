
function openPopup(id){
    var div = document.createElement("DIV");
    div.id=id;
    div.style.position = "fixed";
    div.style.width="100%"
    div.style.height="100vh"
    div.style.backgroundColor="#000"
    div.style.top = 0;
    div.addEventListener('click',()=>{
        div.remove()
    })
    document.body.appendChild(div);
    div.innerHTML=``;
}