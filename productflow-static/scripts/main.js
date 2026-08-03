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
console.log(
  "All tasks finished:",
  hasAllTasksFinished,
  typeof hasAllTasksFinished,
);
const areRemainingTasks = tasksLeft > finishedTasks;
console.log(
  "Are remaining tasks greater than finished:",
  areRemainingTasks,
  typeof areRemainingTasks,
);

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
const priorityLevel = "High";

if (projectIsOverdue && priorityLevel === "High") {
  console.log("Critical risk");
} else if (projectIsOverdue || openTasksCount2 > 10) {
  console.log("At risk");
} else {
  console.log("On track");
}

const isUserOwner = false;
const isUserAdmin = true;
const projectBlocked = false;
const canEditProject = (isUserOwner || isUserAdmin) && !projectBlocked;

if (canEditProject) {
  console.log("Editing allowed");
} else {
  console.log("Editing denied");
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

const isFormValid = true;
const hasUnsavedChanges = true;
const isFormSubmitting = false;
const canSaveDraft = isFormValid && hasUnsavedChanges && !isFormSubmitting;

if (canSaveDraft) {
  console.log("Save draft enabled");
} else {
  console.log("Save draft disabled");
}

const status = "paused";

if (status === "active") {
  console.log("Project is active");
} else if (status === "paused") {
  console.log("Project is paused");
} else if (status === "archived") {
  console.log("Project is archived");
} else {
  console.log("Unknown project status");
}

const completionPercent = 100;
let statusText;

if (completionPercent === 100) {
  statusText = "Completed";
} else if (completionPercent >= 50 && completionPercent <= 99) {
  statusText = "In progress";
} else {
  statusText = "Just started";
}

console.log(statusText);

// Day 18 — Functions
function getProjectName(projectName) {
  return `Project: ${projectName}`;
}
console.log(getProjectName("User onboarding redesign"));
console.log(getProjectName("Analytics dashboard update"));

function calculateTotalTasks(activeProjects, averageTasks) {
  return activeProjects * averageTasks;
}
console.log(calculateTotalTasks(4, 3));
console.log(calculateTotalTasks(5, 6));

function getTasksLeft(totalTasks, finishedTasks) {
  return totalTasks - finishedTasks;
}
console.log(getTasksLeft(12, 5));
console.log(getTasksLeft(20, 20));
console.log(getTasksLeft(10, 3));

function getProgressPercentage(finishedTasks, totalTasks) {
  return (finishedTasks / totalTasks) * 100;
}
console.log(getProgressPercentage(5, 12));
console.log(getProgressPercentage(10, 20));
console.log(getProgressPercentage(3, 4));
console.log(getProgressPercentage(0, 0));

function getWorkload(openTasksCount) {
  if (openTasksCount > 15) {
    return "High workload";
  } else if (openTasksCount >= 8 && openTasksCount <= 15) {
    return "Medium workload";
  } else {
    return "Low workload";
  }
}
console.log(getWorkload(12));
console.log(getWorkload(20));
console.log(getWorkload(4));

function getProjectRiskStatus(
  projectIsOverdue,
  openTasksCount2,
  priorityLevel,
) {
  if (projectIsOverdue && priorityLevel === "High") {
    return "Critical risk";
  } else if (projectIsOverdue || openTasksCount2 > 10) {
    return "At risk";
  } else {
    return "On track";
  }
}
console.log(getProjectRiskStatus(true, 9, "High"));
console.log(getProjectRiskStatus(false, 12, "Low"));
console.log(getProjectRiskStatus(false, 3, "Medium"));

function canUserEditProject(isUserOwner, isUserAdmin, projectBlocked) {
  const canEditProject = (isUserOwner || isUserAdmin) && !projectBlocked;
  return canEditProject;
}

const firstEditCheck = canUserEditProject(false, true, false);

if (firstEditCheck) {
  console.log("allowed");
} else {
  console.log("denied");
}

const secondEditCheck = canUserEditProject(false, false, false);

if (secondEditCheck) {
  console.log("allowed");
} else {
  console.log("denied");
}

const thirdEditCheck = canUserEditProject(true, false, true);

if (thirdEditCheck) {
  console.log("allowed");
} else {
  console.log("denied");
}

function getProjectStatus(status) {
  switch (status) {
    case "active":
      return "Project is active";
    case "paused":
      return "Project is paused";
    case "archived":
      return "Project is archived";
    default:
      return "Unknown project status";
  }
}
console.log(getProjectStatus("paused"));
console.log(getProjectStatus("active"));
console.log(getProjectStatus("archived"));
console.log(getProjectStatus("unexpected"));

function getProjectSummary(projectName, totalTasks, finishedTasks) {
  const remainingTasks = getTasksLeft(totalTasks, finishedTasks);
  return `${projectName}: ${finishedTasks} completed, ${remainingTasks} remaining.`;
}

console.log(getProjectSummary("User onboarding redesign", 12, 5));

// Day 19 — Arrays

const projectsNames = [
  "User onboarding redesign",
  "Analytics dashboard update",
  "Hypothesis tracking system",
];
console.log(projectsNames.length);
console.log(projectsNames, typeof projectsNames);
console.log(projectsNames[0]);
console.log(projectsNames[1]);
console.log(projectsNames[2]);
console.log(projectsNames[10]);

const firstProject = projectsNames[0];
const lastProject = projectsNames[projectsNames.length - 1];

console.log(firstProject);
console.log(lastProject);

projectsNames[1] = "Analytics dashboard redesign";
console.log(projectsNames);

const newLengthProjectsNames = projectsNames.push("Mobile onboarding research");
console.log(newLengthProjectsNames);
console.log(projectsNames);

const newLengthProjectsNames2 = projectsNames.unshift("ProductFlow foundation");
console.log(newLengthProjectsNames2);
console.log(projectsNames);

const removedLastProject = projectsNames.pop();
console.log(removedLastProject);
console.log(projectsNames);

const removedFirstProject = projectsNames.shift();
console.log(removedFirstProject);
console.log(projectsNames);

const statuses = ["Active", "Paused", "Archived"];
console.log(statuses[1]);
statuses[1] = "In progress";
statuses.push("Done");
console.log(statuses);
const removedLastStatus = statuses.pop();
console.log(removedLastStatus);
console.log(statuses);

function getItemCount(items) {
  return items.length;
}
console.log(getItemCount(statuses));
console.log(getItemCount(projectsNames));
console.log(getItemCount([]));

function getFirstItem(items) {
  return items[0];
}
console.log(getFirstItem(statuses));
console.log(getFirstItem(projectsNames));
console.log(getFirstItem([]));

function getLastItem(items) {
  const lastItem = items[items.length - 1];
  return lastItem;
}
console.log(getLastItem(statuses));
console.log(getLastItem(projectsNames));
console.log(getLastItem([]));

const tasks = [
  "Prepare interview questions",
  "Review dashboard wireframes",
  "Document first hypothesis",
];
const newUrgentTaskFirst = tasks.unshift("Fix production issue");
const newUrgenTaksLast = tasks.push("Update project notes");
const currentTask = tasks.shift();
const deferredTask = tasks.pop();
console.log(currentTask);
console.log(deferredTask);
console.log(tasks);
console.log(tasks.length);

// Day 20 — Loops

const newProjectNames = [
  "User onboarding redesign",
  "Analytics dashboard redesign",
  "Hypothesis tracking system",
  "Mobile onboarding research",
];

for (let index = 0; index < newProjectNames.length; index += 1) {
  console.log(`Project ${index + 1}: ${newProjectNames[index]}`);
}

const numbers = [5, 4, 3, 6];
console.log(newProjectNames.length === numbers.length);

for (let index = 0; index < numbers.length; index += 1) {
  console.log(`${newProjectNames[index]} has ${numbers[index]} open tasks`);
}

let totalSum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  totalSum += numbers[index];
}
console.log(totalSum);

