/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';

import AirbnbCerealBlack from './AirbnbCerealBlack.woff';
import AirbnbCerealBold from './AirbnbCerealBold.woff';
import AirbnbCerealBook from './AirbnbCerealBook.woff';
import AirbnbCerealExtraBold from './AirbnbCerealExtraBold.woff';
import AirbnbCerealLight from './AirbnbCerealLight.woff';
import AirbnbCerealMedium from './AirbnbCerealMedium.woff';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'AirbnbCerealBlack';
        font-style: normal;
        font-weight: normal;
        src: local('AirbnbCerealBlack'), url(${AirbnbCerealBlack}) format('woff');
    }
    @font-face {
        font-family: 'AirbnbCerealLight';
        font-style: normal;
        font-weight: normal;
        src: local('AirbnbCerealLight'), url(${AirbnbCerealLight}) format('woff');
    }
    @font-face {
        font-family: 'AirbnbCerealBold';
        font-style: normal;
        font-weight: normal;
        src: local('AirbnbCerealBold'), url(${AirbnbCerealBold}) format('woff');
    }
    @font-face {
        font-family: 'AirbnbCerealBook';
        font-style: normal;
        font-weight: normal;
        src: local('AirbnbCerealBook'), url(${AirbnbCerealBook}) format('woff');
    }
    @font-face {
        font-family: 'AirbnbCerealExtraBold';
        font-style: normal;
        font-weight: normal;
        src: local('AirbnbCerealExtraBold'), url(${AirbnbCerealExtraBold}) format('woff');
    }
    @font-face {
        font-family: 'AirbnbCerealMedium';
        font-style: normal;
        font-weight: normal;
        src: local('AirbnbCerealMedium'), url(${AirbnbCerealMedium}) format('woff');
    }
    html, body {
        font-family: 'AirbnbCerealLight';
        color: rgb(34, 34, 34);
    }
`;

export default GlobalFonts;
