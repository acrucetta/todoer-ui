utils/csvManager.ts
import { Task, Status } from "../data/Task";
import { readFileSync, writeFileSync } from "fs";
import Papa from "papaparse";

const csvFilePath = "tasks.csv";

export function readTasksFromCSV(): Task[] {
  const csvFileContent = readFileSync(csvFilePath, "utf-8");
  const { data } = Papa.parse(csvFileContent, { header: true, skipEmptyLines: true });
  return data.map((row: any) => {
    const tags = row.tags.split(",");
    return new Task(row.id, row.description, tags, row.due, row.timestamp, row.priority, row.status as Status);
  });
}

export function writeTasksToCSV(tasks: Task[]): void {
  const csvContent = Papa.unparse(tasks.map((task) => {
    return {
      ...task,
      tags: task.tags.join(","),
    };
  }));
  writeFileSync(csvFilePath, csvContent, "utf-8");
}

