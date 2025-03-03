// 登录页面逻辑
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert('登录成功！');
            window.location.href = 'dashboard.html';
        } else {
            alert(result.message || '登录失败！');
        }
    } catch (error) {
        alert('网络错误，请稍后再试！');
    }
});

// 视图切换逻辑
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });

    document.getElementById(viewId).classList.add('active');
    document.querySelector(`.sidebar-item[data-view="${viewId}"]`).classList.add('active');
}

// 轮播图逻辑
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images .case-image-small');
const totalImages = images.length;

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// 初始化默认视图
document.addEventListener('DOMContentLoaded', () => {
    switchView('case-intro');
});