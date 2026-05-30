// Vigenère Cipher Function
function vigenereCipher(text, key, mode) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    text = text.toLowerCase();
    key = key.toLowerCase();
    let result = "";
    let keyIndex = 0;
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charIndex = alphabet.indexOf(char);
  
      if (charIndex === -1) {
        // If not a letter, keep it as is
        result += char;
      } else {
        const keyChar = key[keyIndex % key.length];
        const keyIndexOffset = alphabet.indexOf(keyChar);
  
        if (mode === "encrypt") {
          const newIndex = (charIndex + keyIndexOffset) % 26;
          result += alphabet[newIndex];
        } else {
          const newIndex = (charIndex - keyIndexOffset + 26) % 26;
          result += alphabet[newIndex];
        }
  
        keyIndex++;
      }
    }
  
    return result;
  }
  
  // Encrypt Text
  function encryptText() {
    const plaintext = document.getElementById("plaintext").value;
    const key = document.getElementById("key").value;
  
    if (!plaintext || !key) {
      alert("Harap isi teks plaintext dan kunci Vigenère!");
      return;
    }
  
    const ciphertext = vigenereCipher(plaintext, key, "encrypt");
    document.getElementById("ciphertext").value = ciphertext;
  }
  
  // Decrypt Text
  function decryptText() {
    const ciphertext = document.getElementById("ciphertext").value;
    const key = document.getElementById("key").value;
  
    if (!ciphertext || !key) {
      alert("Harap isi teks ciphertext dan kunci Vigenère!");
      return;
    }
  
    const plaintext = vigenereCipher(ciphertext, key, "decrypt");
    document.getElementById("plaintext").value = plaintext;
  }
  