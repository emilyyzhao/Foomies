var roommateArray = [];
function initRoommates() {
  //complile template
var source = $("#roommateTemplate").html();
var template = Handlebars.compile(source);
var parentDiv = $("#templatedRoommates");

$(document).ready(function() {
for(var i = 0; i < roommateArray.length; i++){
$("#owner").append("<option>" + roommateArray[i].name + "</option>");
}
})

if (window.localStorage.roommateRecord) {
        roommateArray = JSON.parse(window.localStorage.roommateRecord);
        for (var i = 0; i < roommateArray.length; i++) {
          var curData = roommateArray[i];
          var curHtml = template(curData);
          parentDiv.append(curHtml);
        }
    }
}

var index = 0;
function registerRoommate() {
        index = roommateArray.length;
        var name = document.getElementById("newRoomName").value;
        var roommateObj = {name: name, profilePic: 'https://previews.123rf.com/images/stalkerstudent/stalkerstudent1601/stalkerstudent160101173/50961996-user-icon-vector-flat-design-style-eps-10.jpg', index: index};
        roommateArray.push(roommateObj);
        window.localStorage.roommateRecord = JSON.stringify(roommateArray);
        location.reload();
        document.getElementById("newRoomName").value = "";
}

function removeFromArray(index){
  var result = confirm("Delete this roommate?");
  if (result) {
  var roommateArray = JSON.parse(localStorage.roommateRecord);
  roommateArray.splice(index, 1);
  for (var i = 0; i < roommateArray.length; i++){
    roommateArray[i].index = i;
  }
  localStorage.roommateRecord = JSON.stringify(roommateArray);
  location.reload();
}
}

    var foodArray = [];
    var selectIndex = -1;

    function init() {
      document.getElementById("tablerows").innerHTML = "";
        if (window.localStorage.foodRecord) {
            foodArray = JSON.parse(window.localStorage.foodRecord);
            for (var index = 0; index < foodArray.length; index++) {
                prepareTableCell(index, foodArray[index].grocery, foodArray[index].owner,
                foodArray[index].expdate, foodArray[index].communal, foodArray[index].quantity, foodArray[index].notes);
            }
        }
    }
    function onRegisterPressed() {
        var grocery = document.getElementById("grocery").value;
        var owner = document.getElementById("owner").value;
        var expdate = document.getElementById("expdate").value;
        var communal = document.getElementById("communal").value;
        var quantity = document.getElementById("quantity").value;
        var notes = document.getElementById("notes").value;
        var foodObj = {grocery: grocery, owner: owner, expdate: expdate, communal: communal, quantity: quantity, notes: notes};
        if(selectIndex===-1){
          foodArray.push(foodObj);
        }
        else{
          foodArray.splice(selectIndex, 1, foodObj);
        }
        window.localStorage.foodRecord = JSON.stringify(foodArray);
        init();
        onClearPressed();
        //prepareTableCell(i, grocery, owner, expdate, communal, quantity, notes);
        selectIndex=-1;
    }

    function prepareTableCell(index, grocery, owner, expdate, communal, quantity, notes) {
        var table = document.getElementById("tablerows");
        var row = table.insertRow();
        var imgCell = row.insertCell(0);
        var groceryCell = row.insertCell(1);
        var ownerCell = row.insertCell(2);
        var expdateCell = row.insertCell(3);
        var communalCell = row.insertCell(4);
        var quantCell = row.insertCell(5);
        var notesCell = row.insertCell(6);
        var deleteCell = row.insertCell(7);

        groceryCell.innerHTML = grocery;
        ownerCell.innerHTML = owner;
        expdateCell.innerHTML = expdate;
        communalCell.innerHTML = communal;
        if (communal=="Yes"){
          communalCell.innerHTML="<img class='image-cropper' src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-128.png'>";
        }
        else{
          communalCell.innerHTML="<img class='image-cropper' src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/010_x-3-512.png'>";
        }
        quantCell.innerHTML = quantity;
        notesCell.innerHTML = notes;
        deleteCell.innerHTML =  '<center><button class="btn btn-danger" data-toggle="modal" data-target="#addModal" onclick= "editTableRow('+index+')">Edit</button><br> <br> <button class="btn btn-danger" onclick="deleteTableRow('+index+')">Remove</button></center> ';

        if(grocery=="asparagus" || grocery=="Asparagus" || grocery=="ASPARAGUS") {
              imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/7mLTQSG.png'>";
            }
           else if(grocery=="broccoli" || grocery=="Broccoli" || grocery=="BROCCOLI" ) {
              imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/4xTxEM3.png'>";
            }
           else if(grocery=="egg" || grocery=="Egg" || grocery=="EGG") {
                imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/Ur5yuXY.png'>";
              }
                else if(grocery=="garlic" || grocery=="Garlic") {
                   imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/kQBRixl.png'>";
                 }
                 else if(grocery=="lemon" || grocery=="Lemon") {
                    imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/VnehSAA.png'>";
                  }
                  else if(grocery=="onion" || grocery=="Onion") {
                     imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/iClbJQ8.png'>";
                   }
                   else if(grocery=="steak" || grocery=="Steak") {
                      imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/1fcZzXa.png'>";
                    }
                    else if(grocery=="pasta" || grocery=="Pasta") {
                       imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/p67dYjx.png'>";
                     }
                     else if(grocery=="potato" || grocery=="Potato") {
                        imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/bjByLxy.png'>";
                      }
                      else if(grocery=="spinach" || grocery=="Spinach") {
                         imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/Gu28tN5.png'>";
                       }
                       else if(grocery=="salmon" || grocery=="Salmon") {
                          imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/0J2328V.png'>";
                        }
                        else if(grocery=="tomato" || grocery=="Tomato") {
                           imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/Vh99hig.png'>";
                         }
                         else if(grocery=="chicken" || grocery=="Chicken") {
                            imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/kXLViR4.png'>";
                          }
                          else if(grocery=="carrot" || grocery=="Carrot") {
                             imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/zAT3eNI.png'>";
                           }
                           else if(grocery=="milk" || grocery=="Milk") {
                              imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/Wskft8F.png'>";
                            }
                            else if(grocery=="shrimp" || grocery=="Shrimp") {
                               imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/GPlliIQ.png'>";
                             }
                             else if(grocery=="butter" || grocery=="Butter") {
                                imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/dN55gQH.png'>";
                              }
                              else if(grocery=="bacon" || grocery=="Bacon") {
                                 imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/cXuf6fd.png'>";
                               }
                               else if(grocery=="corn" || grocery=="corn") {
                                  imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/RZcGEr2.png'>";
                                }
                                else if(grocery=="broccoli" || grocery=="Broccoli") {
                                   imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/JcheGQp.png'>";
                                 }
                                 else if(grocery=="sausages" || grocery=="Sausages" || grocery=="sausage" || grocery=="Sausages") {
                                    imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/fjM5EyH.png'>";
                                  }
                                  else if(grocery=="dumplings" || grocery=="Dumplings" || grocery=="Pot stickers" || grocery=="pot sticker" || grocery=="Pot Stickers" || grocery=="potstickers" || grocery=="Potstickers") {
                                     imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/wB4esXX.png'>";
                                   }
                                   else if(grocery=="apple" || grocery=="apples" || grocery=="Apple" || grocery=="Apples") {
                                      imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/CwP9Emh.png'>";
                                    }
                                    else if(grocery=="yogurt" || grocery=="Yogurt" || grocery=="Yoghurt" || grocery=="yoghurt") {
                                       imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/PiXRTaN.png'>";
                                     }
                                     else if(grocery=="bread" || grocery=="Bread") {
                                        imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/9pbQ4Rh.png'>";
                                      }
                                      else if(grocery=="juice" || grocery=="Juice" || grocery=="Orange Juice" || grocery=="orange juice") {
                                         imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/nJOFqI9.jpg'>";
                                       }
                                       else if(grocery=="bananas" || grocery=="banana" || grocery=="Bananas" || grocery=="Banana"|| grocery=="BANANA"|| grocery=="BANANAS") {
                                          imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/fiyCURv.jpg'>";
                                        }
                                        else if(grocery=="celery" || grocery=="Celery"|| grocery=="CELERY") {
                                           imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/xvTsalo.jpg'>";
                                         }
                                         else if(grocery=="strawberries" || grocery=="Strawberries" || grocery=="Strawberry" || grocery=="strawberry"|| grocery=="STRAWBERRY"|| grocery=="STRAWBERRIES") {
                                           imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/Ch4Q9LG.jpg'>";
                                         }
                                         else if(grocery=="rice" || grocery =="Rice" || grocery =="RICE"){
                                           imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/SjAq1vO.png'>"
                                         }
                                 else{
                                   imgCell.innerHTML = "<img class='image-cropper' src='https://i.imgur.com/uT8Pn5A.png'>";
                          }

        }

    function removeElement(elementId) {
      var result = confirm("Delete this roommate?");
      if (result) {    // Removes an element from the document
      var element = document.getElementById(elementId);
      element.parentNode.removeChild(element);}
    }

