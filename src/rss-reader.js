let rss = new (require('rss-parser'))();
let { createPost } = require('./postdata');

const getPosts = (url) =>
  rss.parseURL(url)
    .then(feed => feed.items.map(i => createPost(i.title, i.link, i.contentSnippet, i.isoDate, i.content)));

module.exports.getPosts = getPosts;