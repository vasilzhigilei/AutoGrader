/**
 * Function that autogrades well-scoring students' homework assignments. Receives a limit (defaults to 100) percentage that
 * is used to give any students that score higher or equal to on the automated test cases 100% for their final grade.
 * If a student falls below this limit, he or she is skipped for further manual grading by the teaching assistant (TA). 
 * 
 * This code works on an assignment-by-assignment basis. It grades all students loaded (usually assigned TA-specific)
 * for the current assignment opened. Theoretically can also be run on the entire course of students (700~ students), but this tool
 * is intended to soley assist individual TA's in their homework grading job.
 * @param {...number} limit 
 */
function do_grading(limit=100) {
  // Start autograding
  console.log("[+++++] ENTERING do_grading(limit) [+++++]");
  var debugString;
  var students = document.getElementsByClassName("table-columns");
  var counter = 0;
  while(counter < students.length) {
    // Get current student and his or her percentage from preloaded table-columns
    var currentStudent = document.getElementsByClassName("table-columns")[counter];
    var percent = currentStudent.getElementsByClassName("ontime")[0].textContent.split("%")[0];
    debugString = percent + "% | " + counter ;
    
    // Checks if student percent is above the limit
    if(parseFloat(percent) >= parseFloat(limit)){
      // Get all radio buttons with full value of "1.0"
      var radioAll = currentStudent.querySelectorAll("input[value='1.0']");
      
      // Click all the radio buttons
      var currentRadio;
      for(var i = 0; i < radioAll.length; i++){
        currentRadio = radioAll[i];
        currentRadio.click();
      }

      // Successful autograde to 100% (assuming not late) on assignment
      currentStudent.querySelector("input[value='submit grade']").click();
      debugString = "SUCCESS! " + debugString + " | [Radios: " + radioAll.length + "]";
    }else{
      // Skipped student for further manual grading by the TA, did not reach percentage limit
      currentStudent.querySelector("input[value='skip']").click();
      debugString = "skipped. " + debugString;
    }
    counter++;
    // Display student autograded status with built debugString
    console.log(debugString);
  }
  // Stop autograding
  console.log("[-----] EXITING do_grading(limit) [-----]");
}

// limit sent in from popup.js as parameter from extension input text
do_grading(limit);