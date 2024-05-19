# Getting Started with Tourist Blog

## Setup backend

Clone the following repository:

```
git clone https://github.com/nafi-ullah/tourist-php-server.git
```

## Install xampp on your os

```
https://www.apachefriends.org/
```

## Move the backend project folder

- Go to the folder where the tourist-php-server is located that you have just clone.
- Rename the folder: 'tourist-php-server' to 'api'
- Copy or cut the folder
- Go to you xampp installation folder:

Windows - C:\Xampp\htdocs 
Mac or Linux- /opt/lampp/htdocs

- paste the 'api' project folder in this htdocs directory

## Connect with your database.

- Open the 'api' folder with your code editor.
- Open the file createTable.php
- Modify the connection string with your database credentials.

``
$connection = mysqli_connect('your_hostname', 'your_user', 'your_pass', 'your_database');
``

- Open the DbConnect.php . you have to give credentials here too.

```
	    private $server = 'your_hostname';
		private $dbname = 'tour_database';
		private $user = 'your_user';
		private $pass = 'your_pass';
```
## Create table with running the file

- Go to Postman/ browser or other api hitting platform.
- Enter the following api url and enter.
```
http://localhost/api/createTable.php

```


# Frontend Run
- Clone the followng repository:

```
git clone https://github.com/nafi-ullah/Tourist-PHP-fullstack.git
```

- Go to the frontend folder
```
cd ./frontend
```

- Install dependencies
```
npm install
```

- Run the project
```
npm run dev
```