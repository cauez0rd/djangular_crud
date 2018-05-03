# Simple Djangular CRUD

Project made for learning purposes. REST API was made with Django2 and frontend with AngularJS 1.6.10, with bootstrap for some customization and (very limited) responsivity.

## How to use it
Just add your users and fill their data.
The users' *email* **must** be valid (as in, have an @something.other).
The *phone* field **must have exactly 9 characters.** Just to keep things interesting. 
The *password* field **must** have at least 8 characters.

## What it can do (for now)
All CRUD basics. You can create, read, update and delete the users. The dates are automatically added according to your actions. The users persist on the database.
You can filter users by whatever you want just by typing into the upper input, you can order the users by clicking on the parameter which you wish to order them by, you can view users' details by clicking on any one of the data fields.

**There is only backend validation for now**. Sorry.

## Requirements
You must have python3 installed on your machine. That's it. The rest we can do on a python virtualenv so it won't drive your pip crazy.

## How to set it up in your machine
1- Clone this repository to your machine;
2- Navigate to the cloned folder;
3- On the terminal, run `./setup.sh venv`. This will create a new folder called **venv** and it's where our virtual environment will live;
4- Activate the venv with `source venv/bin/activate`. There should now be a *(venv)* to the left side of your terminal. If there isn't, something went wrong. Are you sure you ran step 3 correctly?
5- **With the venv activated** (this is important to keep your own environment isolated), run `./setup.sh install`. This step will install all project dependencies. It may take a little while depending on your connection;
6- After doing all of the above and succesfully installing the dependencies, run `./setup.sh django`. Your terminal windows is now showing a log for the Django server;
7- Open another terminal tab/window and navigate again to the cloned folder. Run `./setup.sh server` (there is no need to activate the venv now) and it should now be running a simple python server;
8- On your browser, go to `http://localhost:5500/` to see the system in action! I hope nothing goes wrong.
