var SparqlClient = require('sparql-client');
var util = require('util');
var endpoint = 'http://highgarden.lanl.gov:7200/repositories/cbd-tgr/';
 
// Get the leaderName(s) of the given citys
// if you do not bind any city, it returns 10 random leaderNames
/*var query = 'PREFIX owl: <http://www.w3.org/2002/07/owl#>\n'+
            'PREFIX cbd: <http://www.lanl.gov/cbdtgr#>\n'+
            'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n'+
            'select * where {?action rdf:type cbd:Action .}  limit 10';
            */
var query = 'select * where {?s ?p ?o}  limit 10';

var client = new SparqlClient(endpoint);
console.log("Query to " + endpoint);
console.log("Query: " + query);
client.query(query, function (error, results) {
    if(error){
        console.log(error);
    }
    //process.stdout.write(util.inspect(arguments, null, 20, true) + "\n");
});