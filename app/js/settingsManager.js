
function loadjscssfile(filename) {
  filename = "./css/" + filename;
  filetype = "css";

  console.log("Loading file "+filename)

  var fileref = document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)

  if (typeof fileref != "undefined") {
    document.getElementsByTagName("head")[0].appendChild(fileref)
  }
}

function initializePreferences() {
  console.log("Initialising preferences...");
  store.set("theme", "mono.css");
  store.set("colorscheme", "colors.css");
  store.set("player","mpd")
}

function loadSettings() {
  options = ["theme","colorscheme","player"];

  console.log("Checking for initialisation of preferences...");
  for (var i = 0; i < options.length; i++) {
    if (store.get(options[i]) == undefined) {
      initializePreferences();
    }
  }

  console.log("Loading preferences on file "+document.title)
  loadjscssfile(store.get('theme'));
  loadjscssfile(store.get('colorscheme'));
}