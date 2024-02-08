function password(obj){
    const sizeOfYear = obj.birthYear.toString().length;

    if((!Object.hasOwn(obj, 'name')) || (!Object.hasOwn(obj, 'siteName')) || (!Object.hasOwn(obj, 'birthYear')) || (sizeOfYear !== 4)){
        return "invalid";
    }

    const capitalizeSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.substring(1);

    const generatedPassword = capitalizeSiteName + "#" + obj.name + "@" + obj.birthYear;
    return generatedPassword;
}

const passwordInfo = { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }; 
// const passwordInfo = { name: "rahat" , birthYear: 2002, siteName: "Facebook" } ; 
// const passwordInfo = { name: "toky" , birthYear: 200, siteName: "Facebook" }; 
// const passwordInfo = { name: "maisha", birthYear: 2002 } ;

const result = password(passwordInfo);
console.log(result);