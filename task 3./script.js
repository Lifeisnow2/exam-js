const endpoint = "https://api.github.com/users";
const output = document.getElementById("output");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  // Remove the message when the button is clicked
  message.style.display = "none";

  fetch(endpoint)
    .then((response) => response.json())
    .then((users) => {
      // Clear the output container
      output.innerHTML = "";

      users.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = user.avatar_url;

        const title = document.createElement("h2");
        title.textContent = user.login;

        card.appendChild(image);
        card.appendChild(title);
        output.appendChild(card);
      });
    })
    .catch((error) => {
      console.error(error);
      output.textContent = "Error fetching data from the API";
    });
});
