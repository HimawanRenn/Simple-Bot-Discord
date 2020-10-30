# Simple Bot Discord
 ini adalah bot discord simple belum ada command apa pun, bahasa bot ini adalah node.js

## Membutuhkan (jika ingin hosting di pc/server sendiri)
<a href="https://nodejs.org/en/">Node.js</a>
<a href="https://discord.com/developers/applications">Bot discord</a>

## Cara Install

1. **Clone Repository**
```bash
git clone https://github.com/HimawanRenn/Simple-Bot-Discord.git
cd Simple-Bot-Discord
npm install
```

2. **Ganti ```token``` sesuai dengan token bot yang kalian buat**
```
client.login('token');
```

3. **Cara kerja bot**
```bash
node index.js
```

## Setup + Hosting 24/7
Jika lu pake cara ini, sip pas untuk lu yang gak mau ribet. Simak dibawah

## Membutuhkan
Akun <a href="https://repl.it/upgrade/ishafwana/">Repl.it</a>
<br>Akun <a href="https://uptimerobot.com/">Uptimerobot</a>
<a href="https://discord.com/developers/applications">Bot discord</a>

## Langkah Langkah

1. **lu harus daftar/punya akun repl.it cok**
<br>Daftar/Login disini <a href="https://repl.it/upgrade/ishafwana">Repl.it</a>

![alt text](https://i.imgur.com/0Asx6vl.png)


2. **Kalo sudah punya akunnya, salin link repository ini dan pastekan di repl.it dengan cara klik logo "➕" dan "import from github" seperti gambaran di bawah ini**

![alt text](https://i.imgur.com/HZxykmO.png)
Lalu klik **import**

3. **Pada bagian ini kalian ganti seperti gambar dibawah ini, lalu done**

![alt text](https://i.imgur.com/WlQnu5o.png)

4. **Tinggal kalian <a href="https://github.com/HimawanRenn/Simple-Bot-Discord#cara-install
">setting bot kalian cara install</a>**

5. **Copy Paste kode dibawah ini ke index.js diatas kode "const Discord = require('discord.js');"**
```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//batas suci
```

6. **Kalian login/daftar di <a href="https://uptimerobot.com/">Uptimerobot</a>**

7. **Lalu "Add New Monitor"
![alt text](https://i.imgur.com/Ox7KfxF.png)

**Keterangan**
```
1.Ganti monitor type dengan HTTP(s)
2.Isi dengan nama bot kalian atau terserah
3.Copy paste url project/bot kalian dari repl it
```
**Copy URL project/bot discord kalian dari repl.it**
![alt text](https://i.imgur.com/zhzMg5F.png)

8. **Dan jika semua sudah, Klik "RUN" pada repl.it kalian**

<h2>ENJOY</h2>
Need Help? DM me in Discord Kujo#3863
