$(document).ready(function() {
	var date = new Date();

    $.ajax({
        url: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=363&date="+date.yyyymmdd()
    }).then(function(data) {
		
		data_present_1 = 0;
        
		for (i = 0; data.centers != undefined && i < data.centers.length; i++) {
			for (j = 0; j < data.centers[i].sessions.length; j++) {
				
				if(
				data.centers[i].pincode != (413102) &&
				data.centers[i].pincode != (412206) && 
				data.centers[i].pincode != (413102) && 
				data.centers[i].pincode != (412303) && 
				data.centers[i].pincode != (413114) && 
				data.centers[i].pincode != (412201) && 
				data.centers[i].pincode != (412409) && 
                data.centers[i].pincode != (413114) && 
                data.centers[i].pincode != (410405) && 
                data.centers[i].pincode != (410505) && 
                data.centers[i].pincode != (412212) && 
                data.centers[i].pincode != (412301) && 
                data.centers[i].pincode != (413801) && 
                data.centers[i].pincode != (412208) && 
                data.centers[i].pincode != (412202) && 
                data.centers[i].pincode != (410504) && 
                data.centers[i].pincode != (412215))
				{
					if(data.centers[i].sessions[j].min_age_limit == 18 && data.centers[i].sessions[j].available_capacity >= 0)
					{
						highlight_row_str = "";

						if(data.centers[i].sessions[j].available_capacity > 0)
						{
							highlight_row_str = "style=\"background-color:yellow\"";
						}
						else
						{
							highlight_row_str = "";
						}

						$('#district_today').append("<tr"+" "+highlight_row_str+"><td>"+data.centers[i].pincode+"</td><td>"+data.centers[i].name+"</td><td>"+data.centers[i].address+"</td><td>"+data.centers[i].block_name+"</td><td>"+data.centers[i].sessions[j].min_age_limit+"</td><td>"+data.centers[i].sessions[j].date+"</td><td>"+data.centers[i].sessions[j].available_capacity+"</td></tr>");
						data_present_1 = 1;
						

					}
				}
			}
        }
		
		if(data_present_1 == 0)
		{
			$('#district_today').append("<tr><td colspan=\"7\">VACCINE NOT AVAILABLE FOR PUNE DISTRICT</td></tr>");
		}
		
    });
});

$(document).ready(function() {
	var date = new Date();
//	date.setDate(date.getDate() + 1);	
	
    $.ajax({
        url: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=411027&date="+date.yyyymmdd()
    }).then(function(data) {
		
		data_present_2 = 0;
        
		for (i = 0; i < data.centers.length; i++) {
			for (j = 0; j < data.centers[i].sessions.length; j++) {
				
				if(data.centers[i].sessions[j].min_age_limit == 18 && data.centers[i].sessions[j].available_capacity >= 0)
				{
					highlight_row_str = "";

					if(data.centers[i].sessions[j].available_capacity > 0)
					{
						highlight_row_str = "style=\"background-color:yellow\"";
					}
					else
					{
						highlight_row_str = "";
					}

					$('#pin_today').append("<tr"+" "+highlight_row_str+"><td>"+data.centers[i].pincode+"</td><td>"+data.centers[i].name+"</td><td>"+data.centers[i].address+"</td><td>"+data.centers[i].block_name+"</td><td>"+data.centers[i].sessions[j].min_age_limit+"</td><td>"+data.centers[i].sessions[j].date+"</td><td>"+data.centers[i].sessions[j].available_capacity+"</td></tr>");
					data_present_2 = 1;
					
				}
			}
        }
		
		if(data_present_2 == 0)
		{
			$('#pin_today').append("<tr><td colspan=\"7\">VACCINE NOT AVAILABLE FOR 411027</td></tr>");
		}
    });
});

