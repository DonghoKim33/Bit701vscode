$(function(){
    //h1.title을 클릭시 음악목록이 나오게 한다
    $(".title").click(function(){
        $(".music-list").slideDown('slow');
    });

    $(".music-list li").click(function(){
        
        // $(".music-list").slideUp('slow');
        let title=$(this).text();
        $("h1.title").text(title);
        
        //class를 얻어서 #cd에 class로 주기
        let selectclass=$(this).attr("class");
        // $("#cd").attr("class",selectclass);

        //cd가 change 되는 효과를 주기위해 animate 이용
        $("#cd").animate({width:"0"},'slow',function(){
            //cd변경
            $("#cd").attr("class",selectclass);
            //다시 너비 변경
           $(this).animate({width:'300px'},'slow');
        })
        $(this).parent().slideUp('slow');
    })
    
});