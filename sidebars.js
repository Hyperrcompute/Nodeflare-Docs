// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    //  'index', 
    {
      type: 'category',
      label: '🏠 Welcome',
      items: ['welcome/welcome']
    },
    {
      type: 'category',
      label: '✨ Overview',
      items: [
        'overview/overview-what-can-hyperrcompute-do',
        'overview/overview-our-features'
        
      ],
    },
    {
      type: 'category',
      label: '🚀 Install',
      items: [
        'install/Install-npm',
        'install/Install-executablefile',
        'install/install-mac',
        // 'install/install-android',
      ],
    },
    {
       type: 'category',
      label: '📘 Usage Guide',
      items: [
        'usage-guide/usage-overview',
        'usage-guide/usage-set-port',
        'usage-guide/usage-connect',
        // 'usage-guide/usage-background',
        // 'usage-guide/usage-filemanager',
      ],
    },
    {
      type: 'category',
      label: '🧠 Terminology',
      items: [
          'terminology/terminology-connection-string'
          // 'terminology/terminology-public-vs-private'
        ,
      ],
    },
  ],
};

module.exports = sidebars;
