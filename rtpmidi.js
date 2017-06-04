var rtpmidi = require('rtpmidi');
var midi = require("midi");

rtpmidi.manager.on('sessionAdded', function(event) { console.log('A local session was created'); });
rtpmidi.manager.on('sessionRemoved', function(event) { console.log('A local session was removed'); });

var session = rtpmidi.manager.createSession({
  localName: 'RTPMidi Session',
  bonjourName: 'Room of Sound RTP MIDI',
  port: 5006
});

session.on('streamAdded', function(event) { console.log('The stream "' + event.stream.name + '" was added to the session "' + session.localName +'"'); });
session.on('streamRemoved', function(event) { console.log('The stream "' + event.stream.name + '" was removed from the session "' + session.localName +'"'); });
rtpmidi.manager.on('remoteSessionAdded', function(event) { console.log('A remote session was discovered: ' + event.remoteSession.name); });
rtpmidi.manager.on('remoteSessionRemoved', function(event) { console.log('A remote session disappered'); });

// connect to a remote session by Bonjour name
var connectNamed = function(name) {
  var remotes = rtpmidi.manager.getRemoteSessions();
  for (var i = 0; i < remotes.length; i++) {
    if (remotes[i].name === name) {
      session.connect(remotes[i]);
    }
  }
};

// discover Bonjour MIDI services. Will display names suitable for connectNamed above
rtpmidi.manager.startDiscovery();

// create local MIDI virtual ports
input = new midi.input();
output = new midi.output();
input.openVirtualPort("Virtual Input");
output.openVirtualPort("Virtual Output");

// MIDI input (local MIDI -> RTP)
input.on('message', function(deltaTime, message) {
  session.sendMessage(deltaTime, message);
});

// MIDI output (RTP -> local MIDI)
session.on('message', function(deltaTime, message) {
  // message is a Buffer so we convert it to an array to pass it to the midi output.
  var commands = Array.prototype.slice.call(message, 0);
  output.sendMessage(commands);
});
