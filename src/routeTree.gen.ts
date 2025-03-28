/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as authRouteImport } from './routes/(auth)/route'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as AuthenticatedPostsImport } from './routes/_authenticated/posts'
import { Route as authSignupImport } from './routes/(auth)/signup'
import { Route as authLoginImport } from './routes/(auth)/login'

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const authRouteRoute = authRouteImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedPostsRoute = AuthenticatedPostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const authSignupRoute = authSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => authRouteRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => authRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authRouteImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof authRouteImport
    }
    '/(auth)/signup': {
      id: '/(auth)/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof authSignupImport
      parentRoute: typeof authRouteImport
    }
    '/_authenticated/posts': {
      id: '/_authenticated/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof AuthenticatedPostsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface authRouteRouteChildren {
  authLoginRoute: typeof authLoginRoute
  authSignupRoute: typeof authSignupRoute
}

const authRouteRouteChildren: authRouteRouteChildren = {
  authLoginRoute: authLoginRoute,
  authSignupRoute: authSignupRoute,
}

const authRouteRouteWithChildren = authRouteRoute._addFileChildren(
  authRouteRouteChildren,
)

interface AuthenticatedRouteChildren {
  AuthenticatedPostsRoute: typeof AuthenticatedPostsRoute
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedPostsRoute: AuthenticatedPostsRoute,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof AuthenticatedIndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof authLoginRoute
  '/signup': typeof authSignupRoute
  '/posts': typeof AuthenticatedPostsRoute
}

export interface FileRoutesByTo {
  '/': typeof AuthenticatedIndexRoute
  '/login': typeof authLoginRoute
  '/signup': typeof authSignupRoute
  '/posts': typeof AuthenticatedPostsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(auth)': typeof authRouteRouteWithChildren
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/signup': typeof authSignupRoute
  '/_authenticated/posts': typeof AuthenticatedPostsRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/login' | '/signup' | '/posts'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/signup' | '/posts'
  id:
    | '__root__'
    | '/(auth)'
    | '/_authenticated'
    | '/(auth)/login'
    | '/(auth)/signup'
    | '/_authenticated/posts'
    | '/_authenticated/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  authRouteRoute: typeof authRouteRouteWithChildren
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  authRouteRoute: authRouteRouteWithChildren,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
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
        "/(auth)",
        "/_authenticated"
      ]
    },
    "/(auth)": {
      "filePath": "(auth)/route.tsx",
      "children": [
        "/(auth)/login",
        "/(auth)/signup"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/posts",
        "/_authenticated/"
      ]
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx",
      "parent": "/(auth)"
    },
    "/(auth)/signup": {
      "filePath": "(auth)/signup.tsx",
      "parent": "/(auth)"
    },
    "/_authenticated/posts": {
      "filePath": "_authenticated/posts.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
