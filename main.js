$(document).ready(function() {
//here we are just linking some elements from git and replacing in our html
$('.navbar img').html(user.avatar_url)
$('.photo img').html(user.avatar_url)
$('.photo h3').html(user.name);
$('.photo h4').html(user.login);
$('.location li').append(user.location)
$('.location p').append(user.created_at)
//some of these are actual links so we need to add in the a href

//This is where we pull the repositories, sort by date, then add the pieces from
//the string that we want to see
var sortRepo = _.sortBy(repos,'updated_at').reverse();
var repoHTML = "";
sortRepo.forEach(function(currVal, idx, arr) {
 repoHTML += "<div class='content'>" + "<h4>"
  + currVal.name
  + "</h4>"
  + "<p>"
  + currVal.description
  + "</p>"
  + "<p>"
  + currVal.updated_at
  + "</p>"
  + "</div>";
});
//After returning we need to determine how to make certain info clickable links
$('.repos').html(repoHTML)
//moment.js for the date?  how to use this?
//some of these are also links so need to add the a href

//For the Pubic Activity we have to do something similar and sort by created then concat
//activity.actor.login + activity.type + activity.payload.ref + activity.repo.name
// var sortPubActivity = _.sortBy(activity,'created_at').reverse();
// var activityHTML1 = "";
// sortPubActivity.forEach(function(currVal, idx, arr) {
//  activityHTML += "<div class='content'>" + "<h4>"
  // +
  // +
  // +
  // +
  // +
//Fill in the html + above elements to get desired result
//will need to figure out how to show this on a seperate page
//using the navigation tab


// var activityHTML2 = "";
// sortPubActivity.forEach(function(currVal, idx, arr) {
//  activityHTML += "<div class='content'>" + "<h4>"
// +
// +
// +
// +
// +
//This is the second line of the public activity that push events have


//Here is a nother way we saw in class
//_.each(activity, function (currVal))
//if (currEvent.type ==="PushEvent"){
//  activityHTML2
//if (currEvent.type ==="")
//}

//Then something with a $('.pubactivity').click(function (event) {}0;
//pubactivity will be the name of clicking that tab

//event.preventDefault();
//

});
