const checkLenghtMin = (string,lenght) => {
    if(string.length >= lenght){
        return true;
    }
   return false;
}

const checkLenghtMax = (string,lenght) => {
    if(string.length <= lenght){
        return true;
    }
   return false;
}

const checkEmail = (string) => {

    if(string.includes('@') && string.includes('.')){

        let array = string.split('@');

        if(array.length != 2)
            return false;

        if(!checkLenghtMin(array[0],4) || !checkLenghtMin(array[1],4))
            return false;

        array = array[1].split('.');

        if(!checkLenghtMin(array[0],2) || !checkLenghtMin(array[1],2))
            return false;

        return true;
    }
   return false;
}

export {checkLenghtMin,checkLenghtMax,checkEmail};