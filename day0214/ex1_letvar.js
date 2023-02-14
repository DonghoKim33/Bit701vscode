// var: 함수형 변수
// let: 영역형 변수

var a=1; //새로 생성
let b=2; //새로 생성

//사용자 함수
function test1()
{
    var a=3; //새로 생성, 외부의 a와 전혀 다른 변수로 생성
    let b=4; //새로 생성

    if(true){
        var a=5; //덮어쓴다. 10번 라인의 a변수에 덮어쓴다.
        let b=6; //새로 생성, 영역을 벗어나면 사라짐
        console.log(`a=${a}, b=${b}`); //5, 6

    }
    console.log(`a=${a}, b=${b}`);//5, 4
}


//함수 호출
test1();
console.log(`a=${a}, b=${b}`); //1,2