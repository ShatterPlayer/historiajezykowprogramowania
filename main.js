var sidenavVisible = false;

function hideSidenav() {
  document.querySelector('.sidenav').removeAttribute('style');
  sidenavVisible = false;
}

function showSidenav() {
  document.querySelector('.sidenav').style.left = '0';
  sidenavVisible = true;
}

document.addEventListener('scroll', function() {
  document.querySelector('.header__title').style.transform = `
  translateX(${window.scrollY / 2}px)`;

  document.querySelector('.header__author').style.transform = `
  translateX(-${window.scrollY / 2}px)`;

  document.querySelector('.header__languages--top').style.transform = `
  translateX(-${window.scrollY / 2}px)`;

  document.querySelector('.header__languages--bottom').style.transform = `
  translateX(${window.scrollY / 2}px)`;

  if (sidenavVisible) hideSidenav();
});

document.querySelector('.sidenav').addEventListener('click', function() {
  if (!sidenavVisible) showSidenav();
});
document.querySelector('.globalwrapper').addEventListener('click', function() {
  if (sidenavVisible) hideSidenav();
});

var scroll = new SmoothScroll('a[href*="#"]');
