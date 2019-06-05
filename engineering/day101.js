class DiscountCalculator extends React.Component {

  constructor() {
    super();
    this.state = {
      price: 0,
      discount1: 0,
      discount2: 0,
      total: 0,
      finalPrice: 0 };


    this.handleChange = this.handleChange.bind(this);

  }

  /* update values on change */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value },

    () => {
      this.setState({
        total: this.totalDiscount(),
        finalPrice: this.getFinalPrice() });

    });
  }

  /* calculate and return total discount */
  totalDiscount() {
    return Math.abs(((1 - this.state.discount1 / 100) * (1 - this.state.discount2 / 100) - 1) * 100).toFixed(2);
  }

  getFinalPrice() {
    return (this.state.price - this.state.price * this.totalDiscount() / 100).toFixed(2);
  }

  render() {
    return React.createElement("div", null,
    React.createElement("h2", null, "Discount Calculator"),
    React.createElement("h1", null, this.state.price, "$ - ", this.state.total, "% = ", this.state.finalPrice, "$"),
    React.createElement("label", null, "Price : \xA0\xA0\xA0\xA0\xA0\xA0",

    React.createElement("input", {
      name: "price",
      value: this.state.price,
      onChange: this.handleChange,
      type: "number",
      step: "0.05",
      min: "0" }), "$"),


    React.createElement("br", null),
    React.createElement("label", null, "Discount 1 :",

    React.createElement("input", {
      name: "discount1",
      value: this.state.discount1,
      onChange: this.handleChange,
      type: "number",
      min: "0" }), "%"),


    React.createElement("br", null),
    React.createElement("label", null, "Discount 2 :",

    React.createElement("input", {
      name: "discount2",
      value: this.state.discount2,
      onChange: this.handleChange,
      type: "number",
      min: "0" }), "%"));



  }}


ReactDOM.render(React.createElement(DiscountCalculator, null), document.getElementById('app'));