const averageOpenTasks =
  newProjectNames.length > 0 ? totalSum / newProjectNames.length : 0;

console.log(`Average open tasks: ${averageOpenTasks}`);

let highWorkloadProjectCount = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 4) {
    highWorkloadProjectCount += 1;
    console.log(`High workload project: ${newProjectNames[index]}`);
  }
}
console.log(`High workload projects: ${highWorkloadProjectCount}`);

const statuses2 = ["Active", "Active", "Paused", "Active"];
for (let index = 0; index < statuses2.length; index++) {
  console.log(
    `${newProjectNames[index]} — ${statuses2[index]} — ${numbers[index]} tasks`,
  );
}

let activeCount = 0;
for (let index = 0; index < statuses2.length; index++) {
  if (statuses2[index] === "Active") {
    activeCount++;
  }
}
console.log(`Active projects: ${activeCount}`);

function calculateSum(numbers) {
  let accumulator = 0;

  for (let index = 0; index < numbers.length; index++) {
    accumulator += numbers[index];
  }

  return accumulator;
}
console.log(calculateSum(numbers));

// 2. Массив [1, 2, 3]
console.log(calculateSum([1, 2, 3])); // Результат: 6

// 3. Пустой массив []
console.log(calculateSum([])); // Результат: 0

function getStatus(statuses2, status) {
  let counter = 0;

  for (let index = 0; index < statuses2.length; index++) {
    if (statuses2[index] === status) {
      counter++;
    }
  }

  return counter;
}
console.log(getStatus(statuses2, "Active")); // Выведет: 3
console.log(getStatus(statuses2, "Paused")); // Выведет: 1
console.log(getStatus(statuses2, "Archived")); // Выведет: 0

