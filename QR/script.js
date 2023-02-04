const textInput = document.getElementById('text');
const generateButton = document.getElementById('generate');
const downloadButton = document.getElementById('download');
const qrCodeDiv = document.getElementById('qrcode');

const qr = new QRCode(qrCodeDiv, {
  width: 128,
  height: 128
});

generateButton.addEventListener('click', function() {
  qr.makeCode(textInput.value);
  downloadButton.removeAttribute('disabled');
});

downloadButton.addEventListener('click', function() {
  const canvas = qrCodeDiv.querySelector('canvas');
  const link = document.createElement('a');

  link.download = 'qrcode.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});
