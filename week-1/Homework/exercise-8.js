/* Challenge Mentor
Write all your code at the end of the file
*/ 
var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE
/*1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."*/
// This works!
let barcelonaWorkers = mentors
  .filter(mentor => (mentor.job.city === 'Barcelona') && (mentor.skills.includes('React')))
  .forEach(mentor => console.log(`Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and I know React`));

/*2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]*/
/***************************************************************************************************************** 
*=========================================================================================================******** */
let barcelonaWorkers2 = mentors.filter(mentor => mentor.job.city === 'Barcelona');
console.log('2.those who work in BCN', barcelonaWorkers2);

let addedClass = mentors.forEach(mentor => mentor['class']= 'Jun1')
console.log('2.added June to those who work in bcn', addedClass);

let skills = barcelonaWorkers2.flatMap(mentor => mentor.skills);
skills.push('SQL')
console.log(skills);

let barcelonaWorkersSQL = barcelonaWorkers2.map(mentor => mentor.class);
console.log('2.added SQL barcelonaWorkersSQL', barcelonaWorkersSQL.skills);
// barcelonaWorkersSQL.skills.push('SQL');

// OR use map and add Jun1 and push SQL in the same function

  let addedClass = barcelonaWorkers2.map(mentor => {
      mentor.class = 'Jun1';
      mentor.skills.push('SQL');
      return mentor;
    })
  console.log('2.added June and SQL to those who work in Barcelona', addedClass);

/******************************************************************************************************************
/*3. Create an object method with the name .addSkill() to be able to add skills from it**/
/*****************************************************************************************************************************========================================================================================================= */
mentors.forEach(mentor => {
  mentor.addSkill = function(newSkill) {
    mentor.skills.push(newSkill);
  }
})
mentors[0].addSkill('Python');
console.log('3.add method new skill', mentors[0].skills);
// /*4. Create a function to add a skill to all members in a list of mentors*/**********************************************************************************************************************========================================================================================================= */
   function addSkill(mentors, newSkill){
     // make a function to push the newSkill into the array
    const addSkillToMentor = (mentor) => mentor.skills.push(newSkill);
     // then loop through the array to call this function on each object
    mentors.forEach(mentor => {
        addSkillToMentor(mentor);
    })
    return mentors;
   }
  // try to use this method to answer number 5 and 6. if you get stuck let me know! :)
  console.log('4.add skill', addSkill(mentors, 'Dancing'));
/*5. Create a function to remove a skill to all members in a list of mentors
/***************************************************************************************************************************************=========================================================================================================********** */
function removeSkill(mentors,newSkill){
 
}
console.log('5.remove skill', removeSkill());
/********************************************************************************************************************/

/*6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills*/
/***************************************************************************************************************************=========================================================================================================********* */
function  mentorWithMoreSkills() {

}

console.log('6.mentor withmore skills', mentorWithMoreSkills());
/********************************************************************************************* */
/*7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes*/
/*************************************************************************************************************
 * ===================================================================================================*** */
function addStudentLikes(mentors){
  this.studentLikes = this.studentLikes + 1;
}
console.log('added a student like', addStudentLikes());
/*********************************************************************************************** */
/*8. Create a function that adds a student like to all mentors in the array
********************************************************************************************==============================↑↑↑↑↑↑↑=================SAME AS EXERCISE 7 ****↑↑↑↑↑↑↑↑********************** */
/***************************************************************************************************/
