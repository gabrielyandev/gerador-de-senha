function generate() {
    var length = document.getElementById('length').value;
    var includeNumbers = document.getElementById('includeNumbers').checked;
    var includeSymbols = document.getElementById('includeSymbols').checked;

    var password = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (includeNumbers) {
        characters += '0123456789';
    }

    if (includeSymbols) {
        characters += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }

    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').innerText = password;
}