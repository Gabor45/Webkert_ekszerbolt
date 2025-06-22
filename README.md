### Digitális Képfeldolgozás Összefoglalás

#### 1. Digitális Képek Osztályozása (03_types.pdf)

Ez a rész a digitális képek különböző szempontok szerinti osztályozásával foglalkozik:
* **Dimenzió szerint:**
    * 1D (jel): Például egy denevér "hangja", ahol az intenzitás az idő függvénye.
    * 2D (kép): Például egy állókép, ahol az intenzitás két térbeli koordináta ($x, y$) függvénye.
    * 3D (mozgókép, 2D képek időbeli sorozata): Például egy videó, ahol az intenzitás két térbeli koordináta és az idő ($x, y, t$) függvénye.
* **Fizikai tulajdonság (elektromágneses spektrum tematikus sávja) szerint:**
    * **Monokróm (szürkeárnyalatos) képek:** Egyetlen intenzitáskomponenssel rendelkeznek, általában 0-255 közötti értékekkel.
    * **Többszintű képek:** Az intenzitások általában 0-255 intervallumba esnek.
    * **Színes képek (pl. RGB):** Három alapszín (vörös, zöld, kék) intenzitásának kombinációjával adják vissza a színeket. Az egyes színcsatornák intenzitásai lehetnek normáltak (pl. $[0, 1]$ intervallum) vagy diszkrét értékek (pl. $[0, \dots, 255]$).
* **Kvantálási szintek száma szerint:** A képpontok intenzitásértékeinek felbontása, azaz hány különböző intenzitásértéket vehet fel egy pixel.

#### 2. Képalkotás – Mintavételezés és Kvantálás (04_digitization.pdf)

Ez a modul a valós, analóg képek digitális formába alakításának folyamatát írja le.
* **A/D konverzió (Analóg-digitális átalakítás):** A folytonos képek digitalizálása.
    * **Mintavételezés (sampling):** Az értelmezési tartomány diszkretizálása. A folytonos kép térbeli felosztása pixelekre (rácsra helyezés).
    * **Kvantálás (quantization):** Az értékkészlet diszkretizálása. A pixelek intenzitásértékeinek rögzített számú szintre (pl. 256 szürkeárnyalat, $2^8$ szín) redukálása.
* **Uniform és nem uniform kvantálás:** A kvantálási szintek eloszlása lehet egyenletes (uniform) vagy adaptív (nem uniform), azaz az intenzitás eloszlásához igazított.
* **Kvantálási hiba:** A digitalizálás során fellépő információveszteség ($e(x) = f(x) - g(x)$, ahol $f(x)$ az input jel, $g(x)$ a kvantált jel). A cél a kvantálási hiba minimalizálása.

#### 3. Pont-operációk (05_pointops.pdf)

A pont-operációk olyan képműveletek, amelyek során egy kimeneti képpont értéke csak az adott bemeneti képpont értékétől függ, nem a környezetétől.
* **Képműveletek osztályozása:**
    * **Globális:** $b(i,j) = T\{A\}$ (pl. Fourier-transzformáció).
    * **Lokális, adaptív:** $T\{a(i,j), S(i,j), i,j\}$, ahol $S(i,j)$ mérete független a képmérettől (pl. adaptív küszöbölés).
    * **Lokális:** $T\{a(i,j), S\}$, ahol $S$ adott méretű és nem függ a pozíciótól (pl. konvolúció).
    * **Pont-operáció:** $T\{a(i,j)\}$ (pl. gamma-korrekció, hisztogram-kiegyenlítés).
* **Példák pont-operációkra:**
    * **Negatív kép:** $b(i,j) = L - 1 - a(i,j)$ ($L$ az intenzitásszintek száma).
    * **Gamma-korrekció:** $b(i,j) = c \cdot a(i,j)^\gamma$. A kép fényerejének és kontrasztjának beállítása.
    * **Hisztogram-manipuláció:**
        * **Hisztogram nyújtás:** Növeli a kép kontrasztját az intenzitásértékek teljes tartományra való széthúzásával.
        * **Hisztogram kiegyenlítés:** Egyenletesebbé teszi az intenzitáseloszlást, ami növelheti a kép részletgazdagságát. Lehet globális vagy lokális.
    * **Küszöbölés (thresholding):** Egy adott küszöbérték alapján binárissá alakítja a képet.

