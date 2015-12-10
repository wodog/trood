## What's trood

trood is trend wood, an API System for further services

## Architecture

#### web 

web is a visual page for api

#### api 

api is around various services

## API

#### math

|name |description      |request    |response  |
|-----|-----------------|-----------|----------|
|add  |make query to add|add/a=1&b=2|{result:3}|
|minus|make query to minus|minus/a=10&b=2|{result:8}|

#### user

|name|description|request|response|
|----|-----------|-------|--------|
|loginname|get user data from loginname|user/loginname/wodog|{name:wodog,loginname:wodog,pass:123,email:abc@qq.com}|
|save|save new user|user/save?name=wodog&loginname=wodog&pass=123&email=abc@qq.com|(html)|
