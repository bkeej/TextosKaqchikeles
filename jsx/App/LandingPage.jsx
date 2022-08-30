import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
[ENGLISH]:
 <div>
 Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 <p>Welcome! This website presents a collection of texts in <a href="https://en.wikipedia.org/wiki/Kaqchikel_language">Kaqchikel</a>, a K'ichean-branch Mayan language spoken in the Guatemalan highlands.</p>
 <p>These texts consist of audio recordings with associated <a href="https://archive.mpi.nl/tla/elan">ELAN</a> annotations, and were produced using LingView (<a href="https://github.com/BrownCLPS/LingView">https://github.com/BrownCLPS/LingView</a>).</p>
 <p>For additional information, please contact Ryan Bennett (rbennett@ucsc.edu)</p>
 </div>,
 [ESPANOL]:
 <div>
 Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 </div>,
 [FRANCAIS]:
 <div>
 Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
