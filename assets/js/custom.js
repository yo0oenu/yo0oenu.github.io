/* ============================================================================
   yo0oenu.github.io — 커스텀 스크립트
   위치: assets/js/custom.js
   하는 일: 본문 블록에 스크롤 리빌을 걸어줍니다. 그 외엔 아무것도 안 합니다.
   ============================================================================ */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll(
      '.page__content > h2, .page__content > h3, .page__content > p,' +
      '.page__content > ul, .page__content > ol, .page__content > .framestrip,' +
      '.archive__item'
    );
    if (!targets.length) return;

    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      // 첫 화면에 보이는 요소들만 살짝 순차적으로
      if (i < 6) el.style.transitionDelay = (i * 70) + 'ms';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    targets.forEach(function (el) { io.observe(el); });
  });
})();
