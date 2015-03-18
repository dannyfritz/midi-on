'use strict';

if (!global.navigator
	&& typeof global.navigator.requestMIDIAccess !== 'function') {
	throw new Error('Browser does not support MIDI controllers.');
}

function on () {
}

function off () {
}

module.exports = {
	on,
	off
};
