var http = require('http');

var endpoint = 'http://128.165.143.37:7200/repositories/cbd-tgr';

var query = 'PREFIX owl: <http://www.w3.org/2002/07/owl#>\n'+
            'PREFIX cbd: <http://www.lanl.gov/cbdtgr#>\n'+
            'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n'+
            'select * where {?action rdf:type cbd:Action .}  limit 10';

var query_enc = encodeURIComponent(query);





