var unirest = require("unirest");
var home = require('./hello.js');

function isEmptyObject(data) {
    return !Object.keys(data["Response"]).length;   
};

exports.apiOne = function(system,gamerTag,callback){

	var system;

	unirest.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyC0iY_V_7CCDAZdbKYso2yRjjR3yJ5QYFM')
    .type('json')
    .end(function (response) {
        
        
       //console.log(response.body)p;
       var data = response.body;
        console.log('length');
       console.log(typeof(data));
        console.log(data);

        if (isEmptyObject(data) == true) {
            callback(55);
            return false;      
        } else {
        
           gamerTag = data["Response"][0]["displayName"];
           membershipId = data["Response"][0]["membershipId"];
           systemType = data["Response"][0]["membershipType"];

           if(systemType = 2){
            system = 'TigerPSN';
           }else if(systemType = 1){
            system = "TigerXbox";
           }
           console.log(systemType);
           console.log(system);
           console.log(membershipId);
        }


       	unirest.get('http://www.bungie.net/Platform/Destiny/'+system+'/Account/'+membershipId+'')
		.type('json')
		.end(function (response) {
			console.log('data2');
			console.log(response.body);

       		var data2 = response.body;
			//var characters = data2['Response']['data']['characters'];
	 //    characterTwo = data['Response']['data']['characters'][1];
	 //    characterThree = data['Response']['data']['characters'][2];
			callback(data2['Response']);

		});

     });
    console.log('hello');
 
    
};
exports.friend = function(system,gamerTag,callback){

  var system;

  unirest.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyC0iY_V_7CCDAZdbKYso2yRjjR3yJ5QYFM')
    .type('json')
    .end(function (response) {
        
        
       //console.log(response.body)p;
       var data = response.body;
        console.log('length');
       console.log(typeof(data));
        console.log(data);

        if (isEmptyObject(data) == true) {
            callback(55);
            return false;      
        } else {
        
           gamerTag = data["Response"][0]["displayName"];
           membershipId = data["Response"][0]["membershipId"];
           systemType = data["Response"][0]["membershipType"];

           if(systemType = 2){
            system = 'TigerPSN';
           }else if(systemType = 1){
            system = "TigerXbox";
           }
           console.log(systemType);
           console.log(system);
           console.log(membershipId);
        }


        unirest.get('http://www.bungie.net/Platform/Destiny/'+system+'/Account/'+membershipId+'')
    .type('json')
    .end(function (response) {
     console.log('++++++++++++data2+++++++++++');
     console.log(response.body);

          var data2 = response.body;
  // var characters = data2['Response']['data']['characters'];
  //    characterTwo = data['Response']['data']['characters'][1];
  //    characterThree = data['Response']['data']['characters'][2];
      callback(data2['Response']);

    });

     });
    console.log('hello');
 
    
};


exports.getNearByLocations = function(lat,lon,callback){


    // http://www.bungie.net/Platform/Destiny/2/Account/4611686018428490430/Character/2305843009286077889/?definitions=true
    unirest.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyC0iY_V_7CCDAZdbKYso2yRjjR3yJ5QYFM')
    .end(function (res) {
        
        var temp = res.body;
        callback(temp)
        
    });
};

exports.apiTwo = function(type,id,callback){

	//    /Manifest/{type}/{id}/

    unirest.get('http://www.bungie.net/Platform/Destiny/'+type+'/'+id+'')
    .end(function (res) {
        
        var temp = res.body;
        callback(temp)
        
    });

};




