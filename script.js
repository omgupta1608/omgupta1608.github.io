document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cursor").forEach(el => el.remove());

  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    const screenWidth = window.innerWidth;
    const positionRatio = e.clientX / screenWidth;

    const colors = [
      [148, 0, 211],  // Violet
      [75, 0, 130],   // Indigo
      [0, 0, 255],    // Blue
      [0, 255, 0],    // Green
      [255, 255, 0],  // Yellow
      [255, 165, 0],  // Orange
      [255, 0, 0]     // Red
    ];

    let index = positionRatio * (colors.length - 1);
    let low = Math.floor(index);
    let high = Math.ceil(index);
    let blend = index - low;

    let r = Math.round(colors[low][0] * (1 - blend) + colors[high][0] * blend);
    let g = Math.round(colors[low][1] * (1 - blend) + colors[high][1] * blend);
    let b = Math.round(colors[low][2] * (1 - blend) + colors[high][2] * blend);


    cursor.style.left = `${e.clientX - 60}px`;
    cursor.style.top = `${e.clientY - 60}px`;
    cursor.style.background = `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.7) 0%, rgba(${r}, ${g}, ${b}, 0) 80%)`;
  });
});

