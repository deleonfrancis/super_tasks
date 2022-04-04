import React from "react";
import "./App.css";
import styled from "styled-components";
import { SearchBar } from "./components/SearchBar";
import { NewTask } from "./components/NewTask";
import { ModalNewTask } from "./components/ModalNewTask";

const StyledApp = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
  min-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 5px;
`;

const StyledSearchBar = styled.div`
  display: flex;
  flex: 1;
  background-color: #e7725a;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const FirstColumn = styled.div`
  display: flex;
  padding: 10px;
  min-height: 300px;
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 0px 0px 0px 5px;
`;

const SecondColumn = styled.div`
  display: flex;
  padding: 10px;
  flex: 4;
  min-height: 300px;
  background-color: #fff;
  border-radius: 0px 5px 5px 0px;
`;

const ThirdColumn = styled.div`
  display: flex;
  min-height: 300px;
  background-color: #e8e8e8;
`;

function App(): JSX.Element {
  return (
    <StyledApp>
      <StyledSearchBar>
        <SearchBar />
      </StyledSearchBar>
      <Content>
        <FirstColumn />
        <SecondColumn>
          <ModalNewTask />
        </SecondColumn>
      </Content>
    </StyledApp>
  );
}

export default App;
