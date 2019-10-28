
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/get-started',
  component: ComponentCreator('/docs/get-started'),
  exact: true,
  
},
{
  path: '/docs/project-structure',
  component: ComponentCreator('/docs/project-structure'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/admin-app-crud',
  component: ComponentCreator('/docs/developer-tutorials/admin-app-crud'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/admin-app-form',
  component: ComponentCreator('/docs/developer-tutorials/admin-app-form'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/admin-app-menu',
  component: ComponentCreator('/docs/developer-tutorials/admin-app-menu'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/admin-app-overview',
  component: ComponentCreator('/docs/developer-tutorials/admin-app-overview'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/admin-app-route',
  component: ComponentCreator('/docs/developer-tutorials/admin-app-route'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/api-config',
  component: ComponentCreator('/docs/developer-tutorials/api-config'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/api-entity',
  component: ComponentCreator('/docs/developer-tutorials/api-entity'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/api-overview',
  component: ComponentCreator('/docs/developer-tutorials/api-overview'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/api-schema',
  component: ComponentCreator('/docs/developer-tutorials/api-schema'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/cms-element-creating-editor-plugin',
  component: ComponentCreator('/docs/developer-tutorials/cms-element-creating-editor-plugin'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/cms-element-creating-element-group',
  component: ComponentCreator('/docs/developer-tutorials/cms-element-creating-element-group'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/cms-element-creating-render-plugin',
  component: ComponentCreator('/docs/developer-tutorials/cms-element-creating-render-plugin'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/cms-element-creating-settings-plugin',
  component: ComponentCreator('/docs/developer-tutorials/cms-element-creating-settings-plugin'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/cms-element-overview',
  component: ComponentCreator('/docs/developer-tutorials/cms-element-overview'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/new-theme-creating-theme',
  component: ComponentCreator('/docs/developer-tutorials/new-theme-creating-theme'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/new-theme-using-theme',
  component: ComponentCreator('/docs/developer-tutorials/new-theme-using-theme'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/dev-overview',
  component: ComponentCreator('/docs/developer-tutorials/dev-overview'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/plugins-crash-course',
  component: ComponentCreator('/docs/developer-tutorials/plugins-crash-course'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/deploy-local-project',
  component: ComponentCreator('/docs/developer-tutorials/deploy-local-project'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/theme-elements',
  component: ComponentCreator('/docs/developer-tutorials/theme-elements'),
  exact: true,
  
},
{
  path: '/docs/other/contributing',
  component: ComponentCreator('/docs/other/contributing'),
  exact: true,
  
},
{
  path: '/docs/other/credits',
  component: ComponentCreator('/docs/other/credits'),
  exact: true,
  
},
{
  path: '/docs/developer-tutorials/new-theme-overview',
  component: ComponentCreator('/docs/developer-tutorials/new-theme-overview'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
