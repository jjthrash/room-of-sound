Room of Noise (working title)
=============================

Author: Jimmy Thrasher (jimmy@jimmythrasher.com)

Document Contributors:
- TBD

Overview
--------

The purpose of this document is to describe the design of the Room of Noise project, primarily for the goal of enable individuals to contribute in a distributed fashion. This document isn't a guide for implementation (e.g. that we might hand to a school group). Rather, it's a centralizing point for discussion.

The purpose of the project is to build a massive music instrument for the Burlington Maker Faire 2018.

### Principles

- should be relatively accessible. Want to get people making!
- should aim to keep things as simple as possible, even if it means slightly more cost overall
- the basic skeleton should be outlined as quickly as possible
- at least a large portion of the project should be reasonably portable for other events
- should follow standard interfaces to make integration reasonably easy
- should allow for independent development of input and output components (e.g. for AMG members who can't make it to meetings, school groups, etc)
- should not be too picky about latency or quality. The goal is to have fun and get people making.

### Instigation

Ben Harris posted in our Microcontroller Interest Group page:

> For Maker Faire 2018, literally starting the day after Maker Faire 2017, I think the AMG Micro Controller Group should build a massive musical instrument like this. With floppy drives, scanners, servo motors, controlled by Arduino and Raspberry Pi.
> It should be able to play Midi files so it can do ANY song that a MIDI exists of. It should also accept input from a MIDI keyboard so that anyone can play it like a musical instrument in real time.
> Would be cool to include nixies, 555 timers, atari-punk-console like things. Old school synths hacked and added, etc etc.
> Think of it like a fairgrounds pipe organ but made out of modern tech (and recycled 10 year old tech).
> Should have oscilloscopes and more. Built modularly so that pieces work on their own, can be stored, etc etc. But then at the Faire it can take up a whole room (made of individuals bits and pieces)
> We might even be able to fund this through the Awesome fund (for $1000)
> What do you all think?

Technical Details
-----------------

### Protocols/Interfaces

#### MIDI

The project will standardize on MIDI as the central control protocol.

Instruments and controllers should conform to the following channel assignments:

- Percussion: Channel 4
- Lead: Chanel 5
- Bass: Channel 6
- Pad: Channel 7

#### Power

Components that need power will provide their own power (batteries) or use wall power (120VAC).

#### Audio Output/Amplification

TBD. Each instrument could be responsible for emitting its own sound, but that means lower-volume instruments would be required to provide their own amplification. Another possibility is to provide a basic multi-channel mixer for any components that need amplification.

### Power distribution

The purpose of this is to provide 120VAC power to components as needed. Probably just a group of power strips and an extension cord.

### MIDI Distributor

The purpose of the MIDI distributor is to act as the main MIDI interface for the MIDI input devices (keyboards, theremins, accelerometer-sensitive Arduino devices, whatever). MIDI instruments would connect to it via USB (possibly via MIDI USB cables), or by daisy-chaining with other MIDI instruments.

It could also provide a visual stream of MIDI events as a form of visualization.

Possible design:
- Raspberry Pi computer
- Monitor
- USB hub(s)

The distributor would need to handle multiple MIDI input devices and multiple MIDI output devices along the following lines:

- input device sends a MIDI event on a particular channel
- distributor sends the MIDI event to each of its MIDI output devices as-is

### MIDI/CV Interface (optional)

The purpose of the MIDI/CV interface is to allow instruments to be controlled via Doepfer/Eurorack modular synthesizer Control Voltage (CV). The component would act as an instrument listening on a particular channel (or set of channels). It would convert the MIDI signals into appropriate CV values.

E.g.

- the note values of note on/off events could be converted to pitch CV per the "one volt per octave" at concert pitch.
- the on/off events could be convert to CV gate signals on a different output

See this [Wikipedia article](https://en.wikipedia.org/wiki/CV/gate) for more information on these ideas.

See this [schematic](http://www.emusic-diy.org/Schematics/Misc/MidiCv?action=AttachFile&do=get&target=MIDITOCV.GIF) for a more feature-rich MIDI/CV interface.

### MIDI Controllers

MIDI controllers emit MIDI events. Standard examples include keyboards and sequencers.

- must interface using USB MIDI. If this means they provide their own USB MIDI cables, then fine.
- may output on multiple or configurable channels, as needed.

### MIDI Instruments

MIDI instruments respond to MIDI events and make sound (usually). Standard examples include keyboards (when controlled externally), synthesizers, drum machines.

- should support old 5-pin DIN MIDI with MIDI input, output, and through channels. This allows for simpler daisy chaining and configuration of the MIDI Distributor.
- should listen to their channel(s) of interest (see above for channel assignemnts) and respond.
- must provide their own power or be powered via wall power.
- must provide their own output/amplification as needed (this may change).

Discussion notes
----------------

This section outlines why we've made some of the decisions we've made.

#### Why this document?

It's how I (Jimmy) think.

#### Why 120VAC and not 12VDC or a variety?

Fred says DC would be a pain to manage. Each component can take wall power and do whatever it wants.

#### Why MIDI? Why not OSC, some DC protocol, etc?

Widely supported. It's old, but we can make it work with a reasonable topology, which is what we're attempting above. Moreover, MIDI is actually supported over Bluetooth, though making that work may be more annoying than it's worth.

Changelog
---------

- 2017-05-22—Straw man one
