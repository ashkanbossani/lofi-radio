import styled from "styled-components"

export const DashBoardContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  width: 100%;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 55px;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
  }
`

export const ResultsContainer = styled.div`
  flex-grow: 1;
  margin: 3rem 0;
  overflow-y: auto;
  overflow-x: auto;
  font-family: "Montserrat", sans-serif;
`

export const LyricsContainer = styled.div`
  height: 65vh;
  text-align: center;
  color: #fff;
  white-space: pre;
  font-family: "Montserrat", sans-serif;
`

export const PlayerContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: "Montserrat", sans-serif;
`