//class with all of the color box info
class Ball{
  
    constructor(x, y, diameter,color) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
  }

    //make the color boxes appear on canvas
    appear()
    {
      fill(this.color);
      circle(this.x, this.y, this.diameter);
    }
}