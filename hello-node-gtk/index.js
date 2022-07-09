const gi = require('node-gtk')
const Gtk = gi.require('Gtk', '3.0')

gi.startLoop()
Gtk.init()

const win = new Gtk.Window({
  title: 'Hello',
  window_position: Gtk.WindowPosition.CENTER
})

win.on('show', Gtk.main)
win.on('destroy', Gtk.mainQuit)
win.setDefaultSize(200, 80)
win.add(new Gtk.Label({label: 'Hello from Gtk!'}))
win.showAll()