const projectsMassive = [
  "User onboarding redesign",
  "Analytics dashboard redesign",
  "Hypothesis tracking system",
];

function getBuildList(projectsMassive) {
  let accumulator = "";

  for (let index = 0; index < projectsMassive.length; index++) {
    const num = index + 1;
    const element = projectsMassive[index];
    accumulator += num + ". " + element + "\n";
  }
  return accumulator;
}
console.log(getBuildList(projectsMassive));

let firstPausedProject = null;
for (let index = 0; index < statuses2.length; index++) {
  const currentStatus = statuses2[index];
  if (currentStatus === "Paused") {
    firstPausedProject = newProjectNames[index];
    break;
  }
}
console.log(firstPausedProject);

function findMaximum(arr) {
  // Считать первый элемент текущим максимумом
  let max = arr[0];

  // Начать цикл со второго элемента
  for (let i = 1; i < arr.length; i++) {
    // Если текущий элемент больше максимума
    if (arr[i] > max) {
      // Обновить максимум
      max = arr[i];
    }
  }

  // После цикла вернуть максимум
  return max;
}

console.log(findMaximum([5, 4, 3, 6]));
console.log(findMaximum([10, 2, 8]));
console.log(findMaximum([-5, -2, -10]));

// Day 21 — Objects
const project1 = {
  name: "User onboarding redesign",
  status: "Active",
  priority: "High",
  openTasks: 5,
  owner: "Product team",
  isOverdue: false,
};
console.log(project1, typeof project1);
console.log(project1.name);
console.log(project1.openTasks);
console.log(project1.isOverdue);

console.log(`Project name: ${project1.name}`);
console.log(`Project status: ${project1.status}`);
console.log(`Project priority: ${project1.priority}`);
console.log(`Project owner: ${project1.owner}`);

const requestedProperty = "priority";
console.log(project1[requestedProperty]);

project1.status = "Paused";
console.log(project1.status);

project1.openTasks = 7;
console.log(project1.openTasks);

project1.priority = "Medium";
console.log(project1.priority);

project1.startDate = "2026-07-01";
project1.teamVisibility = true;
project1.completedTasks = 3;
console.log(project1.startDate);
console.log(project1.teamVisibility);
console.log(project1.completedTasks);
console.log(project1);

project1.temporaryValue = "string";
console.log(project1.temporaryValue);
delete project1.temporaryValue;
console.log(project1.temporaryValue);
const isKeyExist = "temporaryValue" in project1;
console.log("Ключ существует в объекте?:", isKeyExist);

function getProjectSummaryObject(project) {
  return `${project.name} - ${project.status} - ${project.priority} priority - ${project.openTasks} open tasks`;
}
console.log(getProjectSummaryObject(project1));

function getRemainingTasks(project) {
  const remainingTasks = project.openTasks - project.completedTasks;
  return remainingTasks;
}
const totalRemaining = getRemainingTasks(project1);
console.log(`Remaining tasks: ${totalRemaining}`);

function getRiskInfo(project) {
  if (project.isOverdue || project.openTasks > 10) {
    return true;
  } else {
    return false;
  }
}
const onRisk = getRiskInfo(project1);
console.log(onRisk);

