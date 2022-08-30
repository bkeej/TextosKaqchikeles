import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
[ENGLISH]:
 <div>
 Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
  <p></p>
 <p>Welcome! This website presents a collection of texts in <a href="https://en.wikipedia.org/wiki/Kaqchikel_language">Kaqchikel</a>, a K'ichean-branch Mayan language spoken in the Guatemalan highlands.</p>
 <p>These texts consist of audio recordings with associated <a href="https://archive.mpi.nl/tla/elan">ELAN</a> annotations, and were produced using LingView (<a href="https://github.com/BrownCLPS/LingView">https://github.com/BrownCLPS/LingView</a>).</p>
 <p>For additional information, please contact Ryan Bennett (rbennett@ucsc.edu)</p>
 </div>,
 [ESPANOL]:
 <div>
 Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
  <p></p>
 <p>¡Bienvenidos! Este sitio comparte una colección de textos en <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">kaqchikel</a>, un idioma maya de la rama k'iche' que se habla en las tierras altas de Guatemala.</p>
 <p>Estos textos constan de grabaciones de audio con anotaciones asociadas en formato <a href="https://archive.mpi.nl/tla/elan">ELAN</a>, y fueron producidos con LingView (<a href="https://github.com/BrownCLPS/LingView">https://github.com/BrownCLPS/LingView</a>).</p>
 <p>Un recordatorio para aquellos que participaron en este proyecto compartiendo el idioma y sus historias: si desea que hagamos algún cambio en su grabación o transcripción, incluida la eliminación del sitio, comuníquese con Ryan Bennett (rbennett@ucsc.edu).</p>
 </div>,
 [FRANCAIS]:
 <div>
 Ütz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, jun ch'ab'äl mayab' ntzijoxïk pa Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
  <p></p>
 <p>Bienvenue ! Ce site Web présente une collection de textes en <a href="https://fr.wikipedia.org/wiki/Cakchiquel_(langue)">Kaqchikel</a>, une langue maya de la branche k'ichean parlée dans les hautes terres du Guatemala.</p>
 <p>Ces textes consistent en des enregistrements audio avec des annotations <a href="https://archive.mpi.nl/tla/elan">ELAN</a> associées, et ont été produits à l'aide de LingView (<a href=https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
 <p>Pour plus d'informations, veuillez contacter Ryan Bennett (rbennett@ucsc.edu)</p>
 </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
