document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // 1. DATA: Timeline Data
    // -------------------------------------------------------------------------
    const congressTimeline = [
        {
          id: 'viii',
          label: 'Đại hội VIII',
          year: '1996 - 2001',
          image: 'assets/01_dai-hoi-viii-historic.png',
          summary: 'Đánh dấu bước chuyển quan trọng sang thời kỳ đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước.',
          bullets: [
            'Rút ra 6 bài học lớn từ 10 năm đổi mới.',
            'Xác định công nghiệp hoá, hiện đại hoá là nhiệm vụ trung tâm.',
            'Nhấn mạnh vai trò khoa học - công nghệ, nguồn lực con người.',
            'Gắn phát triển kinh tế với công bằng xã hội, quốc phòng - an ninh.'
          ]
        },
        {
          id: 'ix',
          label: 'Đại hội IX',
          year: '2001 - 2006',
          image: 'assets/02_dai-hoi-ix-quang-canh.png',
          summary: 'Bước phát triển quan trọng về nhận thức lý luận của Đảng trong thời kỳ đổi mới.',
          bullets: [
            'Làm rõ con đường quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa.',
            'Xác định kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát.',
            'Đẩy mạnh hội nhập kinh tế quốc tế, mở rộng đối ngoại.',
            'Tăng cường đại đoàn kết dân tộc và bảo vệ Tổ quốc.'
          ]
        },
        {
          id: 'x',
          label: 'Đại hội X',
          year: '2006 - 2011',
          image: 'assets/04_dai-hoi-x-bo-phieu.png',
          summary: 'Nhấn mạnh đẩy mạnh toàn diện công cuộc đổi mới sau 20 năm thực hiện.',
          bullets: [
            'Bổ sung nhận thức về CNXH: dân chủ, công bằng, văn minh, Nhà nước pháp quyền XHCN.',
            'Lần đầu nhấn mạnh mạnh mẽ nhiệm vụ xây dựng, chỉnh đốn Đảng.',
            'Tiếp tục hoàn thiện thể chế kinh tế thị trường định hướng XHCN.',
            'Mở rộng hội nhập, tiêu biểu là Việt Nam gia nhập WTO năm 2006.'
          ]
        },
        {
          id: 'xi',
          label: 'Đại hội XI',
          year: '2011 - 2015',
          image: 'assets/05_dai-hoi-xi-quang-canh.png',
          summary: 'Thông qua Cương lĩnh bổ sung, phát triển năm 2011 và Chiến lược phát triển KTXH 2011-2020.',
          bullets: [
            'Xác định rõ hơn mô hình xã hội xã hội chủ nghĩa.',
            'Nêu 8 phương hướng cơ bản xây dựng CNXH.',
            'Đề ra 3 đột phá chiến lược: thể chế, nhân lực chất lượng cao, hạ tầng đồng bộ.',
            'Chú trọng giáo dục, KHCN, văn hoá, con người.'
          ]
        },
        {
          id: 'xii',
          label: 'Đại hội XII',
          year: '2016 - 2018',
          image: 'assets/06_dai-hoi-xii-tong-bi-thu-nguyen-phu-trong.png',
          summary: 'Khẳng định phải đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới.',
          bullets: [
            'Nhấn mạnh nhiệm vụ đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế.',
            'Tiếp tục hoàn thiện kinh tế thị trường định hướng XHCN.',
            'Chú trọng đổi mới giáo dục, phát triển KHCN, văn hoá.',
            'Xác định 6 nhiệm vụ trọng tâm, nổi bật là xây dựng, chỉnh đốn Đảng.'
          ]
        },
        {
          id: 'xiii',
          label: 'Đại hội XIII',
          year: '2021',
          image: 'assets/07_dai-hoi-xiii-tong-bi-thu-nguyen-phu-trong.png',
          summary: 'Bước phát triển mới trong tư duy lãnh đạo, khát vọng phát triển đất nước phồn vinh, hạnh phúc.',
          bullets: [
            'Tiếp tục đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới.',
            'Coi KHCN, đổi mới sáng tạo, chuyển đổi số là động lực quan trọng.',
            'Đặt các mốc mục tiêu 2025, 2030, 2045 (trở thành nước phát triển, thu nhập cao).'
          ]
        },
        {
          id: 'xiv',
          label: 'Đại hội XIV',
          year: '2026',
          image: 'assets/07_dai-hoi-xiv.jpg',
          summary: 'Mở ra giai đoạn phát triển mới, kỷ nguyên vươn mình của dân tộc.',
          bullets: [
            'Nhấn mạnh đổi mới mạnh mẽ tư duy, thể chế.',
            'Xác lập mô hình tăng trưởng mới dựa trên KHCN, đổi mới sáng tạo, chuyển đổi số.',
            'Thúc đẩy chuyển đổi xanh, phát triển nhân lực chất lượng cao.',
            'Hướng tới mục tiêu 2030 trở thành nước đang phát triển có công nghiệp hiện đại.'
          ]
        }
    ];

    // -------------------------------------------------------------------------
    // 2. TIMELINE LOGIC
    // -------------------------------------------------------------------------
    const timelineContainer = document.getElementById('timeline-container');
    const detailPanel = document.getElementById('timeline-detail-panel');
    const closeBtn = document.querySelector('.close-detail');

    // Detail elements
    const dTitle = document.getElementById('detail-title');
    const dYears = document.getElementById('detail-years');
    const dImg = document.getElementById('detail-image');
    const dSum = document.getElementById('detail-summary');
    const dBullets = document.getElementById('detail-bullets');

    if (timelineContainer) {
        timelineContainer.className = 'timeline-nodes-container';
        
        congressTimeline.forEach((item, index) => {
            const point = document.createElement('div');
            // Remove default highlight for last item
            point.className = `timeline-node`;
            
            const displayYear = item.year.split('-')[0].trim();
            const displayLabel = item.label.toUpperCase().replace('ĐẠI HỘI', 'ĐẠI HỘI LẦN THỨ');

            point.innerHTML = `
                <div class="node-circle">
                    <span class="n-year">${displayYear}</span>
                    <span class="n-label">${displayLabel}</span>
                </div>
                <!-- Remove laurel-wreath from here, we can add it via CSS/JS when active if needed, or just remove if user didn't ask for it specifically but "highlight" implies it -->
                <div class="laurel-wreath"></div>
            `;
            
            point.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // 1. Highlight Node
                document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
                point.classList.add('active');

                // 2. Center Node in Container (Smooth Scroll)
                point.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

                // 3. Show Detail & Scroll Down to Detail
                showDetail(item);
                
                // Small delay to allow detail panel to open before scrolling
                setTimeout(() => {
                   // Scroll to the top of the detail panel with some offset if possible, or just to the panel
                   const yOffset = -100; // Adjust for header
                   const y = detailPanel.getBoundingClientRect().top + window.pageYOffset + yOffset;
                   window.scrollTo({top: y, behavior: 'smooth'});
                }, 800); // Increased delay to 800ms to allow animation to start
            });

            timelineContainer.appendChild(point);
        });
        
        // Remove initial showDetail call
        // const lastItem = congressTimeline[congressTimeline.length - 1];
        // showDetail(lastItem);
    }

    function showDetail(item) {
        if (!item) return;
        
        dTitle.textContent = item.label;
        dYears.textContent = `Nhiệm kỳ: ${item.year}`;
        dImg.src = item.image || 'https://via.placeholder.com/600x400';
        dSum.textContent = item.summary;
        
        dBullets.innerHTML = '';
        if(item.bullets) {
            item.bullets.forEach(bullet => {
                const li = document.createElement('li');
                li.textContent = bullet;
                dBullets.appendChild(li);
            });
        }

        detailPanel.classList.remove('hidden');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            detailPanel.classList.add('hidden');
        });
    }

    // -------------------------------------------------------------------------
    // 3. HEADER & SCROLL LOGIC
    // -------------------------------------------------------------------------
    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');
    
    // Initial header state check
    const sections = ['hero', 'history', 'evidence', 'challenge', 'conclusion', 'sources'];
    const navLinks = document.querySelectorAll('.main-nav a');

    // Section color mapping for header background
    const sectionColors = {
        'hero': 'nav-bg-hero',
        'history': 'nav-bg-history',
        'evidence': 'nav-bg-evidence',
        'challenge': 'nav-bg-challenge',
        'conclusion': 'nav-bg-conclusion',
        'sources': 'nav-bg-hero' 
    };

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Auto Hide/Show Header
        if (scrollTop > lastScrollTop && scrollTop > 500) {
            // Scrolling down & passed hero -> hide
            header.classList.add('header-hidden');
        } else {
            // Scrolling up -> show
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop;

        // Active Link & Background Spy
        let current = '';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                
                if (window.scrollY >= (sectionTop - 300)) {
                    current = sectionId;
                }
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').replace('#', '');
            if (href === current) {
                link.classList.add('active');
            }
        });

        // Add specific background class based on section, removing old ones first
        Object.values(sectionColors).forEach(cls => header.classList.remove(cls));
        header.classList.remove('fiery-bg'); // remove animation unless needed

        if (current && sectionColors[current]) {
            header.classList.add(sectionColors[current]);
            
            // Add fiery animation to RED sections for "rực lửa" effect
            if(current === 'history' || current === 'evidence' || current === 'hero') {
               header.classList.add('fiery-bg'); 
            }
        } else {
             header.classList.add('nav-bg-hero');
             header.classList.add('fiery-bg');
        }
    }

    window.addEventListener('scroll', updateHeader);

    // -------------------------------------------------------------------------
    // 4. ANIMATION REVEAL
    // -------------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.evidence-block, .challenge-item, .summary-box');
    
    // Add class for slow animation styling
    revealElements.forEach(el => el.classList.add('reveal-slow'));

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // -------------------------------------------------------------------------
    // 5. THEME TOGGLE (DARK MODE)
    // -------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Check saved preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }

    // -------------------------------------------------------------------------
    // 6. BACK TO TOP BUTTON & QUICK NAV PILL
    // -------------------------------------------------------------------------
    const backToTopBtn = document.getElementById('back-to-top');
    const quickNavPill = document.getElementById('quick-nav-pill');
    const quickNavLinks = document.querySelectorAll('.quick-nav-pill a');
    
    // Auto-Hide / Show on Activity Logic
    let isScrolling;
    let isHovering = false;
    const hideDelay = 500; // Hide after 0.5 seconds of inactivity

    function showQuickNav() {
        if (!backToTopBtn || !quickNavPill) return;

        // Only activate if scrolled past 500px
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
            quickNavPill.classList.add('show');
            
            // Clear existing timeout
            clearTimeout(isScrolling);
            
            // Only set hide timeout if NOT hovering
            if (!isHovering) {
                isScrolling = setTimeout(() => {
                    if (!isHovering) { // Double check before hiding
                        backToTopBtn.classList.remove('show');
                        quickNavPill.classList.remove('show');
                    }
                }, hideDelay);
            }
        } else {
            // Always hide if near top
            backToTopBtn.classList.remove('show');
            quickNavPill.classList.remove('show');
        }
    }

    // Trigger on Scroll
    window.addEventListener('scroll', () => {
        showQuickNav();
        updateQuickNav(); 
    });
    
    // Trigger on Mouse Move
    window.addEventListener('mousemove', () => {
        showQuickNav();
    });
    
    // Prevent hiding while hovering over controls
    const controls = [quickNavPill, backToTopBtn];
    controls.forEach(control => {
        if(!control) return;
        control.addEventListener('mouseenter', () => {
            isHovering = true;
            clearTimeout(isScrolling);
            control.classList.add('show'); 
        });
        control.addEventListener('mouseleave', () => {
             isHovering = false;
             showQuickNav(); // Restart hide logic immediately
        });
    });

    // Quick Nav Active State Spy
    function updateQuickNav() {
        let current = '';
        const sections = ['hero', 'history', 'evidence', 'challenge', 'conclusion', 'sources'];
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                // Offset adjustment for pill which is at bottom
                if (window.scrollY >= (sectionTop - 300)) {
                    current = sectionId;
                }
            }
        });

        quickNavLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').replace('#', '');
            if (href === current) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateQuickNav);

    if(backToTopBtn) { // Safety check
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } 

    // -------------------------------------------------------------------------
    // 7. FIRE PARTICLES ANIMATION
    // -------------------------------------------------------------------------
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
        setInterval(() => {
            const particle = document.createElement('div');
            particle.classList.add('fire-particle');
            
            // Random horizontal position
            const left = Math.random() * 100;
            particle.style.left = `${left}vw`;
            
            // Random animation duration (speed)
            const duration = Math.random() * 3 + 4; // 4s to 7s
            particle.style.animationDuration = `${duration}s`;
            
            // Random size
            const size = Math.random() * 6 + 4; // 4px to 10px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Random delay
            // particle.style.animationDelay = `${Math.random()}s`;

            particlesContainer.appendChild(particle);

            // Access CSS animation duration to remove element
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);

        }, 400); // New particle every 400ms
    }
});
