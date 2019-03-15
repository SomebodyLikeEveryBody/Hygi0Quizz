# Hygi0Quizz
*A Quiz Game in [HTML/Javascript-jQuery] to train people to hygiene recommendations*

## Explanation
The purpose of this application is to easily learn hygiene recommendations of the structure you work at.  
I noticed that application of hygiene measures at work by operators is something hard because of 3 things
1) The learning of the hygiene recommendations of the structure by the operators, that could be hard and unpleasing
2) The discordance between theorical cases and reality, when the scale of values of the recommendations doesn't meet the operators' ones
3) The logistical difficulty of applying the recommandations, due to lack of time or resources

This application has the purpose to solve the first point by **decreasing the constraint to overcome to learn the recommendations**, this by using concretes situation and trial and error learning strategy, on a funny web application.
This also have the purpose to affect positively the second point by **encourage dialog between operators and hygiene team** about specific hygiene cases, problems encountered in the unit, scales of values, etc.

## Technical informations
This is a web application exclusively in front-end, using html and jQuery. This choice has been made to have something really simple to deploy. You don't need an internet connection or any server, the only thing you need is a web browser. You put the directory on the computer, launch it in the web browser and play, that's it.  
  
There's 2 parts in the application: 
- A **quizz part**, embodied by the file **"quizzes.js"**, that contain all the quizzes and the explanations of each answers in the form of a JS Object, file that can be modified manually or with a simplifying tool to update quizzes and answers with recommendations evolutions *(A tool to generate the quizzes file from a Graphical User Interface is comming soon)*
- A **technical part**, composed by files to run the application (Hygi0Quizz.htm, checkQuizzes.htm, ./resources/\*), that doesn't need to be modified.



