class searchView {
    searchDiv = document.querySelector('.searchDiv');
    searchInput = document.querySelector('#searchInput');
    takeSearch = document.querySelector('#takeSearch');
    searchType = document.querySelector('.searchType');
    searchResults = document.querySelector('.description');
    searchBtn = document.querySelector('#search');

    renderSearchDiv(handler) {
        this.takeSearch.addEventListener('click',handler)
    }

    renderSearchType(handlerBrand, handlerCategory) {
        this.searchType.classList.toggle('hidden');
        const brandSelect = this.searchType.querySelector('#brand');
        const categorySelect = this.searchType.querySelector('#category');
        brandSelect.addEventListener('click', handlerBrand);
        categorySelect.addEventListener('click', handlerCategory);
    }

    displaySearchHandler(handler, data) {
        data.addEventListener('click', handler);
    }
}
export default new searchView();