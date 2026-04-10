function signIn() {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();

        if (firstName === "" || lastName === "") {
            alert("Please enter both first and last name.");
            return;
        }

        document.getElementById("welcomeMessage").innerText = "Welcome, " + firstName + "!";
    }