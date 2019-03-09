AutoGrader
===============
Assists with the homework grading process for teaching assistantd (TA) of an introductory programming course.

The Chrome Extension
----------------
This Chrome extension allows the TA to focus more on giving more detailed feedback to students who really need it by automatically grading well-scoring test case students for full points. The TA then has more time to grade students who had errors or whose code did not pass some or all of the automated test cases in the course submission website (also known as "Kytos").

![Chrome Extension](https://github.com/vasilzhigilei/AutoGrader/blob/master/readme_resources/AutoGraderPopup.PNG)
###### *[The Chrome extension view, limit input defaults to 100%]*

The autograde.js script gets injected into the page after the teaching assistant clicks "Grade!" in the chrome extension popup. The default inclusive lower limit of 100% can be overwritten for test cases passed -> full points. The script works by going through all the loaded students and then checks their passed percentage for the test cases. It then either selects all the full-point radio buttons and submits the grade, or skips the student to allow for further, manual grading by the TA.

![Console Output](https://github.com/vasilzhigilei/AutoGrader/blob/master/readme_resources/AutoGraderCapture.PNG)
###### *[The console output of autograde.js]*

History
-------
##### Version 1.0 (9 March, 2019)
* Initial commit of working script and support files
