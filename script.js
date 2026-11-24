document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent = new Date().getFullYear();

  const projectsContainer = document.getElementById('projects');
  const featuredContainer = document.getElementById('featured-projects');
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function openModal(project){
    modalBody.innerHTML = project.details;
    let heading = modalBody.querySelector('h3');
    if (!heading) {
      heading = document.createElement('h3');
      heading.textContent = project.title;
      modalBody.prepend(heading);
    }
    heading.id = 'modal-title';
    wireGalleryZoom();
    modal.showModal();
    modal.scrollTop = 0;
  }

  function wireGalleryZoom(){
    const galleryFigures = modalBody.querySelectorAll('.project-gallery figure');
    galleryFigures.forEach((figure) => {
      const image = figure.querySelector('img');
      if (!image) return;

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'gallery-zoom';
      button.setAttribute('aria-label', `Zoom screenshot: ${image.alt}`);
      button.setAttribute('aria-pressed', 'false');
      image.replaceWith(button);
      button.append(image);

      function setZoom(zoomed) {
        figure.classList.toggle('is-zoomed', zoomed);
        button.setAttribute('aria-pressed', String(zoomed));
      }

      button.addEventListener('click', () => setZoom(!figure.classList.contains('is-zoomed')));
      button.addEventListener('blur', () => setZoom(false));
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && figure.classList.contains('is-zoomed')) {
          event.preventDefault();
          setZoom(false);
        }
      });
    });
  }
  modalClose.addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => {
    if (!modal.open) modalBody.replaceChildren();
  });
  modal.addEventListener('click', (event) => {
    if (event.target !== modal) return;
    const bounds = modal.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      modal.close();
    }
  });

  const featured = portfolioProjects.filter(project => project.featured);
  const software = portfolioProjects.filter(project => !project.featured);
  software.sort((first, second) => new Date(second.date) - new Date(first.date));

  [...featured, ...software].forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div>
        <h4>${project.title}</h4>
        ${project.date ? `<p class="muted">${project.date}</p>` : ''}
      </div>
      <p>${project.summary}</p>
      <p class="project-actions">
        <button class="btn" type="button" aria-haspopup="dialog">Details</button>
        ${project.link ? `<a class="btn" href="${project.link}" target="_blank" rel="noopener">View</a>` : ''}
      </p>
    `;
    const details = card.querySelector('button');
    details.setAttribute('aria-label', `Details: ${project.title}`);
    details.addEventListener('click', () => {
      details.focus({ preventScroll: true });
      openModal(project);
    });
    (project.featured ? featuredContainer : projectsContainer).appendChild(card);
  });
});
