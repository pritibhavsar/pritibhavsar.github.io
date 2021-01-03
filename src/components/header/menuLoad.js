import $ from 'jquery';

$(window).on("load", function () {
    alert('Hello');
    var pathname = window.location.pathname;
    debugger;
    var paths = pathname.split('/');
    if(paths.length > 2){
        $("#" + paths[paths.length-3]).parent().addClass("active");
        $("#" + paths[paths.length]).parent().addClass("active");
    } else {
        if(pathname.search("index") >= 0)
            $("#Home").parent().addClass("active");
        else if (pathname.search("legal") > 0)    
            $("#Legal").css("text-decoration", "underline");
        else if (pathname.search("terms") > 0)    
            $("#Terms").css("text-decoration", "underline");
        else if (pathname.search("policy") > 0)    
            $("#Policy").css("text-decoration", "underline");        
        else 
            $("#Home").parent().addClass("active");    
    }
});
