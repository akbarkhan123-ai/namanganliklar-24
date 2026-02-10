document.querySelectorAll('.btn').forEach(btn => {
	btn.addEventListener('click', e => {
		const ripple = document.createElement('span');
		ripple.classList.add('ripple');

		const rect = btn.getBoundingClientRect();
		ripple.style.left = e.clientX - rect.left + 'px';
		ripple.style.top = e.clientY - rect.top + 'px';

		btn.appendChild(ripple);

		setTimeout(() => ripple.remove(), 600);
	});
});
