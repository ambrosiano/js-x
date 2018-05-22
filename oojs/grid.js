/*
    The class defines a set of prototypes for regular grids.
    The origin of the grid is in the lower left of the matrix.
    The first index in the setter/getter is the column index
    (column-major order).
*/
function Grid(nx,ny){
    this.nx=nx;
    this.ny=ny;
    this.data=[];
    for(var i=0;i<this.ny;i++){
        this.data.push([]);
        for(var j=0;j<this.nx;j++){
            this.data[i].push(0.0);
        }
    }
    this.set = function(i,j,v){
        this.data[this.ny-j][i]=v;
    }
    this.get = function(i,j){
        return this.data[this.ny-j][i];
    }
}