$(document).ready(function() {

	var date = new Date();
	date.setDate(date.getDate() + 1);
	
    $.ajax({
        url: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=363&date="+date.yyyymmdd()
    }).then(function(data) {
		
		data_present_1 = 0;
        
		for (i = 0; data.centers != undefined && i < data.centers.length; i++) {
			for (j = 0; j < data.centers[i].sessions.length; j++) {
				
				if(
				data.centers[i].pincode != (413102) &&
				data.centers[i].pincode != (412206) && 
				data.centers[i].pincode != (413102) && 
				data.centers[i].pincode != (412303) && 
				data.centers[i].pincode != (413114) && 
				data.centers[i].pincode != (412201) && 
				data.centers[i].pincode != (412409) && 
                data.centers[i].pincode != (413114) && 
                data.centers[i].pincode != (410405) && 
                data.centers[i].pincode != (410505) && 
                data.centers[i].pincode != (412212) && 
                data.centers[i].pincode != (412301) && 
                data.centers[i].pincode != (413801) && 
                data.centers[i].pincode != (412208) && 
                data.centers[i].pincode != (412202) && 
                data.centers[i].pincode != (410504) && 
                data.centers[i].pincode != (412215))
				{
					if(data.centers[i].sessions[j].min_age_limit == 18 && data.centers[i].sessions[j].available_capacity >= 0)
					{
						highlight_row_str = "";

						if(data.centers[i].sessions[j].available_capacity > 0)
						{
							highlight_row_str = "style=\"background-color:yellow\"";
						}
						else
						{
							highlight_row_str = "";
						}

						$('#district_tomorrow').append("<tr"+" "+highlight_row_str+"><td>"+data.centers[i].pincode+"</td><td>"+data.centers[i].name+"</td><td>"+data.centers[i].address+"</td><td>"+data.centers[i].block_name+"</td><td>"+data.centers[i].sessions[j].min_age_limit+"</td><td>"+data.centers[i].sessions[j].date+"</td><td>"+data.centers[i].sessions[j].available_capacity+"</td></tr>");
						data_present_1 = 1;
						

					}
				}
			}
        }
		
		if(data_present_1 == 0)
		{
			$('#district_tomorrow').append("<tr><td colspan=\"7\">VACCINE NOT AVAILABLE FOR PUNE DISTRICT</td></tr>");
		}
		
    });
});

$(document).ready(function() {
	
	var date = new Date();
	date.setDate(date.getDate() + 1);
	
    $.ajax({
        url: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=411027&date="+date.yyyymmdd()
    }).then(function(data) {
		
		data_present_2 = 0;
        
		for (i = 0; i < data.centers.length; i++) {
			for (j = 0; j < data.centers[i].sessions.length; j++) {
				
				if(data.centers[i].sessions[j].min_age_limit == 18 && data.centers[i].sessions[j].available_capacity >= 0)
				{
					highlight_row_str = "";

					if(data.centers[i].sessions[j].available_capacity > 0)
					{
						highlight_row_str = "style=\"background-color:yellow\"";
					}
					else
					{
						highlight_row_str = "";
					}

					$('#pin_tomorrow').append("<tr"+" "+highlight_row_str+"><td>"+data.centers[i].pincode+"</td><td>"+data.centers[i].name+"</td><td>"+data.centers[i].address+"</td><td>"+data.centers[i].block_name+"</td><td>"+data.centers[i].sessions[j].min_age_limit+"</td><td>"+data.centers[i].sessions[j].date+"</td><td>"+data.centers[i].sessions[j].available_capacity+"</td></tr>");
					data_present_2 = 1;
					
				}
			}
        }
		
		if(data_present_2 == 0)
		{
			$('#pin_tomorrow').append("<tr><td colspan=\"7\">VACCINE NOT AVAILABLE FOR 411027</td></tr>");
		}
    });
});

Date.prototype.yyyymmdd = function() {
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = this.getDate().toString();
  //return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]); // padding
  return  (dd[1]?dd:"0"+dd[0]) + "-" + (mm[1]?mm:"0"+mm[0]) + "-" + yyyy; // padding

};