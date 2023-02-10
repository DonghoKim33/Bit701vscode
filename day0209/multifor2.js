//다중 for문에 대해 공부하자
for(var i=1; i<=3;i++){
    console.log("hello");
    for(var j=1;j<=4;j++){
        console.log(`\t${i}:${j}`);
        if(j==2)
            break;//2번째 for문을 빠져나와 i++로 이동
    }
}