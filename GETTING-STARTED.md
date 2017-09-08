# Getting Started with the Room of Sound

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

TODO

## Other resources

- [The specification](room-of-sound.md)—This document describes functional details. Go here if you want to know exactly how it works.
