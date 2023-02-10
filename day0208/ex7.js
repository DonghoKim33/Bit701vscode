//사용자 함수 만들기 #1
function test1()
{
    console.log("test1 함수 호출!")
}

//test1() 함수 호출하기
test1();

//사용자 함수 만들기 #2
var test2=function(){
    console.log("test2 함수 호출!");
 }

 //test2 호출
test2();

//사용자 함수 만들기 #3
// 화살표 함수 es6에서 추가된 기능
var test3=()=>console.log("test3 함수 호출!");

test3();