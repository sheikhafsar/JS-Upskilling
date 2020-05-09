const x = () =>{
    let i = 0;

    const returnX = () =>{
        console.log(i);
    };

    return {
        returnX
    }
};

x().returnX();

//application of closure - implement counter

const counter = () => {
    let i = 0;

    const add = (val) =>{
        i += val;
    }

    const subtract = (val) =>{
        i -= val;
    }

    const print = () =>{
        return i;
    }

    return{
        add,
        subtract,
        print
    }
};

const outerCounter = counter();

console.log(outerCounter);

outerCounter.add(2);

console.log(outerCounter.print());