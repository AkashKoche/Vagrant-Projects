document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            window.location.href = 'dashboard.html';  // Redirect to a dashboard or another page
        } else {
            alert('Login failed: ' + data.message);
        }
    });
});

document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Signup successful! Please login.');
            window.location.href = 'index.html';  // Redirect to login page
        } else {
            alert('Signup failed: ' + data.message);
        }
    });
});
