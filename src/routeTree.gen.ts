/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PokemonNameImport } from './routes/pokemon.$name'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonNameRoute = PokemonNameImport.update({
  id: '/pokemon/$name',
  path: '/pokemon/$name',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$name': {
      id: '/pokemon/$name'
      path: '/pokemon/$name'
      fullPath: '/pokemon/$name'
      preLoaderRoute: typeof PokemonNameImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/pokemon/$name': typeof PokemonNameRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/pokemon/$name': typeof PokemonNameRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/pokemon/$name': typeof PokemonNameRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/pokemon/$name'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/pokemon/$name'
  id: '__root__' | '/' | '/pokemon/$name'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PokemonNameRoute: typeof PokemonNameRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PokemonNameRoute: PokemonNameRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/pokemon/$name"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/pokemon/$name": {
      "filePath": "pokemon.$name.tsx"
    }
  }
}
ROUTE_MANIFEST_END */