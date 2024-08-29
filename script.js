function GeneratePassword(length,includelowercase,includeuppercase,includenumbers,includesymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "1234567890";
    const symbolsChars = "~!@#$%^&*+-_";
    
    let allowedChars = "";
    let password = "";

    if(includelowercase){
        allowedChars+=lowercaseChars;
    }
    if(includeuppercase){
        allowedChars+=uppercaseChars;
    }
    if(includenumbers){
        allowedChars+=numbersChars;
    }
    if(includesymbols){
        allowedChars+=symbolsChars;
    }
    else{
        allowedChars+=" ";
    }
    for(let i = 0 ; i<length; i++){
        const randindex = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randindex];
    }
    return password;
}

const passwordlength = 10;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = true;
const password = GeneratePassword(passwordlength,includelowercase,includeuppercase,includenumbers,includesymbols);
console.log(`Generated password: ${password}`);