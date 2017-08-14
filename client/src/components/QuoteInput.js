import React from "react";
import styled from 'styled-components';


const formStyle = styled.div`
font-family:'BenchNine', sans-serif;
font-size:2rem;
`

const QuoteInput = props => {
  return (
    <formStyle>
      <label htmlFor={`${props.quote.value}quote`}> {props.quote.value} Quote: </label>
      <input onChange={props._changeEvent} type="text"
        name={`${props.quote.value}quote`} points={props.quote.value}
        type="quote" value={props.quote.quote}
      />
      <br />
    </formStyle>
  );
};

export default QuoteInput;