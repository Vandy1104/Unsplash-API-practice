console.log('Json and Ajax working');

//Test jquery
$(document).ready(function(){
  $('body').click(function(){
    $(this).css('color','blue');
  });

var myKey = JSON.parse(apiKey);
console.log(myKey[0]);
myKey = myKey[0].key;

//reading users choice
	document.getElementById('submit').addEventListener('click', function(){
	endPoint = document.getElementById('endpoints').value;
	size = document.getElementById('sizes').value;
  console.log(endPoint,size);
  displayData(endPoint,size);
  });


//Javascript data array of objects
// var jsData = [
//   {
//     name : 'Peter',
//     age  :  50
//   },
//   {
//     name : 'John',
//     age  :  25
//   }
// ];
//
// console.log(jsData);

//Displaying js objects in browser
// var i;
// for(i = 0; i < jsData.length; i++){
// document.getElementById('result').innerHTML +=
// '<h1>' + jsData[i].name + ' is ' + jsData[i].age + ' years old</h1>';
// }
//
// var jsonData = [
//   {
//     "name" : "Lucy",
//     age  :  12
//   },
//   {
//     "name" : "Mark",
//     age  :  77
//   }
// ];
//
// console.log(jsonData);

//Displaying json objects in browser
// var j;
// for(j = 0; j < jsonData.length; j++){
// document.getElementById('result').innerHTML +=
// '<h1>' + jsonData[j].name + ' is ' + jsonData[j].age + ' years old </h1>';
// }
//
// //Retrieving json data from external file.
//
// var person = JSON.parse(myData);
// console.log(person);
//
// var k;
// for(k = 0; k < person.length; k++){
// document.getElementById('result').innerHTML +=
// '<h1>' + person[k].name + ' is ' + person[k].age + ' years old </h1>';
// }


function displayData(ep, si){
  console.log(ep,si);
//Ajax method

$.ajax({
  url:`https://api.unsplash.com/${ep}/?client_id=${myKey}`,
  type:'GET',
  data:'json',
  success: function(data){
    console.log(data);
    if (ep === 'collections'){
      collections(data,ep, si);
    } else if (ep === 'photos'){
      photos(data, ep, si);
    }
    function collections(d, e,s){
      var k;
      var userSize;

        document.getElementById('result').innerHTML = '';
      for(k = 0; k < d.length; k++ ){
        if (s === 'full') {
          userSize = d[k].cover_photo.urls.full;
        } else if (s === 'raw') {
          userSize = d[k].cover_photo.urls.raw;
        } else if (s === 'regular') {
          userSize = d[k].cover_photo.urls.regular;
        }else if (s === 'small') {
          userSize = d[k].cover_photo.urls.small;
        } else if (s === 'thumb') {
          userSize = d[k].cover_photo.urls.thumb;
        }


        document.getElementById('result').innerHTML +=
        '<div class="col">' +
          '<img class="img-thumbnail" alt="Image" src="' + userSize + '">' +
        '</div>';
      }
    }


      function photos(d, e,s){
          var j;
        var photoSize;
          document.getElementById('result').innerHTML = '';
      for(j = 0; j < d.length; j++ ){
        if (s === 'full') {
          photoSize = d[j].urls.full;
        } else if (s === 'raw') {
          photoSize = d[j].urls.raw;
        } else if (s === 'regular') {
          photoSize = d[j].urls.regular;
        }else if (s === 'small') {
          photoSize = d[j].urls.small;
        } else if (s === 'thumb') {
          photoSize = d[j].urls.thumb;
        }


        document.getElementById('result').innerHTML +=
        '<div class="col">' +
          '<img class="img-thumbnail" alt="Image" src="' + photoSize + '">' +
        '</div>';
      }
    }









  },//success
  error:function(){
    console.log('error');
  }//error

 });//ajax
}; // functione displayData ends here

});//document.ready
