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
    document.getElementById("encryptedOutput").style.display = "block";
    document.getElementById("encodedOutput").style.display = "block";
    document.getElementById("decryptedOutput").style.display = "block";

    document.getElementById("encryptedOutput").innerHTML = `<strong>Encrypted:</strong> ${encrypted}`;
    document.getElementById("encodedOutput").innerHTML = `<strong>URL Encoded:</strong> ${encoded}`;
    document.getElementById("decryptedOutput").innerHTML = `<strong>Decrypted:</strong> ${decrypted}`;
}