/* ============================================
   ÇITIPITI BUTIK — BOHEM / RUSTIK APP
   Version: 4.0.0 | Vitrin / Katalog
   ============================================ */

'use strict';

(function () {

  const Config = {
    apiBaseURL: '/api/v1',
    isDev: typeof window !== 'undefined' && (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    ),
    scrollOffset: 80,
    scrollHideThreshold: 200,
    observerRootMargin: '0px 0px -50px 0px',
    observerThreshold: 0.1,
    lightboxSwipeThreshold: 50,
  };

  /* ============================================
     1. DATA STORE
     ============================================ */
  const DataStore = {
    collections: [
      {
        id: 1,
        slug: 'elbiseler',
        title: 'Elbiseler',
        tag: 'Koleksiyon',
        code: 'BHM-01',
        vibe: 'Zarafet',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
        thumb1: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80',
        thumb2: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80',
        isNew: false
      },
      {
        id: 2,
        slug: 'takimlar',
        title: 'Takımlar',
        tag: 'Koleksiyon',
        code: 'BHM-02',
        vibe: 'Güç',
        image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        thumb1: 'https://images.unsplash.com/photo-1550614000-4b9519e02a48?w=400&q=80',
        thumb2: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=80',
        isNew: false
      },
      {
        id: 3,
        slug: 'gomlekler',
        title: 'Gömlekler',
        tag: 'Koleksiyon',
        code: 'BHM-03',
        vibe: 'Şıklık',
        image: 'https://images.unsplash.com/photo-1550614000-4b9519e02a48?w=800&q=80',
        thumb1: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&q=80',
        thumb2: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
        isNew: false
      },
      {
        id: 4,
        slug: 'jeanler',
        title: 'Jeanler',
        tag: 'Koleksiyon',
        code: 'BHM-04',
        vibe: 'Rahatlık',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
        thumb1: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=80',
        thumb2: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
        isNew: false
      },
      {
        id: 5,
        slug: 'yeni-sezon',
        title: 'Yeni Sezon',
        tag: 'Özel Seçki',
        code: 'BHM-05',
        vibe: 'Trend',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
        thumb1: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
        thumb2: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
        isNew: true
      }
    ],

    gallery: [
      { id: 1,  tag: 'Elbise',      title: 'Saten Midi',         desc: 'Gece mavisi',     image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',  span: 'span-2x2' },
      { id: 2,  tag: 'Takım',       title: 'Krem Blazer',        desc: 'Ofis şıklığı',    image: 'https://images.unsplash.com/photo-1550614000-4b9519e02a48?w=600&q=80',    span: '' },
      { id: 3,  tag: 'Jean',        title: 'Wide-Leg',           desc: 'Rahat ve şık',    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80',  span: 'span-1x2' },
      { id: 4,  tag: 'Gömlek',      title: 'İpek Gömlek',        desc: 'Pudra tonları',   image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&q=80',  span: '' },
      { id: 5,  tag: 'Özel Gün',    title: 'Akşam Zarafeti',     desc: 'Özel davetler',   image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',  span: 'span-2x1' },
      { id: 6,  tag: 'Aksesuar',    title: 'Deri Çanta',         desc: 'Minimal tasarım', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80',    span: '' },
      { id: 7,  tag: 'Kombin',      title: 'Sokak Stili',        desc: 'Günlük şıklık',   image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',  span: 'span-1x2' },
      { id: 8,  tag: 'Abiye',       title: 'Kırmızı Elbise',     desc: 'Dikkat çeken',    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',  span: '' },
      { id: 9,  tag: 'Yeni Sezon',  title: 'İlkbahar/Yaz 2026',  desc: 'Taze renkler',    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',  span: 'span-2x2' },
      { id: 10, tag: 'Ayakkabı',    title: 'Nude Topuklu',       desc: 'Zarif ve uzun',   image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80',  span: '' },
      { id: 11, tag: 'Elbise',      title: 'Çiçekli Midi',       desc: 'Bahara hazır',    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',  span: 'span-2x1' },
      { id: 12, tag: 'Dış Giyim',   title: 'Bej Trench',         desc: 'Zamansız klasik', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80',  span: '' }
    ],

    testimonials: [
      {
        id: 1,
        name: 'Ayşe K.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        text: "Çıtıpıtı Butik'te her parça bir sanat eseri gibi. Elbiselerin kalitesi ve zarafeti beni her seferinde büyülüyor."
      },
      {
        id: 2,
        name: 'Zeynep M.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        text: "Kişisel stil danışmanlığı hizmeti harika! Doğru parçaları bulmam çok daha kolay oldu."
      },
      {
        id: 3,
        name: 'Ela Y.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
        text: "Mağazanın atmosferi ve koleksiyonun özgünlüğü beni her ziyaretimde mutlu ediyor."
      },
      {
        id: 4,
        name: 'Selin T.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        text: "Yeni sezon ürünleri gerçekten çok şık. Özellikle bohem tarzdaki parçalar favorim!"
      }
    ],

    contact: {
      phone: '+90 534 692 19 87',
      phoneLink: 'tel:+905346921987',
      whatsapp: 'https://wa.me/905346921987',
      instagram: 'https://instagram.com/citipitibutik',
      address: 'Milas-Muğla',
      hours: [
        { day: 'Pzt — Cum',   time: '10:00 — 19:00', closed: false },
        { day: 'Cumartesi',   time: '11:00 — 18:00', closed: false },
        { day: 'Pazar',       time: 'Kapalı',         closed: true  }
      ]
    },

    meta: {
      brand: 'Çıtıpıtı Butik',
      tagline: 'Şıklığın ve zarafetin buluşma noktası',
      established: '2018',
      city: 'Muğla'
    }
  };

  /* ============================================
     2. COMPONENT RENDERER
     ============================================ */
  function escapeHTML(str) {
    if (typeof str !== 'string') return String(str);
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' };
    return str.replace(/[&<>"']/g, c => map[c]);
  }

  const Components = {
    renderCollectionCard(item, delayClass = '') {
      return `
        <a href="#" class="collection-card anim anim-fade-up ${delayClass}"
           data-collection-id="${escapeHTML(String(item.id))}"
           data-collection-slug="${escapeHTML(item.slug)}"
           aria-label="${escapeHTML(item.title)} kategorisi, ürün kodu ${escapeHTML(item.code)}">
          <div class="collage-grid">
            <div class="collage-main">
              <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)} koleksiyonu ana görsel" loading="lazy" width="800" height="1067" decoding="async">
            </div>
            <div class="collage-thumb">
              <img src="${escapeHTML(item.thumb1)}" alt="${escapeHTML(item.title)} detay 1" loading="lazy" width="400" height="400" decoding="async">
            </div>
            <div class="collage-thumb">
              <img src="${escapeHTML(item.thumb2)}" alt="${escapeHTML(item.title)} detay 2" loading="lazy" width="400" height="400" decoding="async">
            </div>
          </div>
          <div class="card-text">
            <span class="card-tag">${escapeHTML(item.tag)}</span>
            <h3 class="card-title">${escapeHTML(item.title)}</h3>
            <p class="card-code">Ürün Kodu: ${escapeHTML(item.code)}</p>
            <span class="card-btn">DETAYLARI İNCELE</span>
          </div>
        </a>
      `.trim();
    },

    renderGalleryItem(item, index) {
      const spanClass  = item.span ? ` ${escapeHTML(item.span)}` : '';
      const delayClass = ` delay-${(index % 6) + 1}`;

      return `
        <div class="gallery-item${spanClass} anim anim-fade-up${delayClass}"
             role="button"
             tabindex="0"
             data-index="${index}"
             data-gallery-id="${escapeHTML(String(item.id))}"
             aria-label="${escapeHTML(item.title)}, ${escapeHTML(item.tag)} kategorisi — büyütmek için tıklayın">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)} — ${escapeHTML(item.desc)}" loading="lazy" width="800" height="800" decoding="async">
          <div class="item-overlay" aria-hidden="true">
            <button class="item-like" type="button" aria-label="${escapeHTML(item.title)} ürününü beğen" data-like-id="${escapeHTML(String(item.id))}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            <div class="item-info">
              <span class="item-tag">${escapeHTML(item.tag)}</span>
              <h3 class="item-title">${escapeHTML(item.title)}</h3>
              <p class="item-desc">${escapeHTML(item.desc)}</p>
            </div>
          </div>
        </div>
      `.trim();
    },

    renderTestimonial(item, delayClass = '') {
      return `
        <div class="testimonial-item anim anim-fade-up ${delayClass}">
          <img src="${escapeHTML(item.avatar)}" alt="${escapeHTML(item.name)} profil fotoğrafı" class="testimonial-avatar" loading="lazy" width="40" height="40">
          <p class="testimonial-text">${escapeHTML(item.text)}</p>
          <span class="testimonial-author">${escapeHTML(item.name)}</span>
        </div>
      `.trim();
    }
  };

  /* ============================================
     3. APP CORE
     ============================================ */
  const App = {
    elements: {},
    _lastFocusedElement: null,
    _galleryItems: [],

    init() {
      this.cacheElements();
      this.renderDynamicContent();
      this.initIntersectionObserver();
      this.initHeader();
      this.initMobileMenu();
      this.initGalleryDelegation();
      this.initLightbox();
      this.initKeyboardHandler();
      this.setFooterYear();
    },

    cacheElements() {
      this.elements = {
        header:           document.getElementById('header'),
        hamburger:        document.getElementById('hamburger'),
        mobileMenu:       document.getElementById('mobile-menu'),
        mobileMenuClose:  document.getElementById('mobile-menu-close'),
        menuOverlay:      document.getElementById('menu-overlay'),
        lightbox:         document.getElementById('lightbox'),
        lightboxImg:      document.getElementById('lightbox-img'),
        lightboxInfo:     document.getElementById('lightbox-info'),
        lightboxCounter:  document.getElementById('lightbox-counter'),
        lightboxClose:    document.getElementById('lightbox-close'),
        lightboxPrev:     document.getElementById('lightbox-prev'),
        lightboxNext:     document.getElementById('lightbox-next'),
        collectionsGrid:  document.getElementById('collections-grid'),
        galleryGrid:      document.getElementById('gallery-grid'),
        testimonialsList: document.getElementById('testimonials-list'),
        navLinks:         document.querySelectorAll('.nav-desktop a'),
        footerYear:       document.getElementById('footer-year'),
      };
    },

    renderDynamicContent() {
      const { collectionsGrid, galleryGrid, testimonialsList } = this.elements;
      const delays = ['delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5'];

      if (collectionsGrid) {
        collectionsGrid.innerHTML = DataStore.collections
          .map((item, i) => Components.renderCollectionCard(item, delays[i] || ''))
          .join('');
      }

      if (galleryGrid) {
        galleryGrid.innerHTML = DataStore.gallery
          .map((item, i) => Components.renderGalleryItem(item, i))
          .join('');
        this._galleryItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
      }

      if (testimonialsList) {
        testimonialsList.innerHTML = DataStore.testimonials
          .map((item, i) => Components.renderTestimonial(item, delays[i] || ''))
          .join('');
      }
    },

    initIntersectionObserver() {
      const animElements = document.querySelectorAll('.anim');
      if (!animElements.length) return;

      if (!('IntersectionObserver' in window)) {
        animElements.forEach(el => el.classList.add('animated'));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: Config.observerThreshold,
        rootMargin: Config.observerRootMargin,
      });

      animElements.forEach(el => observer.observe(el));
    },

    initHeader() {
      const { header, navLinks } = this.elements;
      if (!header) return;

      let lastScroll = 0;
      let ticking = false;

      const updateHeader = () => {
        const currentScroll = window.pageYOffset;
        const scrolled = currentScroll > 50;
        const goingDown = currentScroll > lastScroll;
        const pastThreshold = currentScroll > Config.scrollHideThreshold;

        header.classList.toggle('scrolled', scrolled);

        if (pastThreshold) {
          header.classList.toggle('hidden', goingDown);
        } else {
          header.classList.remove('hidden');
        }

        if (navLinks.length) {
          const sections = document.querySelectorAll('section[id]');
          sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              const targetHref = '#' + section.id;
              navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === targetHref);
              });
            }
          });
        }

        lastScroll = currentScroll;
        ticking = false;
      };

      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateHeader);
          ticking = true;
        }
      }, { passive: true });
    },

    initMobileMenu() {
      const { hamburger, mobileMenu, mobileMenuClose, menuOverlay } = this.elements;
      if (!hamburger || !mobileMenu) return;

      const openMenu = () => {
        mobileMenu.classList.add('active');
        hamburger.classList.add('active');
        menuOverlay?.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Menüyü kapat');
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const firstLink = mobileMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      };

      const closeMenu = () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        menuOverlay?.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Menüyü aç');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        hamburger.focus();
      };

      const toggleMenu = () => {
        mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
      };

      hamburger.addEventListener('click', toggleMenu);
      mobileMenuClose?.addEventListener('click', closeMenu);
      menuOverlay?.addEventListener('click', closeMenu);
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      App._mobileMenuClose = closeMenu;
    },

    initGalleryDelegation() {
      const { galleryGrid } = this.elements;
      if (!galleryGrid) return;

      galleryGrid.addEventListener('click', (e) => {
        const likeBtn = e.target.closest('.item-like');
        if (likeBtn) {
          e.stopPropagation();
          this.toggleLike(likeBtn);
          return;
        }

        const item = e.target.closest('.gallery-item');
        if (item) {
          const index = parseInt(item.dataset.index, 10);
          if (!isNaN(index)) this.openLightbox(index);
        }
      });

      galleryGrid.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const item = e.target.closest('.gallery-item');
        if (item) {
          e.preventDefault();
          const index = parseInt(item.dataset.index, 10);
          if (!isNaN(index)) this.openLightbox(index);
        }
      });
    },

    toggleLike(btn) {
      const isLiked = btn.classList.toggle('liked');
      btn.setAttribute('aria-label', isLiked ? 'Beğeniyi kaldır' : 'Beğen');
    },

    initLightbox() {
      const { lightbox, lightboxClose, lightboxPrev, lightboxNext } = this.elements;
      if (!lightbox) return;

      lightboxClose?.addEventListener('click', () => this.closeLightbox());
      lightboxNext?.addEventListener('click', () => this.nextImage());
      lightboxPrev?.addEventListener('click', () => this.prevImage());

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) this.closeLightbox();
      });

      let touchStartX = 0;
      lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      lightbox.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > Config.lightboxSwipeThreshold) {
          diff > 0 ? this.nextImage() : this.prevImage();
        }
      }, { passive: true });

      this._lightboxIndex = 0;
    },

    openLightbox(index) {
      const { lightbox, lightboxClose } = this.elements;
      if (!lightbox) return;
      this._lastFocusedElement = document.activeElement;
      this._lightboxIndex = index;
      this._updateLightbox();
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightboxClose?.focus();
    },

    closeLightbox() {
      const { lightbox, lightboxImg } = this.elements;
      if (!lightbox) return;
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (lightboxImg) lightboxImg.src = '';
      }, 400);
      if (this._lastFocusedElement) {
        this._lastFocusedElement.focus();
        this._lastFocusedElement = null;
      }
    },

    nextImage() {
      const total = this._galleryItems.length;
      if (!total) return;
      this._lightboxIndex = (this._lightboxIndex + 1) % total;
      this._updateLightbox();
    },

    prevImage() {
      const total = this._galleryItems.length;
      if (!total) return;
      this._lightboxIndex = (this._lightboxIndex - 1 + total) % total;
      this._updateLightbox();
    },

    _updateLightbox() {
      const { lightboxImg, lightboxInfo, lightboxCounter } = this.elements;
      const items = this._galleryItems;
      if (!items.length) return;

      const item = items[this._lightboxIndex];
      const img = item.querySelector('img');
      const title = item.querySelector('.item-title')?.textContent || '';
      const desc = item.querySelector('.item-desc')?.textContent || '';
      const tag = item.querySelector('.item-tag')?.textContent || '';

      if (lightboxImg && img) {
        lightboxImg.src = img.src.replace(/w=\d+/, 'w=1200').replace(/q=\d+/, 'q=85');
        lightboxImg.alt = img.alt;
      }

      if (lightboxInfo) {
        const h3 = lightboxInfo.querySelector('h3');
        const p = lightboxInfo.querySelector('p');
        if (h3) h3.textContent = title;
        if (p) p.textContent = tag ? `${tag} — ${desc}` : desc;
      }

      if (lightboxCounter) {
        lightboxCounter.textContent = `${this._lightboxIndex + 1} / ${items.length}`;
      }
    },

    initKeyboardHandler() {
      document.addEventListener('keydown', (e) => {
        const { lightbox, mobileMenu } = this.elements;

        if (lightbox?.classList.contains('active')) {
          switch (e.key) {
            case 'Escape': this.closeLightbox(); break;
            case 'ArrowRight': this.nextImage(); break;
            case 'ArrowLeft': this.prevImage(); break;
          }
          return;
        }

        if (mobileMenu?.classList.contains('active')) {
          if (e.key === 'Escape') App._mobileMenuClose?.();
        }
      });
    },

    setFooterYear() {
      const { footerYear } = this.elements;
      if (footerYear) footerYear.textContent = new Date().getFullYear();
    },
  };


  /* ============================================
     COOKIE CONSENT BANNER
     ============================================ */
  const CookieBanner = {
    init() {
      const banner = document.getElementById('cookie-banner');
      const acceptBtn = document.getElementById('cookie-accept');
      if (!banner || !acceptBtn) return;

      const consent = localStorage.getItem('cookieConsent');
      if (consent === 'true') {
        banner.style.display = 'none';
        return;
      }

      // Smooth entrance after page load
      setTimeout(() => {
        banner.classList.add('active');
        banner.setAttribute('aria-hidden', 'false');
      }, 600);

      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'true');
        banner.classList.remove('active');
        banner.setAttribute('aria-hidden', 'true');
        setTimeout(() => {
          banner.style.display = 'none';
        }, 500);
      });
    }
  };

  /* ============================================
     4. HERO SLIDER
     ============================================ */
  const HeroSlider = {
    init() {
      const slides = document.querySelectorAll('.hero-slide');
      const dots = document.querySelectorAll('.dot');
      if (!slides.length) return;

      let currentSlide = 0;
      let slideInterval;

      const goToSlide = (index) => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide]?.classList.remove('active');
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        slides[currentSlide].classList.add('active');
        dots[currentSlide]?.classList.add('active');
      };

      const nextSlide = () => goToSlide(currentSlide + 1);
      const prevSlide = () => goToSlide(currentSlide - 1);

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          goToSlide(i);
          resetInterval();
        });
      });

      const resetInterval = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          clearInterval(slideInterval);
        } else {
          resetInterval();
        }
      });
      };

      slideInterval = setInterval(nextSlide, 5000);

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          clearInterval(slideInterval);
        } else {
          resetInterval();
        }
      });
    }
  };

  /* ============================================
     5. INIT
     ============================================ */
  if (Config.isDev) {
    window.__CITIPITI__ = { App, DataStore, Config, CookieBanner };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      App.init();
      HeroSlider.init();
      CookieBanner.init();
    }, { once: true });
  } else {
    App.init();
    HeroSlider.init();
    CookieBanner.init();
  }
})();