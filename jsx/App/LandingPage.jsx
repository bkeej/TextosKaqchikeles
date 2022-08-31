import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
[ENGLISH]:
 <div>
 Ütz ipetik! Ri xaq re' nuk'üt jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, jun mayab' ch'ab'äl nich'ab'aläx pan Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 <br/>
 <p>Welcome! This website presents a collection of texts in <a href="https://en.wikipedia.org/wiki/Kaqchikel_language">Kaqchikel</a>, a K'ichean-branch Mayan language spoken in the Guatemalan highlands.</p>
 <p>These texts consist of audio recordings with associated <a href="https://archive.mpi.nl/tla/elan">ELAN</a> annotations, and were produced using LingView (<a href="https://github.com/BrownCLPS/LingView">https://github.com/BrownCLPS/LingView</a>).</p>
 <p>For additional information, please contact Ryan Bennett (rbennett@ucsc.edu).</p>
 </div>,
 [ESPANOL]:
 <div>
 Ütz ipetik! Ri xaq re' nuk'üt jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, mayab' ch'ab'äl nich'ab'aläx pan Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 <br/>
 <p>¡Bienvenidos! Este sitio comparte una colección de textos en <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">kaqchikel</a>, un idioma maya de la rama k'iche' que se habla en las tierras altas de Guatemala.</p>
 <p>Estos textos constan de grabaciones de audio con anotaciones asociadas en formato <a href="https://archive.mpi.nl/tla/elan">ELAN</a>, y fueron producidos con LingView (<a href="https://github.com/BrownCLPS/LingView">https://github.com/BrownCLPS/LingView</a>).</p>
 <p>Para más información, comuníquese con Ryan Bennett (rbennett@ucsc.edu).</p>
 <p>Un recordatorio para aquellas personas quienes participaron en este proyecto compartiendo su idioma y sus historias: si desea que hagamos algún cambio en su grabación o transcripción, incluso que borremos esos materiales de este sitio, comuníquese con Ryan Bennett (rbennett@ucsc.edu).</p>
 </div>,
 [FRANCAIS]:
 <div>
 Ütz ipetik! Ri xaq re' nuk'üt jun molaj tzijonem pa <a href="https://es.wikipedia.org/wiki/Idioma_cachiquel">Kaqchikel</a> ch'ab'äl, mayab' ch'ab'äl nich'ab'aläx pan Iximulew.
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 <br/>
 <p>Bienvenue! Ce site web présente une collection de textes en <a href="https://fr.wikipedia.org/wiki/Cakchiquel_(langue)">Kaqchikel</a>, une langue maya de la branche k'ichean parlée dans les hautes terres du Guatemala.</p>
 <p>Pour plus d'informations, veuillez contacter Ryan Bennett (rbennett@ucsc.edu).</p>
 </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
