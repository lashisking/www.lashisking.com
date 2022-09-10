document.body.addEventListener('click', function(event) {
  try {
    var anchor = event.target.dataset.anchor;        
    var el = anchor && document.querySelector(anchor);
    if (el) {
      document.querySelector(anchor).scrollIntoView({behavior: 'smooth'})
    }
  } catch (e) {
    console.log(e);
  }
});

try {
  var isiOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  if (isiOS) {
    document.querySelectorAll('.map-link').forEach(function(el) {
      el.href = el.href.replace('.google.', '.apple.');
    });
  }
} catch (e) {
  console.log(e);
}
