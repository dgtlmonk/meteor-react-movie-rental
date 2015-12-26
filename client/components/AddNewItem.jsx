AddNewItem = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // This is the place to subscribe to any data you need
    let handle =   Movies.find().fetch();
    return {
      movies : handle
    };
  },


  render: function() {
    return (
      <div className='row'>
          <h4>New Item</h4>
      </div>
    );
  }

});
