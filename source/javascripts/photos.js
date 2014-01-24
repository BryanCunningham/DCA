$(function(){
  $(".spinner-container").append("<div class='spinner'><i>&#10227;<i></div>");

  $.ajax({
    url: "https://api.instagram.com/v1/tags/dirtyfranks/media/recent/?client_id=b64943c121b94185a1b2fc8582bfb136",
    dataType: "jsonp",
    success: function(response){
      $.each(response.data, function(index, result){
        if (result.type == "image") {
          var url = result.images.standard_resolution.url;
          $(".spinner-container").remove();
          $(".collage").append("<div class='feature-photo'><img src='" + url + "'/></div>");
        }
      });
    },
    error: function(){
      console.log("uh-oh")
    }
  });

});