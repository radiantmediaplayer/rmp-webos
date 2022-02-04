var playerButtons = [
  { id: 0, name: 'fastRewind', element: null },
  { id: 1, name: 'quickRewind', element: null },
  { id: 3, name: 'playPause', element: null },
  { id: 4, name: 'quickForward', element: null },
  { id: 5, name: 'fastForward', element: null }
];

var container = document.getElementById('rmpPlayer');
var currentActiveButtonId, rmp, isPaused;
var currentActiveButton;

var _createEvent = function (eventName, element) {
  let event;
  if (element) {
    try {
      event = new Event(eventName);
      element.dispatchEvent(event);
    } catch (e) {
      console.trace(e);
    }
  }
};

// handle requests from TV remote
var _removeHoverClass = function () {
  for (var i = 0, len = playerButtons.length; i < len; i++) {
    playerButtons[i].element.classList.remove('rmp-button-hover');
  }
};

var _setActiveButton = function (id) {
  currentActiveButtonId = id;
  playerButtons[id].element.classList.add('rmp-button-hover');
};

var _handleButtons = function (keyCode) {
  currentActiveButton = container.querySelector('.rmp-button-hover');
  _removeHoverClass();
  var newId;
  switch (keyCode) {
    case 38: // ArrowUp
    case 39: // ArrowRight
      if (playerButtons[currentActiveButtonId + 1]) {
        newId = currentActiveButtonId + 1;
      } else {
        newId = 0;
      }
      break;
    case 37: // ArrowLeft
    case 40: // ArrowDown
      if (playerButtons[currentActiveButtonId - 1]) {
        newId = currentActiveButtonId - 1;
      } else {
        newId = playerButtons.length - 1;
      }
      break;
  }
  _setActiveButton(newId);
};

var _triggerButton = function () {
  currentActiveButton = container.querySelector('.rmp-button-hover');
  _createEvent('click', currentActiveButton);
};

// when TV remote buttons are pressed do something
// we deal with 2 kind of remote: Basic Device, Smart Control 2016

var _onKeyDown = function (e) {
  var currentTime = rmp.getCurrentTime();
  var keyCode = e.keyCode;
  rmp.setControlsVisible(true);
  switch (keyCode) {
    case 412: // MediaRewind 
      rmp.seekTo(currentTime - 10000);
      break;
    case 417: // MediaFastForward 
      rmp.seekTo(currentTime + 10000);
      break;
    case 415: // MediaPlay
      rmp.play();
      break;
    case 19: // MediaPause
      rmp.pause();
      break;
    case 413: // MediaStop
      rmp.stop();
      break;
    case 37: // ArrowLeft
    case 38: // ArrowUp
    case 39: // ArrowRight
    case 40: // ArrowDown
      _handleButtons(keyCode);
      break;
    case 13: // Enter
      _triggerButton();
      break;
    default:
      break;
  }
};

// when player is ready we wire the UI
container.addEventListener('ready', function () {
  rmp = window.rmp;
  playerButtons[0].element = container.querySelector('.rmp-i-fast-rewind');
  playerButtons[0].element.setAttribute('data-button-id', '0');
  playerButtons[1].element = container.querySelector('.rmp-i-quick-rewind-tv');
  playerButtons[1].element.setAttribute('data-button-id', '1');
  playerButtons[2].element = container.querySelector('.rmp-play-pause');
  playerButtons[2].element.setAttribute('data-button-id', '2');
  playerButtons[3].element = container.querySelector('.rmp-i-quick-forward-tv');
  playerButtons[3].element.setAttribute('data-button-id', '3');
  playerButtons[4].element = container.querySelector('.rmp-i-fast-forward');
  playerButtons[4].element.setAttribute('data-button-id', '4');
  document.body.addEventListener('keydown', _onKeyDown);
  _setActiveButton(2);
  currentActiveButton = container.querySelector('.rmp-button-hover');
});
