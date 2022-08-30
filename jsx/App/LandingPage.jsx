import React from 'react';
import { ENGLISH, ESPANOL } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
  TEXTO EN KAQCHIKEL
  [ENGLISH]:
    <div>
      <p>Welcome! This website presents a collection of texts in <a href = https://en.wikipedia.org/wiki/Kaqchikel_language>Kaqchikel</a>, a K'ichean-branch Mayan language spoken in the Guatemalan highlands.</p>
      <p>These texts consist of audio recordings with associated <a href = https://archive.mpi.nl/tla/elan>ELAN</a> annotations, and were produced using LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
    </div>,
  [ESPANOL]:
    <div>
      <p>¡Bienvenidos! Este sitio comparte una colección de textos en <a href = https://es.wikipedia.org/wiki/Idioma_cachiquel>kaqchikel</a>, un idioma maya de la rama k'iche' que se habla en las tierras altas de Guatemala./p>
      <p>Estos textos constan de grabaciones de audio con anotaciones asociadas en formato <a href = https://archive.mpi.nl/tla/elan>ELAN</a>, y fueron producidos con LingView (<a href = https://github.com/BrownCLPS/LingView>https://github.com/BrownCLPS/LingView</a>).</p>
    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
