// class temp{
//     private x: number
//     public y: number
//     constructor(val1?:number, val2?:number){
//         val1 ? this.x = val1 : this.x = 1
//         val2 ? this.y = val2 : this.y = 2

        
//     }
//     public get getX(){
//         return this.x
//     }
//     public set setX(value: number){
//         this.x = value
//     }
// }


// let Temp2 = new temp(10,20)


// Temp2.setX = 6
// console.log(Temp2.getX)



class Point {
    x?: number;
    y?: number;

    constructor(val1?: number, val2?: number) {
        this.x = val1;
        this.y = val2;
    }

}

class Triangle {
    x?: Point;
    y?: Point;
    z?: Point;

    constructor(x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number) {
        this.x = new Point(x1, y1);
        this.y = new Point(x2, y2);
        this.z = new Point(x3, y3);
    }
}

let point1: Point = new Point(5,6)

let tr0: Triangle = new Triangle(1, 2, 3, 4, 5, 6);
let tr1: Triangle = new Triangle();  


console.log(tr0)