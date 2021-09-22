namespace section1 {
    // section1 unionType
    function printId(id: number | string) {
        console.log('your id is:' + id)
    }

    printId(101);
    printId('202');
    printId(true);

    function welcomePeople(x: string[] | string) {
        if (Array.isArray(x)) {
            console.log("hello," + x.join(" and "));
        } else {
            console.log('welcome lone traveler' + x);
        }
    }

    function getFirstThree(x: number[] | string) {
        return x.slice(0, 3)
    }

    // section2 typeAlias
    type Point = {
        x: number;
        y: number
    }
    function printCoord(pt: Point) {
        console.log(pt.x, pt.y);
    }

    // type 基本类型
    type ID = number | string;

    // 给 type类型创建别名
    type UserInputSanitizedString = string;

    function sanitizeInput(str: string): UserInputSanitizedString {
        return str
    }
    // section3 
    interface Point2 {
        x: number;
        y: number
    }

    // section4 differences between type aliases and interface
    interface Animal {
        name: string
    }
    interface Bear extends Animal {
        honey: boolean
    }
    const bear: Bear = { name: 'bear', honey: true }
    console.log(bear.name, bear.honey)

    type Animal2 = {
        name: string
    }
    type Bear2 = Animal2 & {
        honey: boolean
    }
    const bear2: Bear2 = { name: '', honey: false }

    interface Window {
        title: string
    }
    interface Window {
        ts: string
    }
    const window: Window = { title: '', ts: '' }

    //error 标识符“Window2”重复
    type Window2 = {
        title: string
    }
    type Window2 = {
        ts: string
    }

    type Arachind = Omit<{ name: string, legs: 8 }, 'legs'>
    const arachnid1: Arachind = { name: 's', legs: 8 }

    // section 5 type assertions
    const myCanvas = document.getElementById('canvas') as HTMLCanvasElement
    const myCanvas2 = <HTMLCanvasElement>document.getElementById('canvas')

    const x = "hello" as number

    type Alignment = 'left' | 'right' | 'center'
    // 将字面亮量类型合并成联合类型，可以表达非常丰富的概念
    function printText(s: string, alignment: Alignment) {

    }
    // const 确保对象所有的属性都被指定为字面量类型
    const alignment = { s: '1', alignment: 'left' } as const
    printText(alignment.s, alignment.alignment)

    // printAll 方法
    function printAll(strs: string | string[] | null) {
        if (strs !== null) {
            if (typeof strs === 'object') {
                for (const s of strs) {
                    console.log(s);
                }
            } else if (typeof strs === 'string') {
                console.log(strs);
            }
        }
    }

}
