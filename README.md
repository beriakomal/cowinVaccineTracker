# cowinVaccineTracker
This is a simple application to track availability of vaccine in PCMC district. It will show the vaccines that are available for booking slots at particular centers.
This app is created using the Open API available on Cowin App.</br></br>
***File structure:***
- The Java script file is placed in cowinVaccineTracker/js folder.
- The HTML file is placed in cowinVaccineTracker/html folder.
### How it works?
1. It reads the data from the [Cowin Open API](https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict).
2. The query parameter passed to the API is the district code and the date of booking the appointment.
3. An if condition is implemented to filter only centers location in PCMC or nearby locations.
4. The tracker will highlight the data on the html page when any center is available for booking and has capacity greater than 0.
