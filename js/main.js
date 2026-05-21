/* ============================================
   VisionCraft - 个人视频作品集
   JavaScript 交互逻辑
   ============================================ */

'use strict';

// =========================================
// 数据
// =========================================

const slideData = [
    {
        title: 'Qeelin · 戒指',
        subtitle: '珠宝品牌 · 璀璨工艺之美',
        badge: '品牌项目',
        image: 'assets/images/Qeelin_戒指.jpg',
        video: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/Qeelin_戒指.mp4'
    },
    {
        title: '光影节 · MAC口红',
        subtitle: '彩妆与光影 · 品牌视觉新表达',
        badge: '商业项目',
        image: 'assets/images/光影节_MAC口红.jpg',
        video: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/光影节_MAC口红.mp4'
    },
    {
        title: '外滩源壹号',
        subtitle: '历史建筑与现代都市的交融之美',
        badge: '自主项目',
        image: 'assets/images/外滩源壹号.jpg',
        video: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/外滩源壹号.mp4'
    },
    {
        title: '比斯特 · 苏州开业',
        subtitle: '品牌活动 · 开业盛典',
        badge: '商业项目',
        image: 'assets/images/比斯特_苏州开业.jpg',
        video: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/比斯特_苏州开业.mp4'
    },
    {
        title: '时间的两个名字',
        subtitle: 'MR混合现实体验 · 探索时间的多维意义',
        badge: '自主项目',
        image: 'assets/images/时间的两个名字.jpg',
        video: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/时间的两个名字.mp4'
    }
];

