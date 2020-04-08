function queryString() {
  return window.location.search.replace('?', '')
    .split('&')
    .reduce(function (res, item) {
      let kv = item.split('=');
      res[kv[0]] = kv[1];
      return res;
    }, {})
}