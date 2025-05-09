 // 导航栏自动高亮脚本
 document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面路径
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();
    
    // 遍历所有导航链接
    document.querySelectorAll('nav a').forEach(link => {
        // 移除所有active类
        link.classList.remove('active');
        
        // 获取链接的页面文件名
        const linkPage = link.getAttribute('href').split('/').pop().toLowerCase();
        
        // 特殊处理首页匹配
        const isIndexPage = (currentPage === '' || currentPage === 'index.html') && 
                           (linkPage === 'index.html' || linkPage === '');
        
        // 精确匹配或首页匹配时添加active类
        if(linkPage === currentPage || isIndexPage) {
            link.classList.add('active');
        }
    });
});