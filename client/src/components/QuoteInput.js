import React from "react";
import styled from 'styled-components';


export const FormStyle = styled.div`
font-family:'BenchNine', sans-serif;
font-size:2rem;
input {
  height:
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input:focus {
  width: 40%;
}
}
`

const QuoteInput = props => {
    return (
        <FormStyle>
            <label htmlFor={`${props.quote.value}quote`}> {props.quote.value} Quote: </label>
            <input onChange={props._changeEvent} type="text" 
                name={`${props.quote.value}quote`} points={props.quote.value}
                type="quote" value={props.quote.quote}
            />
            <br />
        </FormStyle>
    );
};

export default QuoteInput;