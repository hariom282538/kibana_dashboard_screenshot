#!/bin/bash


COUTPUT=$(curl "Accept: application/json" -H "Content-Type: application/json" http://localhost:3000/kibana)
echo $COUTPUT
CONTENT="<html> <head></head> <body>
<p>MNTHLY_TREND_DASHBOARD</p> </br>
<img src='cid:MNTHLY_TREND_DASHBOARD.jpeg' /> </br></br>
 </br> This is an automatically generated email [$(date)] -  Automation </body> </html>";
echo $CONTENT | tee /home/automation/ks.html
# MOUTPUT=$(mail -r hariom.devops@gmail.com -s "Kibana Trend Screens | $(date) " -a /home/automation/MNTHLY_TREND.jpeg hariom.devops@gmail.com <<< "Kibana Trend Screens [$(date)] -  Automation")
 
 MOUTPUT=$(mutt -e "my_hdr From:hariom.devops@gmail.com;set content_type=text/html" hariom.devops@gmail.com -s "Kibana Monthly Trend Screens| $(date)" -a /home/automation/MNTHLY_TREND_DASHBOARD.jpeg   < /home/automation/gs.html)
 echo $MOUTPUT
 rm /home/automation/ks.html