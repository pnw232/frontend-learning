console.log("ProductFlow JavaScript loaded");

const productName = "ProductFlow";
console.log(productName, typeof productName);

const version = 1.8;
console.log(version, typeof version);

let projectsAmount = 4;
console.log(projectsAmount, typeof projectsAmount);
projectsAmount = 5;
console.log(projectsAmount, typeof projectsAmount);

const jsOn = true;
console.log(jsOn, typeof jsOn);

const projectSelected = null;
console.log(projectSelected, typeof projectSelected);

// Day 16 — Operators, strings and numbers //
const activeProjects = 4;
const averageTasks = 3;
const totalTasks = activeProjects * averageTasks;
console.log(`${activeProjects} projects contain ${totalTasks} tasks in total`);

const finishedTasks = 5;
const tasksLeft = totalTasks - finishedTasks;
console.log(`${tasksLeft} tasks remain.`);

const finishedTasksPercent = (finishedTasks / totalTasks) * 100;
console.log(`Progress: ${finishedTasksPercent.toFixed(2)}%`);

const isActiveProject = true;
console.log("Has active projects:", isActiveProject > 0, typeof isActiveProject);
const hasAllTasksFinished = true;
console.log("All tasks finished:", hasAllTasksFinished === totalTasks, typeof hasAllTasksFinished);
const areRemainingTasks = true;
console.log("Are remaining tasks greater than finished:", tasksLeft > finishedTasks, typeof areRemainingTasks);


const projectName = "User onboarding redesign";
const projectStatus = "Active";
const projectPriority = "High";
const projectOwner = "Product team";
const finalString = `${projectName} is ${projectStatus} project with ${projectPriority} priority, owned by ${projectOwner}.`;
console.log(finalString);

let openTasks = 12;
console.log(openTasks);
openTasks -= 2;
console.log(openTasks);
openTasks += 1;
console.log(openTasks);

const newTasks = "8";
console.log(newTasks, typeof newTasks);

const newTasksNumber = Number(newTasks);
console.log(newTasksNumber, typeof newTasksNumber);
console.log(`Open tasks after form data: ${openTasks + newTasksNumber}`);

