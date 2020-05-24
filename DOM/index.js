 window.onload = function(){
     const elementMain = this.document.getElementById('main');
    elementMain.style.color = "blue";

    //for single element
  /*  const buttonElement = this.document.querySelector("button");
    buttonElement.addEventListener('click', e =>{
        console.log(e);
    })
    */

    //for > 1 element with  matching tag
    const buttonElements = this.document.querySelectorAll("button");

    const clickHandle = e => {
        console.log(e.target.innerHTML);
    }

    buttonElements.forEach( buttonElement =>{
        buttonElement.addEventListener('click', clickHandle)
    });

    //removeEventListener
    setTimeout(()=>{
        console.log("removed events");
        buttonElements.forEach( buttonElement =>{
            buttonElement.removeEventListener('click', clickHandle)
        });
    },10000);
   
 }