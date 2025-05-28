const images = [
    {
        preview: 'https://images.unsplash.com/photo-1514894780887-121968d00567?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://images.unsplash.com/photo-1514894780887-121968d00567?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Перше зображення'
    },
    {
        preview: 'https://plus.unsplash.com/premium_photo-1721268770804-f9db0ce102f8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://plus.unsplash.com/premium_photo-1721268770804-f9db0ce102f8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Друге зображення'
    },
    {
        preview: 'https://images.unsplash.com/photo-1748178765097-1c012c848596?q=80&w=3056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://images.unsplash.com/photo-1748178765097-1c012c848596?q=80&w=3056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1748178765097-1c012c848596?q=80&w=3056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Третє зображення'
    },
    {
        preview: 'https://plus.unsplash.com/premium_photo-1741866235320-537a8974dec8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://plus.unsplash.com/premium_photo-1741866235320-537a8974dec8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Четверте зображення'
    },
    {
        preview: 'https://images.unsplash.com/photo-1747764869395-ce3ce016e622?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://images.unsplash.com/photo-1747764869395-ce3ce016e622?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Пʼяте зображення'
    },
    {
        preview: 'https://plus.unsplash.com/premium_photo-1680100255906-09ffdc2eeaaf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://plus.unsplash.com/premium_photo-1680100255906-09ffdc2eeaaf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Шосте зображення'
    },
    {
        preview: 'https://images.unsplash.com/photo-1734246552855-549a40206708?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://images.unsplash.com/photo-1734246552855-549a40206708?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Соьме зображення'
    },
    {
        preview: 'https://images.unsplash.com/photo-1605708896118-957f660c1555?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://images.unsplash.com/photo-1605708896118-957f660c1555?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Восьме зображення'
    },
    {
        preview: 'https://images.unsplash.com/photo-1712588373840-2579eebece03?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        original: 'https://images.unsplash.com/photo-1712588373840-2579eebece03?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Девʼяте зображення'
    }
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images.map(image => `
    <li role="listitem">
        <img src="${image.preview}" alt="${image.description}" data-original="${image.original}" class="gallery-image">
    </li>
`).join('');

gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        const largeImageUrl = event.target.dataset.original;
        console.log(largeImageUrl); // Вивід у консоль

        // Використання basicLightbox для створення модального вікна
        const instance = basicLightbox.create(`
            <div class="modal-overlay">
                <img src="${largeImageUrl}" width="1280">
            </div>
        `);
        instance.show();
        instance.element().addEventListener('click', instance.close);
    }
});
