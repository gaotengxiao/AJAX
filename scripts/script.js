document.addEventListener('DOMContentLoaded', () => {
    const loadPartial = (elementId, url) => {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error fetching partial:', error));
    };
  
    loadPartial('header', 'partials/header.html');
    loadPartial('content1', 'partials/content1.html');
    loadPartial('content2', 'partials/content2.html');
    loadPartial('content3', 'partials/content3.html');
    loadPartial('content4', 'partials/content4.html');
    loadPartial('footer', 'partials/footer.html');
  });
  