const express = require('express');
const path = require('path');
const app = express();

// Statik dosyaları 'public' klasöründen servis et
app.use(express.static(path.join(__dirname, 'public')));

// Varsayılan rota (isteğe bağlı, test için)
app.get('/', (req, res) => {
  res.send('Merhaba, bu benim AdMob app-ads.txt sunucusu!');
});

// Render'ın varsayılan portunu kullan (veya 3000 fallback)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});