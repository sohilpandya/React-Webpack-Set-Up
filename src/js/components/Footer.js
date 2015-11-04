var React = require('react');

var Footer = React.createClass({


  render: function () {
    var footer = ' FRIDGE FOOTER ';
    return(
        <div className='footer-container' >
          <p className='footer-text'>{this.props.title}</p>
        </div>

    );
  }
});

module.exports = Footer;
