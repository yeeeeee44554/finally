// 南京主要地点坐标数据
const nanjingCoords = {
    '秦淮河': [118.792, 32.0107],
    '夫子庙': [118.790, 32.023],
    '中山陵': [118.853, 32.062],
    '玄武湖': [118.796, 32.078],
    '乌衣巷': [118.787, 32.025],
    '明城墙': [118.798, 32.050],
    '鸡鸣寺': [118.798, 32.060],
    '南京大学': [118.784, 32.060],
    '总统府': [118.803, 32.046],
    '栖霞山': [118.964, 32.154],
    '江南贡院': [118.794, 32.024],
    '凤凰台': [118.763, 32.008],
    '长干里': [118.779, 32.012],
    '中华门': [118.775, 32.008],
    '莫愁湖': [118.761, 32.040],
    '扫叶楼': [118.748, 32.065],
    '清凉山': [118.750, 32.068],
    '江南水师学堂': [118.772, 32.095],
    '浦口火车站': [118.740, 32.150],
    '东南大学': [118.796, 32.060],
    '明孝陵': [118.850, 32.058],
    '灵谷寺': [118.868, 32.070],
    '牛首山': [118.781, 31.899],
    '龙膊子': [118.820, 32.040],
    '台城': [118.802, 32.063]
};

