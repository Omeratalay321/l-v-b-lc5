document.getElementById('rastgeleButon').addEventListener('click', function() {
    // Tüm müzik kutularını (şarkıları) seç
    var muzikKutulari = document.querySelectorAll('.muzik-kutu');
    
    // Rastgele bir sayı (index) oluştur
    var rastgeleIndex = Math.floor(Math.random() * muzikKutulari.length);
    
    // Geçici vurgulama için önceki tüm vurguları temizle
    muzikKutulari.forEach(function(kutu) {
        kutu.style.border = 'none'; // Kenarlığı kaldır
        kutu.style.transform = 'scale(1)'; // Boyutu normale döndür
        kutu.style.transition = 'transform 0.5s, border 0.5s'; // Animasyon süresi
    });

    // Rastgele seçilen kutuyu vurgula
    var secilenKutu = muzikKutulari[rastgeleIndex];
    secilenKutu.style.border = '3px solid gold'; // Altın rengi kenarlık ekle
    secilenKutu.style.transform = 'scale(1.03)'; // Biraz büyüt
    
    // Kullanıcıya göstermek için sayfayı kaydır
    secilenKutu.scrollIntoView({ behavior: 'smooth', block: 'center' });
});