#### 4. Konvolúció (06_convolve-1.pdf)

A konvolúció egy alapvető művelet a képfeldolgozásban, amely egy képet és egy maszkot (kernelt) kombinál, új kép létrehozásához.
* **1D és 2D diszkrét konvolúció:**
    * 1D: $(f*g)(k)=\sum_{j=0}^{M-1}f(j)\cdot g(k-j)$
    * 2D: $(f*g)(s,t)=\sum_{i=0}^{M-1}\sum_{j=0}^{N-1}f(i,j)\cdot g(s-i,t-j)$
    * A maszk ($g$) elemeit tükrözni kell a konvolúció előtt.
* **Maszkok/Kernek:** Kis mátrixok, amelyek meghatározzák a szűrés típusát (pl. elmosás, élkeresés).
* **Szegélykezelési problémák:** A kép széleinél lévő pixelek konvolúciójának kezelése (pl. zero-padding, wrap, copy edge).
* **Tulajdonságok:** Kommutativitás, asszociativitás, linearitás, eltolás.
* **Korreláció:** Hasonló a konvolúcióhoz, de a maszk nem kerül tükrözésre.
* **Mély konvolúciós neuronhálók (CNN):** A konvolúció alapja a modern gépi tanulásban, ahol a konvolúciós rétegek automatikusan tanulnak jellemzőket a képekből.

#### 5. Simítás/Szűrés Képtérben (07_filtering.pdf)

Ez a rész a zaj eltávolítására és a kép simítására szolgáló technikákat mutatja be.
* **Zajtípusok:** Gauss-zaj (normál eloszlást követ), só-bors zaj (fekete és fehér pontok random előfordulása), Poisson zaj.
* **Átlagoló szűrők (átlagolás):** Egy pixelt a környezetének átlagával helyettesít. Hatékony a Gauss-zaj ellen, de elmosódást okoz.
* **Gauss-szűrő:** Súlyozott átlagolás Gauss-eloszlás alapján. Hatékonyabb zajszűrés, kevesebb elmosódással.
* **Medián-szűrés:** Egy pixelt a környezetének mediánjával helyettesít. Nagyon hatékony a só-bors zaj ellen és jobban megőrzi az éleket, mint az átlagoló szűrők.
* **Min/Max szűrők (erózió, dilatáció):** Morfológiai operátorok. Az erózió a pixel helyettesítése a környezet minimális értékével (összehúzza az objektumokat), a dilatáció a maximális értékével (kiszélesíti az objektumokat).

#### 6. Fourier-transzformáció (08_fourier.pdf)

A Fourier-transzformáció a képfeldolgozásban lehetővé teszi a képek frekvenciatartományba való átalakítását.
* **Frekvencia és hullámhossz:** Alapfogalmak a jel periodikus tulajdonságainak leírására.
* **Komplex számok:** A Fourier-transzformáció alapja ($z = a + b \cdot i$, ahol $i^2 = -1$).
* **1D és 2D diszkrét Fourier-transzformáció (DFT):**
    * 1D DFT: $F(u) = \sum_{x=0}^{M-1}f(x)e^{-j2\pi ux/M}$
    * 2D DFT: $F(u,v) = \sum_{x=0}^{M-1}\sum_{y=0}^{N-1}f(x,y)e^{-j2\pi (ux/M+vy/N)}$
    * Ezek a transzformációk a képet frekvencia komponensekre bontják (alacsony frekvenciák a kép homogén területei, magas frekvenciák az élek és részletek).
* **Tulajdonságok:** Linearitás, eltolás, skálázás, forgatás, konvolúciós tétel.
* **Spektrum és fázis:** A frekvenciatartománybeli kép két része, a spektrum a frekvenciakomponensek magnitúdóját, a fázis a relatív pozíciójukat adja meg.

#### 7. Konvolúciós Tétel, Mintavételezési Tétel (09_convth_samplth.pdf)

