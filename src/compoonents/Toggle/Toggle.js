import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ToggleOuterContainer = styled.div`
  position: relative;
  width: ${props => props.outerWidth}px;
  height: 30px;
  border-radius: 50px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  background-color: ${props => props.toggled === 'yes' ? '#30D158' : 'grey'};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const ToggleInnerContainer = styled.div`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  border-radius: 50%;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  position: absolute;
  left: ${props => props.toggled === 'no' ? "0" : `${props.outerWidth - props.size}px`};
  transition: all 0.3s ease;
  cursor: pointer;
`;

function Slider({ }) {
    const [toggled, setToggle] = useState('no');

    const handleToggle = () => {
        toggled === 'no' ? setToggle('yes') : setToggle('no');
    };

    const outerWidth = 55;


    return (
        <ToggleOuterContainer toggled={toggled} outerWidth={outerWidth} onClick={handleToggle}>
            <ToggleInnerContainer outerWidth={outerWidth} size={30} toggled={toggled} />
        </ToggleOuterContainer>
    );
}

function SliderComponent() {
    return (
        <>
            <Slider />
        </>
    );
}

export default SliderComponent;