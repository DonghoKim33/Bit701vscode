//두수를 인자로 받아서 더한값을 반환하는 함수를 3가지 방법으로 만들어보자
function add1(su1,su2)
{
    return su1+su2
}

var add2=function(su1,su2)
{
    return su1+su2
}

//화살표 함수에서 리턴하는 한문장만 있는 경우 return 생략가능
var add3=(su1,su2)=>su1+su2;

//리턴하는 값은 변수에 받아서 출력해도 되고 바로 출력해도 된다.
var sum1=add1(5,6);
console.log(sum1);

console.log(add2(4,6));
console.log(add3(10,20));
