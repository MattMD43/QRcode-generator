'use strict'

let qr_data = document.getElementById('qr_data')
let qr_code = new QRCode(document.getElementById("qrcode"))


                        //Generuj QR
function generatorio(){
    let data = qr_data.value
    let output = document.querySelector('.generated')
    output.textContent = data

    qr_code.makeCode(data)
    qr_data.value = ''
}
