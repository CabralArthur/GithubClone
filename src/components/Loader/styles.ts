import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  .preloaderDivBackground{
    width: 100%;
    height: 70vh;
    position: fixed;
    z-index: 1;
    background-color: #F6F6F6;
    overflow: hidden;
  }
  .preloaderDiv{
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }
`;