function updateProjectStatus(project, newStatus) {
  project.status = newStatus;
}
console.log(project1.status);
updateProjectStatus(project1, "Active");
console.log(project1.status);

const project2 = {
  name: "Analytics dashboard redesign",
  status: "Active",
  priority: "Medium",
  openTasks: 4,
  completedTasks: 2,
  owner: "Design team",
  isOverdue: true,
};

console.log(getProjectSummaryObject(project2));
console.log(getRemainingTasks(project2));
console.log(getRiskInfo(project2));

function getKey(project2, name) {
  return project2[name];
}
console.log(getKey(project2, "name"));
console.log(getKey(project2, "owner"));
console.log(getKey(project2, "openTasks"));
console.log(getKey(project2, "unknownProperty"));

const keys = Object.keys(project1);
console.log("Массив ключей:", keys);
console.log("Количество ключей:", keys.length);

// Day 22 — Arrays of objects
const allProjects = [
  {
    id: 1,
    name: "User onboarding redesign",
    status: "Active",
    priority: "High",
    openTasks: 5,
    completedTasks: 3,
    owner: "Product team",
    isOverdue: false,
  },
  {
    id: 2,
    name: "Analytics dashboard redesign",
    status: "Active",
    priority: "Medium",
    openTasks: 4,
    completedTasks: 2,
    owner: "Design team",
    isOverdue: true,
  },
  {
    id: 3,
    name: "Hypothesis tracking system",
    status: "Paused",
    priority: "Medium",
    openTasks: 3,
    completedTasks: 1,
    owner: "Research team",
    isOverdue: false,
  },
  {
    id: 4,
    name: "Mobile onboarding research",
    status: "Active",
    priority: "Low",
    openTasks: 6,
    completedTasks: 4,
    owner: "Research team",
    isOverdue: false,
  },
];
console.log(allProjects);
console.log(allProjects.length);

console.log(allProjects[0].name);
console.log(allProjects[1].status);
console.log(allProjects[2].owner);
console.log(allProjects[3].openTasks);

const secondProject = allProjects[1];

console.log(secondProject.name);
console.log(secondProject.priority);
console.log(secondProject.isOverdue);

for (let index = 0; index < allProjects.length; index += 1) {
  const currentProject = allProjects[index];

  console.log(
    `${index + 1}. ${currentProject.name} — ${currentProject.status} — ${currentProject.openTasks} open`,
  );
}

function getTotalTasks(allProjects) {
  let totalOpenTasks = 0;

  for (let index = 0; index < allProjects.length; index += 1) {
    const currentProject = allProjects[index];
    totalOpenTasks += currentProject.openTasks;
  }

  return totalOpenTasks;
}
const resultOpenTasks = getTotalTasks(allProjects);
console.log(`Total open tasks: ${resultOpenTasks}`);

function getCompletedTasks(allProjects) {
  let totalCompletedTasks = 0;

  for (let index = 0; index < allProjects.length; index += 1) {
    const currentProject = allProjects[index];
    totalCompletedTasks += currentProject.completedTasks;
  }

  return totalCompletedTasks;
}
const resultCompletedTasks = getCompletedTasks(allProjects);
console.log(`Total completed tasks: ${resultCompletedTasks}`);

function getAverageTaskPerProject(allProjects) {
  if (allProjects.length === 0) return 0;

  let totalOpenTasks = 0;
  for (let index = 0; index < allProjects.length; index += 1) {
    const currentProject = allProjects[index];
    totalOpenTasks += currentProject.openTasks;
  }

  return totalOpenTasks / allProjects.length;
}
const resultAverageTasks = getAverageTaskPerProject(allProjects);
console.log(`Average open tasks: ${resultAverageTasks}`);

let activeProjectsCount = 0;
for (let index = 0; index < allProjects.length; index += 1) {
  const currentProject = allProjects[index];

  if (currentProject.status === "Active") {
    activeProjectsCount += 1;
  }
}
console.log(`Active projects: ${activeProjectsCount}`);

