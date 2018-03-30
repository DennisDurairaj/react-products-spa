class ProductList extends React.Component {
  handleProductUpVote(productId) {
    console.log(productId + ' was upvoted.');
  }
  render() {
    const products = Data.sort((a, b) => (
      b.votes - a.votes
    ));
    const productComponents = Data.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitter_avatar_url}
        productImageUrl={product.product_image_url}
        onVote={this.handleProductUpVote}
      />
    ))
    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>
    );
  }
}

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className='item'>
        <div className="image">
          <img src={this.props.productImageUrl} alt="" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon"></i>
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img src={this.props.submitterAvatarUrl} alt="" className="ui avatar image" />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);