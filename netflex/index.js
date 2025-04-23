document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll('.accordion');
  const panels = document.querySelectorAll('.panel');

  accordions.forEach((accordion, i) => {
    accordion.addEventListener('click', () => {
      const panel = panels[i];
      const icon = accordion.querySelector('.icon');

      // Close all other panels
      panels.forEach((p, index) => {
        if (index !== i) {
          p.style.maxHeight = null;
          p.classList.remove('open');
          accordions[index].querySelector('.icon').textContent = '+';
        }
      });

      // Toggle current panel
      if (panel.style.maxHeight) {
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





