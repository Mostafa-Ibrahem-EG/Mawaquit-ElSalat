let cities = [];
axios.get('https://countriesnow.space/api/v0.1/countries')
.then(function (response) {
    const countries = response.data.data;
    const egypt = countries.find(country => country.country === "Egypt");
    if (egypt) {
        cities = egypt.cities;
        // console.log(cities);
        for (city of cities) {
            const content = `<option value="${city}">${city}</option>`;
            document.getElementById('city-select').innerHTML += content;
        }
    } else {
        console.error("Egypt not found in the countries list.");
    }
})
.catch(function (error) {
    console.error(error);
});
document.getElementById('city-select').addEventListener('change', function() {
    const selectedCity = this.value;
    let params = {
        country: "EG",
        city: selectedCity
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
    })
    .then(function (response) {        
        const timings = response.data.data.timings;
        const gregorianDate = response.data.data.date.gregorian.date;
        const hijriDate = response.data.data.date.hijri.date;
        document.getElementById('current-date-gregorian').textContent = gregorianDate;
        document.getElementById('current-date-hijri').textContent = hijriDate;
        setPrayerTimes('fajr-time', timings.Fajr);
        setPrayerTimes('shuruq-time', timings.Sunrise);
        setPrayerTimes('dhuhr-time', timings.Dhuhr);
        setPrayerTimes('asr-time', timings.Asr);
        setPrayerTimes('maghrib-time', timings.Maghrib);
        setPrayerTimes('isha-time', timings.Isha);
        console.log(response.data.data);
    })
    .catch(function (error) {
        console.error(error);
    });
});
function setPrayerTimes(id, time) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = time;
    }
}