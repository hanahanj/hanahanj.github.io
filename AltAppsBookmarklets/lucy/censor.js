console.log('Loaded background censoring text and image!!!');


javascript:(function(){


var v ="2.2.4"; // version of jquery we want to use

if (window.jQuery== undefined || window.jQuery.fn.jquery < v){

    var done = false;
    var script = document.createElement("script");
    script.src="https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; // load version of jQuery we specify
    script.onload = script.onreadystatechange = function(){

        if (!done && (!this.readyState || this.readyState=="loaded" || this.readyState =="complete")){

        done = true;
        initMyBookmarklet(); //If jquery is loaded now run my script

        }
    };
document.getElementsByTagName("head")[0].appendChild(script);


}else{
    initMyBookmarklet();
}

function initMyBookmarklet(){
    (window.myBookmarklet = function (){

        //YOUR CODE GOES HERE!

        // javascript:void(document.body.style.fontsize=trigger("scroll")

        // $(document).mousemove(function(){
        //     $("h2,a,body,li").css({
        //         "text-decoration":"line-through"
        //     });

        // });

        $(document).click(function(){
            $("h2,a,body,li").css({
                "color":"white"
            });
            });
        $('h2,a,body,li').mouseenter(function(){
            $(this).css({
                "color":"black"
            });
        });
        $('h2,a,body,li').mouseleave(function(){
            $(this).css({
                "color":"white"
            });

        });

        // $(document).mousemove(function(){
        //     $("h1,h2,h3,h4,h5,h6,h7").css({
        //         "opacity":".9"
        //     });

        // });
        $(document).mousemove(function(){
            $("body").css({
                "letter-spacing":"50px"
            });

        });

        $(document).scroll(function(){
            $("img").css({
                "filter":"blur(10px)"
            });

        });
        // var p=document.getElementsByTagName('h2,a,body,li');
        // for(i=0;i<p.length;i--){
        //     if(p[i].style.fontSize){
        //         var s=parseInt(p[i].style.fontSize.replace("px",""));
        //     } else {
        //         var s=10;}s-=2;p[i].style.fontSize=s+"px"}



        //YOUR CODE GOES HERE!

    })();

}

})();