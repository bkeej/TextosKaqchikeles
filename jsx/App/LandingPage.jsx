import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
[ENGLISH]:
 <div>
 <p>&Uuml;tz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href = https://es.wikipedia.org/wiki/Idioma_cachiquel>Kaqchikel</a> ch'ab'&auml;l, jun ch'ab'&auml;l mayab' ntzijox&iuml;k pa Iximulew.</p>
 <p>Ri molaj tzijonem re, k'o rugrabaci&oacute;n audio, chuqa kiyakb'al <a href = https://archive.mpi.nl/tla/elan>ELAN</a>, chuqa xb'an rik'in LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 </p>
 <p>Welcome! This website presents a collection of texts in <a href = https://en.wikipedia.org/wiki/Kaqchikel_language>Kaqchikel</a>, a K'ichean-branch Mayan language spoken in the Guatemalan highlands.</p>
 <p>These texts consist of audio recordings with associated <a href = https://archive.mpi.nl/tla/elan>ELAN</a> annotations, and were produced using LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
 <p>For additional information, please contact Ryan Bennett (rbennett@ucsc.edu)<p/>
 </div>,
 [ESPANOL]:
 <div>
 <p>&Uuml;tz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href = https://es.wikipedia.org/wiki/Idioma_cachiquel>Kaqchikel</a> ch'ab'&auml;l, jun ch'ab'&auml;l mayab' ntzijox&iuml;k pa Iximulew.</p>
 <p>Ri molaj tzijonem re, k'o rugrabaci&oacute;n audio, chuqa kiyakb'al <a href = https://archive.mpi.nl/tla/elan>ELAN</a>, chuqa xb'an rik'in LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 </p>
 <p>&iexcl;Bienvenidos! Este sitio comparte una colecci&oacute;n de textos en <a href = https://es.wikipedia.org/wiki/Idioma_cachiquel>kaqchikel</a>, un idioma maya de la rama k'iche' que se habla en las tierras altas de Guatemala./p>
 <p>Estos textos constan de grabaciones de audio con anotaciones asociadas en formato <a href = https://archive.mpi.nl/tla/elan>ELAN</a>, y fueron producidos con LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
 <p>Un recordatorio para aquellos que participaron en este proyecto compartiendo el idioma y sus historias: si desea que hagamos alg&uacute;n cambio en su grabaci&oacute;n o transcripci&oacute;n, incluida la eliminaci&oacute;n del sitio, comun&iacute;quese con Ryan Bennett (rbennett@ucsc.edu).
 </div>,
 [FRANCAIS]:
 <div>
 <p>&Uuml;tz ipetik! Ri ruxaq re' nuk'utu' jun molaj tzijonem pa <a href = https://es.wikipedia.org/wiki/Idioma_cachiquel>Kaqchikel</a> ch'ab'&auml;l, jun ch'ab'&auml;l mayab' ntzijox&iuml;k pa Iximulew.</p>
 <p>Ri molaj tzijonem re, k'o rugrabaci&oacute;n audio, chuqa kiyakb'al <a href = https://archive.mpi.nl/tla/elan>ELAN</a>, chuqa xb'an rik'in LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
 <p>Wi nawajo' nanab'ej chik chi rij ri taq tzijonem re', tab'ana' utzil katz'ib'an chre Ryan Bennett (rbennett@ucsc.edu).</p>
 </p>
 <p>Bienvenue ! Ce site Web pr&eacute;sente une collection de textes en <a href = https://fr.wikipedia.org/wiki/Cakchiquel_(langue)>Kaqchikel</a>, une langue maya de la branche k'ichean parl&eacute;e dans les hautes terres du Guatemala.</p>
 <p>Ces textes consistent en des enregistrements audio avec des annotations <a href = https://archive.mpi.nl/tla/elan>ELAN</a> associ&eacute;es, et ont &eacute;t&eacute; produits &agrave; l'aide de LingView (<a href = https:// github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
 <p>Pour plus d'informations, veuillez contacter Ryan Bennett (rbennett@ucsc.edu)<p/>
 </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
