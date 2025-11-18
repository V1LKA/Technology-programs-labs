function generateFakeJWT(email) {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = btoa(JSON.stringify({ email, login: Date.now() }));
    return `${header}.${payload}.fake-signature`;
}

window.onload = function() {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token && email) {
        showProtected(token, email);
    }
};

function login() {
    const email = document.getElementById("email").value;

    if (!email) return alert("Введите e-mail");

    const token = generateFakeJWT(email);

    localStorage.setItem("token", token);
    localStorage.setItem("email", email);

    showProtected(token, email);
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    document.getElementById("protected").style.display = "none";
    document.getElementById("loginForm").style.display = "block";

    document.getElementById("title").innerText = "Вход";
}

function showProtected(token, email) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("protected").style.display = "block";

    document.getElementById("tokenBox").textContent = token;
    document.getElementById("helloUser").innerText = "Привет, " + email;

    document.getElementById("title").innerText = "Личный кабинет";
}