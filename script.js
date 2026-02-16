document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent = new Date().getFullYear();

  const projectsContainer = document.getElementById('projects');
  const latestContainer = document.getElementById('latest');
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function openModal(html){
    modalBody.innerHTML = html;
    modal.setAttribute('aria-hidden','false');
    wireGalleryZoom();
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modalBody.innerHTML = '';
  }

  function wireGalleryZoom(){
    const galleryFigures = modalBody.querySelectorAll('.project-gallery figure');
    if(!galleryFigures.length) return;

    galleryFigures.forEach((figure)=>{
      figure.addEventListener('click', ()=>{
        const isZoomed = figure.classList.contains('is-zoomed');
        galleryFigures.forEach(f=>f.classList.remove('is-zoomed'));
        if(!isZoomed) figure.classList.add('is-zoomed');
      });
    });
  }
  modalClose.addEventListener('click',closeModal);
  modal.addEventListener('click',(e)=>{ if(e.target===modal) closeModal(); });

  // Load projects from JSON
  fetch('projects.json')
    .then(r=>r.json())
    .then(projects=>{
      if(!projects || !projects.length) return;
      // assume projects sorted newest first; if not, sort by date
      projects.sort((a,b)=> new Date(b.date) - new Date(a.date));

      const latest = projects[0];
      latestContainer.innerHTML = `
        <h3>${latest.title}</h3>
        <p class="muted">${latest.date} — ${latest.summary}</p>
        <p><a class="btn" href="#" data-id="0">Details</a> ${latest.link?`<a class='btn' href='${latest.link}' target='_blank' rel='noopener'>View</a>`:''}</p>
      `;

      latestContainer.querySelector('[data-id]')?.addEventListener('click', (e)=>{ e.preventDefault(); openModal(latest.details); });

      // render rest (including latest) as cards
      projects.forEach((p, idx)=>{
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
          <h4>${p.title}</h4>
          <p class="muted">${p.date}</p>
          <p>${p.summary}</p>
          <p><a class="btn" href="#" data-id="${idx}">Details</a> ${p.link?`<a class='btn' href='${p.link}' target='_blank' rel='noopener'>Live</a>`:''}</p>
        `;
        card.querySelector('[data-id]').addEventListener('click', (e)=>{ e.preventDefault(); openModal(p.details); });
        projectsContainer.appendChild(card);
      });
    })
    .catch(err=>{
      console.error('Failed to load projects.json',err);
      document.getElementById('projects').innerHTML = '<p class="muted">No projects available yet.</p>';
    });
});
