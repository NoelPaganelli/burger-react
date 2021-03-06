﻿var Router      = ReactRouterDOM.BrowserRouter;
var Route       = ReactRouterDOM.Route;
var Link        = ReactRouterDOM.Link;

class Footer extends React.Component {

  constructor() {
    super();
  }

  render() {
    return( 
 
         <nav className="bar bar-tab">
          <Link className="tab-item active" to="/">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </Link>
          <Link className="tab-item" to="/shop">
            <span className="icon icon-person"></span>
            <span className="tab-label">Profile</span>
          </Link>

        </nav>
        
    );
  }
}

class Home extends React.Component {

  constructor() {
    super();
  }

  render() {
    return( 
      <div>
        
        <div className="content-padded">
          <h1>h1. toto</h1>
          <h2>h2. Heading</h2>
          <h3>h3. Heading</h3>
          <h4>h4. Heading</h4>
          <h5>h5. Heading</h5>
          <h6>h6. Heading</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco.</p>
        </div>
        
        <Footer/>
        
      </div>
    );
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {quantity : 0};
  }
  
  handleClick() {
    var newQuantity = this.state.quantity + 1;
    this.setState({
      quantity : newQuantity
    })
    console.log(newQuantity);
  }

  render() {
    
    var burgersList = [
        {image: 'https://lacapsule.academy/wks2/burger_1.png', price: '11€', name: 'Le New-yorker', desc:'Burger de boeuf limousin, cheddar, oignons rings, roquette, tomate, cornichon, sauce paprika'},
        {image: 'https://lacapsule.academy/wks2/burger_2.png', price: '12€', name: 'Le Amberger', desc:'Burger de boeuf limousin, oignons confits, salade, tomate, fourme d’Ambert et noix'},
        {image: 'https://lacapsule.academy/wks2/burger_3.png', price: '11€', name: 'Le Poulet', desc:'Burger de poulet, cheddar, avocat, tomate, oignons, sauce au citron vert'}
      ];
    
    return( 
      <div>

        <Basket  quantity={this.state.quantity}/>
        <BurgerList burgers={burgersList} onClick={this.handleClick} title="Burger Shop" />
        <Footer/>
        
      </div>
    );
  }
}

class Basket extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    return( 
      <header className="bar bar-nav">
      <h1 className="title"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> <span className="badge">{this.props.quantity}</span></h1>
      </header>
    );
  }
}


class BurgerList extends React.Component {

  constructor() {
    super();
  }

  render() {
    var burgersComponent = [];
    for(var i=0; i<this.props.burgers.length; i++) {
      burgersComponent.push(<Burger onClick={this.props.onClick}  burger={this.props.burgers[i]} />);
    }
    return( 
      <div className="content">
        <h6>{this.props.title}</h6>
        <ul className="table-view">
          {burgersComponent}
        </ul>
      </div>
    );
  }

}

class Burger extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { quantity: 0 };
  }

  handleClick() {
    
    var newQuantity = this.state.quantity + 1;
    this.setState({
      quantity: newQuantity
    });
    
    this.props.onClick();

  }

  render() {
    return( 
      <li onClick={this.handleClick} className="table-view-cell media">
        <img className="media-object pull-left" src={this.props.burger.image} />
        <div className="media-body">
        {this.props.burger.name} {this.props.burger.price}
      <p>{this.props.burger.desc}</p>
        </div>
        <span className="badge">{this.state.quantity}</span>
      </li>
    );
  }
}


   
ReactDOM.render(
 
  <Router>
    <div> 
        <Route exact path="/" component={Home}/>
        <Route path="/CbRmiAvzGeFTC45i" component={Home}/>        
        <Route path="/shop" component={App}/>
    </div>  
 </Router>
  , 
  document.getElementById('container')
);