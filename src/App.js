import React, { Component } from 'react';
import styled from 'styled-components';
import Landing from './components/Landing/Landing';

const Main = styled.div`
  margin: 0px;
  padding: 0px;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Landing />
      </Main>
    );
  }
}

export default App;