const portfolioData = [
    {
        id: 1,
        title: 'ArtDeco · 抖音',
        category: 'self',
        categoryLabel: '自主项目',
        description: '自主打造的抖音平台宣传视频，以沉浸式视觉体验呈现ArtDeco的独特魅力，契合特效制作「让画面活起来」的核心价值。',
        image: 'assets/images/ArtDeco_抖音.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/artdeco.mp4',
        duration: '00:30',
        date: '2026'
    },
    {
        id: 2,
        title: 'Coach · 裸眼3D',
        category: 'self',
        categoryLabel: '自主项目',
        description: 'Coach品牌裸眼3D创意短片，通过立体视觉技术为传统品牌展示注入全新活力，带来震撼的视觉冲击。',
        image: 'assets/images/Coach_裸眼3D.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/Coach_裸眼3D.mp4',
        duration: '00:30',
        date: '2026'
    },
    {
        id: 3,
        title: 'Debeers · 晚宴',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: 'Debeers品牌晚宴活动投影宣传视频，记录奢华之夜的精彩瞬间，展现钻石品牌的永恒魅力。',
        image: 'assets/images/Debeers_晚宴.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/debeers.mp4',
        duration: '01:00',
        date: '2026'
    },
    {
        id: 4,
        title: 'Qeelin · 戒指',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: 'Qeelin珠宝品牌戒指产品展示，精细化的材质雕琢与光影呈现，展现珠宝的璀璨工艺之美。',
        image: 'assets/images/Qeelin_戒指.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/Qeelin_戒指.mp4',
        duration: '00:30',
        date: '2026'
    },
    {
        id: 5,
        title: '三星 · 投影',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: '三星品牌投影产品宣传片，以技术赋能视觉，展现科技与艺术的完美融合。',
        image: 'assets/images/三星_投影.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/三星_投影.mp4',
        duration: '00:45',
        date: '2025'
    },
    {
        id: 6,
        title: '交通大学 · 裸眼3D',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: '为交通大学打造的裸眼3D展示项目，将前沿视觉技术应用于教育领域，呈现科技与学术的创新融合。',
        image: 'assets/images/交通大学_裸眼3D.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/交通大学_裸眼3D.mp4',
        duration: '00:30',
        date: '2025'
    },
    {
        id: 7,
        title: '光影节',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: '大型光影节活动宣传项目，融合创意灯光与视觉特效，打造沉浸式的光影艺术盛宴。',
        image: 'assets/images/光影节.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/光影节.mp4',
        duration: '02:00',
        date: '2025'
    },
    {
        id: 8,
        title: '光影节 · MAC口红',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: 'MAC口红品牌光影节特别企划，将彩妆与光影艺术结合，呈现独特的品牌视觉语言。',
        image: 'assets/images/光影节_MAC口红.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/光影节_MAC口红.mp4',
        duration: '00:30',
        date: '2025'
    },
    {
        id: 9,
        title: '外滩源壹号',
        category: 'self',
        categoryLabel: '自主项目',
        description: '上海外滩源壹号项目宣传片，用镜头记录历史建筑与现代都市的交融之美。',
        image: 'assets/images/外滩源壹号.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/外滩源壹号.mp4',
        duration: '01:00',
        date: '2025'
    },
    {
        id: 10,
        title: '宝诗龙 · 开店视频',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: '宝诗龙(Boucheron)品牌新店开业活动视频，记录珠宝品牌的璀璨时刻。',
        image: 'assets/images/宝诗龙_开店视频.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/宝诗龙_开店视频.mp4',
        duration: '00:30',
        date: '2025'
    },
    {
        id: 11,
        title: '宝诗龙 · 首饰',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: '宝诗龙品牌珠宝首饰产品宣传，精细化的材质渲染与光影雕琢，诠释高级珠宝的工艺美学。',
        image: 'assets/images/宝诗龙_首饰.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/宝诗龙_首饰.mp4',
        duration: '01:00',
        date: '2025'
    },
    {
        id: 12,
        title: '时间的两个名字',
        category: 'self',
        categoryLabel: '自主项目',
        description: '创意实验短片「时间的两个名字」，用非线性叙事和视觉隐喻探索时间的多维意义。',
        image: 'assets/images/时间的两个名字.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/时间的两个名字.mp4',
        duration: '02:30',
        date: '2024'
    },
    {
        id: 13,
        title: '比斯特 · 上海开业',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: '比斯特购物村上海开业活动宣传片，记录品牌的重要里程碑时刻。',
        image: 'assets/images/比斯特_上海开业.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/比斯特_上海开业.mp4',
        duration: '00:30',
        date: '2025'
    },
    {
        id: 14,
        title: '比斯特 · 苏州开业',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: '比斯特购物村苏州开业活动宣传片，用镜头记录品牌拓展的精彩瞬间。',
        image: 'assets/images/比斯特_苏州开业.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/比斯特_苏州开业.mp4',
        duration: '00:30',
        date: '2025'
    },
    {
        id: 15,
        title: '海鸥表 · 机芯',
        category: 'commercial',
        categoryLabel: '商业项目',
        description: '海鸥表品牌机芯产品展示，通过精细化的视觉呈现展现中国制表工艺的精湛与匠心。',
        image: 'assets/images/海鸥表_机芯.jpg',
        videoUrl: 'https://raw.githubusercontent.com/wei01-star/my-portfolio/main/assets/videos/海鸥表_机芯.mp4',
        duration: '00:45',
        date: '2025'
    }
];

// =========================================
// DOM 缓存
// =========================================

