document.getElementById('login-form').addEventListener('submit', async (e) => {
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
            // 跳转到新页面
            window.location.href = 'dashboard.html';
        } else {
            alert(result.message || '登录失败！');
        }
    } catch (error) {
        alert('网络错误，请稍后再试！');
    }
});