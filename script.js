function generate() {
    const length = parseInt(document.getElementById('length').value, 10) || 12;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = randomValues[i] % characters.length;
        password += characters[randomIndex];
    }

    document.getElementById('password').innerText = password;
}
