window.addEventListener('DOMContentLoaded', function () {
    const panel = document.getElementById('accessibility-panel');
    const toggleBtn = document.getElementById('accessibility-toggle');
  
    if (!panel || !toggleBtn) return;
  
    toggleBtn.addEventListener('click', () => {
      panel.classList.toggle('hidden');
    });
  
    let currentZoom = 100;
  
    window.increaseFont = function () {
      if (currentZoom < 200) {
        currentZoom += 10;
        document.documentElement.style.setProperty('--base-font-size', `${currentZoom}%`);
      }
    };
  
    window.decreaseFont = function () {
      if (currentZoom > 50) {
        currentZoom -= 10;
        document.documentElement.style.setProperty('--base-font-size', `${currentZoom}%`);
      }
    };
  
    window.toggleContrast = function () {
      document.body.classList.toggle('high-contrast');
    };
  
    window.alignText = function (direction) {
      document.body.classList.remove('text-left', 'text-center', 'text-right', 'text-justify');
      document.body.classList.add(`text-${direction}`);
    };
  
    window.resetAccessibility = function () {
      document.documentElement.style.setProperty('--base-font-size', '100%');
      document.body.classList.remove(
        'high-contrast',
        'text-left',
        'text-center',
        'text-right',
        'text-justify'
      );
      currentZoom = 100;
    };
  });
  