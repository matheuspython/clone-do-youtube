import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  width: 240px ;
  margin: 20px;
  .tumb{
    width: 100%;
  }
  main{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    .first {
      img{
        width: 35px;
        border-radius: 50%;
      }
    }
    .secund{
      h1{
        color: #fff;
        font-size: 15px;
      }
      span{
        color: gray;
        font-size: 13px;
      }
      p{
        color: gray;
        font-size: 12px;
      }
    }
  }

`;
