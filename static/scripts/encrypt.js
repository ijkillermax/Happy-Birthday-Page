// Secret key (hardcoded securely in script scope)
const SECRET_KEY = "qxv078amk69h5zfs"; // keep this private if using in production

function encryptAndDecrypt() {
    const name = document.getElementById("name").value.trim();

    if (!name) {
        alert("Please enter a name.");
        return;
    }

    // Encrypt
    const encrypted = CryptoJS.AES.encrypt(name, SECRET_KEY).toString();

    // URL Encode
    const encoded = encodeURIComponent(encrypted);

    // Decrypt
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    // Show outputs
    document.getElementById("encodedOutput").style.display = "block";

    document.getElementById("encodedOutput").innerHTML = `<strong>URL Encoded:</strong> ${encoded}`;

    // Shareable URL
    const baseURL = window.location.origin;
    const shareURL = `${baseURL}?name=${encoded}`;

    document.getElementById("shareableURL").style.display = "block";
    document.getElementById("shareableURL").innerHTML = `<strong>Shareable URL:</strong> <a href="${shareURL}" target="_blank">${shareURL}</a>`;
}