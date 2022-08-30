import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
[ENGLISH]:
 <div>
 Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
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
