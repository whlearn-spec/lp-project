/* FAQ アコーディオン */
document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var item = btn.parentElement;
        var isOpen = item.classList.contains('is-open');

        /* 他の開いているアイテムをすべて閉じる */
        document.querySelectorAll('.faq-item.is-open').forEach(function(el) {
            el.classList.remove('is-open');
            el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            el.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
        });

        /* クリックした項目をトグル */
        if (!isOpen) {
            item.classList.add('is-open');
            btn.setAttribute('aria-expanded', 'true');
            item.querySelector('.faq-answer').setAttribute('aria-hidden', 'false');
        }
    });
});
