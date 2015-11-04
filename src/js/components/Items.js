var React = require('react');

var Items = React.createClass({

  render: function () {
    var fridgeArray = ["Banannanana","Bread","Milk","More Milk","Apple","Strawberry"];
    var items = fridgeArray.map(function(item){
      return <p className='list-item'>{item}</p>;
    });
    return(
      {items}
    );
  }
});

module.exports = Items;
