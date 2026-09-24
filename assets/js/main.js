(function(){
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header scrolled state + sticky mobile CTA
  var header = document.getElementById('header');
  var sticky = document.getElementById('stickyCta');
  var hero = document.getElementById('topo');

  // Animated counters
  function fmt(v, decimals){
    return decimals ? v.toFixed(decimals).replace('.', ',') : Math.round(v).toString();
  }
  function runCounter(el){
    var target = parseFloat(el.dataset.count);
    var decimals = parseInt(el.dataset.decimals || '0', 10);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var start = performance.now(), dur = 1100;
    function tick(now){
      var p = Math.min((now - start) / dur, 1);
      el.textContent = prefix + fmt(target * (1 - Math.pow(1 - p, 3)), decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Reveal + counters, driven by scroll position rather than IntersectionObserver
  // so that jump-scrolls (anchor links, restored scroll position) can never leave
  // a skipped-over element stuck at opacity 0.
  var revealEls = [].slice.call(document.querySelectorAll('.reveal'));
  var counters = [].slice.call(document.querySelectorAll('[data-count]'));

  if (reduced) {
    revealEls.forEach(function(el){ el.classList.add('is-in'); });
    revealEls = [];
    counters = [];
  }

  function sweep(){
    var vh = window.innerHeight, shown = 0;
    revealEls = revealEls.filter(function(el){
      if (el.getBoundingClientRect().top >= vh * 0.92) return true;
      var delay = shown++ * 70;
      setTimeout(function(){ el.classList.add('is-in'); }, delay);
      return false;
    });
    counters = counters.filter(function(el){
      var r = el.getBoundingClientRect();
      if (r.top >= vh * 0.9 || r.bottom <= 0) return true;
      runCounter(el);
      return false;
    });
  }

  var ticking = false;
  function onFrame(){
    ticking = false;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    if (hero) {
      var past = window.scrollY > hero.offsetHeight * 0.75;
      var atEnd = window.innerHeight + window.scrollY > document.body.offsetHeight - 240;
      sticky.classList.toggle('is-visible', past && !atEnd);
    }
    if (revealEls.length || counters.length) sweep();
  }
  function schedule(){
    if (!ticking) { ticking = true; requestAnimationFrame(onFrame); }
  }
  window.addEventListener('scroll', schedule, {passive:true});
  window.addEventListener('resize', schedule, {passive:true});
  window.addEventListener('load', schedule);
  onFrame();
})();
