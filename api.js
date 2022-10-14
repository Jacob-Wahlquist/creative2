document.getElementById("classsubmit").addEventListener("click", function(event) {
      event.preventDefault();
      const value = document.getElementById("selector").value;
      if (value === "")
        return;
      console.log(value);
      const url = "https://api.open5e.com/classes/?format=json";
      
      const indexValue = value;
  fetch(url)
    .then(function(response) {
        console.log(response);
      return response.json();
    }).then(function(json) {
      console.log(json.results[indexValue])
      let results = "";
      results += '<h2>Class: ' + json.results[indexValue].name + "</h2>";
      results += '<h2> Hit Dice: ' + json.results[indexValue].hit_dice + "</h2>";
      results += "<h4>" + json.results[indexValue].equipment;
      results += "</h4>";
      results += "<p style = 'font-size:small !important; text-align:left !important;'><strong>Class Description:</strong> ";
      results += json.results[indexValue].desc + "</p";
	  
      document.getElementById("classresults").innerHTML = results;
    });
    });




/* fetch(url)
    .then(function(response) {
      return response.json().results[index];
    }).then(function(json) {
      
      let results = "";
      results += '<h2>Class: ' + json.name + "</h2>";
      results += '<h2> Hit Dice: ' + json.hit_dice + "</h2>"
      results += "<p>"
      results += json.desc 
	  results += json.equipment
     
      results += "</p>";
      document.getElementById("classresults").innerHTML = results;
    });
    */