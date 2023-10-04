import { FormEvent, useEffect, useState } from "react";
import { remult } from "remult";
import { Task } from '@/shared/task';
import { TaskController } from "@/shared/TaskController";

const taskRepo = remult.repo(Task);

export default function Report() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("")
  useEffect(() => {
    return taskRepo.liveQuery({
       where :{
        complete:undefined,
       }
    }).subscribe(info=>setTasks(info.applyChanges));
  }, []); // Add an empty dependency array here

  async function addTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const newTask = await taskRepo.insert({ title: newTaskTitle });
      setTasks((tasks) => [...tasks, newTask]);
      setNewTaskTitle("")
    }
    catch (error: any) {
      alert(error.message)
    }
  }

  async function setAllCompleted(complete: boolean) {
   await TaskController.setAllCompleted(complete);
  }

  return (
    <div className="content">
      <h1>Test Todo Backend</h1>
      <main>
      {taskRepo.metadata.apiInsertAllowed() &&   (<form className="mt-3" onSubmit={e => addTask(e)}>
          <input className="form-control" value={newTaskTitle} placeholder="What need to be done" onChange={(e) => setNewTaskTitle(e.target.value)} />
          <button className="btn btn-success btn-sm mt-2">Add</button>
        </form>)}
        {tasks.map((task) => {

          async function deleteTask() {
            try {
              await taskRepo.delete(task);
              setTasks((tasks) => tasks.filter((t) => t !== task));
            }
            catch (error: any) {
              alert(error.message)
            }
          }

          function updateTask(newValue: Task) {
            setTasks((tasks) =>
              tasks.map((task) => (task.id === newValue.id ? newValue : task))
            );
          }
          async function setCompleted(complete: boolean) {
            updateTask(await taskRepo.save({ ...task, complete }))
          }
          function setTitle(title: string) {
            updateTask({ ...task, title })
          }
          async function doSaveTask() {
            try {
              updateTask(await taskRepo.save(task));
            } 
            catch (error:any) {
              alert(error.message)
            }
          }
          return (
            <div key={task.id}>
              <input className="mt-3 me-3" type="checkbox" checked={task.complete} onChange={e => setCompleted(e.target.checked)} />
              <input value={task.title} onChange={e => setTitle(e.target.value)} />
              <button className="btn btn-success btn-sm ms-4" onClick={() => doSaveTask()} >Save</button>
              {taskRepo.metadata.apiDeleteAllowed() && (<button className="btn btn-success btn-sm ms-4" onClick={() => deleteTask()}>Delete</button>)}
            </div>
          );
        })}
        <div className="mt-4">
          <button className="btn btn-success btn-sm me-3" onClick={() => setAllCompleted(true)}> Set all complete</button>
          <button className="btn btn-success btn-sm" onClick={() => setAllCompleted(false)}> Set all uncomplete</button>
        </div>
      </main>
    </div>
  );
}
