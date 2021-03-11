let rss = require('./rss-reader');

const url = 'http://feeds.bbci.co.uk/news/world/rss.xml';

rss.getPosts(url)
  .then(posts => posts.forEach(p => console.log(p.title)))
  .catch(e => console.log(e));
