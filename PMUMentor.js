let users = [];

function signUp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    users.push({ name, email, password });
    alert('Sign Up Successful!');
    switchToLogin();
}

function logIn() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        document.getElementById('user-name').innerText = user.name;
        document.getElementById('log-in-form').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
}

function logOut() {
    document.getElementById('dashboard').style.display = 'none';
    switchToLogin();
}

function switchToLogin() {
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('log-in-form').style.display = 'block';
}

function shareResource() {
    const title = document.getElementById('resource-title').value;
    const description = document.getElementById('resource-description').value;

    const resourceDiv = document.createElement('div');
    resourceDiv.innerHTML = `<h4>${title}</h4><p>${description}</p>`;
    document.getElementById('resources').appendChild(resourceDiv);

    alert('Resource Shared!');
}