// 作家数据
const authorsData = {
    '叶兆言': {
        name: '叶兆言',
        intro: '著名作家，代表作《南京传》《一九三七年的爱情》等',
        works: [
            {id: 1, title: '南京传', location: '南京', coord: [118.8, 32.05], excerpt: '一部关于南京的百科全书式著作'},
            {id: 2, title: '一九三七年的爱情', location: '秦淮河', coord: nanjingCoords['秦淮河'], excerpt: '战争背景下发生在秦淮河畔的爱情故事'},
            {id: 3, title: '刻骨铭心', location: '总统府', coord: nanjingCoords['总统府'], excerpt: '讲述南京近代历史变迁的长篇小说'}
        ]
    },
    '朱自清': {
        name: '朱自清',
        intro: '现代散文家，代表作《背影》《荷塘月色》等',
        works: [
            {id: 4, title: '南京', location: '玄武湖', coord: nanjingCoords['玄武湖'], excerpt: '描写南京玄武湖的优美散文'},
            {id: 5, title: '桨声灯影里的秦淮河', location: '秦淮河', coord: nanjingCoords['秦淮河'], excerpt: '与俞平伯同游秦淮河后所作的名篇'}
        ]
    },
    '匡亚明': {
        name: '匡亚明',
        intro: '革命家、教育家，曾任南京大学校长',
        works: [
            {id: 6, title: '血祭', location: '南京', coord: [118.8, 32.05], excerpt: '以南京为背景的革命历史题材小说'}
        ]
    },
    '陈衡哲': {
        name: '陈衡哲',
        intro: '新文学史上中国第一位白话文女作家',
        works: [
            {id: 7, title: '小雨点', location: '南京', coord: [118.8, 32.05], excerpt: '早期白话小说代表作'},
            {id: 8, title: '一日', location: '南京', coord: [118.8, 32.05], excerpt: '比《狂人日记》早一年发表的白话小说'}
        ]
    },
    '倪贻德': {
        name: '倪贻德',
        intro: '作家、美术理论家',
        works: [
            {id: 9, title: '玄武湖之秋', location: '玄武湖', coord: nanjingCoords['玄武湖'], excerpt: '自叙传小说，以南京生活经历为原型'}
        ]
    },
    '胡适': {
        name: '胡适',
        intro: '新文化运动领袖',
        works: [
            {id: 10, title: '我们三个朋友', location: '南京', coord: [118.8, 32.05], excerpt: '赠予东南大学友人任鸿隽夫妇的诗作'},
            {id: 11, title: '外交', location: '鼓楼', coord: [118.78, 32.07], excerpt: '以南京鼓楼为场景的政治讽刺诗'}
        ]
    },
    '卢前': {
        name: '卢前',
        intro: '诗人、学者',
        works: [
            {id: 12, title: '春雨', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京春雨景象的诗歌'},
            {id: 13, title: '秦淮舟中联句', location: '秦淮河', coord: nanjingCoords['秦淮河'], excerpt: '与潜社成员在秦淮河上的联句创作'}
        ]
    },
    '丘逢甲': {
        name: '丘逢甲',
        intro: '晚清爱国诗人',
        works: [
            {id: 14, title: '谒明孝陵', location: '明孝陵', coord: nanjingCoords['明孝陵'], excerpt: '1911年游历明孝陵所作'},
            {id: 15, title: '登扫叶楼', location: '扫叶楼', coord: nanjingCoords['扫叶楼'], excerpt: '描写清凉山扫叶楼景色的诗作'}
        ]
    },
    '鲁迅': {
        name: '鲁迅',
        intro: '现代文学奠基人',
        works: [
            {id: 16, title: '琐记', location: '江南水师学堂', coord: nanjingCoords['江南水师学堂'], excerpt: '回忆南京求学经历的散文'}
        ]
    },
    '侯曜': {
        name: '侯曜',
        intro: '戏剧家、电影导演',
        works: [
            {id: 17, title: '山河泪', location: '东南大学', coord: nanjingCoords['东南大学'], excerpt: '为东南大学火灾筹款创作的戏剧'},
            {id: 18, title: '月老离婚', location: '南京', coord: [118.8, 32.05], excerpt: '与濮舜卿合著的讽刺婚姻制度的戏剧'}
        ]
    },
    '濮舜卿': {
        name: '濮舜卿',
        intro: '女戏剧家',
        works: [
            {id: 19, title: '人间的乐园', location: '东南大学', coord: nanjingCoords['东南大学'], excerpt: '在东南大学排演的女性主义戏剧'}
        ]
    },
    '张恨水': {
        name: '张恨水',
        intro: '民国时期著名小说家',
        works: [
            {id: 20, title: '秦淮世家', location: '秦淮河', coord: nanjingCoords['秦淮河'], excerpt: '描写秦淮河畔人家的生活'}
        ]
    }
};

// 定义初始标记点数据
const initialMarkers = Object.keys(nanjingCoords).map(name => ({
    id: `loc_${name}`,
    name: name,
    value: nanjingCoords[name],
    excerpt: '南京文学地标'
}));

// 主函数
// 主函数
$(document).ready(function() {
    let myChart;
    
    // 初始化地图
    function initMap() {
        const chartDom = document.getElementById('mapContainer');
        if (!chartDom) return;
        
        myChart = echarts.init(chartDom);
        loadNanjingMap();
    }

    function loadNanjingMap() {
        myChart.showLoading({
            text: '正在加载南京地图数据...',
            color: '#4a6cf7',
            textColor: '#4a5568',
            maskColor: 'rgba(255, 255, 255, 0.9)'
        });

        // 配置地图选项
        const option = {
            title: {
                text: '南京文学地图',
                subtext: '作家笔下的人文南京',
                left: 'center',
                textStyle: { 
                    color: '#2d3748', 
                    fontSize: 24,
                    fontWeight: 'bold'
                },
                subtextStyle: { 
                    color: '#718096',
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 15,
                borderRadius: 8,
                textStyle: {
                    color: '#2d3748'
                },
                formatter: function(params) {
                    if (params.componentType === 'series') {
                        const isAuthorPoint = params.data.id && params.data.id.startsWith('auth_');
                        const text = isAuthorPoint 
                            ? `<div style="margin-bottom:5px;color:#4a6cf7;">${params.data.author}作品地点</div>` 
                            : '';
                        
                        return `<div style="font-weight:bold;margin-bottom:5px;">${params.name}</div>
                                ${text}
                                <div>${params.data.excerpt || '南京文学地标'}</div>
                                <div style="margin-top:8px;color:#4a5568;">点击查看详情</div>`;
                    }
                    return params.name;
                }
            },
            geo: {
                map: 'china',
                roam: true,
                zoom: 6.5,
                center: [118.8, 32.05],
                label: { 
                    emphasis: { 
                        show: false 
                    } 
                },
                itemStyle: {
                    areaColor: '#e8f4ff',
                    borderColor: '#297acc'
                },
                emphasis: {
                    itemStyle: { 
                        areaColor: '#a4d0ff' 
                    },
                    label: { 
                        show: true, 
                        color: '#1a3d66' 
                    }
                },
                regions: [{
                    name: '南京',
                    itemStyle: {
                        areaColor: '#a4d0ff',
                        borderColor: '#297acc'
                    },
                    emphasis: {
                        itemStyle: {
                            areaColor: '#4a9df7'
                        }
                    }
                }]
            },
            series: [{
                name: '文学地标',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [40, 50],
                itemStyle: { 
                    color: '#ff6b6b' 
                },
                data: initialMarkers,
                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#1a3d66',
                    fontSize: 12
                },
                zlevel: 2
            }]
        };
        
        // 应用配置
        myChart.setOption(option);
        
        // 隐藏加载动画
        myChart.hideLoading();
        
        // 更新计数器
        $('.counter-number').text(initialMarkers.length);
    }

    // 显示作家信息及作品
    function showAuthorWorks(authorName) {
        const author = authorsData[authorName];
        if (!author) {
            $('#infoPanel').html(`<div class="default-message">
                <h3>未找到相关作家</h3>
                <p>请尝试搜索：叶兆言、朱自清、张恨水</p>
            </div>`);
            
            // 重置为初始视图
            resetToInitialView();
            return;
        }
        
        // 更新信息面板
        let worksHtml = author.works.map(work => `
            <div class="work-item" data-work-id="${work.id}">
                <div class="work-title">${work.title}</div>
                <div class="work-location">
                    <i class="fas fa-map-marker-alt"></i>${work.location}
                </div>
                <div class="work-excerpt">${work.excerpt}</div>
            </div>
        `).join('');
        
        $('#infoPanel').html(`
            <div class="author-header">
                <h2>${author.name}</h2>
                <p>${author.intro}</p>
            </div>
            <div class="section-title">
                <span>作品列表</span>
                <button id="reset-btn" class="small-btn">返回地图</button>
            </div>
            <div class="works-list">${worksHtml}</div>
        `);
        
        // 添加作品点击事件
        $('.work-item').click(function() {
            const workId = $(this).data('work-id');
            const work = author.works.find(w => w.id === workId);
            if (!work) return;
            
            highlightLocation(work);
        });
        
        // 添加返回地图事件
        $('#reset-btn').click(resetToInitialView);
        
        // 更新计数器
        updateCounter(author.works.length);
        
        // 更新地图标记 - 突出显示该作家的作品地点
        const authorMarkers = author.works.map(work => ({
            ...work,
            id: `auth_${work.id}`,
            name: work.location,
            author: author.name,
            value: work.coord,
            excerpt: `${work.title} - ${author.name}作品`,
            symbol: 'pin',
            symbolSize: [45, 55],
            itemStyle: { color: '#4a6cf7' },
            label: {
                show: true,
                formatter: '{b}',
                position: 'bottom',
                color: '#1a3d66',
                fontSize: 12,
                fontWeight: 'bold'
            }
        }));
        
        myChart.setOption({
            series: [{
                data: authorMarkers
            }]
        });
        
        // 自动聚焦到第一个作品
        if (author.works.length > 0) {
            highlightLocation(author.works[0]);
        }
    }
    
    // 高亮显示特定地点
    function highlightLocation(work) {
        // 地图飞向该位置
        myChart.setOption({
            geo: {
                center: work.coord,
                zoom: 10
            }
        });
        
        // 添加脉冲动画效果
        const targetMarker = initialMarkers.find(m => m.name === work.location);
        if (targetMarker) {
            // 使用echarts的highlight效果
            myChart.dispatchAction({
                type: 'highlight',
                name: targetMarker.name
            });
            
            // 添加额外的动画效果
            myChart.dispatchAction({
                type: 'downplay',
                name: targetMarker.name
            });
            
            setTimeout(() => {
                myChart.dispatchAction({
                    type: 'highlight',
                    name: targetMarker.name
                });
            }, 300);
        }
    }
    
    // 更新作品计数器
    function updateCounter(count) {
        $('.counter-number').text(count);
        $('.counter-number').addClass('highlight');
        setTimeout(() => $('.counter-number').removeClass('highlight'), 1000);
    }
    
    // 重置为初始视图
    function resetToInitialView() {
        myChart.setOption({
            geo: {
                center: [118.8, 32.05],
                zoom: 6.5
            },
            series: [{
                data: initialMarkers
            }]
        });
        
        updateCounter(initialMarkers.length);
        
        $('#infoPanel').html(`<div class="default-message">
            <h3>欢迎使用南京文学地图</h3>
            <p>在搜索框中输入作家姓名，查看他们在南京的创作足迹</p>
            <p>点击地图上的标记点，查看作品详情</p>
            <p>已收录${authorNames.length}位作家，${totalWorks}部南京相关作品</p>
            <div class="tag-container">
                <span class="tag">叶兆言</span>
                <span class="tag">朱自清</span>
                <span class="tag">张恨水</span>
                <span class="tag">鲁迅</span>
                <span class="tag">匡亚明</span>
            </div>
        </div>`);
        
        // 为标签添加点击事件
        $('.tag').click(function() {
            const author = $(this).text();
            $('#searchInput').val(author);
            showAuthorWorks(author);
        });
    }
    
    // 搜索功能
    $('#searchBtn').click(() => {
        const authorName = $('#searchInput').val().trim();
        if (authorName) {
            showAuthorWorks(authorName);
        } else {
            // 重置为初始状态
            resetToInitialView();
        }
    });
    
    // 搜索框回车键事件
    $('#searchInput').keypress(e => {
        if (e.which === 13) $('#searchBtn').click();
    });
    
    // 添加输入自动提示（优化版本）
    $('#searchInput').on('input', function() {
        const val = $(this).val().trim().toLowerCase();
        if (!val) {
            $('.autocomplete').hide();
            return;
        }
        
        // 使用高效的前缀匹配
        const startsWithMatches = authorNames.filter(name => 
            name.toLowerCase().startsWith(val)
        );
        
        // 然后匹配包含但不以输入开头的
        const includesMatches = authorNames.filter(name => 
            !startsWithMatches.includes(name) && name.toLowerCase().includes(val)
        );
        
        const matches = [...startsWithMatches, ...includesMatches].slice(0, 5);
        
        $('.autocomplete').empty();
        if (matches.length === 0) {
            $('.autocomplete').hide();
            return;
        }
        
        const suggestions = matches.map(name => {
            const author = authorsData[name];
            return `<div class="suggestion" data-author="${name}">
                <i class="fas fa-user-pen"></i>
                <div>
                    <div class="author-name">${author.name}</div>
                    <div class="author-intro">${author.intro}</div>
                </div>
            </div>`;
        }).join('');
        
        $('.autocomplete').html(suggestions).show();
        
        $('.suggestion').click(function() {
            const author = $(this).data('author');
            $('#searchInput').val(author);
            showAuthorWorks(author);
            $('.autocomplete').hide();
        });
    });
    
    // 点击文档其他区域关闭自动提示
    $(document).click(function(e) {
        if (!$(e.target).closest('.search-container').length) {
            $('.autocomplete').hide();
        }
    });
    
    // 点击地图显示信息
    myChart.on('click', params => {
        if (params.componentType === 'series' && params.seriesType === 'scatter') {
            const locationName = params.name;
            const relatedWorks = locationToWorks[locationName] || [];
            
            if (relatedWorks.length > 0) {
                let worksHtml = relatedWorks.map(item => {
                    const work = item.work;
                    const author = authorsData[item.author];
                    return `
                        <div class="related-work">
                            <div class="work-title">${work.title}</div>
                            <div class="author-name">${author.name}</div>
                            <div class="work-excerpt">${work.excerpt}</div>
                        </div>
                    `;
                }).join('');
                
                $('#infoPanel').html(`
                    <div class="location-header">
                        <h2>${locationName}</h2>
                        <button id="reset-location" class="small-btn">返回</button>
                    </div>
                    <div class="section-title">相关文学作品</div>
                    <div class="related-works">${worksHtml}</div>
                `);
                
                $('#reset-location').click(resetToInitialView);
                
                // 更新计数器
                updateCounter(relatedWorks.length);
            } else {
                $('#infoPanel').html(`
                    <div class="location-detail">
                        <h3>${locationName}</h3>
                        <p>南京著名文化地标</p>
                        <p>多位作家曾在此留下名篇佳作</p>
                        <button id="reset-location" class="btn">返回地图</button>
                    </div>
                `);
                $('#reset-location').click(resetToInitialView);
                updateCounter(0);
            }
        }
    });
    
    // 初始加载南京地图
    initMap();
    
    // 响应窗口大小变化
    window.addEventListener('resize', () => {
        if (myChart) myChart.resize();
    });
    
    // 初始重置视图
    resetToInitialView();
});