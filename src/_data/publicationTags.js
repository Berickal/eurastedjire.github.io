const publications = require("./publications.json");

module.exports = () => {
  const tags = new Set();
  publications.forEach((pub) => (pub.tags || []).forEach((t) => tags.add(t)));
  return Array.from(tags);
};
