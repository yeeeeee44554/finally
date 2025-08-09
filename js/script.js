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

const authorsData = {
    '叶兆言': {
        name: '叶兆言',
        intro: '著名作家，代表作《南京传》《一九三七年的爱情》等',
        works: [
            {title: '南京传', location: '南京', coord: nanjingCoords['南京大学'], excerpt: '一部关于南京的百科全书式著作'},
            {title: '一九三七年的爱情', location: '秦淮河', coord: nanjingCoords['秦淮河'], excerpt: '战争背景下发生在秦淮河畔的爱情故事'},
            {title: '刻骨铭心', location: '总统府', coord: nanjingCoords['总统府'], excerpt: '讲述南京近代历史变迁的长篇小说'}
        ]
    },
    '朱自清': {
        name: '朱自清',
        intro: '现代散文家，代表作《背影》《荷塘月色》等',
        works: [
            {title: '南京', location: '玄武湖', coord: nanjingCoords['玄武湖'], excerpt: '描写南京玄武湖的优美散文'},
            {title: '桨声灯影里的秦淮河', location: '秦淮河', coord: nanjingCoords['秦淮河'], excerpt: '与俞平伯同游秦淮河后所作的名篇'}
        ]
    },
        '匡亚明': {
            name: '匡亚明',
            intro: '革命家、教育家，曾任南京大学校长',
            works: [
                {
                    title: '血祭',
                    location: '南京',
                    coord: nanjingCoords['南京'],
                    excerpt: '以南京为背景的革命历史题材小说'
                }
            ]
        },
        '陈衡哲': {
            name: '陈衡哲',
            intro: '新文学史上中国第一位白话文女作家',
            works: [
                {
                    title: '小雨点',
                    location: '南京',
                    coord: nanjingCoords['南京'],
                    excerpt: '早期白话小说代表作'
                },
                {
                    title: '一日',
                    location: '南京',
                    coord: nanjingCoords['南京'],
                    excerpt: '比《狂人日记》早一年发表的白话小说'
                }
            ]
        },
        '倪贻德': {
            name: '倪贻德',
            intro: '作家、美术理论家',
            works: [
                {
                    title: '玄武湖之秋',
                    location: '玄武湖',
                    coord: nanjingCoords['玄武湖'],
                    excerpt: '自叙传小说，以南京生活经历为原型'
                }
            ]
        },
    
        // 诗歌
       '胡适': {
            name: '胡适',
            intro: '新文化运动领袖',
            works: [
                {
                    title: '我们三个朋友',
                    location: '南京',
                    coord: nanjingCoords['南京'],
                    excerpt: '赠予东南大学友人任鸿隽夫妇的诗作'
                },
                {
                    title: '外交',
                    location: '鼓楼',
                    coord: nanjingCoords['鼓楼'],
                    excerpt: '以南京鼓楼为场景的政治讽刺诗'
                }
            ]
        },
        '卢前': {
            name: '卢前',
            intro: '诗人、学者',
            works: [
                {
                    title: '春雨',
                    location: '南京',
                    coord: nanjingCoords['南京'],
                    excerpt: '描写南京春雨景象的诗歌'
                },
                {
                    title: '秦淮舟中联句',
                    location: '秦淮河',
                    coord: nanjingCoords['秦淮河'],
                    excerpt: '与潜社成员在秦淮河上的联句创作'
                }
            ]
        },
        '丘逢甲': {
            name: '丘逢甲',
            intro: '晚清爱国诗人',
            works: [
                {
                    title: '谒明孝陵',
                    location: '明孝陵',
                    coord: nanjingCoords['明孝陵'],
                    excerpt: '1911年游历明孝陵所作'
                },
                {
                    title: '登扫叶楼',
                    location: '扫叶楼',
                    coord: nanjingCoords['扫叶楼'],
                    excerpt: '描写清凉山扫叶楼景色的诗作'
                }
            ]
        },
    
        // 散文
        '朱自清': {
            name: '朱自清',
            intro: '现代散文家、诗人',
            works: [
                {
                    title: '背影',
                    location: '浦口火车站',
                    coord: nanjingCoords['浦口火车站'],
                    excerpt: '父亲送别场景发生于浦口火车站'
                },
                {
                    title: '桨声灯影里的秦淮河',
                    location: '秦淮河',
                    coord: nanjingCoords['秦淮河'],
                    excerpt: '与俞平伯夜游秦淮河的散文'
                }
            ]
        },
        '鲁迅': {
            name: '鲁迅',
            intro: '现代文学奠基人',
            works: [
                {
                    title: '琐记',
                    location: '江南水师学堂',
                    coord: nanjingCoords['江南水师学堂'],
                    excerpt: '回忆南京求学经历的散文'
                }
            ]
        },
    
        // 戏剧
        '侯曜': {
            name: '侯曜',
            intro: '戏剧家、电影导演',
            works: [
                {
                    title: '山河泪',
                    location: '东南大学',
                    coord: nanjingCoords['东南大学'],
                    excerpt: '为东南大学火灾筹款创作的戏剧'
                },
                {
                    title: '月老离婚',
                    location: '南京',
                    coord: nanjingCoords['南京'],
                    excerpt: '与濮舜卿合著的讽刺婚姻制度的戏剧'
                }
            ]
        },
        '濮舜卿': {
            name: '濮舜卿',
            intro: '女戏剧家',
            works: [
                {
                    title: '人间的乐园',
                    location: '东南大学',
                    coord: nanjingCoords['东南大学'],
                    excerpt: '在东南大学排演的女性主义戏剧'
                }
            ]
        }
    ,
    '张恨水':{
        name: '张恨水',
        intro: '民国时期著名小说家',
        works: [
            {title: '秦淮世家', location: '秦淮河', coord: nanjingCoords['秦淮河'], excerpt: '描写秦淮河畔人家的生活'}
        ]
    }
};

