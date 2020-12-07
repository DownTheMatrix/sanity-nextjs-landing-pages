export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fce5c69563ea7158dfd5715',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xeudnzow',
                  apiId: '4b12752d-2766-41dd-8c92-9b9ce892c676'
                },
                {
                  buildHookId: '5fce5c693e623f10f3724915',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v9dv3auq',
                  apiId: 'b444f47c-3431-4b86-b5e9-fa036799bd97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DownTheMatrix/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v9dv3auq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
