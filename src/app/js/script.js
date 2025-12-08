document.addEventListener("DOMContentLoaded", () => {
    const firstName = "MICHEL";
    const lastName  = "RIGAURIO";

    const firstEl = document.getElementById("firstName");
    const lastEl  = document.getElementById("lastName");

    if (firstEl) firstEl.textContent = firstName;
    if (lastEl)  lastEl.textContent  = lastName;

    const expertiseData = [
        { percent: 90, name: "Adobe<br>Photoshop" },
        { percent: 85, name: "Adobe<br>Illustrator" },
        { percent: 75, name: "Adobe<br>Indesign" },
        { percent: 80, name: "Power<br>Point" }
    ];

    const container = document.getElementById("expertiseList");

    if (!container) return;

    container.innerHTML = "";

    expertiseData.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("expertise-item");

        div.innerHTML = `
            <div class="circle p${item.percent}">
                <span>${item.name}</span>
            </div>
        `;

        container.appendChild(div);
    });

    const arrow = document.getElementById("arrow");
    const text = document.getElementById("aboutText");

    if (!arrow || !text) return;

    arrow.addEventListener("click", () => {
        text.classList.toggle("open");
        arrow.classList.toggle("open");
    });
});