const DOM = {
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('navMenu'),
    hamburger: document.getElementById('hamburger'),
    navLinks: document.querySelectorAll('.nav-link'),
    carouselTrack: document.getElementById('carouselTrack'),
    carouselDots: document.getElementById('carouselDots'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    portfolioGrid: document.getElementById('portfolioGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    videoModal: document.getElementById('videoModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    modalVideo: document.getElementById('modalVideo'),
    videoPlaceholder: document.getElementById('videoPlaceholder'),
    videoLoading: document.getElementById('videoLoading'),
    videoControls: document.getElementById('videoControls'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    playPauseIcon: document.getElementById('playPauseIcon'),
    progressInput: document.getElementById('progressInput'),
    progressPlayed: document.getElementById('progressPlayed'),
    progressBuffer: document.getElementById('progressBuffer'),
    progressThumb: document.getElementById('progressThumb'),
    currentTime: document.getElementById('currentTime'),
    duration: document.getElementById('duration'),
    volumeSlider: document.getElementById('volumeSlider'),
    volumeIcon: document.getElementById('volumeIcon'),
    volumeBtn: document.getElementById('volumeBtn'),
    fullscreenBtn: document.getElementById('fullscreenBtn'),
    fullscreenIcon: document.getElementById('fullscreenIcon'),
    modalTitle: document.getElementById('modalTitle'),
    modalCategory: document.getElementById('modalCategory'),
    modalDuration: document.getElementById('modalDuration'),
    modalDate: document.getElementById('modalDate'),
    modalDesc: document.getElementById('modalDesc'),
    backToTop: document.getElementById('backToTop'),
    backToTop: document.getElementById('backToTop'),
    footerYear: document.getElementById('footerYear'),
    allSections: document.querySelectorAll('.section')
};

// =========================================
// Carousel 轮播（视频版）
// =========================================

const Carousel = (() => {
    let currentIndex = 0;
    let autoPlayTimer = null;
    const INTERVAL = 6000;

    function render() {
        DOM.carouselTrack.innerHTML = slideData.map((slide, i) => `
            <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
                <video class="carousel-video" src="${slide.video}" poster="${slide.image}"
                    muted playsinline preload="metadata"
                    ${i === 0 ? '' : 'data-lazy="true"'}>
                </video>
                <div class="slide-content">
                    <span class="slide-badge">${slide.badge}</span>
                    <h2>${slide.title}</h2>
                    <p>${slide.subtitle}</p>
                </div>
            </div>
        `).join('');

        DOM.carouselDots.innerHTML = slideData.map((_, i) => `
            <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="第${i + 1}张幻灯片"></button>
        `).join('');
    }

    function handleVideoPlay(slide, shouldPlay) {
        const video = slide.querySelector('.carousel-video');
        if (!video) return;
        if (shouldPlay) {
            video.currentTime = 0;
            video.play().catch(() => {});
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }

    function goTo(index) {
        const slides = DOM.carouselTrack.querySelectorAll('.carousel-slide');
        const dots = DOM.carouselDots.querySelectorAll('.carousel-dot');
        const total = slides.length;

        if (index < 0) index = total - 1;
        if (index >= total) index = 0;

        // 暂停旧视频
        slides.forEach((slide, i) => {
            if (i === currentIndex && i !== index) {
                handleVideoPlay(slide, false);
            }
        });

        currentIndex = index;

        // 更新幻灯片
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });

        // 更新指示点
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        // 移动 track
        DOM.carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

        // 播放当前视频
        const currentSlide = slides[currentIndex];
        const video = currentSlide.querySelector('.carousel-video');
        if (video) {
            if (video.dataset.lazy) {
                // 首次激活时移除懒加载
                delete video.dataset.lazy;
            }
            handleVideoPlay(currentSlide, true);
        }
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(next, INTERVAL);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    function init() {
        render();

        DOM.carouselTrack.style.transform = 'translateX(0)';

        // 自动播放第一张的视频
        const firstSlide = DOM.carouselTrack.querySelector('.carousel-slide.active');
        if (firstSlide) {
            setTimeout(() => handleVideoPlay(firstSlide, true), 500);
        }

        // 事件绑定
        DOM.nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            next();
            stopAutoPlay();
        });

        DOM.prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prev();
            stopAutoPlay();
        });

        DOM.carouselDots.addEventListener('click', (e) => {
            const dot = e.target.closest('.carousel-dot');
            if (!dot) return;
            const index = parseInt(dot.dataset.index);
            goTo(index);
            stopAutoPlay();
        });

        // 鼠标悬停暂停
        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // 触摸支持
        let touchStartX = 0;
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            stopAutoPlay();
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) next();
                else prev();
            }
            startAutoPlay();
        }, { passive: true });

        startAutoPlay();
    }

    return { init };
})();

// =========================================
// Portfolio 作品集
// =========================================

