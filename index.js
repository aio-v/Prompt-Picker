$(document).ready(function() {

    function parseList () {
        let input_str = $("#inputarea").val();
        let input_arr = input_str.split(/[\n,]+/g);
        let input_list = [];
        input_arr.forEach(function(str) {
            let newStr = str.trim(); 
            if(newStr.length != 0) {
                input_list.push(newStr);
            }
        });

        return input_list;
    }

    $("#submit").click(function() {
        let input_list = parseList();
        let random_prompt = input_list[Math.floor(Math.random() * input_list.length)];
        if(random_prompt) {
            $("#output").text(random_prompt);
        }
    });
});