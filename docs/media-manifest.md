# web-assets manifest

Všetky videá: bez zvuku, H.264 MP4 (+faststart) a VP9 WebM, keyframe každú 1 s (-g 30), 30 fps. Poster = prvý snímok (WebP). Kódovanie: `/workspace/kontajner-web/mkvid.sh`, `mkimg.py`.

## Videá

| path | size | dims | shows | use |
|---|---|---|---|---|
| video/hero-expand.mp4 | 2318 KB | 720x1280 | Reálne rozkladanie domu v továrni (strecha, steny, hotový dom), 11,5 s, vertikálne | hero mobil (9:16), autoplay muted loop |
| video/hero-expand.webm | 2976 KB | 720x1280 | Reálne rozkladanie domu v továrni (strecha, steny, hotový dom), 11,5 s, vertikálne | hero mobil (9:16), autoplay muted loop |
| video/hero-expand-poster.webp | 66 KB | same as video | Reálne rozkladanie domu v továrni (strecha, steny, hotový dom), 11,5 s, vertikálne | hero mobil (9:16), autoplay muted loop |
| video/hero-expand-wide.mp4 | 2387 KB | 1280x720 | To isté, stredový výrez 16:9 (1280x720, upscale z 720 px – mierne mäkké) | hero desktop |
| video/hero-expand-wide.webm | 3241 KB | 1280x720 | To isté, stredový výrez 16:9 (1280x720, upscale z 720 px – mierne mäkké) | hero desktop |
| video/hero-expand-wide-poster.webp | 50 KB | same as video | To isté, stredový výrez 16:9 (1280x720, upscale z 720 px – mierne mäkké) | hero desktop |
| video/staged.mp4 | 1664 KB | 720x1280 | Zariadený 20ft dom: exteriér na trávniku, pohovka, kuchyňa, 11 s | sekcia Ukážkový dom, mobil |
| video/staged.webm | 1784 KB | 720x1280 | Zariadený 20ft dom: exteriér na trávniku, pohovka, kuchyňa, 11 s | sekcia Ukážkový dom, mobil |
| video/staged-poster.webp | 89 KB | same as video | Zariadený 20ft dom: exteriér na trávniku, pohovka, kuchyňa, 11 s | sekcia Ukážkový dom, mobil |
| video/staged-wide.mp4 | 1104 KB | 1280x720 | To isté, výrez 16:9 zo 1080 px zdroja (ostré) | sekcia Ukážkový dom, desktop |
| video/staged-wide.webm | 1065 KB | 1280x720 | To isté, výrez 16:9 zo 1080 px zdroja (ostré) | sekcia Ukážkový dom, desktop |
| video/staged-wide-poster.webp | 30 KB | same as video | To isté, výrez 16:9 zo 1080 px zdroja (ostré) | sekcia Ukážkový dom, desktop |
| video/shipment.mp4 | 1842 KB | 720x1280 | Nakladanie a preprava, 10 s | sekcia Preprava |
| video/shipment.webm | 2043 KB | 720x1280 | Nakladanie a preprava, 10 s | sekcia Preprava |
| video/shipment-poster.webp | 123 KB | same as video | Nakladanie a preprava, 10 s | sekcia Preprava |
| video/unfold-3d.mp4 | 2528 KB | 1280x720 | 3D animácia rozkladania a pôdorysov, čierne pásy orezané | sekcia Ako sa rozkladá |
| video/unfold-3d.webm | 2900 KB | 1280x720 | 3D animácia rozkladania a pôdorysov, čierne pásy orezané | sekcia Ako sa rozkladá |
| video/unfold-3d-poster.webp | 5 KB | same as video | 3D animácia rozkladania a pôdorysov, čierne pásy orezané | sekcia Ako sa rozkladá |
| video/full-expand.mp4 | 5451 KB | 720x1280 | Celé video rozkladania, 28,8 s, ~1,5 Mb/s | click-to-play (preload=none), poster |
| video/full-expand.webm | 6774 KB | 720x1280 | Celé video rozkladania, 28,8 s, ~1,5 Mb/s | click-to-play (preload=none), poster |
| video/full-expand-poster.webp | 80 KB | same as video | Celé video rozkladania, 28,8 s, ~1,5 Mb/s | click-to-play (preload=none), poster |
| video/model-f20.mp4 | 1113 KB | 720x1280 | Obhliadka 20ft modelu, 8 s | karta modelu 20ft |
| video/model-f20.webm | 1007 KB | 720x1280 | Obhliadka 20ft modelu, 8 s | karta modelu 20ft |
| video/model-f20-poster.webp | 34 KB | same as video | Obhliadka 20ft modelu, 8 s | karta modelu 20ft |
| video/model-f30.mp4 | 900 KB | 720x1280 | Obhliadka 30ft modelu, 8 s | karta modelu 30ft |
| video/model-f30.webm | 879 KB | 720x1280 | Obhliadka 30ft modelu, 8 s | karta modelu 30ft |
| video/model-f30-poster.webp | 29 KB | same as video | Obhliadka 30ft modelu, 8 s | karta modelu 30ft |
| video/model-f40.mp4 | 902 KB | 720x1280 | Obhliadka 40ft modelu, 8 s | karta modelu 40ft |
| video/model-f40.webm | 851 KB | 720x1280 | Obhliadka 40ft modelu, 8 s | karta modelu 40ft |
| video/model-f40-poster.webp | 32 KB | same as video | Obhliadka 40ft modelu, 8 s | karta modelu 40ft |

