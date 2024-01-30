/* 8 Задание. 
Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
x+2x+ax+bx=23780
1.
где, 
a = c 
b = d
c+2(x-d)=16
x=(16-c)/2+d
*/
let c = 8;
let d = 3;
let x = ( 16 - c ) / 2 + d;
let x4 = (16 - c + 2 * d ) / 2;
console.log(x);
/*
2.
d(x+15)=c+6x
dx+15d=c+6x
dx-6x=c-15d
x(d-6)=c-15d
x=(c-15d)/(d-6)
*/
x1 = ( c - 15 * d ) / ( d - 6 );
console.log(x1);
/*
3.
x+2x+cx+dx=23780
x(1+2+c+d)=23780
x=23780/(1+2+c+d)
*/
x2 = 23780 / ( 1 + 2 + c + d );
console.log(x2);
