// import { FormEvent, useEffect, useState } from "react";
// import { remult } from "remult";
// import { Task } from '@/shared/task';
// import { TaskController } from "@/shared/TaskController";

// const taskRepo = remult.repo(Task);

// export default function Report() {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [newTaskTitle, setNewTaskTitle] = useState("")
//   useEffect(() => {
//     return taskRepo.liveQuery({
//        where :{
//         complete:undefined,
//        }
//     }).subscribe(info=>setTasks(info.applyChanges));
//   }, []); // Add an empty dependency array here

//   async function addTask(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     try {
//       const newTask = await taskRepo.insert({ title: newTaskTitle });
//       setTasks((tasks) => [...tasks, newTask]);
//       setNewTaskTitle("")
//     }
//     catch (error: any) {
//       alert(error.message)
//     }
//   }

//   async function setAllCompleted(complete: boolean) {
//    await TaskController.setAllCompleted(complete);
//   }

//   return (
//     <div className="content">
//       <h1>Test Todo Backend</h1>
//       <main>
//       {taskRepo.metadata.apiInsertAllowed() &&   (<form className="mt-3" onSubmit={e => addTask(e)}>
//           <input className="form-control" value={newTaskTitle} placeholder="What need to be done" onChange={(e) => setNewTaskTitle(e.target.value)} />
//           <button className="btn btn-success btn-sm mt-2">Add</button>
//         </form>)}
//         {tasks.map((task) => {

//           async function deleteTask() {
//             try {
//               await taskRepo.delete(task);
//               setTasks((tasks) => tasks.filter((t) => t !== task));
//             }
//             catch (error: any) {
//               alert(error.message)
//             }
//           }

//           function updateTask(newValue: Task) {
//             setTasks((tasks) =>
//               tasks.map((task) => (task.id === newValue.id ? newValue : task))
//             );
//           }
//           async function setCompleted(complete: boolean) {
//             updateTask(await taskRepo.save({ ...task, complete }))
//           }
//           function setTitle(title: string) {
//             updateTask({ ...task, title })
//           }
//           async function doSaveTask() {
//             try {
//               updateTask(await taskRepo.save(task));
//             } 
//             catch (error:any) {
//               alert(error.message)
//             }
//           }
//           return (
//             <div key={task.id}>
//               <input className="mt-3 me-3" type="checkbox" checked={task.complete} onChange={e => setCompleted(e.target.checked)} />
//               <input value={task.title} onChange={e => setTitle(e.target.value)} />
//               <button className="btn btn-success btn-sm ms-4" onClick={() => doSaveTask()} >Save</button>
//               {taskRepo.metadata.apiDeleteAllowed() && (<button className="btn btn-success btn-sm ms-4" onClick={() => deleteTask()}>Delete</button>)}
//             </div>
//           );
//         })}
//         <div className="mt-4">
//           <button className="btn btn-success btn-sm me-3" onClick={() => setAllCompleted(true)}> Set all complete</button>
//           <button className="btn btn-success btn-sm" onClick={() => setAllCompleted(false)}> Set all uncomplete</button>
//         </div>
//       </main>
//     </div>
//   );
// }
import { FormEvent, useEffect, useState } from "react";
import { remult } from "remult";
import { Product } from "@/shared/product";

const productRepo = remult.repo(Product);

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newProductQty, setNewProductQty] = useState(0);

  useEffect(() => {
    return productRepo.liveQuery({}).subscribe((info) =>
      setProducts(info.applyChanges)
    );
  }, []);

  async function addProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const newProduct = await productRepo.insert({
        prod_name: newProductName,
        prod_price: newProductPrice,
        prod_qty: newProductQty,
      });
      setProducts((products) => [...products, newProduct]);
      setNewProductName("");
      setNewProductPrice(0);
      setNewProductQty(0);
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function deleteProduct(product: Product) {
    try {
      await productRepo.delete(product);
      setProducts((products) => products.filter((p) => p !== product));
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className="content">
      <h1>Product Management</h1>
      <main>
        <form className="mt-3" onSubmit={(e) => addProduct(e)}>
          <input
            className="form-control"
            value={newProductName}
            placeholder="Product Name"
            onChange={(e) => setNewProductName(e.target.value)}
            required
          />
          <input
            className="form-control mt-2"
            type="number"
            value={newProductPrice}
            placeholder="Product Price"
            onChange={(e) => setNewProductPrice(Number(e.target.value))}
            required
          />
          <input
            className="form-control mt-2"
            type="number"
            value={newProductQty}
            placeholder="Product Quantity"
            onChange={(e) => setNewProductQty(Number(e.target.value))}
            required
          />
          <button className="btn btn-success btn-sm mt-2">Add Product</button>
        </form>

        {products.map((product) => (
          <div key={product.prod_id}>
            <h2>{product.prod_name}</h2>
            <p>Price: {product.prod_price}</p>
            <p>Quantity: {product.prod_qty}</p>
            <button
              className="btn btn-success btn-sm"
              onClick={() => deleteProduct(product)}
            >
              Delete Product
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
