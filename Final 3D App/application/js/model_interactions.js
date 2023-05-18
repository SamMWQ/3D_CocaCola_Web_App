// Adapted from example code 'benskitchen.com'

function cokeScene() {
  nSwitch = 0;
  document.getElementById("SceneSwitch").setAttribute("whichChoice", nSwitch);
}

function appleScene() {
  nSwitch = 1;
  document.getElementById("SceneSwitch").setAttribute("whichChoice", nSwitch);
}

function powerScene() {
  nSwitch = 2;
  document.getElementById("SceneSwitch").setAttribute("whichChoice", nSwitch);
}

var spinning = false;

function spin() {
  spinning = !spinning;
  document
    .getElementById("model__RotationTimer")
    .setAttribute("enabled", spinning.toString());
}

function stopRotation() {
  spinning = false;
  document
    .getElementById("model__RotationTimer")
    .setAttribute("enabled", spinning.toString());
}

function animateModel() {
  if (
    document.getElementById("model__RotationTimer").getAttribute("enabled") !=
    "true"
  )
    document
      .getElementById("model__RotationTimer")
      .setAttribute("enabled", "true");
  else
    document
      .getElementById("model__RotationTimer")
      .setAttribute("enabled", "false");
}

function wireFrame() {
  var e = document.getElementById("wire");
  e.runtime.togglePoints(true);
  e.runtime.togglePoints(true);
}

function cameraFront() {
  document.getElementById("model__CameraFront").setAttribute("bind", "true");
}

function cameraBack() {
  document.getElementById("model__CameraBack").setAttribute("bind", "true");
}

function cameraLeft() {
  document.getElementById("model__CameraLeft").setAttribute("bind", "true");
}

function cameraRight() {
  document.getElementById("model__CameraRight").setAttribute("bind", "true");
}

function cameraTop() {
  document.getElementById("model__CameraTop").setAttribute("bind", "true");
}

function cameraBottom() {
  document.getElementById("model__CameraBottom").setAttribute("bind", "true");
}

function cameraIso() {
  document.getElementById("model__CameraIso").setAttribute("bind", "true");
}
