
async function  fun1() {
    var ele1 = document.getElementsByClassName("ip3")[0];
    if (ele1.value === "yes") {
        var temp = document.getElementsByClassName("i1")[0];
        var temp2 = document.getElementsByClassName("i2")[0];
        var temp3 = document.getElementsByClassName("select")[0];
        temp3.value = "";
        temp3.disabled = true;
        temp2.style.background = '#faffff';
        temp.value = "";
        temp2.value = "";
        temp2.disabled = true;
        temp.disabled = true;
        ele1.value = "no";



        }
    else {
        var temp = document.getElementsByClassName("i1")[0];
        var temp2 = document.getElementsByClassName("i2")[0];
        var temp3 = document.getElementsByClassName("select")[0];
        temp3.disabled = false;
        temp2.disabled = false;
        temp.disabled = false;
        temp2.style.background = '#ffffff';
        ele1.value = "yes";
        }
    }
    
    function fun3() {
        var ele1 = document.getElementsByClassName("ip3")[0];
        var temp = document.getElementsByClassName("i1")[0];
        var temp2 = document.getElementsByClassName("i2")[0];
        var temp3 = document.getElementsByClassName("select")[0];
        ele1.value = "yes";
        temp.value = "";
        temp2.value = "";
        temp3.value = "";
        temp3.disabled = false;
        temp2.disabled = false;
        temp.disabled = false;
        temp2.style.background = '#ffffff';
        ele1.checked = false;
        var detailTitle = document.getElementById("detailTitle");
        var detail = document.getElementById("detail");
        var detailTail = document.getElementById("detailTail");
        var arrow = document.getElementById("arrow");
        var error = document.getElementById("record");
        error.style.display="none";
        arrow.style.display="none";
        detailTitle.style.display = "none";
        detail.style.display ="none";
        detailTail.style.display ="none";
        var card = document.getElementById("card");
            var table = document.getElementById("fifteen");
            card.style.display = "none";
            table.style.display="none";
            var img = document.getElementsByClassName("downUp")[0];

            var chart1 = document.getElementById("chart1");
                var chart2 = document.getElementById("chart2");
                chart1.style.display = "none";
                chart2.style.display = "none";
            if (img.alt === "0") {
                 img.src = "../../static/img/point-down-512.png";
                img.alt ="1";
            }
    }

 var alldata;

  async function fun2() {
       // var ele1 = document.getElementsByClassName("ip3")[0];
        var temp1 = document.getElementsByClassName("i1")[0];
        var temp2 = document.getElementsByClassName("i2")[0];
        var temp3 = document.getElementsByClassName("select")[0];
      var temp = document.getElementsByClassName("ip3")[0];
      if(temp1.value===""|| temp2.value===""||temp3.value===""){
          if(temp.checked === false) {
              return;
          }
      }
      data = $('#form1').serialize()+"&flag="+"false";
      if (temp.value === "no"){
          const request =  await fetch("https://ipinfo.io/json?token=a0cca1bb9680cf");
          const json =  await request.json();
          data = "street="+json.loc+"&city="+json.city+"&selectstate="+json.region+"&flag="+"true";
      }
      $.ajax({
          type: "GET",
          dataType:"json",
          url:"sendData",
          data: data,
          success:function (res) {
              console.log(data);
              alldata = res;
              console.log(alldata);
              var location = document.getElementsByClassName("d1p1")[0];
              location.innerHTML = alldata["address"];
              var img = document.getElementsByClassName("d9m1")[0];
              var weatherCode = alldata['msg']['data']['timelines'][0]['intervals'][0]['values']['weatherCode'];
              var currentTime = alldata['msg']['data']['timelines'][0]['intervals'][0]['startTime'];
              var hum = alldata['msg']['data']['timelines'][0]['intervals'][0]['values']['humidity'];
              var press = alldata['msg']['data']['timelines'][0]['intervals'][0]['values']['pressureSeaLevel'];
              var temperature = alldata['msg']['data']['timelines'][0]['intervals'][0]['values']['temperature'];
              var wind = alldata['msg']['data']['timelines'][0]['intervals'][0]['values']['windSpeed'];
              var visibility = alldata['msg']['data']['timelines'][0]['intervals'][0]['values']['visibility'];
              var cloudCover = alldata['msg']['data']['timelines'][0]['intervals'][0]['values']['cloudCover'];
              var uvIndex = alldata['msg']['data']['timelines'][0]['intervals'][0]['values']['uvIndex'];
              var day = 1;
              var hum_box = document.getElementsByClassName("d61")[0];
              hum_box.innerHTML = hum+"%";
              var temperature_box = document.getElementsByClassName("d9s3")[0];
              // var tempInt = (temperature - 32) * 5 / 9 ;
              // var fix_num = parseFloat(tempInt);
              // fix_num = fix_num.toFixed(1);
              var tempString = temperature + "°";
              temperature_box.innerHTML = tempString  ;
              currentTime = currentTime.substring(11, 13);
              var time = parseInt(currentTime);
              var weatherStatus = document.getElementsByClassName("d3p1")[0];
              var press_box = document.getElementsByClassName("d62")[0];
              press_box.innerHTML = press+"inHg";
              var wind_box = document.getElementsByClassName("d63")[0];
              wind_box.innerHTML = wind+"mph";
              var visibility_box = document.getElementsByClassName("d64")[0];
              visibility_box.innerHTML = visibility+"mi";
              var cloud_box = document.getElementsByClassName("d65")[0];
              cloud_box.innerHTML = cloudCover + "%";
              var ux_box = document.getElementsByClassName("d66")[0];
              ux_box.innerHTML = uvIndex;
              if (time > 18 || time < 6) {
                  day = 0;
              }
              fun5(weatherCode, day,"d9m1", "d3p1");
              fun6();
              // if (weatherCode === 1000) {
              //     if (day === 1) {
              //         img.src = "../../static/img/clear_day.svg";
              //     }
              //     else {
              //         img.src = "../../static/img/clear_night.svg";
              //     }
              //     weatherStatus.innerHTML='Clear';
              // }
              // else if (weatherCode === 1100) {
              //     if (day === 1) {
              //         img.src = "../../static/img/mostly_clear_day.svg";
              //     }
              //     else{
              //         img.src = "../../static/img/mostly_clear_night.svg";
              //     }
              //     weatherStatus.innerHTML='Mostly Clear';
              // }
              // else if (weatherCode === 1101) {
              //     if (day === 1) {
              //         img.src = "../../static/img/partly_cloudy_day.svg";
              //     }
              //     else{
              //         img.src = "../../static/img/partly_cloudy_night.svg";
              //     }
              //     weatherStatus.innerHTML='Partly Clear';
              // }
              // else if (weatherCode === 1101) {
              //
              //         img.src = "../../static/img/mostly_cloudy.svg";
              //         weatherStatus.innerHTML='Mostly Cloudy';
              // }
              // else if (weatherCode === 1001) {
              //
              //         img.src = "../../static/img/cloudy.svg";
              //         weatherStatus.innerHTML=' Cloudy';
              // }
              //  else if (weatherCode === 2000) {
              //
              //         img.src = "../../static/img/fog.svg";
              //           weatherStatus.innerHTML='Fog';
              // }
              //  else if (weatherCode === 2100) {
              //
              //         img.src = "../../static/img/fog_light.svg";
              //       weatherStatus.innerHTML='Light Fog';
              // }
              //   else if (weatherCode === 8000) {
              //
              //         img.src = "../../static/img/tstorm.svg";
              //         weatherStatus.innerHTML='ThunderStorm';
              //
              // }
              //    else if (weatherCode === 5001) {
              //
              //         img.src = "../../static/img/flurries.svg";
              //           weatherStatus.innerHTML='Flurries';
              // }
              //    else if (weatherCode === 5100) {
              //
              //         img.src = "../../static/img/snow_light.svg";
              //         weatherStatus.innerHTML='Light Snow';
              //
              // }
              //      else if (weatherCode === 5000) {
              //
              //         img.src = "../../static/img/snow.svg";
              //         weatherStatus.innerHTML='Snow';
              //
              // }
              //      else if (weatherCode === 5101) {
              //
              //         img.src = "../../static/img/rain_heavy.svg";
              //         weatherStatus.innerHTML='Heavy Snow';
              //
              // }
              //      else if (weatherCode === 7102) {
              //
              //         img.src = "../../static/img/ice_pellets_light.svg";
              //         weatherStatus.innerHTML='Light Ice Pellets';
              //
              // }
              //       else if (weatherCode === 7000) {
              //
              //         img.src = "../../static/img/ice_pellets.svg";
              //         weatherStatus.innerHTML='Ice Pellets';
              //
              // }
              //      else if (weatherCode === 7101) {
              //
              //         img.src = "../../static/img/ice_pellets_heavy.svg";
              //         weatherStatus.innerHTML='Heavy Ice Pellets';
              //
              // }
              //      else if (weatherCode === 4000) {
              //
              //         img.src = "../../static/img/drizzle.svg";
              //         weatherStatus.innerHTML='Drizzle';
              //
              // }
              //      else if (weatherCode === 6000) {
              //
              //         img.src = "../../static/img/freezing_drizzle.svg";
              //         weatherStatus.innerHTML='Freezing Drizzle';
              //
              // }
              //      else if (weatherCode === 6200) {
              //
              //         img.src = "../../static/img/freezing_rain_light.svg";
              //         weatherStatus.innerHTML='Light Freezing Rain';
              //
              // }
              //      else if (weatherCode === 6001) {
              //
              //         img.src = "../../static/img/freezing_rain.svg";
              //         weatherStatus.innerHTML='Freezing Rain';
              //
              // }
              //      else if (weatherCode === 6201) {
              //
              //         img.src = "../../static/img/freezing_rain_heavy.svg";
              //         weatherStatus.innerHTML='Heavy Freezing Rain';
              //
              // }
              //      else if (weatherCode === 4200) {
              //
              //         img.src = "../../static/img/rain_light.svg";
              //         weatherStatus.innerHTML='Light Rain';
              //
              // }
              //      else if (weatherCode === 4001) {
              //
              //         img.src = "../../static/img/rain.svg";
              //          weatherStatus.innerHTML='Rain';
              //
              // }
              //      else if (weatherCode === 4201) {
              //
              //         img.src = "../../static/img/rain_heavy.svg";
              //          weatherStatus.innerHTML='Heavy Rain';
              //
              // }

            var card = document.getElementById("card");
            var table = document.getElementById("fifteen");
            card.style.display = "block";
            table.style.display="block";




          },
          error:function () {
              console.log(data);
              //alert("error: The entered address is incorrect. Please enter it again");
              var error  = document.getElementById("record");
              error.style.display = "block";

          }
      });
  }

    function fun4(str) {
        var weekday = str.substring(0, 10);
        var str_year = str.substring(0,4);
        var str_date = str.substring(8, 10);
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
        var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var date = new Date(Date.parse(weekday.replace(/-/g, "/")));
        var day = week[date.getDay()];
        var whichmonth =month[date.getMonth()];
        var weekDay_data_month_year = day+","+str_date+" "+whichmonth+" "+str_year;
        return weekDay_data_month_year;
    }
    function fun5(weatherCode, day, className, Status) {
      var img = document.getElementsByClassName(className)[0];
      var weatherStatus = document.getElementsByClassName(Status)[0];
      if (weatherCode === 1000) {

                  if (day === 1) {
                      img.src = "../../static/img/clear_day.svg";
                  }
                  else {
                      img.src = "../../static/img/clear_night.svg";
                  }
                  weatherStatus.innerHTML='Clear';
              }
              else if (weatherCode === 1100) {
                  if (day === 1) {
                      img.src = "../../static/img/mostly_clear_day.svg";
                  }
                  else{
                      img.src = "../../static/img/mostly_clear_night.svg";
                  }
                  weatherStatus.innerHTML='Mostly Clear';
              }
              else if (weatherCode === 1101) {
                  if (day === 1) {
                      img.src = "../../static/img/partly_cloudy_day.svg";
                  }
                  else{
                      img.src = "../../static/img/partly_cloudy_night.svg";
                  }
                  weatherStatus.innerHTML='Partly Clear';
              }
              else if (weatherCode === 1101) {

                      img.src = "../../static/img/mostly_cloudy.svg";
                      weatherStatus.innerHTML='Mostly Cloudy';
              }
              else if (weatherCode === 1001) {

                      img.src = "../../static/img/cloudy.svg";
                      weatherStatus.innerHTML=' Cloudy';
              }
               else if (weatherCode === 2000) {

                      img.src = "../../static/img/fog.svg";
                        weatherStatus.innerHTML='Fog';
              }
               else if (weatherCode === 2100) {

                      img.src = "../../static/img/fog_light.svg";
                    weatherStatus.innerHTML='Light Fog';
              }
                else if (weatherCode === 8000) {

                      img.src = "../../static/img/tstorm.svg";
                      weatherStatus.innerHTML='ThunderStorm';

              }
                 else if (weatherCode === 5001) {

                      img.src = "../../static/img/flurries.svg";
                        weatherStatus.innerHTML='Flurries';
              }
                 else if (weatherCode === 5100) {

                      img.src = "../../static/img/snow_light.svg";
                      weatherStatus.innerHTML='Light Snow';

              }
                   else if (weatherCode === 5000) {

                      img.src = "../../static/img/snow.svg";
                      weatherStatus.innerHTML='Snow';

              }
                   else if (weatherCode === 5101) {

                      img.src = "../../static/img/rain_heavy.svg";
                      weatherStatus.innerHTML='Heavy Snow';

              }
                   else if (weatherCode === 7102) {

                      img.src = "../../static/img/ice_pellets_light.svg";
                      weatherStatus.innerHTML='Light Ice Pellets';

              }
                    else if (weatherCode === 7000) {

                      img.src = "../../static/img/ice_pellets.svg";
                      weatherStatus.innerHTML='Ice Pellets';

              }
                   else if (weatherCode === 7101) {

                      img.src = "../../static/img/ice_pellets_heavy.svg";
                      weatherStatus.innerHTML='Heavy Ice Pellets';

              }
                   else if (weatherCode === 4000) {

                      img.src = "../../static/img/drizzle.svg";
                      weatherStatus.innerHTML='Drizzle';

              }
                   else if (weatherCode === 6000) {

                      img.src = "../../static/img/freezing_drizzle.svg";
                      weatherStatus.innerHTML='Freezing Drizzle';

              }
                   else if (weatherCode === 6200) {

                      img.src = "../../static/img/freezing_rain_light.svg";
                      weatherStatus.innerHTML='Light Freezing Rain';

              }
                   else if (weatherCode === 6001) {

                      img.src = "../../static/img/freezing_rain.svg";
                      weatherStatus.innerHTML='Freezing Rain';

              }
                   else if (weatherCode === 6201) {

                      img.src = "../../static/img/freezing_rain_heavy.svg";
                      weatherStatus.innerHTML='Heavy Freezing Rain';

              }
                   else if (weatherCode === 4200) {

                      img.src = "../../static/img/rain_light.svg";
                      weatherStatus.innerHTML='Light Rain';

              }
                   else if (weatherCode === 4001) {

                      img.src = "../../static/img/rain.svg";
                       weatherStatus.innerHTML='Rain';

              }
                   else if (weatherCode === 4201) {

                      img.src = "../../static/img/rain_heavy.svg";
                       weatherStatus.innerHTML='Heavy Rain';

              }   else if (weatherCode === 3000) {
                       img.src = "../../static/img/light_wind.svg";
                       weatherStatus.innerHTML='Light Wind';

      }
                         else if (weatherCode === 3001) {
                       img.src = "../../static/img/wind.svg";
                       weatherStatus.innerHTML='Wind';

      }
                         else if (weatherCode === 3002) {
                       img.src = "../../static/img/strong_wind.svg";
                       weatherStatus.innerHTML='Strong Wind';

      }


    }
    function  fun6() {
      for (var i = 0; i < 15; ++i) {
          var currentTime = alldata['msg']['data']['timelines'][2]['intervals'][i]['startTime'];
          var weatherCode = alldata['msg']['data']['timelines'][2]['intervals'][i]['values']['weatherCode'];
          var tempHigh = alldata['msg']['data']['timelines'][2]['intervals'][i]['values']['temperatureMax'];
          // var tempHigh1 = (tempHigh - 32) * 5 / 9 ;
          //     var fix_num1 = parseFloat(tempHigh1);
          //     fix_num1 = fix_num1.toFixed(1);
          //     tempHigh = fix_num1;
          var tempLow = alldata['msg']['data']['timelines'][2]['intervals'][i]['values']['temperatureMin'];
          // var tempLow1 = (tempLow - 32) * 5 / 9 ;
          //     var fix_num2 = parseFloat(tempLow1);
          //     fix_num2 = fix_num2.toFixed(1);
          //     tempLow = fix_num2;
          var windSpeed = alldata['msg']['data']['timelines'][2]['intervals'][i]['values']['windSpeed'];
          var date = fun4(currentTime);
          var count = i + 1;
          var dn1 = "d" + count +"1";
          var dn2 = "d" + count +"2";
          var dn3 = "d" + count +"3";
          var dn4 = "d" + count +"4";
          var dn5 = "d" + count +"5";
          var sn = "s"+ count;
          var mn = "m" +count;
          fun5(weatherCode,1, mn, sn );
          var select1 = document.getElementById(dn1);
          select1.innerHTML = date;
          var select3 = document.getElementById(dn3);
          select3.innerHTML = tempHigh;
          var select4 = document.getElementById(dn4);
          select4.innerHTML = tempLow;
           var select5 = document.getElementById(dn5);
          select5.innerHTML = windSpeed;
      }

    }
    function fun7(obj) {

        var id = obj.id;
        var num = id.substring(3);
        var index = num - 1;
        var weatherCode = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['weatherCode'];
        var tempHigh = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['temperatureMax'];
        var tempLow = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['temperatureMin'];
        var windSpeed = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['windSpeed'];
        var precipitationType = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['precipitationType'];
        var precipitationProbability= alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['precipitationProbability'];
        var visibility = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['visibility'];
        var hum = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['humidity'];
        var currentTime = alldata['msg']['data']['timelines'][2]['intervals'][index]['startTime'];
        var sunriseTime = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['sunriseTime'];
        var sunsetTime = alldata['msg']['data']['timelines'][2]['intervals'][index]['values']['sunsetTime'];
        var sunTime = fun8(sunriseTime,sunsetTime);
        var date = fun4(currentTime);
        var currentDate = document.getElementsByClassName("dap1")[0];
        currentDate.innerHTML=date;
        fun5(weatherCode,1,"dam1","da21");
        var da31 = document.getElementById("da31");
        da31.innerHTML = tempHigh;
        var da32 = document.getElementById("da32");
        da32.innerHTML = tempLow;
        var type = "N/A";
        if (precipitationType === 0) {
            type = "N/A";
        }
        else if(precipitationType===1){
            type = "Rain";
        }
        else if(precipitationType === 2) {
            type ="Snow";
        }
        else if(precipitationType===3){
            type ="Freezing Rain";
        }
        else if(precipitationType===4){
            type ="Ice Pellets";
        }
        var td20 = document.getElementsByClassName("td2")[0];
        td20.innerHTML = type;
        var td21 = document.getElementsByClassName("td2")[1];
        td21.innerHTML = precipitationProbability + "%";
        var td22 = document.getElementsByClassName("td2")[2];
        td22.innerHTML = windSpeed + "mph";
        var td23 = document.getElementsByClassName("td2")[3];
        td23.innerHTML = hum + "%";
        var td24 = document.getElementsByClassName("td2")[4];
        td24.innerHTML = visibility + "mi";
        var td25 = document.getElementsByClassName("td2")[5];
        td25.innerHTML = sunTime;
        var detailTitle = document.getElementById("detailTitle");
        var detail = document.getElementById("detail");
        var detailTail = document.getElementById("detailTail");
        var arrow = document.getElementById("arrow");
        arrow.style.display="block";
        detailTitle.style.display = "block";
        detail.style.display ="block";
        detailTail.style.display ="block";
        var card = document.getElementById("card");
            var table = document.getElementById("fifteen");
            card.style.display = "none";
            table.style.display="none";

    }
   function fun8(sunrise, sunset ) {
        var rise = sunrise.substring(11, 13);
        var set = sunset.substring(11, 13);
        var riseInt = parseInt(rise);
        var setInt = parseInt(set) - 12;
        var ans = riseInt+"AM/"+setInt+"PM";
        return ans


}

    function fun9() {

         var arr = new Array(15);
         for (var j =0; j < arr.length; j++) {
             arr[j] = new Array(3);
         }
         for (var i = 0; i < 15; ++i) {
             var currentTime = alldata['msg']['data']['timelines'][2]['intervals'][i]['startTime'];
             var weatherCode = alldata['msg']['data']['timelines'][2]['intervals'][i]['values']['weatherCode'];
             var tempHigh = alldata['msg']['data']['timelines'][2]['intervals'][i]['values']['temperatureMax'];
             var tempLow = alldata['msg']['data']['timelines'][2]['intervals'][i]['values']['temperatureMin'];
            currentTime = currentTime.substring(0,10);
            var date = new Date(currentTime);
            var time = date.getTime();
            arr[i][0] = time;
            arr[i][1] = tempLow;
            arr[i][2] = tempHigh;

         }
         console.log(arr);
 return arr;
    }
    function fun14() {
      return alldata;

    }