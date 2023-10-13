// Counting the number of items returned after the filter function
var Webflow = Webflow || [];
Webflow.push(function () {
  let itemCount = $(".Collection-Item-1").length;
  $("#item-count").html(itemCount);
});

//Update item count on filter change
$(".filter-button").click(function () {
  setTimeout(function () {
    var allElems = document.getElementsByClassName("Collection-Item-1");
    var count = 0;
    for (var i = 0; i < allElems.length; i++) {
      var thisElem = allElems[i];
      if (thisElem.style.display != "none") count++;
      document.getElementById("item-count").innerHTML = count;
    }
  }, 500);
});

//Update item count on filter reset
$(".filter-reset-main").click(function () {
  setTimeout(function () {
    var allElems = document.getElementsByClassName("Collection-Item-1");
    var count = 0;
    for (var i = 0; i < allElems.length; i++) {
      var thisElem = allElems[i];
      if (thisElem.style.display != "none") count++;
      document.getElementById("item-count").innerHTML = count;
    }
  }, 500);
});

// F'in sweet CMS Library for Webflow

(function () {
  var fsComponent = new FsLibrary(".Collection-List-Team1");

  var myFilters = [
    {
      filterWrapper: ".filters_team_items1",
      filterType: "multi",
    },
  ];

  fsComponent.filter({
    filterArray: myFilters,
    activeClass: "filter-button-active",
    filterReset: ".filter-reset-main",
    animation: {
      enable: true,
      duration: 300,
      easing: "ease-in",
      effects: "fade ",
    },
  });
})();
