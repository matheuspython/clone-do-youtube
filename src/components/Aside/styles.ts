import styled from 'styled-components';

export const Container = styled.aside`
  width:300px;
  height: calc(100vh - 56px);
  background: rgba(40,40,40,0.98);
  color: #fff;
  border-bottom: 1px solid #363636;
  border-left: 1px solid #363636;
  overflow-y: hidden;
  &:hover{
    overflow-y: scroll;
    ::-webkit-scrollbar{
      width:8px;
    }
    ::-webkit-scrollbar-thumb{
      background-color: hsla(0,0%,100%,0.1);
    }
    ::-webkit-scrollbar-track{
      background-color:transparent;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  border-bottom: 1px solid hsla(0,0%,100%,0.1);
  font-size: 15px;
  li{
    padding: 5px 30px;
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
    height: 45px;
    transition: all.4s;
    cursor: pointer;
    &:hover,
    &.active {
      background-color: hsla(0,0%,100%,0.1);
      svg{
        fill: white;
      }
    }
    svg,
    img {
      border-radius: 50%;
      width: 25px;
      fill: #909090;
    }
  }
`
export const ListCanais = styled.ul`

`


