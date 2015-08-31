# Installation #

1.Make a clone of this repository - https://github.com/Giegling/addressbook.git

2.Install node modules for server
```
#!bash

cd addressbook/server
npm install
```
3.Install node modules for client
```
#!bash

cd ../client
npm install
```
4.Install bower components
```
#!bash

cd assets
bower install
```
5.Compile CoffeeScript files to JavaScript
```
#!bash

cd addressbook
gulp compile
```
6.Run MongoDB and then server
```
#!bash

mongod
```
```
#!bash

cd addressbook/server
npm start
```
7.Open second console and run client
```
#!bash

cd addressbook/client
npm start
```
