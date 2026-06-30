(function () {
  const hdr = document.getElementById('hdr');
  if (!hdr) return;

  const hero = document.querySelector('#hero, [id$="-hero"]');

  function setSolid(isSolid) {
    hdr.classList.toggle('hdr--solid', isSolid);
  }

  if (!hero) {
    setSolid(true);
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => setSolid(!entry.isIntersecting),
    { threshold: 0 }
  );

  observer.observe(hero);
})();
