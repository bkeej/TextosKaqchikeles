import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
[ENGLISH]:
 <div>
 TEST
 </div>,
 [ESPANOL]:
 <div>
 TEST
 </div>,
 [FRANCAIS]:
 <div>
 TEST
 </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
