/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';

import AirbnbCerealBlack from './AirbnbCerealBlack.woff';
// import AirbnbCerealBold from './AirbnbCerealBold.woff2';
import AirbnbCerealBook from './AirbnbCerealBook.woff';
// import AirbnbCerealExtraBold from './AirbnbCerealExtraBold.woff2';
import AirbnbCerealLight from './AirbnbCerealLight.woff';
// import AirbnbCerealMedium from './AirbnbCerealMedium.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'airbnb';
        src:
        local('AirbnbCerealBlack'),
        local('AirbnbCerealBold'),
        local('AirbnbCerealBook'),
        local('AirbnbCerealExtraBold'),
        local('AirbnbCerealLight'),
        local('AirbnbCerealMedium'),
    }
`;
