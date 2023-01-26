let workers = [
  { name: "João", salary: 3000, role: "Developer" },
  { name: "Maria", salary: 3500, role: "Designer" },
  { name: "Pedro", salary: 4000, role: "Manager" },
  { name: "Ana", salary: 4500, role: "Developer" },
  { name: "Lucas", salary: 5000, role: "QA" },
  { name: "Juliana", salary: 6000, role: "Director" }
];

let maxSalary = 0;
let maxWorker = {};

for (let i = 0; i < workers.length; i++) {
  if (workers[i].salary > maxSalary) {
      maxSalary = workers[i].salary;
      maxWorker = workers[i];
  }
}
console.log("O trabalhador com maior salário é " + maxWorker.name + " e ele é " + maxWorker.role);
