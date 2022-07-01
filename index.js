const container = document.querySelector('.container');

fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
    .then(response => response.json())
    .then((products) => {
        products.forEach(product => {
            const item = document.createElement('div');
            item.classList.add('item');
            const image = document.createElement('img');
            image.classList.add('image');
            const content = document.createElement('div');
            content.classList.add('content');
            const title = document.createElement('div');
            title.classList.add('title');
            const text = document.createElement('div');
            text.classList.add('text');

            image.id = product.id;
            image.src = product.image_url;
            title.innerText = product.name;
            text.innerText = product.description;

            content.appendChild(title);
            content.appendChild(text);
            item.appendChild(image);
            item.appendChild(content);
            container.appendChild(item);

            image.addEventListener('click', (e) => {
                localStorage.setItem('id', e.target.id);
            })
        });
    })
    .catch((err) => {
        console.log('Fetch Error :-S', err);
    });
