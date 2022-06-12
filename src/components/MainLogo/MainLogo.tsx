import React from 'react'
import {
  K, M, U, Rest, Wrapper, Department, Beauty, Ukraine, Logo, Description,
} from './styles'

const MainLogo = () => {
  return (
    <Wrapper>
      <Logo>
        <Department>
          <M>Мі</M>
          <Rest>&nbsp;ністерство</Rest>
        </Department>
        <Beauty>
          <K>К</K>
          <Rest>&nbsp;раси</Rest>
        </Beauty>
        <Ukraine>
          <U>У</U>
          <Rest>&nbsp;країни</Rest>
        </Ukraine>
      </Logo>
      <Description>
        <span>Go</span>
        Міністерство Краси України🇺🇦
      </Description>
    </Wrapper>
  )
}

export default MainLogo