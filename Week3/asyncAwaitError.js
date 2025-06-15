const makeError = () => {
    let i = 1;
    while( i <= 5){
        try{
            if(i%2 != 0){
                throw new Error("odd Number !");
            }
            console.log("Even Number !");
        }catch(error){
            console.log(error.Stack);
        }finally{
            console.log("....finally");
            i++;
        }
    }
};

makeError();