(function(){
  'use strict';

  var url = "https://savingsmultipliedssh.firebaseio.com/items.json";



  $(function init() {
    $('.rocketButton').on('click', populator);
  });


    function populator () {
    console.log("button clicked");

    $.get(url, function(res){
      console.log(res);

        // targetDiv is already on page
        var $targetDiv = $('.targetDiv');

      _.forEach(res, function(item){
        var price = item.price;
        var endDate = item.endDate;
        var seller = item.seller;
        var title = item.title;
        var image = item.image;


        // format the time
        var prettyTime = moment(endDate).format("MMM Do YY");
    
        var $containerDiv = $('<div></div>');
        var $priceDiv = $('<div>'+ price + '</div>');
        var $endDateDiv = $('<div>'+ prettyTime + '</div>');
        var $sellerDiv = $('<div>'+ seller + '</div>');
        var $titleDiv = $('<div>'+ title + '</div>');
        var $imageTag = $('<img src="'+ image + '"/>');


        $containerDiv.append($imageTag);
        $containerDiv.append($titleDiv);
        $containerDiv.append($priceDiv);
        $containerDiv.append($sellerDiv);
        $containerDiv.append($endDateDiv);

        $targetDiv.append($containerDiv);
      });
    
    });
  
  }














})();


