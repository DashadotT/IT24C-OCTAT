let applets = [];

fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
        applets = data;
        renderApplets(applets);
    })
    .catch(error => console.error('Error fetching JSON:', error));