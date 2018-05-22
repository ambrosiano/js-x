/**
    Defines a set of prototypes for regular grids.
*/
function Grid(nx,ny){
    this.nx=nx;
    this.ny=ny;
    this.data=math.zeros(ny,nx);
}