Ez a modul a konvolúciós tétel és a mintavételezési tétel mélyebb megértését nyújtja.
* **Konvolúciós tétel (Convolution Theorem):** $F(f * g) = F(f) \cdot F(g)$. A konvolúció a képtérben egyenértékű a Fourier-transzformáltak szorzásával a frekvenciatérben. Ez nagyban gyorsíthatja a konvolúciós műveleteket.
* **Mintavételezési tétel (Nyquist-Shannon Sampling Theorem):** Egy folytonos, $w$ frekvenciánál nagyobb frekvenciákat nem tartalmazó (sávhatárolt) jel akkor és csakis akkor állítható vissza a mintavételezettjéből, ha a mintavételezési frekvencia ($f_s = 1/\Delta x$) legalább $2w$ (Nyquist-ráta: $f_s \ge 2f_{max}$). Ez biztosítja, hogy a digitalizálás során ne lépjen fel aliasing (torzítás).

#### 8. Simítás/Szűrés Frekvenciatérben (10_freq_filtering.pdf)

A szűrés a frekvenciatartományban a Fourier-transzformált kép manipulálásával történik.
* **Folyamat:** Kép $\xrightarrow{\text{FFT}}$ Fourier-transzformált kép $\xrightarrow{\text{pont. szorzás}}$ maszkolt kép $\xrightarrow{\text{IFFT}}$ szűrt kép.
* **Frekvenciamaszkok (filterek):**
    * **Aluláteresztő (low-pass):** Elengedi az alacsony frekvenciákat (simítja a képet, csökkenti a zajt, elmosja az éleket).
        * *Ideális:* éles vágású.
        * *Butterworth:* sima átmenettel.
        * *Gauss-szűrő:* Gauss-eloszlású átmenettel.
    * **Felüláteresztő (high-pass):** Elengedi a magas frekvenciákat (kiemeli az éleket, részleteket, zajt).
    * **Sáváteresztő (band-pass):** Egy bizonyos frekvenciasávot enged át.
    * **Sávletiltó (band-reject):** Egy bizonyos frekvenciasávot szűr ki (pl. periodikus zaj eltávolítása).

#### 9. Jellemzők Detektálása (11_features.pdf)

A jellemzők detektálása a képfeldolgozás alapvető lépése az illesztéshez és felismeréshez.
* **Jellemzők típusai:** Pont, vonal, él, sarok.
* **Pont-detektálás:** Kiugró intenzitású pontok keresése, pl. egy $[-1, -1, -1; -1, 8, -1; -1, -1, -1]$ maszkkal történő konvolúcióval.
* **Vonal-detektálás:** Különböző irányú vonalak keresése speciális maszkokkal.
* **Éldetektálás:** Az intenzitás hirtelen változásainak lokalizálása.
    * **Elsőrendű derivált alapú:** Roberts, Prewitt, Sobel operátorok (gradiens magnitudója: $|G| = \sqrt{G_x^2 + G_y^2}$, irány: $\theta = \text{atan2}(G_y, G_x)$).
    * **Másodrendű derivált alapú:** Laplace-operátor, Marr-Hildreth detektor (LoG - Laplacian of Gaussian), Canny él detektor. A Canny detektor Gauss-szűrést, gradiens számítást, nem-maximális elnyomást és hiszterézises küszöbölést alkalmaz.
* **Sarok-detektorok:** Olyan pontok keresése, ahol az intenzitásingadozás minden irányban nagy.
    * **Moravec-féle:** Egyszerű, de zajérzékeny és irányfüggő.
    * **Harris/Plessey:** Robusztusabb, rotáció-invariáns. A "sarkosság mértékét" ($R$) használja fel a besoroláshoz.

#### 10. Szegmentálás (12_segmentation-1.pdf)

