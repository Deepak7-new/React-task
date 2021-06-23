import React, { Component } from 'react';
import MobileData from './items.json';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        brandName: "",
        modelName: "",
        userName: ""
    }
}

brandClickHandler = (selectedBrand) => {
   this.setState({
       brandName: selectedBrand,
       modelName: `Select model for ${selectedBrand} brand`
   });
}

modelClickHandler = (selectedModel) => {
    this.setState({
        modelName: selectedModel
    });
}

inputChangeHandler = (event) => {
  this.setState({
    userName: event.target.value.trim()
});

}

buttonClickHandler = (event) => {
  const {brandName, modelName, userName} = this.state;

    if (!brandName || !modelName || !userName || modelName === `Select model for ${brandName} brand`) {
      alert("Please fill all fields !!");
    }
    else {
      alert("User data Submitted Successfully");
    }
    event.preventDefault();
}


  render() {
    const {brandName, modelName} = this.state;
    return (
      <div className="container">
        <h2 className="ml-3">Enter data</h2>
        <form className="form-horizontal" onSubmit={this.buttonClickHandler}>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="name">Enter Name </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={this.inputChangeHandler}/>
            </div>
          </div>
          <div className="form-group">        
            <div className="container">
              <div className="row">
                  <div className="col-sm-4 pt-2 dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {!brandName ? "Select Brand" : brandName}
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          {
                              MobileData.brands.map((brand) => (<div className="dropdown-item" key={brand} onClick={() => this.brandClickHandler(brand)}>{brand}</div>))
                          }
                      </div>
                  </div>
                  <div className="col-sm-8 dropdown pt-2">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {!brandName ? "Please select a brand" : modelName}
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          {
                            brandName ? MobileData[brandName].map((phoneName) => (<div className="dropdown-item" key={phoneName} onClick={() => this.modelClickHandler(phoneName)}>{phoneName}</div>)) : null
                          }
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default App;
