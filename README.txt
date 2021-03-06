# MathOfTheDead - Group 10

Math Of The Dead, an interactive brain game being developed by NGU (Never Give Up).


Our Team
Andrew Busto, Maks Fisli, Rachel Shellborn, Shane Jackson, and Vincent Lam.


Project Overview
NGU has designed this game to increase your mental math skills in a fun and unique way. The basis of the game is to use mathematical operations (addition, subtraction, multiplication, and division) to bring down an oncoming hoard of zombies.


Code Structure
Each of our pages is in a separate html file, which you will find in the general section of our folder.  We organize all other elements into sub-folders.  We are using Javascript and JQuery for nearly all game logic, CSS for styling, and mongoDB (specifically mLab) for the leaderboard database.


Technologies Used
The technologies we used for this project include: HTML, CSS, Javascript, jQuery, AJAX, mongoDB, Bootstrap, session variables for storing user info, and photoshop for graphic design.


Problems/Issues Encountered
- Code could have been organized better (more atomic methods and better method names)
- Communication with staying on the same page and pushing to git repo
- Understanding how the database would communicate with our site


Git Network Graph
https://github.com/rshellborn/MathOfTheDead/network


Our use of javascript is often object-oriented.  For example, the zombies themselves are objects.  

Though there were some issues encountered, we were able to fix them.  Some examples of solved issues include:
	-Database storing scores as strings, causing the leaderboard to be ranked improperly
	-Zombies spawning on top of each other
	-We had initially passed player data between screens through the url, which was awkward and ugly
	-General small problems caused by improper use of git

Feel free to test our game here:
https://docs.google.com/document/d/1KQ89PGxWgszh9Gb9hz7p6bB1E-CYaWPQUy8DVcYxqqo/edit?usp=sharing
