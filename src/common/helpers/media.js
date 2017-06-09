import { css } from 'styled-components';
import { SIZES } from '../constants';

const media = Object.keys(SIZES).reduce((acc, label) => {
  acc[label] = (...args) => css`@media (max-width: ${SIZES[label] / 16}em) {${css(...args)}}`;
  return acc;
}, {});

export default media;
