
// FlowRouter.route('/', {
//     // do some action for this route
//   action: function(params) {
//     ReactLayout.render(MainLayout, {
//       // content: <DashboardLayout searchInput='<NavSearchInput />'/>,
//         header: <HeaderLayout />,
//         navigation: <NavigationLayout />,
//         content: <Dashboard />
//       }
//     );},
//     name: 'Home' // optional
// });

var _routes = FlowRouter.group({});

// handling /admin route
_routes.route('/', {
  name: 'home',
  action: function(params) {
    ReactLayout.render(MainLayout, {
      // content: <DashboardLayout searchInput='<NavSearchInput />'/>,
        header: <HeaderLayout />,
        navigation: <NavigationLayout />,
        content: <Dashboard />
      }
    );}
});


// handling /admin route
_routes.route('/new', {
  name: 'newItem',
  action: function(params) {
    ReactLayout.render(MainLayout, {
      // content: <DashboardLayout searchInput='<NavSearchInput />'/>,
        header: <HeaderLayout />,
        navigation: <NavigationLayout />,
      content: <AddNewItem />
      }
    );}
});
