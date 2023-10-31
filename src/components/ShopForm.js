import React, { Component } from 'react';

export default class AddShop extends Component{

    constructor(props) {
        super(props);

        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setLogo = this.setLogo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearFields = this.clearFields.bind(this);

        this.state = {
          name: '',
          description: '',
          logo: null  
        };
    }

    setName(e){
        this.setState({
            name: e.target.value
        });
    }

    setDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    setLogo(e) {
        this.setState({
            logo: e.target.files[0]
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(this.state.name);
        console.log(this.state.description);
        console.log(this.state.logo);

        this.clearFields();
    }

    clearFields() {
        this.setState({
            name: '',
            description: '',
            logo: null
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>New Shop</h2>
                <div className="form-group">
                    <label htmlFor="logo-upload" className="btn btn-success" style={{cursor: 'pointer'}}>UPLOAD LOGO</label>
                    <input 
                        type="file" 
                        id="logo-upload" 
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={this.clearFields}>Cancel</button>
            </form>
        );
    }
}