A szegmentálás célja a kép felosztása értelmes régiókra (szegmensekre), amelyek valós tárgyaknak vagy területeknek felelnek meg.
* **Módszerek:**
    * **Küszöbölés (Thresholding):** Intenzitás alapján binárissá alakítás. Lehet globális, lokális vagy adaptív (pl. Otsu módszer).
    * **Él alapú szegmentálás:** Az élek összekötésével vagy követésével hoz létre régióhatárokat.
    * **Régió alapú szegmentálás:**
        * **Régió növesztés (Region growing):** Egy magpontból kiindulva hasonló tulajdonságú szomszédos pontokat ad a régióhoz.
        * **Régió felosztás és összevonás (Region splitting and merging):** Rekurzív felosztás homogén régiókra, majd összevonás.
    * **Vízválasztó transzformáció (Watershed Transformation):** A képet domborzati térképként értelmezi és a "víz" terjedését szimulálva találja meg a régiók határait.
    * **Kereszt-korreláció (Template matching):** Egy adott minta (template) keresése a képen. A normalizált kereszt-korreláció ($\frac{\sum_{x,y} f(x,y)h(x,y)}{\sqrt{\sum_{x,y} f(x,y)^2 \sum_{x,y} h(x,y)^2}}$) mérőszámként szolgál az illeszkedésre.

#### 11. Alak/Forma Reprezentáció/Leírás (13_shape.pdf)

Az alakzat leírása elengedhetetlen az objektumok felismeréséhez és osztályozásához.
* **Alakzat (shape):** Pontok összefüggő rendszere, amely egy objektum geometriai tulajdonságait írja le.
* **Reprezentációs módszerek:**
    * **Határ alapú leírás (Boundary-based representation):** Az objektum külső kontúrját írja le.
        * **Lánckódok (Chain codes):** A határ mentén rögzítik a szomszédos pixelek irányát.
        * **Poligonális közelítés (Polygonal approximation):** A határ görbéjét egyenes szakaszokkal közelíti.
        * **Fourier leírás (Fourier descriptor):** A határpontok Fourier-transzformáltja, amely invariáns lehet eltolásra, skálázásra és forgatásra. Minél több együtthatót használunk, annál pontosabb a rekonstrukció.
    * **Régió alapú leírás (Region-based representation):** Az objektum belső tulajdonságait írja le.
        * **Momentumok (Moments):** Az alakzat statisztikai tulajdonságait jellemzik (pl. tömegközéppont, terület, orientáció). A Hu-féle invariáns momentumok rotáció-invariánsak.
        * **Váz (Skeletonization/Medial Axis Transform - MAT):** Az alakzat "vázát" vagy "gerincét" vonja ki, ami egy vékonyított reprezentáció, de megőrzi az alapvető geometriai és topológiai tulajdonságokat.

#### 12. Képek Kódolása/Tömörítése (14_coding.pdf)

A képek kódolása és tömörítése a digitális tárolás és átvitel hatékonyságának növelését szolgálja.
* **Cél:** Az adatok méretének csökkentése információveszteség nélkül (veszteségmentes) vagy minimális veszteséggel (veszteséges).
* **Kódolás:** Minden digitális formátumú információ kódolt (pl. ASCII, JPEG, MP3).
* **Információ vs. Adat:** Az információ valami ismeretlen és váratlan (mérhető). Az adat az információ kifejezése.
* **Entrópia:** Egy információs forrás bizonytalanságának vagy információs tartalmának mértéke ($H = -\sum_i p_i \log_b(p_i)$). A tömörítés elméleti határa.
* **Tömörítési arány:** A tömörítetlen és a tömörített adat méretének aránya.
* **Tömörítési módszerek:**
    * **Veszteségmentes tömörítés (Lossless compression):** Az eredeti adatok pontosan visszaállíthatók.
        * **Huffman kódolás:** Gyakoribb szimbólumokhoz rövidebb kód.
        * **Run-Length Encoding (RLE):** Ismétlődő sorozatok kódolása.
        * **Lempel-Ziv (LZ) algoritmusok (pl. LZW):** Szótár alapú kódolás.
    * **Veszteséges tömörítés (Lossy compression):** Az eredeti adatok nem állíthatók vissza pontosan, de a méretcsökkentés jelentős. Az emberi érzékelés korlátait használja ki (pl. pszichovizuális modell).
        * **JPEG (Joint Photographic Experts Group):** A legelterjedtebb képformátum.
            1.  **Színátalakítás:** RGB $\rightarrow$ YCbCr (fényesség és színkülönbség komponensek).
            2.  **Lekvantálás (Downsampling):** A színkomponensek felbontásának csökkentése.
            3.  **Diszkrét Koszinusz Transzformáció (DCT):** A képet $8 \times 8$-as blokkokra bontja, frekvencia komponensekre alakítja.
            4.  **Kvantálás (Quantization):** A DCT együtthatók lefelé kerekítése, a kevésbé fontos (magas frekvenciájú) együtthatók nullázása (itt történik a veszteség).
            5.  **Entrópia kódolás:** A kvantált együtthatók veszteségmentes tömörítése.
        * **Wavelet alapú tömörítés (pl. JPEG 2000):** Lokalizáltabb frekvencia- és térbeli információt nyújt, jobb minőséget biztosít alacsony bitrátán.

