/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a version control system used to manage projects. It can be used to update files and keep records of past iterations of whatever files are stored within the repo. very handy for coding";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "Git hub is a hosting site used by developers to store/share their code and utilze the version control while collaborating with others. It allowes for repos to be shared and stored in the cloud rather than your local system. It also allows for collaboration and for multiple people to push and pull from said repos.";

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "git init is a terminal command which will initilize/create a repo within the folder you are in,";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "git clone will clone the working repo and create a new directory for it. Could be utilized in version control as cloing the repo can allow you to make changes that will not effect the original code which you could then push back.";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = "Git status allows for you to see the satus of you local working repo and to see the staging area. used with git add and git commit you will be able to see the staged files whihc will be changed once you push.";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

const gitAddDefinition = "git add moves the changed files you are working with to the staging area, essentailly prepping them to be pushed. "
let gitAddCode = "git add ."; //will add 'this' or all files within the working repo to the staging area

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const gitCommitDefinitionq = 'git commit takes a snapshot of the staging area and commits it to the projects history, can be used with -m flag to add a comment, the --amend flag can also be used to amend of alter the recently made commit. amend would look something like: git commit --amend -m"comment"';
let gitCommitCode = 'git commit -m"initial commit"';

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition = 'git push is used to initially upload your(local) repo to a remote repo(i.e. github) and later on to upload commits/changes in a similar manner';