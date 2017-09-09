# Getting Started with the Room of Sound

Jimmy Thrasher <jimmy@jimmythrasher.com>

## Overview

The Room of Sound is a project by the Alamance Maker's Guild intended for
display at the 2018 Maker Faire Burlington. Imagine a room full of noise
and music making devices, some of which have a life of their own, and some
of which are coordinated to make music. Imagine people can interact with
the room and cause the devices to behave differently. The following
scenarios are all fair game:

- a child walks in, sees an electronic drum kit and drum sticks, hits one of the pads, and a crash is heard across the room
- a computer is orchestrating a beer bottle organ, slide bass guitar, and robotic drum kit to play a song
- a keyboard at the entrance controls the beer bottle organ, an electronic synthesizer, and a light display to make procedurally generated mood music
- when the room is loud, a meter in the room shows brighter, more energetic

This document is intended provide a starting point for anybody interested
in building a component for the room of sound. It describes what kinds of
components the room needs as well as what it takes to set up your own Room
of Sound.

### The Pieces

What parts make up the Room of Sound?

- **Instruments:** Instruments make sound or music. They can control themselves, they can be controlled by MIDI, they can be controlled by listening to the sounds in the room. The key is that they make sound.
- **Controllers:** Controllers tell the instruments what to do. They probably do it using MIDI, but who knows, maybe they shine lasers at instruments that respond to lasers.
- **Visualizers:** Visualizers are like instruments, but they make some visual effect instead of sound or music.
- **MIDI Distributor:** To help with some technical details, we have a MIDI Distributor that Instruments and Controllers can plug into to get connected.
- **Power:** Juice, electricity. The Room of Sound will have ways to get power to your component.

## Setting up your own MIDI Distributor

### Purchase

- Raspberry Pi kit, such as [this](https://www.amazon.com/CanaKit-Raspberry-Complete-Starter-Kit/dp/B01C6Q2GSY/ref=sr_1_4?s=pc&ie=UTF8&qid=1504911968&sr=1-4&keywords=raspberry+pi)
- or individual components (valid power supply, 16GB+ micro SD card, maybe a case)
- USB MIDI cables, such as [these](https://www.amazon.com/VicTsing-Cable-Converter-Keyboard-Adapter/dp/B00ACGMOA6/ref=sr_1_3?ie=UTF8&qid=1504911939&sr=8-3&keywords=midi+usb)

Optional, but recommended:

- An HDMI capable monitor (maybe an old VGA monitor plus one of [these](https://www.amazon.com/VicTsing-Gold-Plated-Converter-Adapter-Desktop/dp/B016HL4CAY/ref=sr_1_14?ie=UTF8&qid=1504912137&sr=8-14&keywords=hdmi+adapter))
- A USB keyboard and mouse
- A USB hub

### Set up your SD Card

- Download and install [PiBakery](http://pibakery.org/)
- Download the [MIDI Distributor Recipe](https://raw.githubusercontent.com/jjthrash/room-of-sound/master/midi-distributor.xml). Save it as `midi-distributor.xml`. You might need to File -> Save, or Ctrl-S, or Cmd-S, depending on your computer.
- Open PiBakery. You might have to type in your administrator password to give the program access to your SD Card.
- Import the `midi-distributor.xml` file:
  - ![import](http://take.ms/7xAX2)
  - ![select file](http://take.ms/pnNDf)
  - ![result](http://take.ms/K66Sv)
- Change the wifi settings to match the one in your house/office/workshop/sea-steading platform
  - ![wifi setup](http://take.ms/eyrzgX)
- Bake your Pi (get it? get it?)
  - ![write](http://take.ms/wSIS9)

## Other resources

- [The specification](room-of-sound.md)—This document describes functional details. Go here if you want to know exactly how it works.