## Obrázky (AVIF + WebP; 640/1280/1920 px, bez upscalingu)

| path | size | dims | shows | use |
|---|---|---|---|---|
| img/hero-640.avif | 17 KB | 640x360 | Dom na pozemku s horami (render) | poster/hero fallback, sekcia Úvod |
| img/hero-640.webp | 31 KB | 640x360 | Dom na pozemku s horami (render) | poster/hero fallback, sekcia Úvod |
| img/hero-1280.avif | 59 KB | 1280x720 | Dom na pozemku s horami (render) | poster/hero fallback, sekcia Úvod |
| img/hero-1280.webp | 102 KB | 1280x720 | Dom na pozemku s horami (render) | poster/hero fallback, sekcia Úvod |
| img/model-10ft-640.avif | 16 KB | 640x400 | 10 ft model, exteriér (render) | karta modelu 10ft |
| img/model-10ft-640.webp | 32 KB | 640x400 | 10 ft model, exteriér (render) | karta modelu 10ft |
| img/model-20ft-640.avif | 22 KB | 640x360 | 20 ft model s drevodekorom na pilieroch | karta modelu 20ft |
| img/model-20ft-640.webp | 45 KB | 640x360 | 20 ft model s drevodekorom na pilieroch | karta modelu 20ft |
| img/model-20ft-1280.avif | 73 KB | 1280x720 | 20 ft model s drevodekorom na pilieroch | karta modelu 20ft |
| img/model-20ft-1280.webp | 139 KB | 1280x720 | 20 ft model s drevodekorom na pilieroch | karta modelu 20ft |
| img/model-30ft-640.avif | 22 KB | 640x400 | 30 ft model s verandou | karta modelu 30ft |
| img/model-30ft-640.webp | 44 KB | 640x400 | 30 ft model s verandou | karta modelu 30ft |
| img/model-40ft-640.avif | 34 KB | 640x640 | 40 ft model, dlhý biely dom s verandou | karta modelu 40ft |
| img/model-40ft-640.webp | 69 KB | 640x640 | 40 ft model, dlhý biely dom s verandou | karta modelu 40ft |
| img/install-site-640.avif | 22 KB | 640x360 | Osadenie domu na bodových základoch, žeriav | sekcia Osadenie/Postup |
| img/install-site-640.webp | 43 KB | 640x360 | Osadenie domu na bodových základoch, žeriav | sekcia Osadenie/Postup |
| img/install-site-1280.avif | 74 KB | 1280x720 | Osadenie domu na bodových základoch, žeriav | sekcia Osadenie/Postup |
| img/install-site-1280.webp | 140 KB | 1280x720 | Osadenie domu na bodových základoch, žeriav | sekcia Osadenie/Postup |
| img/install-site2-640.avif | 38 KB | 640x435 | Osadenie na základoch, pracovníci | sekcia Osadenie |
| img/install-site2-640.webp | 79 KB | 640x435 | Osadenie na základoch, pracovníci | sekcia Osadenie |
| img/install-site2-1280.avif | 145 KB | 1280x870 | Osadenie na základoch, pracovníci | sekcia Osadenie |
| img/install-site2-1280.webp | 292 KB | 1280x870 | Osadenie na základoch, pracovníci | sekcia Osadenie |
| img/transport-truck-640.avif | 18 KB | 640x360 | Nákladné auto prevážajúce zložený dom | sekcia Preprava |
| img/transport-truck-640.webp | 35 KB | 640x360 | Nákladné auto prevážajúce zložený dom | sekcia Preprava |
| img/transport-truck-1280.avif | 58 KB | 1280x720 | Nákladné auto prevážajúce zložený dom | sekcia Preprava |
| img/transport-truck-1280.webp | 105 KB | 1280x720 | Nákladné auto prevážajúce zložený dom | sekcia Preprava |
| img/why-us-640.avif | 22 KB | 640x360 | Sivý dom s terasou v záhrade | sekcia Prečo my |
| img/why-us-640.webp | 45 KB | 640x360 | Sivý dom s terasou v záhrade | sekcia Prečo my |
| img/why-us-1280.avif | 65 KB | 1280x720 | Sivý dom s terasou v záhrade | sekcia Prečo my |
| img/why-us-1280.webp | 121 KB | 1280x720 | Sivý dom s terasou v záhrade | sekcia Prečo my |
| img/lineup-640.avif | 23 KB | 640x360 | Dom na tmavej terase, zeleň | sekcia Ponuka/banner |
| img/lineup-640.webp | 48 KB | 640x360 | Dom na tmavej terase, zeleň | sekcia Ponuka/banner |
| img/lineup-1280.avif | 83 KB | 1280x720 | Dom na tmavej terase, zeleň | sekcia Ponuka/banner |
| img/lineup-1280.webp | 164 KB | 1280x720 | Dom na tmavej terase, zeleň | sekcia Ponuka/banner |
| img/detail-connectors-640.avif | 37 KB | 640x640 | Detail prípojok vody/elektriky | sekcia Technické detaily |
| img/detail-connectors-640.webp | 76 KB | 640x640 | Detail prípojok vody/elektriky | sekcia Technické detaily |
| img/detail-connectors-1280.avif | 121 KB | 1280x1280 | Detail prípojok vody/elektriky | sekcia Technické detaily |
| img/detail-connectors-1280.webp | 260 KB | 1280x1280 | Detail prípojok vody/elektriky | sekcia Technické detaily |
| img/tour20-01-640.avif | 38 KB | 640x640 | 20ft dom v hale, exteriér (čierny rám, trávnik) | galéria 20ft |
| img/tour20-01-640.webp | 86 KB | 640x640 | 20ft dom v hale, exteriér (čierny rám, trávnik) | galéria 20ft |
| img/tour20-01-1280.avif | 148 KB | 1280x1280 | 20ft dom v hale, exteriér (čierny rám, trávnik) | galéria 20ft |
| img/tour20-01-1280.webp | 324 KB | 1280x1280 | 20ft dom v hale, exteriér (čierny rám, trávnik) | galéria 20ft |
| img/tour20-01-1920.avif | 292 KB | 1920x1920 | 20ft dom v hale, exteriér (čierny rám, trávnik) | galéria 20ft |
| img/tour20-01-1920.webp | 621 KB | 1920x1920 | 20ft dom v hale, exteriér (čierny rám, trávnik) | galéria 20ft |
| img/tour20-03-640.avif | 26 KB | 640x480 | 20ft dom v hale, exteriér | galéria 20ft |
| img/tour20-03-640.webp | 57 KB | 640x480 | 20ft dom v hale, exteriér | galéria 20ft |
| img/tour20-03-1280.avif | 103 KB | 1280x960 | 20ft dom v hale, exteriér | galéria 20ft |
| img/tour20-03-1280.webp | 223 KB | 1280x960 | 20ft dom v hale, exteriér | galéria 20ft |
| img/tour20-03-1920.avif | 215 KB | 1920x1440 | 20ft dom v hale, exteriér | galéria 20ft |
| img/tour20-03-1920.webp | 452 KB | 1920x1440 | 20ft dom v hale, exteriér | galéria 20ft |
| img/tour20-04-640.avif | 22 KB | 640x480 | 20ft, bočný pohľad | galéria 20ft |
| img/tour20-04-640.webp | 49 KB | 640x480 | 20ft, bočný pohľad | galéria 20ft |
| img/tour20-04-1280.avif | 89 KB | 1280x960 | 20ft, bočný pohľad | galéria 20ft |
| img/tour20-04-1280.webp | 199 KB | 1280x960 | 20ft, bočný pohľad | galéria 20ft |
| img/tour20-04-1920.avif | 186 KB | 1920x1440 | 20ft, bočný pohľad | galéria 20ft |
| img/tour20-04-1920.webp | 411 KB | 1920x1440 | 20ft, bočný pohľad | galéria 20ft |
| img/tour20-05-640.avif | 22 KB | 640x480 | 20ft, tmavý dom na trávniku | galéria 20ft |
| img/tour20-05-640.webp | 47 KB | 640x480 | 20ft, tmavý dom na trávniku | galéria 20ft |
| img/tour20-05-1280.avif | 89 KB | 1280x960 | 20ft, tmavý dom na trávniku | galéria 20ft |
| img/tour20-05-1280.webp | 192 KB | 1280x960 | 20ft, tmavý dom na trávniku | galéria 20ft |
| img/tour20-05-1920.avif | 186 KB | 1920x1440 | 20ft, tmavý dom na trávniku | galéria 20ft |
| img/tour20-05-1920.webp | 394 KB | 1920x1440 | 20ft, tmavý dom na trávniku | galéria 20ft |
| img/tour20-06-640.avif | 12 KB | 640x480 | 20ft interiér, kuchynský kút | galéria 20ft |
| img/tour20-06-640.webp | 19 KB | 640x480 | 20ft interiér, kuchynský kút | galéria 20ft |
| img/tour20-06-1280.avif | 35 KB | 1280x960 | 20ft interiér, kuchynský kút | galéria 20ft |
| img/tour20-06-1280.webp | 51 KB | 1280x960 | 20ft interiér, kuchynský kút | galéria 20ft |
| img/tour20-06-1920.avif | 65 KB | 1920x1440 | 20ft interiér, kuchynský kút | galéria 20ft |
| img/tour20-06-1920.webp | 93 KB | 1920x1440 | 20ft interiér, kuchynský kút | galéria 20ft |
| img/tour20-07-640.avif | 12 KB | 640x480 | 20ft interiér, presklené dvere | galéria 20ft |
| img/tour20-07-640.webp | 21 KB | 640x480 | 20ft interiér, presklené dvere | galéria 20ft |
| img/tour20-07-1280.avif | 36 KB | 1280x960 | 20ft interiér, presklené dvere | galéria 20ft |
| img/tour20-07-1280.webp | 57 KB | 1280x960 | 20ft interiér, presklené dvere | galéria 20ft |
| img/tour20-07-1920.avif | 70 KB | 1920x1440 | 20ft interiér, presklené dvere | galéria 20ft |
| img/tour20-07-1920.webp | 100 KB | 1920x1440 | 20ft interiér, presklené dvere | galéria 20ft |
| img/tour20-08-640.avif | 23 KB | 640x853 | 20ft kúpeľňa | galéria 20ft |
| img/tour20-08-640.webp | 39 KB | 640x853 | 20ft kúpeľňa | galéria 20ft |
| img/tour20-08-1280.avif | 68 KB | 1280x1707 | 20ft kúpeľňa | galéria 20ft |
| img/tour20-08-1280.webp | 104 KB | 1280x1707 | 20ft kúpeľňa | galéria 20ft |
| img/tour20-08-1920.avif | 131 KB | 1920x2560 | 20ft kúpeľňa | galéria 20ft |
| img/tour20-08-1920.webp | 184 KB | 1920x2560 | 20ft kúpeľňa | galéria 20ft |
| img/tour20-09-640.avif | 11 KB | 640x480 | 20ft interiér, obývačka | galéria 20ft |
| img/tour20-09-640.webp | 19 KB | 640x480 | 20ft interiér, obývačka | galéria 20ft |
| img/tour20-09-1280.avif | 35 KB | 1280x960 | 20ft interiér, obývačka | galéria 20ft |
| img/tour20-09-1280.webp | 52 KB | 1280x960 | 20ft interiér, obývačka | galéria 20ft |
| img/tour20-09-1920.avif | 69 KB | 1920x1440 | 20ft interiér, obývačka | galéria 20ft |
| img/tour20-09-1920.webp | 95 KB | 1920x1440 | 20ft interiér, obývačka | galéria 20ft |
| img/plan-20ft-3d-640.avif | 26 KB | 640x678 | 3D pôdorys 20ft | modely – dispozícia |
| img/plan-20ft-3d-640.webp | 43 KB | 640x678 | 3D pôdorys 20ft | modely – dispozícia |
| img/plan-30ft-3d-640.avif | 11 KB | 640x478 | 3D pôdorys 30ft | modely – dispozícia |
| img/plan-30ft-3d-640.webp | 17 KB | 640x478 | 3D pôdorys 30ft | modely – dispozícia |
| img/plan-40ft-3d-640.avif | 17 KB | 640x460 | 3D pôdorys 40ft | modely – dispozícia |
| img/plan-40ft-3d-640.webp | 29 KB | 640x460 | 3D pôdorys 40ft | modely – dispozícia |
| img/plan-20ft-640.avif | 16 KB | 640x766 | 2D pôdorys 20ft | modely – dispozícia |
| img/plan-20ft-640.webp | 23 KB | 640x766 | 2D pôdorys 20ft | modely – dispozícia |
| img/plan-30ft-640.avif | 10 KB | 640x376 | 2D pôdorys 30ft | modely – dispozícia |
| img/plan-30ft-640.webp | 15 KB | 640x376 | 2D pôdorys 30ft | modely – dispozícia |
| img/plan-40ft-640.avif | 8 KB | 640x393 | 2D pôdorys 40ft | modely – dispozícia |
| img/plan-40ft-640.webp | 12 KB | 640x393 | 2D pôdorys 40ft | modely – dispozícia |
| img/facade-07-640.avif | 18 KB | 640x480 | Fasáda: biela s čiernym rámom | výber fasády |
| img/facade-07-640.webp | 31 KB | 640x480 | Fasáda: biela s čiernym rámom | výber fasády |
| img/facade-12-640.avif | 17 KB | 640x480 | Fasáda: tmavosivá | výber fasády |
| img/facade-12-640.webp | 30 KB | 640x480 | Fasáda: tmavosivá | výber fasády |
| img/facade-13-640.avif | 25 KB | 640x480 | Fasáda: hnedý drevodekor | výber fasády |
| img/facade-13-640.webp | 52 KB | 640x480 | Fasáda: hnedý drevodekor | výber fasády |
| img/facade-17-640.avif | 17 KB | 640x480 | Fasáda: oranžový drevodekor | výber fasády |
| img/facade-17-640.webp | 29 KB | 640x480 | Fasáda: oranžový drevodekor | výber fasády |
| img/facade-20-640.avif | 13 KB | 640x480 | Fasáda: svetlý drevodekor, trávnik | výber fasády |
| img/facade-20-640.webp | 20 KB | 640x480 | Fasáda: svetlý drevodekor, trávnik | výber fasády |
| img/facade-24-640.avif | 22 KB | 640x480 | Fasáda: tmavosivá, čierny rám | výber fasády |
| img/facade-24-640.webp | 45 KB | 640x480 | Fasáda: tmavosivá, čierny rám | výber fasády |
| img/facade-27-640.avif | 22 KB | 640x480 | Fasáda: biela s oranžovým dekorom | výber fasády |
| img/facade-27-640.webp | 43 KB | 640x480 | Fasáda: biela s oranžovým dekorom | výber fasády |
| img/facade-29-640.avif | 20 KB | 640x480 | Fasáda: zelená | výber fasády |
| img/facade-29-640.webp | 37 KB | 640x480 | Fasáda: zelená | výber fasády |
| img/facade-render-15-640.avif | 41 KB | 640x489 | Render domu s terasou v lese | galéria / hero fallback |
| img/facade-render-15-640.webp | 82 KB | 640x489 | Render domu s terasou v lese | galéria / hero fallback |
| img/facade-render-15-1280.avif | 138 KB | 1280x979 | Render domu s terasou v lese | galéria / hero fallback |
| img/facade-render-15-1280.webp | 281 KB | 1280x979 | Render domu s terasou v lese | galéria / hero fallback |
| img/facade-render-15-1920.avif | 244 KB | 1920x1468 | Render domu s terasou v lese | galéria / hero fallback |
| img/facade-render-15-1920.webp | 498 KB | 1920x1468 | Render domu s terasou v lese | galéria / hero fallback |
| img/facade-render-16-640.avif | 22 KB | 640x448 | Render drevený dom s terasou | galéria |
| img/facade-render-16-640.webp | 43 KB | 640x448 | Render drevený dom s terasou | galéria |
| img/facade-render-16-1280.avif | 67 KB | 1280x897 | Render drevený dom s terasou | galéria |
| img/facade-render-16-1280.webp | 127 KB | 1280x897 | Render drevený dom s terasou | galéria |
| img/facade-render-16-1920.avif | 118 KB | 1920x1345 | Render drevený dom s terasou | galéria |
| img/facade-render-16-1920.webp | 208 KB | 1920x1345 | Render drevený dom s terasou | galéria |
| img/kitchen-05-640.avif | 17 KB | 640x480 | Kuchyňa: biela L-linka | výber kuchyne |
| img/kitchen-05-640.webp | 27 KB | 640x480 | Kuchyňa: biela L-linka | výber kuchyne |
| img/kitchen-13-640.avif | 11 KB | 640x480 | Kuchyňa: biela, čierna doska | výber kuchyne |
| img/kitchen-13-640.webp | 16 KB | 640x480 | Kuchyňa: biela, čierna doska | výber kuchyne |
| img/kitchen-18-640.avif | 14 KB | 640x480 | Kuchyňa: U-linka | výber kuchyne |
| img/kitchen-18-640.webp | 24 KB | 640x480 | Kuchyňa: U-linka | výber kuchyne |
| img/bathroom-01-640.avif | 12 KB | 640x480 | Kúpeľňa: sprchový kút, mramorový vzor | výber kúpeľne |
| img/bathroom-01-640.webp | 18 KB | 640x480 | Kúpeľňa: sprchový kút, mramorový vzor | výber kúpeľne |
| img/bathroom-13-640.avif | 16 KB | 640x480 | Kúpeľňa: sprcha, umývadlo | výber kúpeľne |
| img/bathroom-13-640.webp | 24 KB | 640x480 | Kúpeľňa: sprcha, umývadlo | výber kúpeľne |
| img/bathroom-24-640.avif | 14 KB | 640x480 | Kúpeľňa: veľké umývadlo | výber kúpeľne |
| img/bathroom-24-640.webp | 22 KB | 640x480 | Kúpeľňa: veľké umývadlo | výber kúpeľne |
| img/window-04-640.avif | 17 KB | 640x480 | Okná: posuvné čierne rámy | výber okien |
| img/window-04-640.webp | 31 KB | 640x480 | Okná: posuvné čierne rámy | výber okien |
| img/window-05-640.avif | 23 KB | 640x480 | Okná: panoramatické na drevodekore | výber okien |
| img/window-05-640.webp | 47 KB | 640x480 | Okná: panoramatické na drevodekore | výber okien |
| img/window-07-640.avif | 19 KB | 640x480 | Okná: panoramatické celé presklenie | výber okien |
| img/window-07-640.webp | 32 KB | 640x480 | Okná: panoramatické celé presklenie | výber okien |
| img/structure-03-640.avif | 23 KB | 640x480 | Podlahová konštrukcia | technické detaily |
| img/structure-03-640.webp | 49 KB | 640x480 | Podlahová konštrukcia | technické detaily |
| img/structure-03-1280.avif | 71 KB | 1280x960 | Podlahová konštrukcia | technické detaily |
| img/structure-03-1280.webp | 148 KB | 1280x960 | Podlahová konštrukcia | technické detaily |
| img/structure-05-640.avif | 32 KB | 640x480 | Rám a podlaha, detail | technické detaily |
| img/structure-05-640.webp | 63 KB | 640x480 | Rám a podlaha, detail | technické detaily |
| img/structure-05-1280.avif | 110 KB | 1280x960 | Rám a podlaha, detail | technické detaily |
| img/structure-05-1280.webp | 208 KB | 1280x960 | Rám a podlaha, detail | technické detaily |

