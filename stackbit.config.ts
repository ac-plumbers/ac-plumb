import * as StackbitCmsGit from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';
const GitContentSource =
    (StackbitCmsGit as { GitContentSource?: new (...args: any[]) => any }).GitContentSource ??
    (StackbitCmsGit as { default?: new (...args: any[]) => any }).default;

if (!GitContentSource) {
    throw new Error('Unable to resolve GitContentSource from @stackbit/cms-git.');
}
export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom',
  devCommand: 'npx astro dev --port {PORT} --host 0.0.0.0',
  experimental: {
    ssg: {
      name: 'Astro',
      logPatterns: {
        up: ['ready', 'astro'],
      },
      directRoutes: {
        'socket.io': 'socket.io',
      },
      passthrough: ['/vite-hmr/**'],
    },
  },
  contentSources: [
    new GitContentSource({
      rootPath: process.cwd(),
      contentDirs: ['src/content'],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/',
      },
      models: [
        {
          name: 'Service',
          type: 'page',
          filePath: 'src/content/services/{slug}.md',
          urlPath: '/services/{slug}',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string' },
            { name: 'paragraph', type: 'string' },
            { name: 'sortedOrder', type: 'number' },
            { name: 'image', type: 'image' },
            { name: 'alt', type: 'string' },
            { name: 'titleImage', type: 'string' },
            { name: 'imageHero', type: 'image' },
            { name: 'altHero', type: 'string' },
            { name: 'titleImageHero', type: 'string' },
            { name: 'category', type: 'string' },
            {
              name: 'tags',
              type: 'list',
              items: { type: 'string' },
            },
            { name: 'featured', type: 'boolean' },
            { name: 'slug', type: 'string' },
            { name: 'intro', type: 'string' },
            {
              name: 'benefits',
              type: 'list',
              items: { type: 'string' },
            },
            {
              name: 'specialties',
              type: 'list',
              items: { type: 'string' },
            },
            {
              name: 'features',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string', required: true },
                  { name: 'description', type: 'string' },
                ],
              },
            },
            {
              name: 'faqs',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'question', type: 'string', required: true },
                  { name: 'answer', type: 'string' },
                ],
              },
            },
            {
              name: 'gallery',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'src', type: 'image', required: true },
                  { name: 'alt', type: 'string', required: true },
                  { name: 'title', type: 'string' },
                ],
              },
            },
          ],
        },
        {
          name: 'Area',
          type: 'page',
          filePath: 'src/content/areas/{slug}.md',
          urlPath: '/areas-we-serve/{slug}',
          fields: [
            { name: 'area', type: 'string', required: true },
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string', required: true },
            { name: 'image', type: 'image' },
            { name: 'sortOrder', type: 'number' },
            { name: 'featured', type: 'boolean' },
            {
              name: 'services',
              type: 'list',
              items: { type: 'string' },
            },
            { name: 'postcode', type: 'string' },
            { name: 'level', type: 'string' },
            { name: 'responseTime', type: 'string' },
            { name: 'region', type: 'string' },
            {
              name: 'neighborhoods',
              type: 'list',
              items: { type: 'string' },
            },
            { name: 'specificContent', type: 'string' },
            {
              name: 'faqs',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'question', type: 'string', required: true },
                  { name: 'answer', type: 'string' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
  postInstallCommand: 'npm i --no-save @stackbit/types @stackbit/cms-git',
});
