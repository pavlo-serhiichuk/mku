import React from 'react'
import Main from '../pages/Main/Main'

interface IRoute {
  path: string,
  element: JSX.Element
}

enum RouteEnum {
  MAIN = '/'
}

// TODO: privateRoutes

export const publicRoutes: IRoute[] = [
  {path: RouteEnum.MAIN, element: <Main />},
]