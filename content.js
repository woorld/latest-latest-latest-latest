document.addEventListener('click', e => {
  if (!location.pathname.startsWith('/home')) {
    return;
  }

  const followingTab = e.target.closest('[data-testid="primaryColumn"] div[aria-haspopup="menu"]');
  if (followingTab == null) {
    return;
  }

  const isChevronClick = e.target.closest('svg') != null;
  if (followingTab.getAttribute('aria-selected') === 'false' || isChevronClick) {
    return;
  }

  const homeButton = document.querySelector('a[href="/home"][data-testid="AppTabBar_Home_Link"]');
  if (homeButton == null) {
    console.warn('latest-latest-latest-latest: ホームボタンが取得できませんでした');
    return;
  }

  e.stopImmediatePropagation();
  e.preventDefault();
  homeButton.click();
}, true);
