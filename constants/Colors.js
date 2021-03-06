class Colors {

  static get main() {
    return '#2bb081';
  }

  static get white() {
    return '#ffffff';
  }

  static get black() {
    return '#000000';
  }

  static get offWhite() {
    return '#f0f2f4';
  }

  static get offBlack() {
    return '#30404d';
  }

  static get darkGray() {
    return '#8492a6';
  }

  static get lightGray() {
    return '#e1e1e1';
  }


  static get red() {
    return '#e74c3c';
  }

  static get blue() {
    return '#3498db'
  }

  static get green() {
    return '#2ecc71';
  }

  static get none() {
    return '#00000000';
  }

  static get primaryText() {
    return this.offBlack;
  }

  static get secondaryText() {
    return this.darkGray;
  }

  static alphaColor(color, amount) {
    amount = Math.max(Math.min(amount, 1), 0)
    let amountHex = Math.round(amount * 255).toString(16);
    return color + amountHex;
  }
}

export default Colors;
