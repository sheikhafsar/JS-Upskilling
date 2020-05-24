
//this.document.cookie = "name=afsar";
//this.document.cookie = "age=23;path=/";

//method to create cookie

const setCookie = (key, value, days)=>{
    let date = new Date();
    date.setTime(date.getTime()+days*24*60*60*1000);
    console.log(`${key}=${value};expires=${date.toGMTString()}`);
    document.cookie=`${key}=${value};expires=${date.toGMTString()}`;
}
setCookie('dinner','pizza',2);
//console.log(this.document.cookie);