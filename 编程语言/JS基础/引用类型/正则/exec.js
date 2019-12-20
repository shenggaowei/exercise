{
    let text = 'cat, bat, sat, fat'
    let pattern1 = /([a-zat,\s])*/g
    let result = pattern1.exec(text)
    console.log(result);
}

{
    let text2 = 'cat, bat, sat, fat'
    let pattern2 = /.at/g
    let result1 =  pattern2.exec(text2)
    let result2 =  pattern2.exec(text2)
    console.log(result1);
    console.log(result2);
    console.log(pattern2.lastIndex)
}



