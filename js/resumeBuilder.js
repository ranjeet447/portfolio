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
 		"c","c++","java","android app development","HTML","Css","Javascript",
    "Bootstrap","jQuery","NodeJs"
 	]
 };

 var education = {
 	"schools":[
 	{
 		"name":"Dayananda Sagar College of Engineering",
 	    "location":"Bangalore",
 	    "degree":["B.E"],
 	    "major":"information Science & Engineering"
 	}],
 "onlineCourses":[
  {
  	"title":"Design And Analysis Of Algorithms",
  	"school":"NPTEL",
  	"date":"feb 2018 - apr 2018",
  	"url":"https://onlinecourses.nptel.ac.in/noc18_cs20"
  },
  {
  	"title":"Introduction to Modern Application Developmen",
  	"school":"NPTEL",
  	"date":"feb 2018 - apr 2018",
  	"url":"https://onlinecourses.nptel.ac.in/noc18_cs03"
  },
  {
    "title":"Android App Development",
   "school":"Eckovation",
   "date":"july 2017 - nov 2017",
   "url":"https://eckovation.com/course/android-development"
  }]
};

var work = {
	"jobs":[
	{
		"employer":"EMPLOYE",
		"title":"TITLE",
		"location":"raxaul",
		"dates":"feb 2016",
		"description":"description for my jobs"
	}]
};

var projects = {
	"projects":[
	{
		"title":"PROJECT-TITLE",
		"dates":"some date",
		"description":"description about the porject",
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
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(picture);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append('<br>');
$("#mapDiv").append(googleMap);


function addSkills() {
  $("#skill").append(HTMLskillsStart);
  for(var s=0;s<bio.skills.length;s++){
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[s]);
    $(".skill-entry:last").append(formattedSkill);
  }
}
function addWork(){
	for(var job=0; job<work.jobs.length;job++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	}
}
function addProjects(){
	for(var project=0; project<projects.projects.length; project++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length>0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
				$(".project-entry:last").append(formattedLocation);
			}
		}
	}
}
function addEducation(){
  for(var school=0;school<education.schools.length;school++){
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedDegreeName = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedDegreeName);

    //var formattedDates = HTMLschoolDates.replace("%data",education.schools[school].date);
    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for(var oc=0;oc<education.onlineCourses.length;oc++){

    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[oc].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[oc].school);
    var formattedTitle = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitle);

    var formattedDates = HTMLschoolDates.replace("%data%",education.onlineCourses[oc].date);
    $(".education-entry:last").append(formattedDates);
    var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[oc].url);
    var formattedUrl = formattedUrl.replace("#",education.onlineCourses[oc].url);
    $(".education-entry:last").append(formattedUrl);
  }
}
addWork();
addProjects();
addEducation();
addSkills();
$(".skill-entry").css("display", "none");
document.getElementsByClassName('work-entry')[0].style.display = 'none';
document.getElementsByClassName('project-entry')[0].style.display = 'none';
document.getElementsByClassName('education-entry')[0].style.display = 'none';
document.getElementById('map').style.display = 'none';


$(document).ready(function(){
  $("#headingSkills").click(function(){
    toggleIcon();
    $(".work-entry,.project-entry,.education-entry,#map").hide("slow");
    $(".skill-entry").slideToggle();
    $("#headingSkills >.material-icons").toggle();
  });
});
$(document).ready(function(){
  $("#headingWorkExperience").click(function(){
    toggleIcon();
    $(".skill-entry,.project-entry,.education-entry,#map").hide("slow");
    $(".work-entry").slideToggle();
    $("#headingWorkExperience>.material-icons").toggle();
  });
});
$(document).ready(function(){
  $("#headingProjects").click(function(){
    toggleIcon();
    $(".skill-entry,.work-entry,.education-entry,#map").hide("slow");
    $(".project-entry").slideToggle();
    $("#headingProjects > .material-icons").toggle();
  });
});
$(document).ready(function(){
  $("#headingEducation").click(function(){
    toggleIcon();
    $(".skill-entry,.project-entry,.work-entry,#map").hide("slow");
    $(".education-entry").slideToggle();
    $("#headingEducation > .material-icons").toggle();
  });
});
$(document).ready(function(){
  $("#headingMap").click(function(){
    toggleIcon();
    $(".skill-entry,.project-entry,.education-entry,.work-entry").hide("slow");
    $("#map").slideToggle();
    $("#headingMap > .material-icons").toggle();
  });
});
function toggleIcon() {
    if($(".skill-entry").css("display")=="block")
    $("#headingSkills >.material-icons").toggle();
    if($(".project-entry").css("display")=="block")
    $("#headingProjects >.material-icons").toggle();
    if($(".work-entry").css("display")=="block")
    $("#headingWorkExperience >.material-icons").toggle();
    if($(".education-entry").css("display")=="block")
    $("#headingEducation >.material-icons").toggle();
    if($("#map").css("display")=="block")
    $("#headingMap >.material-icons").toggle();
}
