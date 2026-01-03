document.addEventListener("DOMContentLoaded", () => {
  const dock = document.getElementById("dock");

  const apps = [
    { icon: "./icons/linkedin (2).png", link: "https://linkedin.com" },
    { icon: "./icons/gmail (1).png", link: "https://mail.google.com/mail/u/1/#inbox" },
    { icon: "./icons/youtube (2).png", link: "https://youtube.com" },
    { icon: "./icons/chatgpt.png", link: "https://chatgpt.com" },
    { icon: "./icons/typing.png", link: "#" },
    { icon: "./icons/gmail.png", link: "https://mail.google.com" },
    { icon: "./icons/github (3).png", link: "https://github.com" }
  ];

  let centerIndex = 0;
  let lastIndex = 0;
  let animationToggle = 1;

  function getIndex(i) {
    return (i + apps.length) % apps.length;
  }

  function renderDock(direction = null) {
    dock.className = "dock-track";
    void dock.offsetHeight;

    if (direction) {
      dock.classList.add(
        direction === "left"
          ? `slide-left-${animationToggle}`
          : `slide-right-${animationToggle}`
      );
    }

    animationToggle = animationToggle === 1 ? 2 : 1;
    dock.innerHTML = "";

    for (let offset = -3; offset <= 3; offset++) {
      const index = getIndex(centerIndex + offset);
      const app = apps[index];

      const img = document.createElement("img");
      img.src = app.icon;
      img.className = "app-icon";

      if (offset === 0) img.classList.add("active");
      else if (offset < 0) img.classList.add("left");
      else img.classList.add("right");

      img.addEventListener("click", () => {
        if (index !== centerIndex) {
          lastIndex = centerIndex;
          centerIndex = index;

          const dir =
            centerIndex > lastIndex ||
            (centerIndex === 0 && lastIndex === apps.length - 1)
              ? "left"
              : "right";

          renderDock(dir);
        } else if (app.link !== "#") {
          chrome.tabs.create({ url: app.link });
        }
      });

      dock.appendChild(img);
    }
  }

  renderDock();
});
