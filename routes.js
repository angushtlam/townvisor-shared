const {route, routes} = require('universal-route-defs')

module.exports = routes({
  root: route(() => '/'),
  auth: route(() => '/auth', {
    init: route(() => '/init'),
    redirect: route(() => '/redirect'),
  }),
  markers: route(() => '/markers', {
    user: route((props = {userQuery: '{userQuery}'}) => `/${props.userQuery}`),
  }),
  profile: route(() => '/profile', {
    fetch: route(() => '/fetch', {
      instagram: route(() => '/instagram'),
    }),
  }),
})
