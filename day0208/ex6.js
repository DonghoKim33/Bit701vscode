var a=0;
while(true)
{
    a++;
    if(a%2==1)
        continue; //홀수면 처음으로 돌아가라
        console.log(a);
        if(a==10)
            break;//a가 10이 되면 while 문을 빠져나간다
}   
console.log("**반복 끝**");