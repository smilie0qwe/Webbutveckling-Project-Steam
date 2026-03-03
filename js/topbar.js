document.querySelectorAll('button[class^="dropdown-"]').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        const parent = btn.parentElement;
        document.querySelectorAll('.open').forEach(el => {
            if (el !== parent) el.classList.remove('open');
        });
        parent.classList.toggle('open');
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.open').forEach(el => el.classList.remove('open'));
});