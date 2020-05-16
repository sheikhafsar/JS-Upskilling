
//async fun always return promise
const apiCall = async () => {

    try{
        const response = await fetch('https://api.github.com/users/sheikhafsar');
        return response.json();
    }catch(error){
        console.log("Error");
    }
    
};

apiCall().then((profile)=>{
    console.log(profile);
});