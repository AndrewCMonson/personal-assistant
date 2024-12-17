/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as ProfileRouteImport } from "./routes/profile.route";
import { Route as ChatRouteImport } from "./routes/chat.route";

// Create Virtual Routes

const IndexLazyImport = createFileRoute("/")();

// Create/Update Routes

const ProfileRouteRoute = ProfileRouteImport.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => rootRoute,
} as any);

const ChatRouteRoute = ChatRouteImport.update({
  id: "/chat",
  path: "/chat",
  getParentRoute: () => rootRoute,
} as any);

const IndexLazyRoute = IndexLazyImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/chat": {
      id: "/chat";
      path: "/chat";
      fullPath: "/chat";
      preLoaderRoute: typeof ChatRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/profile": {
      id: "/profile";
      path: "/profile";
      fullPath: "/profile";
      preLoaderRoute: typeof ProfileRouteImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexLazyRoute;
  "/chat": typeof ChatRouteRoute;
  "/profile": typeof ProfileRouteRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexLazyRoute;
  "/chat": typeof ChatRouteRoute;
  "/profile": typeof ProfileRouteRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexLazyRoute;
  "/chat": typeof ChatRouteRoute;
  "/profile": typeof ProfileRouteRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "/" | "/chat" | "/profile";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/chat" | "/profile";
  id: "__root__" | "/" | "/chat" | "/profile";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute;
  ChatRouteRoute: typeof ChatRouteRoute;
  ProfileRouteRoute: typeof ProfileRouteRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ChatRouteRoute: ChatRouteRoute,
  ProfileRouteRoute: ProfileRouteRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/chat",
        "/profile"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/chat": {
      "filePath": "chat.route.tsx"
    },
    "/profile": {
      "filePath": "profile.route.tsx"
    }
  }
}
ROUTE_MANIFEST_END */