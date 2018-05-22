/**
    Defines a set of prototypes for a regular grid.
*/
function Grid(nx,ny){
    this.nx=nx;
    this.ny=ny;
    this.data= [];
    for(var i=0;i<this.ny;i++){
        this.data.push([]);
        for(var j=0;j<this.nx;j++){
            this.data[i].push(0);
        }
    }
}