## Dáta

- `models.json` – tabuľka špecifikácií z katalógu s. 7 (EN hodnoty, `layout_sk_draft`)
- `options.json` – možnosti z manuálu (EN zdroj, `sk_draft` kľúče)

## Poznámky k obsahu webu

- **20 ft a počet spální.** Katalóg (`models.json`) uvádza 2 spálne / 1 kúpeľňu. Web dodávateľa uvádzal aj verziu s 1 spálňou. Stránka zobrazuje `layout_sk_draft`. Text sa mení v tom poli, čísla rozmerov ostaňte.
- **Vizualizácie, nie fotografie domu v Nebojsi:** `hero`, `model-30ft`, `model-40ft`, `facade-render-15`, `facade-render-16`. Na webe majú text „Vizualizácia z katalógu“.
- **`model-10ft`.** Manifest hore hovorí „render“, záber však vyzerá ako fotografia z haly. Na webe je preto „záber z katalógu dodávateľa“, nie „náš dom“ a nie „vizualizácia“.
- **`hero-expand`.** Rozkladanie vo výrobe, na zábere je aj mostový žeriav. Nadpis „Rozloženie bez ťažkej techniky“ je predajný; text pod ním nehovorí, že tento záber je bez techniky. Osadenie so žeriavom je na stránke typov.
- E-mail, logo, ceny, fotografie vzorového domu v Nebojsi a licencia FlexiMod zatiaľ nie sú doplnené. E-mail je v `src/config/site.ts` zámerne `null`.