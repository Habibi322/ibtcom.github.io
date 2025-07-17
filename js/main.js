const callbackBtns = document.querySelectorAll('.btn');
        const modalOverlay = document.getElementById('modalOverlay');
        const closeBtn = document.getElementById('closeBtn');
        
        callbackBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                modalOverlay.style.display = 'flex';
            });
        });
        
        closeBtn.addEventListener('click', function() {
            modalOverlay.style.display = 'none';
        });
        
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
        
        callbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Ваша заявка принята! Мы свяжемся с вами в ближайшее время.');
            
            callbackForm.reset();
            modalOverlay.style.display = 'none';
        });