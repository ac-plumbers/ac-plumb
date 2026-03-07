"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_cms_git = require("@stackbit/cms-git");
var import_types = require("@stackbit/types");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  experimental: {
    ssg: {
      name: "Astro",
      logPatterns: {
        up: ["is ready", "astro"]
      },
      directRoutes: {
        "socket.io": "socket.io"
      },
      passthrough: ["/vite-hmr/**"]
    }
  },
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: process.cwd(),
      contentDirs: ["src/content"],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      },
      models: [
        {
          name: "Service",
          type: "page",
          filePath: "src/content/services/{slug}.md",
          urlPath: "/services/{slug}",
          frontmatterAdditions: {
            type: "Service",
            condition: (frontmatter) => !("type" in frontmatter)
          },
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "paragraph", type: "string" },
            { name: "sortedOrder", type: "number" },
            { name: "image", type: "image" },
            { name: "alt", type: "string" },
            { name: "titleImage", type: "string" },
            { name: "imageHero", type: "image" },
            { name: "altHero", type: "string" },
            { name: "titleImageHero", type: "string" },
            { name: "category", type: "string" },
            {
              name: "tags",
              type: "list",
              items: { type: "string" }
            },
            { name: "featured", type: "boolean" },
            { name: "slug", type: "string" },
            { name: "intro", type: "string" },
            {
              name: "benefits",
              type: "list",
              items: { type: "string" }
            },
            {
              name: "specialties",
              type: "list",
              items: { type: "string" }
            },
            {
              name: "features",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string", required: true },
                  { name: "description", type: "string" }
                ]
              }
            },
            {
              name: "faqs",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "question", type: "string", required: true },
                  { name: "answer", type: "string" }
                ]
              }
            },
            {
              name: "gallery",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "src", type: "image", required: true },
                  { name: "alt", type: "string", required: true },
                  { name: "title", type: "string" }
                ]
              }
            }
          ]
        },
        {
          name: "Area",
          type: "page",
          filePath: "src/content/areas/{slug}.md",
          urlPath: "/areas-we-serve/{slug}",
          frontmatterAdditions: {
            type: "Area",
            condition: (frontmatter) => !("type" in frontmatter)
          },
          fields: [
            { name: "area", type: "string", required: true },
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "image", type: "image" },
            { name: "sortOrder", type: "number" },
            { name: "featured", type: "boolean" },
            {
              name: "services",
              type: "list",
              items: { type: "string" }
            },
            { name: "postcode", type: "string" },
            { name: "level", type: "string" },
            { name: "responseTime", type: "string" },
            { name: "region", type: "string" },
            {
              name: "neighborhoods",
              type: "list",
              items: { type: "string" }
            },
            { name: "specificContent", type: "string" },
            {
              name: "faqs",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "question", type: "string", required: true },
                  { name: "answer", type: "string" }
                ]
              }
            }
          ]
        }
      ]
    })
  ]
});
//# sourceMappingURL=stackbit.config.6T37LNBG.cjs.map
