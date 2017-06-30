#pi@ros-distributor:~ $ aconnect -l
#client 0: 'System' [type=kernel]
#    0 'Timer           '
#    1 'Announce        '
#client 14: 'Midi Through' [type=kernel]
#    0 'Midi Through Port-0'
#client 20: 'MPK mini' [type=kernel]
#    0 'MPK mini MIDI 1 '
#client 24: 'CH345' [type=kernel]
#    0 'CH345 MIDI 1    '

import subprocess
import re

class Client:
  def __init__(self, number, name, port):
    self.number = number
    self.name   = name
    self.port   = port

  def connect_to(self, client):
    subprocess.call(["aconnect", self.connection_descriptor(), client.connection_descriptor()])

  def connection_descriptor(self):
    return "%s:%s" % (self.number, self.port)

def build_client_from_descriptor(lines):
  m1 = re.match(r"client (\d+): '(.*)' \[type=kernel\]", lines[0])
  m2 = re.match(r"\s+(\d+) '(.*)'", lines[1])
  return Client(m1.group(1), m1.group(2), m2.group(1))

def gather_descriptors(lines):
  descriptors = []

  for line in lines:
    if line.startswith("client"):
      descriptors.append([])
    descriptors[-1].append(line)

  return descriptors

output      = subprocess.check_output(["aconnect", "-l"])
lines       = output.splitlines()
descriptors = gather_descriptors(lines)
clients     = [ build_client_from_descriptor(descriptor) for descriptor in descriptors ]

thru = None
system = None
devices = []
for client in clients:
  if client.name == "System":
    system = client
  elif client.name == "Midi Through":
    thru = client
  else:
    devices.append(client)

for device in devices:
  thru.connect_to(device)
  device.connect_to(thru)
