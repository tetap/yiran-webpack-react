import { RouteObject, useRoutes } from 'react-router-dom'

const libs: any = require.context('./libs', true, /\.ts$/)
const routes: RouteObject[] = []
libs.keys().forEach((route: any) => {
  routes.push(...libs(route).default)
})

export default function () {
  return useRoutes(routes)
}