function deleteTableRow(index){
var result = confirm("Delete this item?");
if (result) {
// var table = document.getElementById("tablerows");
// table.deleteRow(index);
foodArray.splice(index, 1);
localStorage.foodRecord = JSON.stringify(foodArray);
init();
}
}
function onClearPressed(){
selectIndex = -1;
document.getElementById("grocery").value = "";
document.getElementById("owner").value = "";
document.getElementById("expdate").value = "";
document.getElementById("communal").value = "";
document.getElementById("quantity").value = "";
document.getElementById("notes").value = "";
document.getElementById("submit").innerHTML = "Add to Fridge";
}

function uncheckAll() {
  $("input[type='checkbox']:checked").prop("checked", false)
}

function editTableRow(index){
selectIndex = index;
var foodObj = foodArray[index];
document.getElementById("grocery").value = foodObj.grocery;
document.getElementById("owner").value = foodObj.owner;
document.getElementById("expdate").value = foodObj.expdate;
document.getElementById("communal").value = foodObj.communal;
document.getElementById("quantity").value = foodObj.quantity;
document.getElementById("notes").value = foodObj.notes;
document.getElementById("submit").innerHTML = "Update";
//  document.getElementById("submit").innerHTML = "Update";
}

		function recipechange(){
	    if(document.getElementById('chicken').checked) {
	      var reciperesults = "chickengarlic.html";
	      document.getElementById('changeresults').setAttribute("href",reciperesults);
	      document.getElementById('changeresults').innerHTML = reciperesults;
	    }

      else if(document.getElementById('shrimp').checked) {
     var reciperesults = "shrimp_garlic.html";
     document.getElementById('changeresults').setAttribute("href",reciperesults);
     document.getElementById('changeresults').innerHTML = reciperesults;
         	   }

	   else if(document.getElementById('steak').checked) {
	     var reciperesults = "steak_potato.html";
	     document.getElementById('changeresults').setAttribute("href",reciperesults);
	      document.getElementById('changeresults').innerHTML = reciperesults;
	   }

     else if(document.getElementById('bacon').checked) {
	     var reciperesults = "bacon_egg.html";
	     document.getElementById('changeresults').setAttribute("href",reciperesults);
	      document.getElementById('changeresults').innerHTML = reciperesults;
	   }

     else if(document.getElementById('cheese').checked || document.getElementById('corn').checked || document.getElementById('butter').checked) {
       var reciperesults = "cheesecornbutter.html";
       document.getElementById('changeresults').setAttribute("href",reciperesults);
        document.getElementById('changeresults').innerHTML = reciperesults;
     }
	  else if(document.getElementById('asparagus').checked) {
	     var reciperesults = "potato_asparagus.html";
	     document.getElementById('changeresults').setAttribute("href",reciperesults);
	      document.getElementById('changeresults').innerHTML = reciperesults;
	   }

	   else if(document.getElementById('tomato').checked || document.getElementById('potato').checked) {
	     var reciperesults = "tomato_potato.html";
	     document.getElementById('changeresults').setAttribute("href",reciperesults);
	      document.getElementById('changeresults').innerHTML = reciperesults;
	   }
     else if(document.getElementById('salmon').checked) {
       var reciperesults = "salmonpotato.html";
       document.getElementById('changeresults').setAttribute("href",reciperesults);
        document.getElementById('changeresults').innerHTML = reciperesults;
     }
	   else if(document.getElementById('salmon').checked && document.getElementById('lemon').checked) {
	     var reciperesults = "salmon_lemon.html";
	     document.getElementById('changeresults').setAttribute("href",reciperesults);
	      document.getElementById('changeresults').innerHTML = reciperesults;
	   }
	   else if(document.getElementById('egg').checked) {
	     var reciperesults = "egg_potato.html";
	     document.getElementById('changeresults').setAttribute("href",reciperesults);
	      document.getElementById('changeresults').innerHTML = reciperesults;
      }

    else if(document.getElementById('spinach').checked) {
     var reciperesults = "spinachpotato.html";
         document.getElementById('changeresults').setAttribute("href",reciperesults);
         document.getElementById('changeresults').innerHTML = reciperesults;
       }

      else if(document.getElementById('pasta').checked) {
        var reciperesults = "tomatopasta.html";
       	 document.getElementById('changeresults').setAttribute("href",reciperesults);
       	   document.getElementById('changeresults').innerHTML = reciperesults;
         }

     else if(document.getElementById('chicken').checked && document.getElementById('asparagus').checked) {
       var reciperesults = "chickenasparagus.html";
         document.getElementById('changeresults').setAttribute("href",reciperesults);
          document.getElementById('changeresults').innerHTML = reciperesults;
        }

    else{
      var reciperesults = "standard.html";
      document.getElementById('changeresults').setAttribute("href",reciperesults);
       document.getElementById('changeresults').innerHTML = reciperesults;
    }
   }

 	function printChecked(){
 		var items=document.getElementsByName('acs');
 		var selectedItems="";
 		for(var i=0; i<items.length; i++){
 			if(items[i].type=='checkbox' && items[i].checked==true)
 				selectedItems+=items[i].value+"\n";
 		}
 		alert("You selected:" + "\n" + selectedItems);
 	}
