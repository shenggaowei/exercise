// 替换src属性
{
    let str = '<img src="12345" />';
    let reg = /(?<=src=)"([^"]+)"/ig
    let str2 = str.replace(reg,'"www.baidu.com"')
    console.log(str2)
}

// 替换src属性为href
{
    let str = '<img src="12345" />';
    let reg = /src="([^"]+)"/ig
    let str2 = str.replace(reg,function($0,$1){
        console.log($0,$1);
        return `href="${$1}"`
    })
    console.log(str2)
}

// 交换属性值
{
    let str = '<img src="12345" data-src="67890" />';
    let str2 = str.replace(/(src=")([^"]+)("[\s\S]+data-src=")([^"]+)(")/ig,($0,$1,$2,$3,$4,$5)=>{
        console.log($0)
        console.log($1);
        console.log($2);
        console.log($3);
        console.log($4);
        console.log($5);
        return $1 + $4 + $3 + $2 + $5
    })
console.log(str2)
}