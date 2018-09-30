 var bio = {
 	"name":  "Ranjeet Kumar",
 	"role": "Web Developer",
 	"contacts":{
 		"email":"ranjeetgupta156@gmail.com",
 		"mobile":"898624018",
 		"github":"ranjeet447",
 		"location":"Bangalore,India"
 	},
 	"bioPic": "images/image.png",
 	"skills":[
 		"HTML","Css","Javascript","Bootstrap","jQuery","NodeJs","mongoDb","c","c++","Android&nbspApp&nbspDevelopment","Python "
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
  	"title":"Introduction to Modern Application Developmen",
  	"school":"NPTEL",
  	"date":"feb 2018 - apr 2018",
  	"url":"https://onlinecourses.nptel.ac.in/noc18_cs03",
    "certificate":"/images/IMAD.jpg"
  },
  {
    "title":"Android App Development",
   "school":"Eckovation",
   "date":"july 2017 - nov 2017",
   "url":"https://eckovation.com/course/android-development",
   "certificate":"/images/android.jpg"
  },
  {
  	"title":"Design And Analysis Of Algorithms",
  	"school":"NPTEL",
  	"date":"feb 2018 - apr 2018",
  	"url":"https://onlinecourses.nptel.ac.in/noc18_cs20",
    "certificate":"/images/DAA.jpg"
  }]
};

var work = {
	"jobs":[
	{
		"employer":"Verzeo",
		"title":"Web Development Intern",
		"location":"Bangalore",
		"dates":"july 2018 - sept 2018",
		"description":"description for my jobs"
	}]
};

var projects = {
	"projects":[
	{
		"title":"PROJECT-TITLE",
		"dates":"date",
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
$("#topContacts").prepend(formattedRole);
$("#topContacts").prepend(formattedName);
$("#topContacts").prepend(picture);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append('<br>');


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
    $(".education-entry:last").append('<br><hr>');

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

    var certificate = HTMLonlineCertificates.replace("%data%",education.onlineCourses[oc].certificate);
    certificate = certificate.replace("#",education.onlineCourses[oc].certificate)
    $(".education-entry:last").append(certificate);
    $(".education-entry:last").append('<br><hr>');


  }
}
addWork();
addProjects();
addEducation();
addSkills();
$(".skill-entry").css("display", "none");
$('.work-entry')[0].style.display = 'none';
$('.project-entry')[0].style.display = 'none';
$('.education-entry')[0].style.display = 'none';


$(document).ready(function(){
  $("#headingSkills").click(function(){
    $(".skill-entry").slideToggle();
    $("#headingSkills >.material-icons").toggle();
    $(".work-entry,.project-entry,.education-entry").hide("slow");
    if($(".project-entry").css("display")=="block")
    $("#headingProjects >.material-icons").toggle();
    if($(".work-entry").css("display")=="block")
    $("#headingWorkExperience >.material-icons").toggle();
    if($(".education-entry").css("display")=="block")
    $("#headingEducation >.material-icons").toggle();
  });

  $("#headingWorkExperience").click(function(){
    $(".work-entry").slideToggle();
    $("#headingWorkExperience>.material-icons").toggle();
    $(".skill-entry,.project-entry,.education-entry").hide("slow");
    if($(".skill-entry").css("display")=="block")
    $("#headingSkills >.material-icons").toggle();
    if($(".project-entry").css("display")=="block")
    $("#headingProjects >.material-icons").toggle();
    if($(".education-entry").css("display")=="block")
    $("#headingEducation >.material-icons").toggle();
  });

  $("#headingProjects").click(function(){
    $(".project-entry").slideToggle();
    $("#headingProjects > .material-icons").toggle();
    $(".skill-entry,.work-entry,.education-entry").hide("slow");
    if($(".skill-entry").css("display")=="block")
    $("#headingSkills >.material-icons").toggle();
    if($(".work-entry").css("display")=="block")
    $("#headingWorkExperience >.material-icons").toggle();
    if($(".education-entry").css("display")=="block")
    $("#headingEducation >.material-icons").toggle();
  });

  $("#headingEducation").click(function(){
    $(".education-entry").slideToggle();
    $("#headingEducation > .material-icons").toggle();
    $(".skill-entry,.project-entry,.work-entry").hide("slow");
    if($(".skill-entry").css("display")=="block")
    $("#headingSkills >.material-icons").toggle();
    if($(".project-entry").css("display")=="block")
    $("#headingProjects >.material-icons").toggle();
    if($(".work-entry").css("display")=="block")
    $("#headingWorkExperience >.material-icons").toggle();
  });
});
