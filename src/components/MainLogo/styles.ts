import styled from 'styled-components'
import {FlexCenter} from '../../utils/styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(FlexCenter)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(40, 44, 52, 0.35);
`

const Word = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75px;
  padding: 10px;
  font-size: 30px;
  transition: all 10s ease-in-out;
  transition-timing-function: cubic-bezier(0,0,0.5,1.1);
  font-family: 'Source Sans Pro', sans-serif;
  &:hover {
    width: 230px;
    transition: all 0.75s ease-in-out;

  }
`

export const Department = styled(Word)`
  background-color: rgba(30, 144, 255, 0.08);
  &:hover {
    background-color: rgba(30, 144, 255, 0.88);
  }
`

export const Beauty = styled(Word)`
  background-color: rgba(220, 20, 60, 0.08);
  &:hover {
    background-color: rgba(197, 4, 43, 0.88);
  }
`

export const Ukraine = styled(Word)`
  background-color: rgba(255, 215, 0, 0.08);
  &:hover {
    background-color: rgba(255, 215, 0, 0.88);
  }
`

export const Letter = styled(FlexCenter)`
  border-radius: 10px;
  color: white;
  min-width: 75px;
  height: 75px;
  background-color: #000;
`

export const M = styled(Letter)`

`

export const K = styled(Letter)`

`
export const U = styled(Letter)`

`

export const Rest = styled.div`
  z-index: 1;
  overflow: hidden;
`

export const Description = styled.div`
  position: absolute;
  bottom: 20px;
  margin-top: 20px;
`