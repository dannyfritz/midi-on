[![MIT](https://img.shields.io/npm/l/midi-on.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/midi-on.svg?style=flat-square)](https://www.npmjs.com/package/midi-on)

# midi-on

An event library for MIDI controllers in a browser.

## Installation

### npm

```bash
$ npm install midi-on
```

Then use browserify, webpack, etc.

### script

```html
<script src="midi-on.js"></script>
```

## Usage

```js
var midi = require('midi-on');
midi.on('note-on', function (data) {
	console.log(data)
});
midi.on('note-off', function (data) {
	console.log(data)
});
```
