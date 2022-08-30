import React from 'react';
import { ENGLISH, ESPANOL } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
  [ENGLISH]:
    <div>
    <p>Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href = https://es.wikipedia.org/wiki/Idioma_cachiquel>Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.</p>
    <p>Ri molaj tzijonem re, k'o rugrabación audio, chuqa kiyakb'al <a href = https://archive.mpi.nl/tla/elan>ELAN</a>, chuqa xb'an rik'in LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
    <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
    </div>
    <div>
      <p>Welcome! This website presents a collection of texts in <a href = https://en.wikipedia.org/wiki/Kaqchikel_language>Kaqchikel</a>, a K'ichean-branch Mayan language spoken in the Guatemalan highlands.</p>
      <p>These texts consist of audio recordings with associated <a href = https://archive.mpi.nl/tla/elan>ELAN</a> annotations, and were produced using LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
      <p>For additional information, please contact Ryan Bennett (rbennett@ucsc.edu)<p/>
    </div>,
  [ESPANOL]:
    <div>
    <p>Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href = https://es.wikipedia.org/wiki/Idioma_cachiquel>Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.</p>
    <p>Ri molaj tzijonem re, k'o rugrabación audio, chuqa kiyakb'al <a href = https://archive.mpi.nl/tla/elan>ELAN</a>, chuqa xb'an rik'in LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
    <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
    </div>
    <div>
      <p>¡Bienvenidos! Este sitio comparte una colección de textos en <a href = https://es.wikipedia.org/wiki/Idioma_cachiquel>kaqchikel</a>, un idioma maya de la rama k'iche' que se habla en las tierras altas de Guatemala./p>
      <p>Estos textos constan de grabaciones de audio con anotaciones asociadas en formato <a href = https://archive.mpi.nl/tla/elan>ELAN</a>, y fueron producidos con LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
      <p>Un recordatorio para aquellos que participaron en este proyecto compartiendo el idioma y sus historias: si desea que hagamos algún cambio en su grabación o transcripción, incluida la eliminación del sitio, comuníquese con Ryan Bennett (rbennett@ucsc.edu).
    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
