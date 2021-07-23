
console.log('loaded')



setInterval(() => {
    var axios = require('axios');
    var FormData = require('form-data');
    var fs = require('fs');
    var data = new FormData();
    var Cookie = "XSRF-TOKEN=eyJpdiI6IjlBVVFsdmdpWjRka0FvWHg2b2wyYUE9PSIsInZhbHVlIjoic1V2OXh3WTJvZ2xWOWRsTFR2UExPRVRTTFlwalN1QkZFcDNiQUdwVXY5S0VuUVd3TWJIVThIZmNIZE9NTXBlViIsIm1hYyI6ImFhNTQ5MjQzZjZjZDQxMTc4MjBjZTVkMGQ2Y2ZjZDk5MTE0N2I3NzU1M2RkYmFjYjY1NTRkYWQwZTU1Y2IyYmYifQ%3D%3D; kotdev_session=eyJpdiI6IkFpeVlROFVBdkVNMWg4YzlOaUxqQVE9PSIsInZhbHVlIjoieEQ3XC9rXC9hZ1JFK1g3OGlmaEN5QTVrMTRNTzhlTGxCQlZFd2ZsalcrZ2tLeWRkUVlOSlNUcVB2T09WR1RcL1ZMQSIsIm1hYyI6IjJjNDgwNWE2OGNhYWQ5YTE0NDNjOTBiZTZlZWRlN2RjM2ZjMmZmMGZmNTllMTk1M2E1ZDUzNzVjMTQyNTExZjUifQ%3D%3D";
    data.append('code', fs.createReadStream('0.jpg'));
    
    var config = {
        method: 'post',
        url: 'https://chekback.ru/upload',
        headers: { 
          'Cookie': Cookie, 
          ...data.getHeaders()
        },
        data : data
      };

      axios(config)
     .then(function (response) {
       console.log(JSON.stringify(response.data));
     })
     .catch(function (error){
       console.log(error.response.status)
     })
},30)