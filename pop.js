const workContainer = document.querySelector('.works');
const projects = workContainer.getElementsByClassName('project');
const modal = document.querySelector('.modal-container');

for (let i = 0; i < projects.length; i += 1) {
  const projectBtn = projects[i].getElementsByClassName('btn');
  projectBtn[0].addEventListener('click', () => {
    modal.classList.remove('hiddenModal');
    modal.classList.toggle('showModal');
    document.querySelector('.bg-blur').style.display = 'block';
    modal.getElementsByTagName('h3')[0].textContent = projects[i].getElementsByTagName('h3')[0].textContent;
    modal.getElementsByClassName('project-img')[0].setAttribute('src', projects[i].getElementsByClassName('first-image')[0].getAttribute('src'));
    modal.getElementsByClassName('description')[0].textContent = projects[i].getElementsByTagName('p')[0].textContent;
    const projectStack = projects[i].getElementsByClassName('item-2 ani')[0];

    const modalProjectStack = modal.getElementsByClassName('project-tech-stack')[0];

    modalProjectStack.innerHTML = '';

    for (let i = 0; i < projectStack.getElementsByTagName('li').length; i += 1) {
      const content = projectStack.getElementsByTagName('li')[i].textContent;

      const a = document.createElement('a');
      a.textContent = content;
      const li = document.createElement('li');
      li.appendChild(a);

      modalProjectStack.appendChild(li);
    }

    modal.getElementsByClassName('close-modal')[0].addEventListener('click', () => {
      modal.classList.remove('showModal');
      modal.classList.toggle('hiddenModal');
      document.querySelector('.bg-blur').style.display = 'none';
    });
  });
}
