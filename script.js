console.log('hi');
const addButton=document.getElementById("addButton");
const inputBox=document.getElementById("inputBox");
const list=document.getElementById("list")
const clear=document.getElementById('clearButton');
const clearDiv=document.getElementById('clearDiv');
function add(){
    if(inputBox.value==''){
        
        alert("You must type what you want to add.");
    } else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        clearDiv.style.display="flex";
        saveData();
    }
    inputBox.value='';
    inputBox.focus();

    
}
list.addEventListener("click",function(x){
    if(x.target.tagName==="LI"){
        x.target.classList.toggle("checked");
        saveData();
    } else if(x.target.tagName==="SPAN"){
        x.target.parentElement.remove();
        console.log(list.innerHTML);
        console.log('');
        if(list.innerHTML.trim()===""){
            clearDiv.style.display='none';
        }
        saveData();
        inputBox.focus();
    }
})
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("addButton").click();
    }
    saveData();
  });
clear.addEventListener("click",function(x){
    list.innerHTML="";
    inputBox.focus();
    clearDiv.style.display="none";
    inputBox.value='';
    saveData();
})

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showList(){
    inputBox.focus();
    list.innerHTML=localStorage.getItem("data");
    if(list.innerHTML.trim()!==""){
        clearDiv.style.display='flex';
    }
}
showList();