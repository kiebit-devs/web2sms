# web2sms
A simple cordova app acting as a middle person for sending a sms from Google Firebase to any mobile number.

I am developing this app because I didn't get enough good rate for sending sms for 2f authentication for my system.
So I got an idea and made it by myself. <strong>Yeah</strong> !

<h3>Description</h3>
<p>
In a complete description way, this app will be installed in any smartphone for example android. And that phone should have at lease 1 sim card inserted and some credit
or sms package. Say you subscribe 10k sms for $0.4. and thats a good rate. Then this app will be kept running in the phone. and the phone will also be kept connected to the internet. When the app will boot up, it will copy its device specific FCM id. that you will use on your server.
</p>
<p>
  On the server side, you will send the sms request to google firebase which will further forward your request to this app and then this app will send the sms.
  This project primarily focuses on android app only and not much on server side because that has a lot of ways to use Google Firebase.
  </p>

<h3>Installation</h3>
<p>
  <ol>
    <li>
  You need cordova tools for building the apk. That are primarily Node.js, Cordova, Jdk and Jre, and Android SDK. See cordova documentation for get started. https://cordova.apache.org/#getstarted
    </li>
    <li>
      You need an account on Google Firebase. https://firebase.google.com/ where you will create a new project and in that project you need to create a new android app and then you will have to get the file google-services.json. This file should be place in the root directory of your cordova project. 
    </li>
    <li>
      create cordova android platform using the command: "cordova platform add android" from any command line program like power shell from the root directory of project.
    </li>
    <li>
      build the apk using command: "cordova build android" Or "cordova build android --release". See cordova documentation for further guidance.
    </li>
  </ol>
  </p>
