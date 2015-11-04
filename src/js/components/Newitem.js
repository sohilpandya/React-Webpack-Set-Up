var React = require('react');

var Newitem = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var nameboxValue = React.findDomNode(this.refs.item).value;
    var dateboxValue = React.findDomNode(this.refs.expiry-date).value;
    var quantituboxValue = React.findDomNode(this.refs.quantity).value;

  },

  render: function() {

    return(
      <form onSubmit={this.handleSubmit}>
        <div className='new-item'>
        <input className='item' type='text' placeholder='Item' ref='item'></input>
        <input className='expiry-date' type='text' placeholder='Expiry Date' ref='expiry-date'></input>
        <input className='owner' type='text' placeholder='Owner' ref='owner'></input>
        <input className='btn' type='button' value='Put It In Da Fridge!' onSubmit={this.handleSubmit}></input>
        </div>
      </form>
    );
  }
});

module.exports = Newitem;
