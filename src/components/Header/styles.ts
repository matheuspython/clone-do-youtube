import styled from 'styled-components';

export const Container = styled.header`
  width:100%;
  padding: 0 2%;
  height: 56px;
  background-color: rgba(38,38,38,0.98);

  div{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
  }
`;

export const SectionPart1 = styled.section`
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 20px;
  svg:nth-of-type(1){
    cursor: pointer;
    width: 35px;
    height: 35px;
    fill: white;
  }
  svg:nth-of-type(2){
    cursor: pointer;
    width: 90px;
    height: 35px;
    fill: white;
  }
`;

export const SectionPart2 = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 500px;
    max-width: 900px;
    background-color: #121212;
    border:#363636;
    outline: 0;
    color:#fff;
    height: 30px;
    padding-left: 5px;
  }
  button {
    height: 30px;
    width: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgb(59, 59, 59);
    border: 0;
    svg{
      width: 50%;
    }
  }
`;

export const SectionPart3 = styled.section`
  
`;
