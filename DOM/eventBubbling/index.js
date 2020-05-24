 window.onload = function(){
     const elementBody = this.document.getElementById('body');
     const elementMain = this.document.getElementById('main');
     const elementOne = this.document.getElementById('one');
     const elementTwo = this.document.getElementById('two');
     const submitButton = this.document.getElementById('submit');
     const submitThrottleButton = this.document.getElementById('submitThrottle');

    elementMain.style.color = "blue";


    //bubbling- diection fromm target to parent
    //capturing- direction from parent to target (need 3rd param set to true)
    elementMain.addEventListener('click',e =>{
        console.log("Main Clicked");
    });

    elementBody.addEventListener('click',e =>{
        console.log("Body Clicked");
    })

    elementOne.addEventListener('click',e =>{
        console.log("Element one Clicked");
    })
   
    elementTwo.addEventListener('click',e =>{
        console.log("Element two Clicked");
    })

    const debounce = (fn,delay) =>{
        let timeoutId;
        return function(...args){
            
            if(timeoutId)
                clearTimeout(timeoutId);

            timeoutId = setTimeout(()=>{
                fn(...args);
            },delay);
        }
    };

    //debounce - to eliminate multiple events occured on an element.
    submitButton.addEventListener('click', debounce(e =>{
        console.log("Submitted");
    },2000))


    const throttle = (fn, delay) =>{
        let last = 0;
        return (...args)=>{
            let now = new this.Date().getTime();

            if (now-last<delay)
                return;
            last = now;
            return fn(...args);
        }
    }

    submitThrottleButton.addEventListener('click',throttle(e =>{
        console.log("Throttle Clicked");
    },5000))
 }