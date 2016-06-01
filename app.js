$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?",
    success: function(text) {
      HANDLE.renderTemplate({
        templateSource: "#movies-div",
        data: text,
        where: ".movie-card border-radius margin-top-20",
        clearOriginal: false
      });
    },
    error: function() {
      alert("Error getting movie");
    }
  });

});