const Portfolio = (() => {
    let activeFilter = 'all';
    let items = [];

    function render() {
        DOM.portfolioGrid.innerHTML = portfolioData.map(item => `
            <div class="portfolio-item" data-category="${item.category}" data-id="${item.id}">
                <div class="portfolio-thumb">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="portfolio-thumb-overlay">
                        <div class="play-indicator"><i class="fas fa-play"></i></div>
                    </div>
                </div>
                <div class="portfolio-card-info">
                    <h3 class="card-title">${item.title}</h3>
                    <div class="card-meta">
                        <span class="card-category">${item.categoryLabel}</span>
                        <span class="card-duration"><i class="far fa-clock"></i> ${item.duration}</span>
                        <span class="card-date">${item.date}</span>
                    </div>
                    <p class="card-desc">${item.description}</p>
                </div>
            </div>
        `).join('');

        items = DOM.portfolioGrid.querySelectorAll('.portfolio-item');

        // 点击打开弹窗
        items.forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id);
                const data = portfolioData.find(p => p.id === id);
                if (data) VideoModal.open(data);
            });
        });
    }

    function filter(category) {
        activeFilter = category;

        // 更新按钮状态
        DOM.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === category);
        });

        items.forEach(item => {
            const match = category === 'all' || item.dataset.category === category;
            if (match) {
                item.style.display = 'block';
                item.classList.remove('hiding');
                item.classList.add('showing');
                setTimeout(() => item.classList.remove('showing'), 400);
            } else {
                item.classList.add('hiding');
                setTimeout(() => {
                    item.style.display = 'none';
                    item.classList.remove('hiding');
                }, 300);
            }
        });
    }

    function init() {
        render();

        DOM.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filter(btn.dataset.filter);
            });
        });
    }

    return { init };
})();

// =========================================
// Video Modal 视频弹窗（自定义播放器）
// =========================================

