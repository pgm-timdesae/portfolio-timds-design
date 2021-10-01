(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.btnToTopElement = document.querySelector('.btn-to-top');
      this.$nav = document.querySelector('.nav__list');
      this.$burger = document.querySelector('.burger');
      this.$socialsNav = document.querySelector('.socials-nav');
    },
    registerEventListeners () {
      // Burger icon
      this.$burger.addEventListener('click', () => {

        // toggle btn
        this.$nav.classList.toggle('open');

        //
        this.$socialsNav.classList.toggle('open');

        // toggle icon
        this.$burger.classList.toggle('toggle');
      });


      
      // Back to top
       if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
    },
  };
  app.initialize();
})();
