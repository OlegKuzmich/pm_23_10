document.addEventListener("DOMContentLoaded", () => {
    fetch("json/data.json")
        .then(response => response.json())
        .then(data => {

            const firstEl = document.getElementById("firstName");
            const lastEl = document.getElementById("lastName");

            if (firstEl) firstEl.textContent = data.firstName;
            if (lastEl)  lastEl.textContent  = data.lastName;

            const container = document.getElementById("expertiseList");

            if (container && data.expertise) {
                container.innerHTML = "";

                data.expertise.forEach(item => {
                    const div = document.createElement("div");
                    div.classList.add("expertise-item");

                    div.innerHTML = `
                        <div class="circle p${item.percent}">
                            <span>${item.name}</span>
                        </div>
                    `;

                    container.appendChild(div);
                });
            }

            const arrow = document.getElementById("arrow");

            if (arrow && aboutText) {
                arrow.addEventListener("click", () => {
                    aboutText.classList.toggle("open");
                    arrow.classList.toggle("open");
                });
            }
        })

        .catch(err => console.error("JSON load error:", err));
});
