var React = require('react');

var Listtitle = React.createClass({

  render: function () {

    return(
      <div className='list-title-div'>
        <p className='name'>{this.props.name}</p>
        <p className='expiry'>{this.props.expiry}</p>
        <p className='quantity'>{this.props.owner}</p>
      </div>

    );
  }
});

module.exports = Listtitle;
