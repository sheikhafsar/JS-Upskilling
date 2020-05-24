
window.onload = function(){

    const addButton = this.document.getElementById('add-button');
    const addInput = this.document.getElementById('add-input');
    const listHead = this.document.getElementById('list');

    const finishTask = (e) =>{
        if(e.target.checked){
            e.target.setAttribute('class','strike');
        }else{
            e.target.removeAttribute('class');
        }
    }

    const addItem = (e) =>{
        let inputValue = addInput.value;
        
        if(!inputValue)
            return;
        
        const template = this.document.getElementById('template');
        const clone = this.document.importNode(template.content,true);
        clone.querySelector('span').textContent=inputValue;
        clone.querySelector('input').addEventListener('click', finishTask);
        listHead.appendChild(clone);
        addInput.value="";
    }

    addButton.addEventListener('click',addItem);
}