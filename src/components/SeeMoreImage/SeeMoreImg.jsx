import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';
import { ImageContainer } from '@/components';
import PropTypes from 'prop-types';

export function SeeMoreImg({ src, alt }) {
  return (
    <ImageContainer width="29.4375rem" height="37.5rem" src={src} alt={alt} />
  );
}

ImageContainer.displayName = 'ImageContainer';

SeeMoreImg.propTypes = {
  src: PropTypes.string,
};
