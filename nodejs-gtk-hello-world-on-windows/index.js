//const path = require('path')
//const rootdir = __dirname.includes('snapshot') ? path.dirname(process.argv[0]) : __dirname
//process.env['PATH'] = `${rootdir}\\mingw64\\bin;` + process.env['PATH']

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