### Mire Jó a Formulák? Fontosabb Összefüggések.

A diákban található matematikai formulák és összefüggések elengedhetetlenek a digitális képfeldolgozási algoritmusok megértéséhez és implementálásához. Ezek nem csupán elméleti leírások, hanem a gyakorlati megvalósítás sarokkövei.

1.  **Konvolúció ($*$):**
    * **Definíció:**
        * 1D: $(f*g)(k)=\sum_{j=0}^{M-1}f(j)\cdot g(k-j)$
        * 2D: $(f*g)(s,t)=\sum_{i=0}^{M-1}\sum_{j=0}^{N-1}f(i,j)\cdot g(s-i,t-j)$
    * **Jelentősége:** Alapvető művelet a szűréshez (zajcsökkentés, simítás), él- és pontdetektáláshoz. Lehetővé teszi, hogy egy képpont értékét a környező pixelek súlyozott átlagával módosítsuk, ezáltal különböző vizuális hatásokat elérni, vagy zajt csökkenteni. A maszk ($g$) határozza meg a konvolúció hatását.
    * **Kódolási/tömörítési összefüggés:** A képfeldolgozás korai szakaszában (pl. előfeldolgozás, zajszűrés) elengedhetetlen, ezáltal javítja a további feldolgozás (pl. tömörítés) hatékonyságát.

2.  **Fourier-transzformáció (DFT):**
    * **Definíció (2D):** $F(u,v) = \sum_{x=0}^{M-1}\sum_{y=0}^{N-1}f(x,y)e^{-j2\pi (ux/M+vy/N)}$
    * **Inverz DFT (2D):** $f(x,y) = \frac{1}{MN}\sum_{u=0}^{M-1}\sum_{v=0}^{N-1}F(u,v)e^{j2\pi (ux/M+vy/N)}$
    * **Jelentősége:** A képet térbeli tartományból (pixelek elhelyezkedése) frekvenciatartományba (periodikus komponensek) alakítja. Ez lehetővé teszi a frekvencia alapú szűrést (pl. alul- vagy felüláteresztő szűrők), ami hatékonyabb lehet bizonyos zajtípusoknál vagy élek kiemelésénél, mint a képtérben végzett műveletek. Az $e^{-j2\pi (...)}$ tag a komplex exponenciális függvény, ami a szinuszos és koszinuszos komponenseket kódolja, a $j$ pedig az imaginárius egység ($j^2 = -1$).
    * **Kódolási/tömörítési összefüggés:** A JPEG tömörítés alapja a Diszkrét Koszinusz Transzformáció (DCT), ami szorosan kapcsolódik a Fourier-transzformációhoz. A DCT a kép energiáját koncentrálja, lehetővé téve a kevésbé fontos frekvenciák elhagyását, ami jelentős méretcsökkentést eredményez.

3.  **Konvolúciós tétel (Convolution Theorem):**
    * **Összefüggés:** $F(f * g) = F(f) \cdot F(g)$
    * **Jelentősége:** Kimondja, hogy a képtérbeli konvolúció egyenértékű a frekvenciatérbeli elemekenkénti szorzással. Ez számítási szempontból gyakran sokkal hatékonyabb, különösen nagy maszkok esetén, mivel a Fourier-transzformáció és az inverz Fourier-transzformáció (FFT/IFFT) gyorsan elvégezhető.
    * **Kódolási/tömörítési összefüggés:** A zajszűrés és éldetektálás hatékony megvalósítását segíti, ami javítja a kép minőségét a tömörítés előtt.

