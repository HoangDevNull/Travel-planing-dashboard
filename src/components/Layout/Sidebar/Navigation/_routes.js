const adminNavigationRoutes = [
  {
    name: 'Dashboard',
    to: '/',
    icon: {
      type: 'fab',
      name: 'react'
    }
  },
  {
    name: 'Người dùng',
    to: '/users',
    icon: {
      type: 'far',
      name: 'user'
    }
  },
  {
    name: 'Bài viết',
    to: '/posts',
    icon: {
      type: 'fas',
      name: 'grip-horizontal'
    }
  },
  {
    name: 'Ảnh',
    to: '/medias',
    icon: {
      type: 'fas',
      name: 'images'
    }
  }
];

const defaultNavigationRoutes = [
  {
    name: 'Wellcome',
    to: '/',
    icon: {
      type: 'far',
      name: 'gem'
    }
  }
];

export { adminNavigationRoutes, defaultNavigationRoutes };
