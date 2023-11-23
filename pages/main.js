const Main = () => {
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('max-w-md', 'mx-auto', 'flex', 'p-6', 'bg-gray-100', 'mt-10', 'rounded-lg', 'shadow-xl');

  const heading = document.createElement('h1');
  heading.classList.add('text-2xl');
  heading.textContent = 'To Do List';

  const input = document.createElement('input');
  input.classList.add('w-full', 'px-4', 'py-2', 'mt-2', 'text-gray-700', 'bg-white', 'rounded');
  input.placeholder = 'Add a new task here';

  const addButton = document.createElement('button');
  addButton.classList.add('px-4', 'py-2', 'mx-2', 'text-white', 'bg-blue-500', 'rounded');
  addButton.textContent = 'Add';

  const tasksContainer = document.createElement('ul');
  tasksContainer.classList.add('flex', 'items-center', 'justify-between', 'mt-4', 'p-4', 'bg-white', 'rounded', 'shadow');

  containerDiv.appendChild(heading);
  containerDiv.appendChild(input);
  containerDiv.appendChild(addButton);
  containerDiv.appendChild(tasksContainer);

  const addTask = () => {
    const taskTest = input.value.trim();

    if (taskTest !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskTest;
      tasksContainer.appendChild(taskItem);
      input.value = '';
    }
  };

  addButton.addEventListener('click', addTask);

  const appContainer = document.getElementById('app'); 
  appContainer.appendChild(containerDiv);
}

export default Main;