4.  **Mintavételezési tétel (Nyquist-Shannon Sampling Theorem):**
    * **Összefüggés:** Azt mondja ki, hogy egy $w$ frekvenciánál nagyobb frekvenciákat nem tartalmazó (sávhatárolt) jel akkor és csakis akkor állítható vissza a mintavételezettjéből, ha a mintavételezési frekvencia ($f_s$) legalább $2w$ (Nyquist-ráta: $f_s \ge 2f_{max}$).
    * **Jelentősége:** Meghatározza a digitalizálás minimális követelményeit. Ha túl alacsony a mintavételezési frekvencia, aliasing jelenség lép fel (torzítás, információveszteség).
    * **Kódolási/tömörítési összefüggés:** A digitális képalkotás alapja. A megfelelő mintavételezés biztosítja, hogy a kép elegendő információt tartalmazzon ahhoz, hogy a tömörítés után is elfogadható minőségű legyen. A JPEG színcsatornák lekavntálása (downsampling) a vizuális érzékelés Nyquist-korlátait használja ki.

5.  **Grádiens magnitudója és iránya (Él detektálásnál):**
    * **Definíció:** $|G| = \sqrt{G_x^2 + G_y^2}$ (magnitúdó), $\theta = \text{atan2}(G_y, G_x)$ (irány)
    * **Jelentősége:** Az élek erősségét és orientációját jellemzi, ami kulcsfontosságú az él detektorok (Sobel, Canny) működésében.
    * **Kódolási/tömörítési összefüggés:** Az élek pontos detektálása segíthet a képfeldolgozásban, például az objektumok kontúrjainak tömörítésében.

6.  **Normalizált kereszt-korreláció (Template matching):**
    * **Definíció:** $\frac{\sum_{x,y} f(x,y)h(x,y)}{\sqrt{\sum_{x,y} f(x,y)^2 \sum_{x,y} h(x,y)^2}}$
    * **Jelentősége:** Méri, hogy egy adott minta ($h$) mennyire illeszkedik egy nagyobb kép ($f$) adott területéhez, elhagyva a fényerő és kontraszt különbségeket.
    * **Kódolási/tömörítési összefüggés:** Jól használható képfeldolgozási feladatoknál, ahol ismétlődő minták vagy objektumok keresése a cél, ami a tömörítés során felmerülő redundancia felismerését segítheti (bár közvetlenül nem tömörítési formula).

7.  **Entrópia (Információelmélet):**
    * **Definíció (Shannon):** $H = -\sum_i p_i \log_b(p_i)$
    * **Jelentősége:** Az információelmélet alapvető fogalma, méri egy adatforrás bizonytalanságát. A tömörítés elméleti határa az entrópia: minél alacsonyabb az entrópia, annál jobban tömöríthető az adat.
    * **Kódolási/tömörítési összefüggés:** A veszteségmentes tömörítő algoritmusok (pl. Huffman) az entrópia minimalizálására törekednek, kihasználva az adatok redundanciáját és a szimbólumok előfordulási valószínűségeit.

A formulák célja tehát:
* **Precíz leírás:** Pontosan meghatározzák az algoritmusok működését, elkerülve a kétértelműséget.
* **Gyakorlati megvalósítás:** A programozók ezek alapján implementálják a képfeldolgozó szoftvereket.
* **Analízis és optimalizáció:** Lehetővé teszik az algoritmusok hatékonyságának (idő- és tárigény) és minőségének elemzését, valamint optimalizálását.
* **Elméleti alap:** Segítenek megérteni a képfeldolgozás mögötti matematikai elméleteket, ami új és innovatív módszerek kifejlesztéséhez vezet.
* **Reprodukálhatóság:** Biztosítják, hogy különböző implementációk ugyanazt az eredményt adják, amennyiben azonos formulákat és paramétereket használnak.

---
