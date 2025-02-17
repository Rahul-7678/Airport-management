// Routes Data
const routes = [
    { from: "Delhi", to: "Mumbai", price: 5000 },
    { from: "Chennai", to: "Kolkata", price: 4500 },
    { from: "Bangalore", to: "Hyderabad", price: 4000 },
];

// Display routes on the home page
document.addEventListener("DOMContentLoaded", () => {
    const routeList = document.getElementById("routeList");
    if (routeList) {
        routes.forEach((route) => {
            const div = document.createElement("div");
            div.textContent = `${route.from} → ${route.to}: ₹${route.price}`;
            routeList.appendChild(div);
        });
    }
});

// Handle registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Save registration data to localStorage
        localStorage.setItem("isRegistered", "true");
        localStorage.setItem("userName", name);
        alert("Registration successful!");
        window.location.href = "index.html";
    });
}

// Handle booking
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const isRegistered = localStorage.getItem("isRegistered");

        if (!isRegistered) {
            alert("Please register before booking a flight.");
            window.location.href = "register.html";
            return;
        }

        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;

        alert(`Flight booked successfully from ${from} to ${to}!`);
    });
}
