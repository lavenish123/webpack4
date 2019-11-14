import{library,dom} from '@fortawesome/fontawesome-svg-core';
import {faSpinner, faAllergies} from '@fortawesome/free-solid-svg-icons';

let fontIcon = [faSpinner, faAllergies];

library.add(fontIcon);
dom.watch();
