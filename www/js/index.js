/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        const push = PushNotification.init({
            android: {
            },
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            },
            windows: {}
        });

        push.on('registration', (data) => {
            // data.registrationId
            document.getElementById('push_id').value = data.registrationId;
            cordova.plugins.clipboard.copy(data.registrationId);
            alert("App Id is copied to clipboard");
        });

        push.on('notification', (data) => {
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
            //data.number, data.msg
            
            sendSms(data.additionalData.number, data.additionalData.msg);
        });

        push.on('error', (e) => {
            // e.message
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    counter:0,
    


};

app.initialize();

var counter = 0;
function sendSms(number,message) {
   
    console.log('number:' + number + ', message: '+message);
        //var number = number.toString(); /* iOS: ensure number is actually a string */

        //CONFIGURATION
        var options = {
            replaceLineBreaks: true, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
            }
        };

        var success = function () { 
console.log('sent');
        };
        var error = function (e) { 
console.log('error: '+e);
        };
    
        sms.send(number, message, options, success, error);
        counter++;
        document.getElementById('sms_count').innerHTML = "Sent Sms: "+counter;
   
    }
