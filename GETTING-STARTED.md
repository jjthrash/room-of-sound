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

## Setting up your own MIDI Distributor if you don't have a Raspberry Pi set up yet

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
- Insert your SD card (it will need an adapter of some kind, but it probably came with one)
- Bake your Pi (get it? get it?)
  - ![write](http://take.ms/wSIS9)

### Boot your Raspberry Pi for the First Time

PiBakery will do a bunch of setup for you the first time it boots.

- Hook up your monitor and keyboard if you have one. This step really helps.. in fact, I (Jimmy) have never had it work reliably without a monitor, for some reason.
- Plug in your SD card to the Raspberry Pi
- Plug the power into the Raspberry Pi
- Watch the whole process, then wait for it to power off

After it powers off, it should be ready for use.

### Use your new MIDI Distributor

After it's booted up the second and subsequent times, it will look every minute for new USB MIDI devices. When it finds one it will hook it up with all the other ones.

### Tips and Tricks

If you have an old-style MIDI device (with 5-DIN jacks, like [this guy](https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZyKTtVuD9TsLs8aZ0vahxwEsDh%26pid%3D15.1&f=1))
you will definitely need the USB MIDI cables, mentioned above. Be sure to plug the "out" of the MIDI cables into the "in" of your instrument.

The Raspberry Pi has a limited number of USB ports. If you start running out, use a *powered* USB hub (one with a wall-wart jack to give it juice).

## Setting up your own MIDI Distributor if you already have a Raspberry Pi set up

The following assumes a mostly vanilla Raspbian setup.

Use the following commands at a terminal:

```
cd                                                                                         # make sure you're in your home directory
curl -sL https://deb.nodesource.com/setup | sudo bash -                                    # set up NodeJS for Raspberry Pi
sudo apt-get install nodejs libavahi-compat-libdnssd-dev libasound2-dev                    # Install dependencies
npm install mdns2                                                                          # Install more dependencies
npm install midi
npm install rtpmidi
curl -O https://raw.githubusercontent.com/jjthrash/room-of-sound/master/connect.py         # Download the MIDI connector script
(crontab -l 2>/dev/null; echo "* * * * * /usr/bin/python /home/pi/connect.py") | crontab - # Set up the script to run every minute
```

Then reboot.

## Building your own Instrument

You are really only limited by budget and reality here, but following are some guidelines to get going building your own instrument.

### General Guidelines

- Don't feel like you have to do *all* of it. If you can make an instrument that makes noise, but want help getting MIDI hooked up, ask for help!
- Focus on the instrument first, then make it work with the Room of Sound. No sense spending a bunch of time on MIDI or Arduino stuff if the idea doesn't pan out. Except that learning is fun.

### What is MIDI?

MIDI stands for Musical Instrument Digital Interface. It's been around forever and is very well supported. We've chosen MIDI as the interface for that reason.

Things you can do with MIDI:
- play notes
- control how loud the notes are
- control settings on your instrument, like timbre, sustain length
- divide messages into channels so that some instruments receive some messages and other instruments receive others

Keep in mind that "notes" here can mean "bang a pot." I.e. it doesn't have to play a particular note. If you make a robotic drum kit, you can crash the cymbal when someone presses a C#, if you want.

### The parts

Broadly speaking, each instrument can be divided into these parts:

- MIDI interface. Optional, but lets it participate in the Room in a very direct way.
- The instrument itself. The thing that makes noise.
- Microcontroller. Optional, but is required for MIDI, and lets you do things like control solenoids, servomotors, etc.

## Other resources

- [The specification](room-of-sound.md)—This document describes functional details. Go here if you want to know exactly how it works.
