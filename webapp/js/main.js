
// handle requests from TV remote
var currentAElement;
var currentIndex = 0;

var _handleButtons = function (type) {
  var aElements = document.querySelectorAll('a');
  if (!currentAElement) {
    currentAElement = aElements[0];
  } else {
    if (type === 'next') {
      currentIndex++;
    } else {
      currentIndex--;
    }
    if (!aElements[currentIndex]) {
      if (type === 'next') {
        currentIndex = 0;
      } else {
        currentIndex = aElements.length - 1;
      }
    }
    currentAElement = aElements[currentIndex];
  }
  currentAElement.focus();
};

var _triggerButton = function () {
  currentAElement.click();
};

// when TV remote 
var _onKeyDown = function (e) {
  var keyCode = e.keyCode;
  switch (keyCode) {
    case 39: // Right arrow
    case 40: // Down arrow
      _handleButtons('next');
      break;
    case 37: // Left arrow
    case 38: // Up arrow
      _handleButtons('previous');
      break;
    case 13: // Enter
      _triggerButton();
      break;
    default:
      break;
  }
};
var deviceInfo = document.getElementById('device-info');
function getDeviceInfo(device) {
  var info =
    '<table>' +
    '<tr>' +
    '<th>modelName</th>' +
    '<td>' + device.modelName + '</td>' +
    '<th>version</th>' +
    '<td>' + device.version + '</td>' +
    '<th>sdkVersion</th>' +
    '<td>' + device.sdkVersion + '</td>' +
    '</tr>' +
    '<tr>' +
    '<th>screenWidth</th>' +
    '<td>' + device.screenWidth + '</td>' +
    '<th>screenHeight</th>' +
    '<td>' + device.screenHeight + '</td>' +
    '<th>ddrSize</th>' +
    '<td>' + device.ddrSize + '</td>' +
    '</tr>' +
    '<tr>' +
    '<th>uhd</th>' +
    '<td>' + device.uhd + '</td>' +
    '<th>uhd8K</th>' +
    '<td>' + device.uhd8K + '</td>' +
    '<th>oled</th>' +
    '<td>' + device.oled + '</td>' +
    '</tr>' +
    '<tr>' +
    '<th>hdr10</th>' +
    '<td>' + device.hdr10 + '</td>' +
    '<th>dolbyVision</th>' +
    '<td>' + device.dolbyVision + '</td>' +
    '<th>dolbyAtmos</th>' +
    '<td>' + device.dolbyAtmos + '</td>' +
    '</tr>' +
    '</table>';
  deviceInfo.innerHTML = info;
}

webOS.deviceInfo(function (device) {
  getDeviceInfo(device);
});

// when player is ready we wire the UI
document.addEventListener('keydown', _onKeyDown);
