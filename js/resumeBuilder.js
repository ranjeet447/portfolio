/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
 	"name":  "Ranjeet Kumar",
 	"role": "Web Developer",
 	"contacts":{
 		"email":"ranjeetgupta156@gmail.com",
 		"mobile":"898624018",
 		"github":"ranjeet447",
 		"location":"Bangalore"
 	},
 	"bioPic": "images/fry.jpg",
 	"skills":[
 	"java","android","Web Developer"
 	]
 };

 var education = {
 	"schools":[
 	{
 		"name":"Dayananda Sagar College of Engineering",
 	    "location":"Bangalore",
 	     "degree":["B.E"],
 	     "major":"ISE"
 	},
 	{

 	}],
 "onlineCourses":[
  {
  	"title":"Design And Analysis Of Algorithms",
  	"school":"NPTEL",
  	"date":"feb,2018 - apr,2018",
  	"url":"https://onlinecourses.nptel.ac.in/noc18_cs20"
  },
  {
  	"title":"Introduction to Modern Application Developmen",
  	"school":"NPTEL",
  	"date":"feb,2018 - apr,2018",
  	"url":"https://onlinecourses.nptel.ac.in/noc18_cs03"
  }]
};

var work = {
	"jobs":[
	{
		"employer":"",
		"title":"",
		"location":"",
		"dates":"",
		"description":""
	}]
};

var projects = {
	"projects":[
	{
		"title":"",
		"dates":"",
		"description":"",
		"images":""
	}]
};


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var picture = HTMLbioPic.replace("%data%",bio.bioPic);
var skill = HTMLskillsStart;
var skill1 = HTMLskills.replace("%data%",bio.skills[0]);
var skill2 = HTMLskills.replace("%data%",bio.skills[1]);
var skill3 = HTMLskills.replace("%data%",bio.skills[2]);
var skill4 = HTMLskills.replace("%data%",bio.skills[3]);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(picture);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(skill);
$("#header").append(skill1);
$("#header").append(skill2);
$("#header").append(skill3);