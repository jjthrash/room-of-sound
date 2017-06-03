# RTP-MIDI Tips

## Overview of RTP-MIDI

* RTP-MIDI is a standard for transferring MIDI events over Wi-Fi and Ethernet
* It is supported by iOS, node.js, Windows, Apple, and other systems and applications
* The modern infrastructure uses Apple Bonjour
* For more info, see https://en.wikipedia.org/wiki/RTP-MIDI

## iOS connection instructions:

iOS supports RTP-MIDI natively, but you have to install apps that use it to your device to send MIDI events

1. Begin using an app that supports RTP-MIDI 
2. Connect the device to the network using the host computer
3. You should be able to send RTP-MIDI events

(note: some iOS apps do not indicate that they are connected via RTP-MIDI, even if they are)

## Suggested iOS apps:

* [PadMIDI](https://itunes.apple.com/us/app/pad-midi/id412795962?mt=8) (free; for iPhone) 
* [MidiPatterns](https://itunes.apple.com/us/app/midipatterns/id893884046?mt=8) (free; for iPad)

## Windows connection instructions:

Windows does not support RTP-MIDI natively; however, support for the standard can easily be installed. As on iOS, you have to install 
applications that use MIDI to your computer (they don't have to support RTP-MIDI specifically)

1. Install [rtpMIDI](http://www.tobias-erichsen.de/software/rtpmidi.html)
2. Follow the instructions at http://www.tobias-erichsen.de/software/rtpmidi/rtpmidi-tutorial.html to set up a connection between devices
3. Install software capable of sending MIDI events to and from devices. In these instructions, we use 
[SunVox](http://www.warmplace.ru/soft/sunvox/).
4. Create a new project in SunVox.
More to come!
