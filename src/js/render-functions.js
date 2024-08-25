export const createGalleryCard = (imgInfo) => {
    return `
    <li class="gallery-card">
        <a href="${imgInfo.largeImageURL}">
            <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}">
        </a>
        <div class="info-div">
            <div class="info-one-template">
                <p class="name">Likes</p>
                <p>${imgInfo.likes}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Views</p>
                <p>${imgInfo.views}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Comments</p>
                <p>${imgInfo.comments}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Downloads</p>
                <p>${imgInfo.downloads}</p>
            </div>
        </div>
    </li>
    `;
};