// 定义初始标记点数据
const initialMarkers = Object.keys(nanjingCoords).map(name => ({
    name: name,
    value: nanjingCoords[name],
    excerpt: '南京文学地标'
}));

// 主函数
$(document).ready(function() {
    // 初始化ECharts实例
    const chartDom = document.getElementById('mapContainer');
    const myChart = echarts.init(chartDom);
    
    // 显示加载动画
    myChart.showLoading({
        text: '正在加载南京地图数据...',
        color: '#4a6cf7',
        textColor: '#4a5568',
        maskColor: 'rgba(255, 255, 255, 0.9)'
    });
    
    // 加载南京地图数据
    function loadNanjingMap() {
        const chartDom = document.getElementById('mapContainer');
        const myChart = echarts.init(chartDom);
        
        // 显示加载动画
        myChart.showLoading({
            text: '正在加载南京地图数据...',
            color: '#4a6cf7',
            textColor: '#4a5568',
            maskColor: 'rgba(255, 255, 255, 0.9)'
        });
    
        // 使用本地地图数据（基于您的文件结构）
        fetch('../data/nanjing.json')
            .then(response => response.json())
            .then(nanjingGeoJSON => {
                // 注册南京地图
                echarts.registerMap('nanjing', nanjingGeoJSON);
                
                // 配置地图选项（保持原有逻辑）
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
                                return `<div style="font-weight:bold;margin-bottom:5px;">${params.name}</div>
                                        <div>${params.data.excerpt || '南京文学地标'}</div>
                                        <div style="margin-top:8px;color:#4a5568;">点击查看详情</div>`;
                            }
                            return params.name;
                        }
                    },
                    geo: {
                        map: 'nanjing',
                        roam: true,
                        zoom: 8,
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
                        }
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
            })
            .catch(error => {
                console.error('加载南京地图数据失败:', error);
                myChart.hideLoading();
                
                // 创建备用坐标视图
                const backupOption = {
                    title: {
                        text: '南京文学地标图',
                        subtext: '使用坐标视图展示',
                        left: 'center'
                    },
                    xAxis: {
                        name: '经度',
                        min: 118.5,
                        max: 119.0
                    },
                    yAxis: {
                        name: '纬度',
                        min: 31.8,
                        max: 32.2
                    },
                    series: [{
                        type: 'scatter',
                        symbol: 'pin',
                        symbolSize: [40, 50],
                        itemStyle: { 
                            color: '#ff6b6b' 
                        },
                        data: initialMarkers.map(marker => ({
                            ...marker,
                            value: marker.value,
                            name: marker.name
                        }))
                    }]
                };
                
                myChart.setOption(backupOption);
            });
        
        // 响应窗口大小变化
        window.addEventListener('resize', () => myChart.resize());
    }
    // 显示作家信息及作品
    function showAuthorWorks(authorName) {
        const author = authorsData[authorName];
        if (!author) {
            $('#infoPanel').html(`<div class="default-message">
                <h3>未找到相关作家</h3>
                <p>请尝试搜索：朱自清、吴敬梓、张恨水</p>
            </div>`);
            
            myChart.setOption({
                series: [{
                    data: initialMarkers
                }]
            });
            $('.counter-number').text(initialMarkers.length);
            return;
        }
        
        // 更新信息面板
        let worksHtml = author.works.map(work => `
            <div class="work-item">
                <div class="work-title">${work.title}</div>
                <div class="work-location">${work.location}</div>
                <div class="work-excerpt">${work.excerpt}</div>
            </div>
        `).join('');
        
        $('#infoPanel').html(`
            <div class="author-header">
                <h2>${author.name}</h2>
                <p>${author.intro}</p>
            </div>
            <h3 style="margin-bottom:20px;color:#4a5568;border-bottom:1px solid #eee;padding-bottom:10px;">
                南京相关作品
            </h3>
            <div class="works-list">${worksHtml}</div>
        `);
        
        // 更新计数器
        $('.counter-number').text(author.works.length);
        $('.counter-number').addClass('highlight');
        setTimeout(() => $('.counter-number').removeClass('highlight'), 2000);
        
        // 更新地图标记
        const worksData = author.works.map(work => ({
            name: work.title,
            value: work.coord,
            excerpt: work.excerpt,
            location: work.location
        }));
        
        myChart.setOption({
            series: [{
                data: worksData,
                label: { 
                    formatter: '{b}',
                    fontWeight: 'bold'
                }
            }]
        });
    }
    
    // 搜索功能
    $('#searchBtn').click(() => {
        const authorName = $('#searchInput').val().trim();
        if (authorName) {
            showAuthorWorks(authorName);
        } else {
            // 重置为初始状态
            myChart.setOption({
                series: [{
                    data: initialMarkers
                }]
            });
            $('.counter-number').text(initialMarkers.length);
            $('#infoPanel').html(`<div class="default-message">
                <h3>欢迎使用南京文学地图</h3>
                <p>在搜索框中输入作家姓名，查看他们在南京的创作足迹</p>
                <p>点击地图上的标记点，查看作品详情</p>
                <p>已收录23位作家，147部南京相关作品</p>
            </div>`);
        }
    });
    
    $('#searchInput').keypress(e => {
        if (e.which === 13) $('#searchBtn').click();
    });
    
    // 点击地图显示信息
    myChart.on('click', params => {
        if (params.componentType === 'series' && params.seriesType === 'scatter') {
            const clickedWorkId = params.data.id;
            let foundAuthor = null;
            
            // 查找作品对应的作家
            for (const author in authorsData) {
                const work = authorsData[author].works.find(w => w.id === clickedWorkId);
                if (work) {
                    foundAuthor = author;
                    break;
                }
            }
            
            if (foundAuthor) {
                showAuthorWorks(foundAuthor);
            } else {
                // 显示地标信息
                $('#infoPanel').html(`
                    <div class="default-message">
                        <h3>${params.name}</h3>
                        <p>南京著名文化地标</p>
                        <p>多位作家曾在此留下名篇佳作</p>
                    </div>
                `);
            }
        }
    });
    
    
    // 初始加载南京地图
    loadNanjingMap();
    
    // 响应窗口大小变化
    window.addEventListener('resize', () => myChart.resize());
});