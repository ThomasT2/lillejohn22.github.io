
//Sorts the pubs based on whether alphabetical or queue length is picked.
//Calculates the average of the latest queue entries.
//Displays each sorted list depending on which buttons was pressed
/**
 * This file has a function for sorting an array list, alphabetically and after queue length.
 * It also registers which button was pressed and sorts the element on the website accordingly.
 */

var sortElems = document.getElementsByClassName("sortButtons");
var elem = $('input[type=radio]'); //document.getElementsByTagName("input");

var PL = ["wijkanders", "bulten", "japripps", "gasquen", "cafec", "11an", "rodarummet", "ventren",
"basen", "goldeni", "kajsabaren", "focus", "hubben21", "fortnox", "gastownospritkoket", "winden", "jarnvagspub", "zaloonen", "pignwhistle"];



for (var i = 0; i < sortElems.length; i++) {
  sortElems[i].addEventListener("click", function() {
    this.classList.toggle("active");


        if(elem.id === "alpha") {

        //alert("abcdef");
        sortFunction(PL, "alpha");


        // removes each element's classlist tags for an element's order on the website
        for (var i = 0; i < PL.length; i++) {
        document.getElementById(PL[i]).classList.remove('order-1');
        document.getElementById(PL[i]).classList.remove('order-2');
        document.getElementById(PL[i]).classList.remove('order-3');
        document.getElementById(PL[i]).classList.remove('order-4');
        document.getElementById(PL[i]).classList.remove('order-5');
        document.getElementById(PL[i]).classList.remove('order-6');
        document.getElementById(PL[i]).classList.remove('order-7');
        document.getElementById(PL[i]).classList.remove('order-8');
        document.getElementById(PL[i]).classList.remove('order-9');
        document.getElementById(PL[i]).classList.remove('order-10');
        document.getElementById(PL[i]).classList.remove('order-11');
        document.getElementById(PL[i]).classList.remove('order-12');
        document.getElementById(PL[i]).classList.remove('order-13');
        document.getElementById(PL[i]).classList.remove('order-14');
        document.getElementById(PL[i]).classList.remove('order-15');
        document.getElementById(PL[i]).classList.remove('order-16');
        document.getElementById(PL[i]).classList.remove('order-17');
        document.getElementById(PL[i]).classList.remove('order-18');
        document.getElementById(PL[i]).classList.remove('order-19');


        // adds new classlist tag for every element in order of new list
        switch(i) {
          case 0:
            document.getElementById(PL[i]).classList.add('order-1');
            break;
          case 1:
            document.getElementById(PL[i]).classList.add('order-2');
            break;
          case 2:
            document.getElementById(PL[i]).classList.add('order-3');
            break;
          case 3:
            document.getElementById(PL[i]).classList.add('order-4');
            break;
            case 4:
            document.getElementById(PL[i]).classList.add('order-5');
            break;
            case 5:
            document.getElementById(PL[i]).classList.add('order-6');
            break;
            case 6:
            document.getElementById(PL[i]).classList.add('order-7');
            break;
            case 7:
            document.getElementById(PL[i]).classList.add('order-8');
            break;
            case 8:
            document.getElementById(PL[i]).classList.add('order-9');
            break;
            case 9:
            document.getElementById(PL[i]).classList.add('order-10');
            break;
            case 10:
            document.getElementById(PL[i]).classList.add('order-11');
             break;
            case 11:
            document.getElementById(PL[i]).classList.add('order-12');
             break;
            case 12:
            document.getElementById(PL[i]).classList.add('order-13');
             break;
            case 13:
            document.getElementById(PL[i]).classList.add('order-14');
             break;
            case 14:
            document.getElementById(PL[i]).classList.add('order-15');
             break;
            case 15:
            document.getElementById(PL[i]).classList.add('order-16');
             break;
            case 16:
            document.getElementById(PL[i]).classList.add('order-17');
             break;
            case 17:
            document.getElementById(PL[i]).classList.add('order-18');
             break;
            case 18:
            document.getElementById(PL[i]).classList.add('order-19');
             break;

          default:
            alert(PL);
        }

        }

} else {

       // alert("queue");
        sortFunction(PL, "queue");

        // removes each element's classlist tags for an element's order on the website
        for (var i = 0; i < PL.length; i++) {
                document.getElementById(PL[i]).classList.remove('order-1');
                document.getElementById(PL[i]).classList.remove('order-2');
                document.getElementById(PL[i]).classList.remove('order-3');
                document.getElementById(PL[i]).classList.remove('order-4');
                document.getElementById(PL[i]).classList.remove('order-5');
                document.getElementById(PL[i]).classList.remove('order-6');
                document.getElementById(PL[i]).classList.remove('order-7');
                document.getElementById(PL[i]).classList.remove('order-8');
                document.getElementById(PL[i]).classList.remove('order-9');
                document.getElementById(PL[i]).classList.remove('order-10');
                document.getElementById(PL[i]).classList.remove('order-11');
                document.getElementById(PL[i]).classList.remove('order-12');
                document.getElementById(PL[i]).classList.remove('order-13');
                document.getElementById(PL[i]).classList.remove('order-14');
                document.getElementById(PL[i]).classList.remove('order-15');
                document.getElementById(PL[i]).classList.remove('order-16');
                document.getElementById(PL[i]).classList.remove('order-17');
                document.getElementById(PL[i]).classList.remove('order-18');
                document.getElementById(PL[i]).classList.remove('order-19');


                // adds new classlist tag for every element in order of new list
                switch(i) {
                  case 0:
                    document.getElementById(PL[i]).classList.add('order-1');
                    break;
                  case 1:
                    document.getElementById(PL[i]).classList.add('order-2');
                    break;
                  case 2:
                    document.getElementById(PL[i]).classList.add('order-3');
                    break;
                  case 3:
                    document.getElementById(PL[i]).classList.add('order-4');
                    break;
                    case 4:
                    document.getElementById(PL[i]).classList.add('order-5');
                    break;
                    case 5:
                    document.getElementById(PL[i]).classList.add('order-6');
                    break;
                    case 6:
                    document.getElementById(PL[i]).classList.add('order-7');
                    break;
                    case 7:
                    document.getElementById(PL[i]).classList.add('order-8');
                    break;
                    case 8:
                    document.getElementById(PL[i]).classList.add('order-9');
                    break;
                    case 9:
                    document.getElementById(PL[i]).classList.add('order-10');
                    break;
                    case 10:
                    document.getElementById(PL[i]).classList.add('order-11');
                     break;
                    case 11:
                    document.getElementById(PL[i]).classList.add('order-12');
                     break;
                    case 12:
                    document.getElementById(PL[i]).classList.add('order-13');
                     break;
                    case 13:
                    document.getElementById(PL[i]).classList.add('order-14');
                     break;
                    case 14:
                    document.getElementById(PL[i]).classList.add('order-15');
                     break;
                    case 15:
                    document.getElementById(PL[i]).classList.add('order-16');
                     break;
                    case 16:
                    document.getElementById(PL[i]).classList.add('order-17');
                     break;
                    case 17:
                    document.getElementById(PL[i]).classList.add('order-18');
                     break;
                    case 18:
                    document.getElementById(PL[i]).classList.add('order-19');
                     break;

                  default:
                    alert(PL);
                }

             }

              }

  });
 }




/*
alert(PL);
sortFunction(PL, "alpha");
alert(PL);
*/


/**
 * Sorts the pub based on its argument, either alphabetically or by queue length.
 * @param Array publist, String sortBy
 */
function sortFunction (publist, sortBy) {

    if (sortBy === "alpha"){
        publist.sort();
    }
    else {
        publist.sort(function (a, b) {

            var newA = getQueueLength(a);
            var newB = getQueueLength(b);

            if (newA < newB) {
                return -1;
            }
            if (newB < newA) {
                return 1;
            }
            return 0;
        });
    }
}

/**
 * Returns the corresponding number based on which queue-class a pub has.
 * @returns value to be used in the sort function above
 */
function getQueueLength(pub){

            var pubItem = document.getElementById(pub);

            if (pubItem.classList.contains('short-queue')){
                return 1;
            }
            else if(pubItem.classList.contains('medium-queue')){
                return 2;
            }
            else if(pubItem.classList.contains('long-queue')){
                return 3;
            }
            else{
                return 5;
            }
}


