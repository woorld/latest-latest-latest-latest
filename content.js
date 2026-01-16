let isEventRegistered = false;

const bodyObserver = new MutationObserver(() => {
  if (!location.href.startsWith('https://x.com/home')) {
    isEventRegistered = false;
    return;
  }

  if (isEventRegistered) {
    return;
  }

  const homeButton = document.querySelector('a[href="/home"].css-175oi2r.r-6koalj.r-eqz5dr.r-16y2uox.r-cnw61z.r-13qz1uu.r-1ny4l3l.r-1loqt21');
  const followingTab = document.querySelector('div[aria-haspopup="menu"].css-175oi2r.r-1awozwy.r-6koalj.r-eqz5dr.r-16y2uox.r-1h3ijdo.r-1777fci.r-s8bhmr.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l');

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
