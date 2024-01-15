export const fetchTodoData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: "something went wrong" };
    }

    return data;
  } catch (error) {
    return { error: "something went wrong" };
  }
};

//  const fetchTodoData = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/todos"
//   );

//   console.log(response);
// };
