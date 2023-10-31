import React, { Component } from 'react';

export default class AddProduct extends Component{

    constructor(props) {
        super(props);

        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setCategory = this.setCategory.bind(this);
        this.setPrice = this.setPrice.bind(this);
        this.setQuantity = this.setQuantity.bind(this);
        this.setLogo = this.setLogo.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          name: '',
          description: '',
          category: '',
          quantity: '',
          price: '',
          logo:null
        };
    }
    setName(e){
      this.setState({
          name:e.target.value
          
      })
  }

    setDescription(e){
      this.setState({
          description:e.target.value
          
      })
  }
    setCategory(e){
      this.setState({
          category:e.target.value
      })
  }
    setPrice(e){
      this.setState({
          price:e.target.value
      })
  }
    setQuantity(e){
      this.setState({
          quantity:e.target.value
      })
  }
  onSubmit(e) {
    e.preventDefault();
    
    console.log(this.state.name)
    console.log(this.state.description)
    console.log(this.state.category)
    console.log(this.state.quantity)
    console.log(this.state.price)
    console.log(this.state.logo);

    this.setState({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: ''
    });
  }

  setLogo(e) {
    this.setState({
        logo: e.target.files[0]
    });
}

    clearFields() {

      this.setState({
          name: '',
          description: '',
          category: '',
          quantity: '',
          price: '',
          logo:null
      });
  }
  render() {
    return (
        <form onSubmit={this.onSubmit}>
           <h2>New Product</h2>
          <div className="form-group">
                <label htmlFor="photo-upload" className="btn btn-success" style={{cursor: 'pointer'}}>UPLOAD PHOTO</label>
                <input 
                    type="file" 
                    id="photo-upload" 
                    style={{display: 'none'}} 
                    onChange={this.setLogo}
                    accept="image/*"
                />
            </div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.setName} className="form-control" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" value={this.state.description} onChange={this.setDescription} className="form-control" />
            </div>
            <div className="form-group">
                <label>Category</label>
                <input type="text" value={this.state.category} onChange={this.setCategory} className="form-control" />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="text" value={this.state.price} onChange={this.setPrice} className="form-control" />
            </div>
            <div className="form-group">
                <label>Quantity</label>
                <input type="text" value={this.state.quantity} onChange={this.setQuantity} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={this.clearFields}>Cancel</button>
        </form>
    );
  }
}






     



