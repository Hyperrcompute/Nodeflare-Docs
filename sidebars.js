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
        'install/Hyperrcompute on Windows',
        'install/Hyperrcompute on Linux',
        'install/Hyperrcompute on Mac',
      ],
    },
    {
       type: 'category',
      label: '📘 Usage Guide',
      items: [
        'usage-guide/usage-overview'
      ],
    },
    {
      type: 'category',
      label: '🧠 Terminology',
      items: [
          'terminology/terminology-connection-string'
        ,
      ],
    },
  ],
};

module.exports = sidebars;
