let isEventRegistered = false;

const bodyObserver = new MutationObserver(() => {
  if (!location.href.startsWith('https://x.com/home')) {
    isEventRegistered = false;
    return;
  }

  if (isEventRegistered) {
    return;
  }

  const homeButton = document.querySelector('a[href="/home"][data-testid="AppTabBar_Home_Link"]');
  const followingTab = document.querySelector('div[aria-haspopup="menu"]');

  if (homeButton == null || followingTab == null) {
    return;
  }

  followingTab.addEventListener('click', e => {
    const isChevronClick = ['svg', 'g', 'path'].includes(e.target.tagName);
    if (followingTab.getAttribute('aria-selected') === 'false' || isChevronClick) {
      return;
    }
    e.stopImmediatePropagation();
    homeButton.click();
  });
  isEventRegistered = true;
});

bodyObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
