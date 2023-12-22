let inp=document.getElementById("i")
let task=document.getElementById("list_con")

function add(){
    if(inp.value===""){
        alert("Empty list Enter Something.....")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inp.value
        task.appendChild(li)
        let span=document.createElement('span')
        
    span.innerHTML=`\u00d7`
    li.appendChild(span)
    }
    inp.value=''
    store_data()
}
task.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        store_data()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
      store_data()
    }

},false);

function store_data(){
  localStorage.setItem("data",task.innerHTML)
}
function show_data(){
    task.innerHTML=localStorage.getItem("data")
}
show_data()