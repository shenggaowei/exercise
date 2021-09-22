namespace v4 {
    interface SquareConfig {
        color?:string;
        width?:number;
       // [propName:string] : any;
    }

    function createSquare(config: SquareConfig) : {color: string; area: number} {
        return 
    }

    // 1 类型断言确定变量类型，绕过检查
    let mySquare = createSquare({colour:'red', width:100} as SquareConfig)

    //2 新增签名索引

    //3 将一个对象赋值给另一个变量,因为mySquare不会经过额外的属性检查
    let mySquareVar2 = {colour:'blue',width:100};
    let myVariable3 = {height:'100',width:200}
    let mySquare2 = createSquare(myVariable3)
}

