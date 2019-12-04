{
    let reg = /(spider)?Man/ 
}

{
    let reg = /(\w+)\s(\w+)/
    var str = 'spider Man' 
    let result = reg.exec(str)
    console.log(result);
}

{
    let reg = /(\w+)\s(\w+)\s\1/
    var str = 'spider Man spider' 
    let result = reg.exec(str)
    console.log(result);
    

    let reg2 = /(\w+)\s(\w+)/
    var str2 = 'spider Man spider' 
    let replaceStr = str2.replace(reg2,'$2 $1')
    console.log(replaceStr);


    let reg = /(?:\w+)\s(\w+)\s\1/
    var str = 'spider Man spider' 
    let result = reg.exec(str)
    console.log(result);
    
}