import React, { Component } from 'react';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const HelloWorld = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 100px;
  color: bisque;
`;

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <MainWrapper>
        <HelloWorld>CUTS!</HelloWorld>
      </MainWrapper>
    );
  }
}

export default Landing;
