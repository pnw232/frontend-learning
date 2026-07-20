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

// Day 16 — Operators, strings and numbers
const activeProjects = 4;
const averageTasks = 3;
const totalTasks = activeProjects * averageTasks;
console.log(`${activeProjects} projects contain ${totalTasks} tasks in total`);

const finishedTasks = 5;
const tasksLeft = totalTasks - finishedTasks;
console.log(`${tasksLeft} tasks remain.`);

const finishedTasksPercent = (finishedTasks / totalTasks) * 100;
console.log(`Progress: ${finishedTasksPercent}%`);

const isActiveProject = activeProjects > 0;
console.log("Has active projects:", isActiveProject, typeof isActiveProject);
const hasAllTasksFinished = finishedTasks === totalTasks;
console.log("All tasks finished:", hasAllTasksFinished, typeof hasAllTasksFinished);
const areRemainingTasks = tasksLeft > finishedTasks;
console.log("Are remaining tasks greater than finished:", areRemainingTasks, typeof areRemainingTasks);


const projectName = "User onboarding redesign";
const projectStatus = "Active";
const projectPriority = "High";
const projectOwner = "Product team";
const finalString = `${projectName} is an ${projectStatus} project with ${projectPriority} priority, owned by ${projectOwner}.`;
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


// Day 17 — Conditional statements
const openTasksCount = 12;

if (openTasksCount > 15) {
  console.log("High workload");
} else if (openTasksCount >= 8 && openTasksCount <= 15) {
  console.log("Medium workload");
} else {
  console.log("Low workload");
}

const openTasksCount2 = 5;
const projectIsOverdue = true;
const priotityLevel = "High";

if (projectIsOverdue && priotityLevel === "High") {
  console.log("Critical risk")
} else if (projectIsOverdue && openTasksCount2 > 10) {
  console.log("At risk");
} else {
  console.log("On track");
}

const isUserOwner = false;
const isUserAdmin = true;
const projectBlocked = false;

if ((isUserOwner || isUserAdmin) && projectBlocked) {
  const canEditProject = true;
  console.log(canEditProject);
} else {
  console.log("Editing allowed" || "Editing denied");
}


const projectNameNew = "User onboarding redesign";

if (projectNameNew) {
  console.log(`Project title is available`);
} else {
  console.log(`Project title is missing`);
}

const projectChosen = null;
if (projectChosen) {
  console.log(`Selected project exists`);
} else {
  console.log(`No project selected`);
}

const validForm = true;
const noSavedChanges = true;
const formSend = false;
const canSaveDraft = true;

if (validForm && noSavedChanges && formSend) {
  console.log(canSaveDraft);
} else {
  console.log("Save draft enabled" || "Save draft disabled");
}

const status = "paused";

if (status === "active") {
  console.log("Project is active");
} else if (status === "paused") {
  console.log("Project is paused");
} else if (status === "Archived") {
  console.log("Project is archived");
} else {
  console.log("Unknown project status");
}

let completionPercent = 100;
if (completionPercent === 100) {
  console.log("Completed");
} else if (completionPercent >= 50 && completionPercent <= 99) {
  console.log("In progress");
} else {
  console.log("Just started");
}