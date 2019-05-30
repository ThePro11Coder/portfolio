class GradientMaker {
  constructor() {
    this.start = document.querySelector("#start");
    this.end = document.querySelector("#end");
    this.gradientChoices = document.querySelectorAll("input[name=gradient]")
    this.startColor = start.value;
    this.endColor = end.value;
    
    this.gradientType = 'linear';

    this.watchColorChange = this.watchColorChange.bind(this);
    this.setBodyStyle = this.setBodyStyle.bind(this);
    this.watchGradientChange = this.watchGradientChange.bind(this);
  }
  
  setBodyStyle() {
    document.body.style.background = `${this.gradientType}-gradient(${this.startColor}, ${this.endColor})`;
  }

  watchColorChange(type) {
    if (type === "start") {
      this.startColor = start.value;
    } else {
      this.endColor = end.value;
    }
    
    this.setBodyStyle();
  }
  
  watchGradientChange(ev) {
    this.gradientType = ev.target.value;
    this.setBodyStyle();
  }

  init() {
    this.start.addEventListener("change", () => this.watchColorChange("start"));
    this.end.addEventListener("change", () => this.watchColorChange("end"));
    this.gradientChoices.forEach(choice => {
      choice.addEventListener('change', this.watchGradientChange);
    })
    this.setBodyStyle();
  }
}


const initialize = () => {
  const gMaker = new GradientMaker();
  gMaker.init();
};

window.addEventListener("load", initialize);
