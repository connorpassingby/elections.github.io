$(
    function(){
        
        $(".dropdownheader").click(
            function(){
                thisid = this.id; //gets the id of the current button click
                
                headers = $('.dropdownheader');
                buttons = $('.dropdown-toggler'); //array of all buttons
                content = $('.dropdowncontent'); //array of all content
                
                for(let i = 0; i< headers.length;i++) {
                    //for loop to check for thisid being equal to any of the button ids
                    if (this.id == headers[i].id) {
                        thisIndex = i; //if equal, store index of correct button-content pair in thisIndex
                        break;
                    }
                }

                console.log(thisIndex);

                $(".dropdowncontent").eq(thisIndex).children().toggle(
                    function() {
                        if ($(".dropdowncontent").eq(thisIndex).children().is(':visible')) {
                            $(".dropdown-caret").eq(thisIndex).removeClass("bi-caret-down-fill");
                            $(".dropdown-caret").eq(thisIndex).addClass("bi-caret-up-fill");
                        } else {
                            $(".dropdown-caret").eq(thisIndex).removeClass("bi-caret-up-fill");
                            $(".dropdown-caret").eq(thisIndex).addClass("bi-caret-down-fill");
                        }
                    }
                );
            }
        );
    }
);