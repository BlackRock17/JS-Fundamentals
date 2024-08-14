function encodeAndDecodeMessages() {
    const textareas = document.getElementsByTagName('textarea');
    const buttons = document.getElementsByTagName('button');

    const encodeTextarea = textareas[0];
    const decodeTextarea = textareas[1];
    const encodeButton = buttons[0];
    const decodeButton = buttons[1];

    encodeButton.addEventListener('click', encodeAndSend);
    decodeButton.addEventListener('click', decodeAndRead);

    function encodeAndSend() {
        const message = encodeTextarea.value;
        const encodedMessage = encode(message);
        encodeTextarea.value = '';
        decodeTextarea.value = encodedMessage;
    }

    function decodeAndRead() {
        const encodedMessage = decodeTextarea.value;
        const decodedMessage = decode(encodedMessage);
        decodeTextarea.value = decodedMessage;
    }

    function encode(message) {
        return message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    }

    function decode(message) {
        return message.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    }
}