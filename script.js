document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtaks input').ariaValueMax.lenght == 0){
        alert("Please Enter a Task")
    }
else{
    document.querySelector('#taks').innerHTML +=
        <div class="taks">
            <span id="taksname">
                ${document.querySelector('#newtaks input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        ;

        var current_taks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

    var tasks = document.querySelectorAll(".task")
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
   
    document.querySelector("#newtask input").value = "";  
 }
}