importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init({
  assetCachingOptions: [
    {
      regexp: /\.(png|jpg|svg|webp|ico)/,
      cachingStrategy: 'CACHE_FIRST'
    },
    {
      regexp: /\.(js)/,
      cachingStrategy: 'STALE_WHILE_REVALIDATE'
    }
  ],
  offlinePageOptions: {
    url: '/offline.html',
    assets: []
  }
});
