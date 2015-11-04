var React = require('react');

var Header = React.createClass({


    render: function () {
    var header = ' FRIDGE HEADER';
    return(
        <div className='header-container' >
          <p className='header-text'>{this.props.title}</p>
        </div>

    );
  }
});

module.exports = Header;
