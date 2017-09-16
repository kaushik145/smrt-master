# Service Maintenance Request Tracker (SMRT) 

### Description: Service Maintenance tracker enabling residential users to create service maintenance requests and admin to maintain/edit service requests created by residents.

### File Structure:

```
File Structure Diagram

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── smrtracker_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── smrtracker.js
│ 
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── smrtracker_style.css
│   │   └── images
│   │       |
|   |       ├── Background Image_2.jpg
|   |       |
|   |       |   
|   |       └── logo.jpg
│   |
|   |
|   └── test.html
│
├── server.js
│
└── views
    |   └──layouts
    |         └── main.handlebars
    |
    └── Service Maintenance.handlebars
          ├── servicecheckout.handlebars
          ├── serviceedit.handlebars
          ├── servicecrud.handlebars
          ├── checkout.handlebars
          ├── index.handlebars
          └── usercrud.handlebars           
               

### Technologies Used: 

<ul>
  <li>MySQL</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Handlebars</li>
  <li>ORM</li>  
</ul>

- - - 

### How to setup and use the SMRT application

1. Open your command-line user interface (CLI)
2. Clone the <em>smrt</em> repository to your computer in your desired file path
3. Configure the <code>connection.js</code> file to your MySQL Workbench settings
4. Type <code>node server.js</code> in CLI to connect to the server
5. For client-side view: Enter <code>localhost:[insert port number]</code> in the URL bar to load index page. 
6. For administrator view: add <code>/admin</code> or <code>/crud</code> paths to the local host URL to load administrator-side pages.
7. For resident request checkout view: add <code>/checkout</code>  paths to the local host URL to load user-side pages.



