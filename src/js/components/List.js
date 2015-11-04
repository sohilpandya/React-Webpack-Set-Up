var React = require('react');
var Items = require('./Items.js');


var List = React.createClass({



  render: function () {
    var fridgeItems = this.props.fridgeItems;
    console.log(fridgeItems);
    var items = fridgeItems.map(function(item,i){
      return (
        <div key={i} className='list-div'>
          <p className='list-item'>{item.name}</p>
          <p className='expiry'>{item.exp}</p>
          <p className='quantity'>{item.owner}</p>
        </div>
      );
    });
    return(
      <div className='app-list' >
        {items}
      </div>

    );
  }
});

module.exports = List;
