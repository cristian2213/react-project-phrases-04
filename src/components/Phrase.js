import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContentPhrase = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width: 800px;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding: 0 0 0 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -.6rem;
      top: -2.6rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Phrase = ({ phrase }) => {
  // return each key in an array
  if (Object.keys(phrase).length === 0) return null;

  const { author, quote } = phrase;

  return (
    <ContentPhrase>
      <h1>{author}</h1>
      <p>{quote}</p>
    </ContentPhrase>
  );
}

Phrase.propTypes = {
  phrase: PropTypes.object.isRequired
}

export default Phrase;