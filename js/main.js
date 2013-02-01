function load_featured_event_logos() {
  if (window.ok_to_load_featured_event_logos) {
    var all_images = {
      "#big_data_ro_2012_logo": "images/logos/big_data_ro_2012_logo.png",
      "#sw_romania_2012_logo":  "images/logos/sw_romania_2012_logo.png",
      "#java2days_2012_logo_e": "images/logos/java2days_2012_logo_e.png",
      "#hackathon_ro_logo":     "images/logos/hackathon_ro_logo.png"
    };
    for (var img_id in all_images) {
      $(img_id).attr("src", all_images[img_id]);
    }
    window.ok_to_load_featured_event_logos = false;
  }
}

function load_sponsor_logos() {
  if (window.ok_to_load_sponsor_logos) {
    var all_images = {
    "#axemblr_logo":          "images/logos/axemblr_logo.png",
    "#ceata_logo":            "images/logos/ceata_logo.png",
    "#teamnet_logo":          "images/logos/teamnet_logo.png",
    "#adobe_logo":            "images/logos/adobe_logo.png",
    "#cegeka_logo":           "images/logos/cegeka_logo.png",
    "#java2days_2012_logo_s": "images/logos/java2days_2012_logo_s.png",
    "#retrospective_logo":    "images/logos/retrospective_logo.png",
    "#ibm_logo":              "images/logos/ibm_logo.png",
    "#gtug_logo":             "images/logos/gtug_logo.png",
    "#anritsu_logo":          "images/logos/anritsu_logo.png"
    };
    for (var img_id in all_images) {
      $(img_id).attr("src", all_images[img_id]);
    }
    window.ok_to_load_sponsor_logos = false;
  }
}

function navigate(visualstate) {
  $(".visualstate").hide();
  var css_selector_to_display = visualstate + "_content";
  $(css_selector_to_display).css({"display": "block", "opacity": 0}).animate({"opacity": 1}, 250);
  if ($("#menu").css("display") === "none") {
    $("#bjug_heading").hide();
    document.getElementById("top_of_content").scrollIntoView();
  } else {
    $("#bjug_heading").show();
    document.body.scrollIntoView();
  }
  if (visualstate !== "#home" && $("#menu").css("display") === "none") {
    $("#tap_target_home").show();
  } else {
    $("#tap_target_home").hide();
  }
  if (visualstate === "#feat") {
    load_featured_event_logos();
  }
  if (visualstate === "#sponsors") {
    load_sponsor_logos();
  }
  var base_url = window.location.href.split("#")[0];
  history.pushState(css_selector_to_display, "/", base_url + visualstate);
}

$(".bjugmenuitem").on("click", function(e) {
  e.preventDefault();
  var target_visualstate = $(this).data("id");
  navigate(target_visualstate);
});

$("#menu_header").on("click", function(e) {
  e.preventDefault();
  navigate("#home");
});

$(window).on("popstate", function(event) {
  if (typeof event.state === "string") {
    $(".visualstate").hide();
    $(event.state).css({"display": "block", "opacity": 0}).animate({"opacity": 1}, 250);
    if ($("#menu").css("display") === "none") {
      $("#bjug_heading").hide();
    } else {
      $("#bjug_heading").show();
    }
  }
});

Zepto(function($) {
  window.ok_to_load_featured_event_logos = true;
  window.ok_to_load_sponsor_logos = true;

  var visualstate = "#" + window.location.href.split("#")[1];
  if ( $(visualstate + "_content")[0] ) {
    navigate(visualstate);
  } else {
    navigate("#home");
  }

  var all_images = {
    "#bjug_logo":     "images/logos/bjug_logo.png",
    "#mail":          "images/mail.png",
    "#gplus":         "images/gplus.png",
    "#rss":           "images/rss.png",
    "#upcoming":      "images/upcoming.png",
    "#arrow_hover":   "images/arrow-hover.png",
    "#grey_gradient": "images/grey-gradient.png"
  };
  for (var img_id in all_images) {
    $(img_id).attr("src", all_images[img_id]);
  }
});

