function injectPirateButton() {
  const headerMenu = document.querySelector('nav.kinopoisk-header-featured-menu');
  
  if (!headerMenu) return;

  if (document.getElementById('sspoisk-nav-btn')) return;

  const pirateBtn = document.createElement('a');
  pirateBtn.id = 'sspoisk-nav-btn';
  pirateBtn.innerText = 'Смотреть бесплатно';
  
  pirateBtn.href = window.location.href.replace('kinopoisk.ru', 'kinokino.win');
  pirateBtn.target = '_blank';

	pirateBtn.style.padding = "12px 13px";
  pirateBtn.style.maxHeight = "37px";
  pirateBtn.style.alignSelf = "center";
	pirateBtn.style.textWrap = 'nowrap'
  pirateBtn.style.display = 'inline-flex';
  pirateBtn.style.alignItems = 'center';
  pirateBtn.style.marginLeft = '15px';
  pirateBtn.style.padding = '6px 14px';
  pirateBtn.style.backgroundColor = '#ff5500';
  pirateBtn.style.color = '#fff';
  pirateBtn.style.borderRadius = '20px';
  pirateBtn.style.fontWeight = '500';
  pirateBtn.style.fontSize = '14px';
  pirateBtn.style.textDecoration = 'none';
  pirateBtn.style.fontFamily = 'Graphik Kinopoisk LC Web, Arial, sans-serif';
  pirateBtn.style.transition = 'background-color 0.2s';

  pirateBtn.addEventListener('mouseenter', () => {
    pirateBtn.style.backgroundColor = '#e64d00';
  });
  pirateBtn.addEventListener('mouseleave', () => {
    pirateBtn.style.backgroundColor = '#ff5500';
  });

  headerMenu.appendChild(pirateBtn);
}

injectPirateButton();

let lastUrl = location.href;
const observer = new MutationObserver(() => {
  const currentUrl = location.href;
  
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    
    setTimeout(() => {
      const existingBtn = document.getElementById('sspoisk-nav-btn');
      if (existingBtn) {
        existingBtn.href = currentUrl.replace('kinopoisk.ru', 'kinokino.win');
      } else {
        injectPirateButton();
      }
    }, 500);
  } else {
    injectPirateButton();
  }
});

observer.observe(document.body, { subtree: true, childList: true });