const VideoModal = (() => {
    let isPlaying = false;
    let controlsTimer = null;

    function open(data) {
        // 填充元数据
        DOM.modalTitle.textContent = data.title;
        DOM.modalCategory.textContent = data.categoryLabel;
        DOM.modalDuration.textContent = data.duration;
        DOM.modalDate.textContent = data.date;
        DOM.modalDesc.textContent = data.description;

        // 重置播放器状态
        resetPlayer();

        // 设置视频源
        DOM.modalVideo.src = data.videoUrl;

        // 显示占位图，隐藏视频和控件
        DOM.videoPlaceholder.style.display = 'flex';
        DOM.modalVideo.style.display = 'none';
        DOM.videoLoading.classList.remove('active');
        DOM.videoControls.classList.remove('visible');

        DOM.videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        DOM.videoModal.classList.remove('active');
        DOM.modalVideo.pause();
        DOM.modalVideo.src = '';
        isPlaying = false;
        resetPlayer();
        document.body.style.overflow = '';
        clearControlsTimer();
    }

    function resetPlayer() {
        DOM.playPauseIcon.className = 'fas fa-play';
        DOM.currentTime.textContent = '0:00';
        DOM.duration.textContent = '0:00';
        DOM.progressInput.value = 0;
        DOM.progressPlayed.style.width = '0%';
        DOM.progressBuffer.style.width = '0%';
        DOM.progressThumb.style.left = '0%';
        DOM.videoPlaceholder.style.display = 'flex';
        DOM.modalVideo.style.display = 'none';
        DOM.videoLoading.classList.remove('active');
        DOM.videoControls.classList.remove('visible');
        isPlaying = false;
    }

    function togglePlay() {
        if (isPlaying) {
            DOM.modalVideo.pause();
            DOM.playPauseIcon.className = 'fas fa-play';
            isPlaying = false;
        } else {
            DOM.modalVideo.play().catch(() => {});
            DOM.playPauseIcon.className = 'fas fa-pause';
            isPlaying = true;
        }
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function updateProgress() {
        const video = DOM.modalVideo;
        if (video.duration) {
            const percent = (video.currentTime / video.duration) * 100;
            DOM.progressInput.value = percent;
            DOM.progressPlayed.style.width = percent + '%';
            DOM.progressThumb.style.left = percent + '%';
            DOM.currentTime.textContent = formatTime(video.currentTime);
        }
    }

    function updateDuration() {
        DOM.duration.textContent = formatTime(DOM.modalVideo.duration);
    }

    function updateBuffer() {
        const video = DOM.modalVideo;
        if (video.buffered.length > 0 && video.duration) {
            const bufferedEnd = video.buffered.end(video.buffered.length - 1);
            const percent = (bufferedEnd / video.duration) * 100;
            DOM.progressBuffer.style.width = percent + '%';
        }
    }

    function setVolume(value) {
        DOM.modalVideo.volume = value;
        DOM.volumeSlider.value = value;
        if (value === 0) {
            DOM.volumeIcon.className = 'fas fa-volume-xmark';
        } else if (value < 0.5) {
            DOM.volumeIcon.className = 'fas fa-volume-low';
        } else {
            DOM.volumeIcon.className = 'fas fa-volume-high';
        }
    }

    function toggleFullscreen() {
        const wrapper = DOM.modalVideo.closest('.modal-video-wrapper') || DOM.modalVideo;
        if (!document.fullscreenElement) {
            if (wrapper.requestFullscreen) {
                wrapper.requestFullscreen();
            } else if (wrapper.webkitRequestFullscreen) {
                wrapper.webkitRequestFullscreen();
            } else if (wrapper.mozRequestFullScreen) {
                wrapper.mozRequestFullScreen();
            } else if (wrapper.msRequestFullscreen) {
                wrapper.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }

    function showControls() {
        DOM.videoControls.classList.add('visible');
        clearControlsTimer();
        controlsTimer = setTimeout(() => {
            if (isPlaying) {
                DOM.videoControls.classList.remove('visible');
            }
        }, 3000);
    }

    function clearControlsTimer() {
        if (controlsTimer) {
            clearTimeout(controlsTimer);
            controlsTimer = null;
        }
    }

    function init() {
        // ===== 点击占位图播放 =====
        DOM.videoPlaceholder.addEventListener('click', () => {
            DOM.videoLoading.classList.add('active');
            DOM.videoPlaceholder.style.display = 'none';
            DOM.modalVideo.style.display = 'block';

            DOM.modalVideo.play().then(() => {
                DOM.videoLoading.classList.remove('active');
                DOM.playPauseIcon.className = 'fas fa-pause';
                isPlaying = true;
                showControls();
            }).catch(() => {
                DOM.videoLoading.classList.remove('active');
                DOM.videoPlaceholder.style.display = 'flex';
                DOM.modalVideo.style.display = 'none';
            });
        });

        // ===== 视频事件 =====
        DOM.modalVideo.addEventListener('loadedmetadata', updateDuration);

        DOM.modalVideo.addEventListener('timeupdate', updateProgress);

        DOM.modalVideo.addEventListener('progress', updateBuffer);

        DOM.modalVideo.addEventListener('play', () => {
            DOM.playPauseIcon.className = 'fas fa-pause';
            isPlaying = true;
        });

        DOM.modalVideo.addEventListener('pause', () => {
            DOM.playPauseIcon.className = 'fas fa-play';
            isPlaying = false;
            showControls();
        });

        DOM.modalVideo.addEventListener('waiting', () => {
            DOM.videoLoading.classList.add('active');
        });

        DOM.modalVideo.addEventListener('canplay', () => {
            DOM.videoLoading.classList.remove('active');
        });

        DOM.modalVideo.addEventListener('ended', () => {
            DOM.playPauseIcon.className = 'fas fa-play';
            isPlaying = false;
            showControls();
        });

        // ===== 播放/暂停 =====
        DOM.playPauseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePlay();
            showControls();
        });

        // 点击视频切换播放
        DOM.modalVideo.addEventListener('click', () => {
            togglePlay();
            showControls();
        });

        // ===== 进度条 =====
        DOM.progressInput.addEventListener('input', (e) => {
            const video = DOM.modalVideo;
            if (video.duration) {
                const time = (e.target.value / 100) * video.duration;
                video.currentTime = time;
                DOM.progressPlayed.style.width = e.target.value + '%';
                DOM.progressThumb.style.left = e.target.value + '%';
                DOM.currentTime.textContent = formatTime(time);
            }
        });

        // ===== 音量 =====
        DOM.volumeSlider.addEventListener('input', (e) => {
            setVolume(parseFloat(e.target.value));
        });

        DOM.volumeBtn.addEventListener('click', () => {
            if (DOM.modalVideo.volume > 0) {
                setVolume(0);
            } else {
                setVolume(1);
            }
        });

        // ===== 全屏 =====
        DOM.fullscreenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFullscreen();
        });

        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                DOM.fullscreenIcon.className = 'fas fa-compress';
            } else {
                DOM.fullscreenIcon.className = 'fas fa-expand';
            }
        });

        // ===== 鼠标移动显示控件 =====
        const wrapper = DOM.modalVideo.parentElement;
        wrapper.addEventListener('mousemove', showControls);
        wrapper.addEventListener('mouseenter', showControls);
        wrapper.addEventListener('mouseleave', () => {
            if (isPlaying) {
                clearControlsTimer();
                controlsTimer = setTimeout(() => {
                    DOM.videoControls.classList.remove('visible');
                }, 2000);
            }
        });

        // ===== 键盘快捷键 =====
        document.addEventListener('keydown', (e) => {
            if (!DOM.videoModal.classList.contains('active')) return;

            switch (e.key) {
                case ' ':
                case 'k':
                    e.preventDefault();
                    togglePlay();
                    showControls();
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case 'Escape':
                    close();
                    break;
                case 'ArrowLeft':
                    DOM.modalVideo.currentTime = Math.max(0, DOM.modalVideo.currentTime - 5);
                    updateProgress();
                    showControls();
                    break;
                case 'ArrowRight':
                    DOM.modalVideo.currentTime = Math.min(
                        DOM.modalVideo.duration || 0,
                        DOM.modalVideo.currentTime + 5
                    );
                    updateProgress();
                    showControls();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setVolume(Math.min(1, DOM.modalVideo.volume + 0.1));
                    showControls();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    setVolume(Math.max(0, DOM.modalVideo.volume - 0.1));
                    showControls();
                    break;
            }
        });

        // ===== 关闭 =====
        DOM.modalClose.addEventListener('click', close);
        DOM.modalOverlay.addEventListener('click', close);
    }

    return { open, close, init };
})();

