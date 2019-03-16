# Hygi0Quizz
*A Quiz Game in [HTML/Javascript-jQuery] to teach and train people to hygiene recommendations*

## Explanation
The purpose of this application is to easily learn hygiene recommendations of the structure you work at.  
I noticed that application of hygiene measures at work by operators is something hard because of 3 things
1) The learning of the hygiene recommendations of the structure by the operators, that could be hard and unpleasing
2) The discordance between theorical cases and reality, when the scale of values of the recommendations doesn't meet the operators' ones
3) The logistical difficulty of applying the recommandations, due to lack of time or resources

This application has the purpose to solve the first point by **decreasing the constraint to overcome to learn the recommendations**, this by using concretes situation and trial and error learning strategy, on a funny web application.
This also have the purpose to affect positively the second point by **encouraging dialog between operators and hygiene team** about specific hygiene cases, problems encountered in the unit, scales of values, etc.

## Technical informations
This is a web application exclusively in front-end, using html and jQuery. This choice has been made to have something really simple to deploy. You don't need any internet connection or any server, the only thing you need is a web browser. You put the directory on the computer, launch it into the web browser and play, that's it.  
  
There's 2 parts in the application: 
- A **quizz part**, embodied by the file **"quizzes.js"**, that contain all the quizzes and the explanations of each answers in the form of a JS Object, file that can be modified manually or with a simplifying tool to update quizzes and answers with recommendations evolutions *(a tool to easily generate the quizzes.js file from a Graphical User Interface is comming soon)*
- A **technical part**, composed by files to run the application (Hygi0Quizz.htm, checkQuizzes.htm, ./resources/\*), that doesn't need to be modified.

For information, the **Hygi0Quizz.htm** file is the file to launch the training appliction, while **checkQuizzes.htm** is a file to see all the quizzes and the answers. Its use is detailed in the **How to use** section. 

## Installation
- Step 1: Download the folder by clicking on "Clone or download" button, and unzip it into the folder you want to put in 
- Step 2: Create a shortcut to yourFolder/HygioQuizz/src/Hygi0Quizz.htm on your desktop, to make the launch simpler
- Step 3: Modify the quizzes.js file (*at yourFolder/HygioQuizz/src/quizzes.js*) with your favorite text editor to specify your own questions and answers
- Step 4: Click on the shortcut to Hygi0Quizz.htm to launch the application and play as much as you want

## How to use
### Use Hygi0Quizz feature:


### Use CheckQuizzes feature:
This is a file to **see all the questions and answers stored in quizzes.js**, useful if you want to check the questions in a prettier view than directly in the quizzes.js file.  
  
You launch it by clicking on **yourFolder/HygioQuizz/src/CheckQuizzes.htm**, that will launch it in your web browser and show the first question of the quizzes.js file (question 0).  
  
To see the next question and answers, you click on the link "Goto question X".  
Technically, the index of the question shown in the page is the value of `$_GET['n']`, so to see directly question number K, just add `?n=K` at the end of the url in the browser.  
  
- Example 1: You just launched CheckQuizzes and want to see the question number 5, you do as so: 

- Example 2: You launched CheckQuizzes and went to question number 4, you want to see question number 2, you do as so: 

- Example 3: You launched CheckQuizzes and went to question number 4, you want to see question number 7, you do as so: 






