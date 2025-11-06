
$("#add-creature").click(
    function () {

        //grab the value
        let crName = $("#crName").val();

        //check for the field value di ni tadd emtpy ones
        if (crName == "")||{crName, length>12){ //do notiong
        }



     else{
     $("#creature-list").append(crName + ", ");
     }

        //remove the name after it;s added
        $("crName").val("");


        $()
    });