function getProjectsWithPriorityHigh(allProjects) {
  let priorityHigh = 0;

  for (let index = 0; index < allProjects.length; index += 1) {
    const currentProject = allProjects[index];

    if (currentProject.priority === "High") {
      return currentProject;
    }
  }

  return null;
}
const highPriorityProject = getProjectsWithPriorityHigh(allProjects);
if (highPriorityProject !== null) {
  console.log(`High priority project: ${highPriorityProject.name}`);
} else {
  console.log("High priority project not found");
}

function getOverdueProject(allProjects) {
  let overdueProject = 0;

  for (let index = 0; index < allProjects.length; index += 1) {
    const currentProject = allProjects[index];

    if (currentProject.isOverdue === true) {
      return currentProject;
    }
  }

  return null;
}
const overdueProject = getOverdueProject(allProjects);
if (overdueProject !== null) {
  console.log(`Overdue project: ${overdueProject.name}`);
} else {
  console.log("Overdue project not found");
}

let overdueProjectsCount = 0;
for (let index = 0; index < allProjects.length; index += 1) {
  const currentProject = allProjects[index];

  if (currentProject.isOverdue) {
    overdueProjectsCount += 1;
  }
}
console.log(`Overdue projects: ${overdueProjectsCount}`);

function findProjectById(allProjects, targetId) {
  let foundProject = null;

  for (let index = 0; index < allProjects.length; index += 1) {
    const currentProject = allProjects[index];
    if (currentProject.id === targetId) {
      foundProject = currentProject;

      break;
    }
  }

  return foundProject;
}
const result3 = findProjectById(allProjects, 3);

function updateProjectStatus(allProjects, targetId, newStatus) {
  const projectToUpdate = findProjectById(allProjects, targetId);

  if (projectToUpdate !== null) {
    projectToUpdate.status = newStatus;
    return true;
  }

  return false;
}

console.log("--- Проверка ID 3 ---");

const projectBeforeUpdate = findProjectById(allProjects, 3);

if (projectBeforeUpdate !== null) {
  console.log(`До вызова: ${projectBeforeUpdate.status}`);
}

const updateResult = updateProjectStatus(allProjects, 3, "Active");

console.log(`Результат функции: ${updateResult}`);

const projectAfterUpdate = findProjectById(allProjects, 3);

if (projectAfterUpdate !== null) {
  console.log(`После вызова: ${projectAfterUpdate.status}`);
}

console.log("--- Проверка ID 99 ---");

const missingProjectUpdateResult = updateProjectStatus(
  allProjects,
  99,
  "Active",
);

console.log(`Результат функции: ${missingProjectUpdateResult}`);
console.log("Ошибок нет");

updateProjectStatus(allProjects, 3, "Paused");

const restoredProject = findProjectById(allProjects, 3);

if (restoredProject !== null) {
  console.log(`Restored status: ${restoredProject.status}`);
}


// Day 23 — Modern array methods

allProjects.forEach((project, index) => {
  console.log(`${index + 1}. ${project.name} - ${project.status}`);
});

const newAllProjects = allProjects.map((project) => {
  return project.name;
});
console.log(newAllProjects);
console.log(newAllProjects.length);

const projectTaskSummary = allProjects.map((project) => {
  return `${project.name} — ${project.openTasks} open tasks`;
});
console.log(projectTaskSummary.join('\n'));

const activeStatus = allProjects.filter((project) => {
  return project.status === "Active";
});
console.log(activeStatus);
console.log(activeStatus.length);

const researchTeamOwner = allProjects.filter((project) => {
  return project.owner === "Research team";
});
console.log(researchTeamOwner);
console.log(researchTeamOwner.length);
console.log("Project names:");
researchTeamOwner.forEach((project) => {
  console.log(project.name); 
});

const projectID3 = allProjects.find((project) => {
  return project.id === 3;
});
if (projectID3) {
  console.log(projectID3.name);
} else {
  console.log("Project not found");
}

const projectID3Status = allProjects.find((project) => {
  return project.id === 3;
});

if (projectID3Status) {

  console.log(`Before: ${projectID3Status.status}`);
  
  projectID3.status = "Active";
  
  console.log(`After: ${projectID3Status.status}`);
  
  const projectInArray = allProjects.find(project => project.id === 3);
  console.log(`Array value: ${projectInArray.status}`);
  
  projectID3Status.status = "Paused";
  console.log(`Restored: ${projectID3Status.status}`);

} else {
  console.log("Project with ID 3 not found in the allProjects array.");
}