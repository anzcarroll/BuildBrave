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
            <label htmlFor={`${props.quote.value}`}> {props.quote.value} Quote: </label>
            <input onChange={(e) => props._changeQuotes(e, props.index)} type="text" 
                name={props.quote.value}
                type="text" value={props.quote.quote}
            />
            <br />
        </FormStyle>
    );
};

export default QuoteInput;