class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

//console.log(Rectangle.name);
get area(){
    return this.calcArea();
}
//method

calcArea(){
    return this.height * this.width;
    }
}

const square = new Rectangle(200,10);
console.log( square.area);