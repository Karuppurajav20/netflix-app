document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll('.accordion');
  const panels = document.querySelectorAll('.panel');

  accordions.forEach((accordion, i) => {
    accordion.addEventListener('click', () => {
      const panel = panels[i];
      const icon = accordion.querySelector('.icon');
      if (!panel || !icon) return;

      // Close all other panels
      panels.forEach((p, index) => {
        if (index !== i) {
          p.style.maxHeight = null;
          p.classList.remove('open');
          const otherIcon = accordions[index].querySelector('.icon');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });

      // Toggle current panel
      if (panel.classList.contains('open')) {
        panel.style.maxHeight = null;
        panel.classList.remove('open');
        icon.textContent = '+';
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add('open');
        icon.textContent = '×';
      }
    });
  });
});
function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;
  const scrollAmount = 400; // Adjust as needed for your card width
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}