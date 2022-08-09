#!/bin/bash
# 아래 위치는 여러분이 해당 리포지토리를 클론한 위치로 설정해주세요.
cd /home/ssm-user/fe-sprint-practice-deploy/server
authbind --deep pm2 start app.js