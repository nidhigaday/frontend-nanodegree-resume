//biography
var bio = {                                                // JSON Object data
    "name":"Nidhi Gaday",
    "role":"Web Developer",
    "contacts":                     //JSON comtacts object within bio object
    { "mobile": "647 470 2686",
    "email":"nidhi.gaday@gmail.com",
    "github": "nidhigaday",
    "linkedin" : "NidhiGaday",
    "location": "Toronto"
    },
    "message": "Welcome to my resume.",
    "skills": ["HTML", "CSS", "Javascript", "Customer dealing skills"],
    "bioPic": "images/propic.png"
  };

// Top Header
var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
//Contact info
var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
var formattedGitHub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
var formattedLinkedIn = HTMLinkedin.replace("%data%", bio["contacts"]["linkedin"]);
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
var formattedPic = HTMLbioPic.replace("%data%", bio["bioPic"]);

var formattedmsg = HTMLWelcomeMsg.replace("%data%", bio["message"]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLinkedIn);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPic);
$("#header").append(formattedmsg);

if(bio.skills.length>0)
{
$("#header").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkills);
}


//---------------------------------------------------------------------------------------------


// Internationalize Names

function inName()
{
  var Name = bio.name;
  Name = Name.trim().split(" ");
  console.log(Name);
  Name[1] = Name[1].toUpperCase();
  Name[0] = Name[0].slice(0,1).toUpperCase() + Name[0].slice(1).toLowerCase();
  var formatted = Name[0] + " " + Name[1];
  return formatted;
}
$("#main").append(internationalizeButton);


//---------------------------------------------------------------------------------------------


//work information
var work = {
"jobs" : [{                                        // JSON Object data
   "title" : "Technical Support",
   "employer" : "Pearson Embanet",
   "years" : "Aug 2014 - Present",
   "city" : "Toronto",
   "website" : "http://embanet.com/",
   "description" : "Technical assistance for users taking online courses."
 },
 {
   "title" : "Community Mobilizer",
   "employer" : "Social Services Network",
   "years" : "April 2012 - Feb 2014",
   "city" : "Markham",
   "website" : "http://www.socialservicesnetwork.org/",
   "description" : "Assisted senior personals in learning use of computers. Recognized and appreciated for participation in various community services."
 }]
};

//function to display work data
function displayWork()
{
for (job in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var workemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var worktitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var workEmployerTitle = workemployer + worktitle;

    $(".work-entry:last").append(workEmployerTitle);

    var workyear = HTMLworkDates.replace("%data%", work.jobs[job].years);
    var workcity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
    var workdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


    $(".work-entry:last").append(workyear);
    $(".work-entry:last").append(workcity);
    $(".work-entry:last").append(workdescription);
  }
}

displayWork();  // calling function to display work


//--------------------------------------------------------------------------------------------


//education information
var education = {
"schools" : [
  {
		"school":"Centennial College",
    "study": "Computer System Technology : Networking Diploma",
		"years": "Jan 2012 - Dec 2013",
    "city" : "Toronto"
  },
	{
		"school":"Punjab Technical University",
    "study": "Bachelor's degree : Information Technology",
    "years": "2007 - 2011",
		"city" : "Chandigarh"
	}
	],
"OnlineCourses" : [
  {
    "study":"Front End Web Developer NanoDegree",
    "school": "Udacity",
    "years": "Nov 2014 - Present",
    "url": "https://www.udacity.com/"
  } ]
};

//function to display education data
function displayEducation()
{
$("#education").append(HTMLschoolStart);
for (school in education.schools)
  {
    var schoolName = HTMLschoolName.replace("%data%", education.schools[school].school);
    var schoolCourse = HTMLschoolDegree.replace("%data%", education.schools[school].study);
    var schoolNameCourse = schoolName + schoolCourse;

    $(".education-entry:last").append(schoolNameCourse);
    /*if(education.schools[school].school) {

    }*/
    var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
    var schoolcity = HTMLschoolLocation.replace("%data%", education.schools[school].city);

    $(".education-entry:last").append(schoolDates);
    $(".education-entry:last").append(schoolcity);
    $(".education-entry:last").append(HTMLschoolBreak);
  }

$(".education-entry:last").append(HTMLonlineClasses);
for (course in education.OnlineCourses)
  {

    var schoolOnlineName = HTMLonlineSchool.replace("%data%", education.OnlineCourses[course].school);
    var schoolOnlineCourse = HTMLonlineTitle.replace("%data%", education.OnlineCourses[course].study);
    var schoolOnlineNameCourse = schoolOnlineCourse + schoolOnlineName;

    $(".education-entry:last").append(schoolOnlineNameCourse);

    var schoolOnlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[course].years);
    var schoolOnlineUrl = HTMLonlineURL.replace("%data%", education.OnlineCourses[course].url);

    $(".education-entry:last").append(schoolOnlineDates);
    $(".education-entry:last").append(schoolOnlineUrl);
  }
}


displayEducation();// calling function to display education


//--------------------------------------------------------------------------------------------

//function to list locations in a n array
function locationizer(work_obj)
{
  var loc = [];
  for (var i = 0; i < work_obj.jobs.length; i++)
  {
    loc.push(work_obj.jobs[i]["city"]);
  }
  return loc;
}
   /* var myLocations = [];
    for (job in work_obj.jobs)
    {
        var place = work_obj.jobs[job].location;
        myLocations.push(place);
    }
    return myLocations;*/

//console.log(locationizer(work));


//--------------------------------------------------------------------------------------------

// projects information
var projects = {
  "projects":[
  {
    "title": "Portfolio",
    "dates": "2014",
    "description": "For this portfolio I used Twitter's Bootstrap Framework. The HTML and CSS codes were validated. Some images used in the webpage were taken by me and others were copied from Google resources. I have user Google Fonts for this portfolio. Also I have linked some of my basic work tot he page.",
    "image" : "images/project.png",
  }],

  // below is the function Object in Project object
  // everything in Javascript is an Object
  "display" : function()
  {
    for (project in projects.projects)
    {
      $("#projects").append(HTMLprojectStart);
      var projectName = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

      $(".project-entry:last").append(projectName);

      var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);

      $(".project-entry:last").append(projectDates);
      $(".project-entry:last").append(projectDescription);
      $(".project-entry:last").append(projectImage);
    }
  }
};

projects.display();

//----------------------------------------------------------------------------------


//displaying locations where I lived on Google Map in Resume
$("#mapDiv").append(googleMap);



//----------------------------------------------------------------------------------

//displaying bottom contacts

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedLinkedIn);
$("#footerContacts").append(formattedLocation);