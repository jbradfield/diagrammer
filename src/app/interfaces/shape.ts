export interface Shape {

  // x/y coordinates of the geometric center of the object
  x: number;
  y: number;
  // offset of the user-defined center from the geometric center (the object resizes and rotates around this)
  xOffset?: number;
  yOffset?: number;
  // rotation of the object around the user-defined center
  // TODO: (this might require storing a complex transform if the user rotates around one centroid and then
  //   moves it; probably shouldn't expose it to the user though? questions for much later)
  rotation: number;

}
