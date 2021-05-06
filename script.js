let input=document.querySelector(".task-input");
let ul=document.querySelector(".task-list");
let lists=document.querySelectorAll(".task-list li");
for(let i=0;i<lists.length;i++){
    lists[i].addEventListener("dblclick",taskdeleter);
}
function taskdeleter(e){
    e.currentTarget.remove();
}


input.addEventListener("keypress",function(e){
    if(e.key=="Enter"){


        
        let task=input.value;
        if(task==""){
            alert("Error-Adding Empty List");
            return;
        }
        input.value="";
        let li=document.createElement("li");
        li.innerText=task;
        li.classList.add("tasklist-item")
        li.addEventListener("dblclick",taskdeleter);
        ul.insertBefore(li,ul.firstChild);
    }

})