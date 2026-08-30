// Atualiza o contador visual do range
function updateLengthDisplay() {
    const length = document.getElementById('length').value;
    document.getElementById('lengthValue').innerText = length;
}

function generate() {
    const length = parseInt(document.getElementById('length').value, 10);
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

    const passwordElement = document.getElementById('password');
    passwordElement.innerText = password;
    passwordElement.style.color = '#f3e8ff';
}

// Copiar com alteração temporária do ícone para indicativo de sucesso
function copyPassword() {
    const passwordText = document.getElementById('password').innerText;
    if (!passwordText || passwordText === 'Sua senha aparecerá aqui') return;

    navigator.clipboard.writeText(passwordText).then(() => {
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        
        setTimeout(() => {
            copyBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
        }, 1500);
    });
}
