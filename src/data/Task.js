export class Task {
  constructor(id, description, tags, due, timestamp, priority, status) {
    this.id = id;
    this.description = description;
    this.tags = tags;
    this.due = due;
    this.timestamp = timestamp;
    this.priority = priority;
    this.status = status;
  }
}

export const Status = {
  Todo: "Todo",
  Done: "Done",
  Hold: "Hold",
  Blocked: "Blocked"
}

export const Priority = {
  Low: "Low",
  Medium: "Medium",
  High: "High"
}

export const Due = {
  Today: "Today",
  Tomorrow: "Tomorrow",
  ThisWeek: "ThisWeek",
  NextWeek: "NextWeek",
  Overdue: "Overdue",
}