// =========================================
// Navigation 导航
// =========================================

const Navigation = (() => {
    function init() {
        // 汉堡菜单
        DOM.hamburger.addEventListener('click', () => {
            DOM.hamburger.classList.toggle('active');
            DOM.navMenu.classList.toggle('active');
            document.body.style.overflow = DOM.navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // 点击导航链接关闭菜单
        DOM.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                DOM.hamburger.classList.remove('active');
                DOM.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    return { init };
})();

// =========================================
// Scroll Events 滚动事件
// =========================================

const ScrollHandler = (() => {
    function updateNavbar() {
        const scrollY = window.scrollY;
        DOM.navbar.classList.toggle('scrolled', scrollY > 50);
        DOM.backToTop.classList.toggle('visible', scrollY > 500);
    }

    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 150;

        let currentSection = '';
        DOM.allSections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
                currentSection = section.id;
            }
        });

        DOM.navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
        });
    }

    function init() {
        window.addEventListener('scroll', () => {
            updateNavbar();
            updateActiveNavLink();
        }, { passive: true });

        // 返回顶部
        DOM.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    return { init };
})();

// =========================================
// Scroll Animations 滚动动画 (Intersection Observer)
// =========================================

const ScrollAnimation = (() => {
    function init() {
        const elements = document.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    return { init };
})();

// =========================================
// Stats Counter 数字动画
// =========================================

const StatsCounter = (() => {
    function init() {
        const statNumbers = document.querySelectorAll('.stat-number');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateNumber(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => observer.observe(el));
    }

    function animateNumber(element, target) {
        const duration = 2000;
        const startTime = performance.now();
        const startValue = 0;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startValue + (target - startValue) * eased);

            element.textContent = current + '+';

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target + '+';
            }
        }

        requestAnimationFrame(update);
    }

    return { init };
})();

// =========================================
// 工具函数
// =========================================

// 设置页脚年份
DOM.footerYear.textContent = new Date().getFullYear();

// 添加 shake 动画
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// =========================================
// 初始化
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    Carousel.init();
    Portfolio.init();
    VideoModal.init();
    Navigation.init();
    ScrollHandler.init();
    ScrollAnimation.init();
    StatsCounter.init();

    // 初始检查导航栏状态
    ScrollHandler.updateNavbar();
    ScrollHandler.updateActiveNavLink();
});
