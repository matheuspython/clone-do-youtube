import styled from 'styled-components';

export const Container = styled.main`
  overflow-y: scroll;
  height: 100vh;
  width: calc(100% - 300px); 
  padding: 25px 15px;
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  


   ::-webkit-scrollbar{
      width:8px;
    }
    ::-webkit-scrollbar-thumb{
      background-color: hsla(0,0%,100%,0.1);
    }
    ::-webkit-scrollbar-track{
      background-color:transparent;
    }
`;
