$(function() {
    "use strict";
    $("#SignUpButton").click(function(evt) {
        evt.preventDefault();
        $("form").find("input").each(
            function() {
                console.log($(this).val());
            });
    });
    $("#new_product_form").submit(
        function(evt) {
            evt.preventDefault();
            $(".container").append(
                $("<div></div>", { "id": "form_data_display" })
            );
            $("input").each(function() {
                    $("#form_data_display").append(
                        $(`<p>${$(this).val()}</p>`)
                    );
                }
            );    
        }
    );
}
);
