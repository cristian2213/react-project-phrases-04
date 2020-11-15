import React from 'react';
import brand from '../logo.svg';
import styled from '@emotion/styled';

const Img = styled.img`
  display: block;
  margin-bottom: 30px;
  max-width: 100%;
`;

const Brand = () => (
  <Img src={brand} alt="breaking bad brand" />
);

export default Brand;