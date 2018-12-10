//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


//click on X to delete ToDo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //enter key is 13 --> if the enter button is pushed, do this
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
