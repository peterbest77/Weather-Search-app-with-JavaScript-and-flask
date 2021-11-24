# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START gae_python38_app]
# [START gae_python3_app]
from flask import Flask, send_from_directory, request, json, jsonify

import re

import requests

# url = "https://api.tomorrow.io/v4/timelines"
#
# querystring = {"location": "34.0522,-118.2437", "fields": ["temperature", "temperatureApparent", "temperatureMin", "temperatureMax", "windSpeed", "windDirection", "humidity", "pressureSeaLevel", "uvIndex", "weatherCode", "precipitationProbability", "precipitationType", "sunriseTime", "sunsetTime", "visibility", "moonPhase", "cloudCover"], "units": "imperial", "timesteps": ["current", "1h", "1d"], "timezone": "America/Los_Angeles", "apikey": "YyAFenHBBvWKX4VZYkRY0SNjrpGEchNL"}
#
# headers = {"Accept": "application/json"}
#
# response = requests.request("GET", url, headers=headers, params=querystring)
#
# print(response.text)
# url = 'https://api.tomorrow.io/v4/timelines?location=-' \
#       '73.98529171943665,40.75872069597532&fields=tempe' \
#       'rature&timesteps=1h&units=metric&apikey=YyAFenHBB' \
#       'vWKX4VZYkRY0SNjrpGEchNL'


# headers = {"Accept": "application/json"}
#
# response = requests.request("GET", url, headers=headers)
#
# print(response.text)


# url1 = 'https://ipinfo.io?token=a0cca1bb9680cf'
#
# headers1 = {"Accept": "application/json"}
#
# response1 = requests.request("POST", url1, headers=headers1)
#
# print(response1.text)

# If `entrypoint` is not defined in app.yaml, App Engine will look for an app
# called `app` in `main.py`.
app = Flask(__name__)


@app.route("/weather")
def view_report():
    return send_from_directory('static', 'html/weather.html')


@app.route("/sendData", methods=['GET'])
def form_data():
    if request.args['flag'] == "true":
        city = request.args['city']
        street = request.args['street']
        state = request.args['selectstate']
        flag = request.args['flag']
        formatted_address = city + ", " + state
        print(city, street, state, flag)
        url = "https://api.tomorrow.io/v4/timelines"
        querystring = {"location": street,
                       "fields": ["temperature", "temperatureApparent", "temperatureMin", "temperatureMax", "windSpeed",
                                  "windDirection", "humidity", "pressureSeaLevel", "uvIndex", "weatherCode",
                                  "precipitationProbability", "precipitationType", "sunriseTime", "sunsetTime",
                                  "visibility", "moonPhase", "cloudCover"], "units": "imperial",
                       "timesteps": ["current", "1h", "1d"], "timezone": "America/Los_Angeles",
                       "apikey": "YyAFenHBBvWKX4VZYkRY0SNjrpGEchNL"}
        headers = {"Accept": "application/json"}
        response = requests.request("GET", url, headers=headers, params=querystring)
        response = response.json()
        print(response)
        print(response['data']['timelines'][0]['intervals'][0]['values']['temperature'])
        return jsonify({'status': '200', 'msg': response, 'address': formatted_address})

    else:
        city = request.args['city']
        street = request.args['street']
        state = request.args['selectstate']
        flag = request.args['flag']
        street = re.sub(r'[^\w\s]', '', street)
        street = street.replace(" ", "+")
        print(city, street, state, flag)
        url2 = "https://maps.googleapis.com/maps/api/geocode/json?address="+street + city + state + "&key=AIzaSyCPX__rKKqlkJ_my9RfEbYFWQykPEB9SwU"
        headers2 = {"Accept": "application/json"}
        response2 = requests.request("GET", url2, headers=headers2)
        response2 = response2.json()
        print(response2['results'][0]['geometry']['location']['lat'])
        print(response2['results'][0]['geometry']['location']['lng'])
        lat = response2['results'][0]['geometry']['location']['lat']
        lng = response2['results'][0]['geometry']['location']['lng']
        formatted_address = response2['results'][0]['formatted_address']
        street = str(lat) + "," + str(lng)
        print(str(lat), str(lng), street, formatted_address)
        url = "https://api.tomorrow.io/v4/timelines"
        querystring = {"location": street,
                       "fields": ["temperature", "temperatureApparent", "temperatureMin", "temperatureMax", "windSpeed",
                                  "windDirection", "humidity", "pressureSeaLevel", "uvIndex", "weatherCode",
                                  "precipitationProbability", "precipitationType", "sunriseTime", "sunsetTime",
                                  "visibility", "moonPhase", "cloudCover"], "units": "imperial",
                       "timesteps": ["current", "1h", "1d"], "timezone": "America/Los_Angeles",
                       "apikey": "YyAFenHBBvWKX4VZYkRY0SNjrpGEchNL"}
        headers = {"Accept": "application/json"}
        response = requests.request("GET", url, headers=headers, params=querystring)
        response = response.json()
        return jsonify({'status': '200', 'msg': response, 'address': formatted_address})



@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World!!!!!'


if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. You
    # can configure startup instructions by adding `entrypoint` to app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
