function getAllMarkers() {
    return Object.keys(nanjingCoords).map(locationName => {
        const works = locationToWorks[locationName] || [];
        const worksList = works.map(item => `${item.author}《${item.work.title}》`);
        const authors = [...new Set(works.map(item => item.author))];
        
        return {
            name: locationName,
            value: nanjingCoords[locationName],
            excerpt: locationDescriptions[locationName] || '南京文学地标',
            works: worksList,
            authors: authors,
            symbol: 'pin',
            symbolSize: [40, 50],
            itemStyle: { 
                color: '#ff6b6b' 
            },
            label: {
                show: true,
                formatter: '{b}',
                position: 'bottom',
                color: '#1a3d66',
                fontSize: 12
            }
        };
    });
}
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
    '台城': [118.802, 32.063],
    '雨花台': [118.778, 31.994],
    '石头城': [118.750, 32.065],
    '钟山': [118.853, 32.062],
    '浦口': [118.625, 32.058],
    '丹风街': [118.788, 32.055],
    '朝天宫': [118.777, 32.033],
    '鼓楼': [118.78, 32.07],
    '太平门': [118.820, 32.070],
    '老虎山': [118.800, 32.110],
    '南京长江大桥': [118.744, 32.115],
    '南京': [118.8, 32.05],  // 添加南京主坐标
    '魁光阁': [118.793, 32.023],
    '周处台': [118.782, 32.022],
    '芥子园': [118.792, 32.025],
    '江东门': [118.748, 32.035],
    '大方巷': [118.776, 32.060],
    '梅园新村': [118.804, 32.044],
    '石头城外': [118.775, 32.008], // 补充张恨水作品地点
    '白下': [118.798, 32.040]  // 南京古称
};

// 地点描述信息
const locationDescriptions = {
    '秦淮河': '朱自清《桨声灯影里的秦淮河》描写地，南京母亲河',
    '夫子庙': '江南文化发源地，张恨水《秦淮世家》场景',
    '中山陵': '孙中山先生陵寝，南京精神象征',
    '玄武湖': '六朝皇家园林，南京最大城市公园',
    '乌衣巷': '刘禹锡"旧时王谢堂前燕"描写地',
    '明城墙': '世界最长古城墙，南京历史见证',
    '鸡鸣寺': '南京最古老梵刹之一，佛教文化中心',
    '南京大学': '中国现代学术发源地，众多作家母校',
    '总统府': '中国近代历史建筑群，民国政治中心',
    '栖霞山': '金陵第一明秀山，佛教石窟所在地',
    '江南贡院': '中国最大科举考场，古代文人聚集地',
    '凤凰台': '李白"凤凰台上凤凰游"诗作地点',
    '长干里': '《长干行》故事发生地，南京古民居区',
    '中华门': '世界最大瓮城，明代军事防御杰作',
    '莫愁湖': '金陵第一名胜，古典园林代表',
    '扫叶楼': '清凉山著名景点，明清文人雅集地',
    '清凉山': '南京文化名山，南唐避暑行宫',
    '江南水师学堂': '鲁迅求学地，中国近代海军摇篮',
    '浦口火车站': '朱自清《背影》故事发生地',
    '东南大学': '中央大学旧址，民国最高学府',
    '明孝陵': '明太祖朱元璋陵寝，世界文化遗产',
    '灵谷寺': '明代佛教寺院，金陵佛都代表',
    '牛首山': '佛教牛头禅发源地，南京名山',
    '龙膊子': '太平天国战场遗址，历史见证地',
    '台城': '六朝宫城遗址，"台城柳"怀古地',
    '雨花台': '革命烈士纪念地，程小青《雨花台吊烈士墓》描写地',
    '石头城': '清凉山古城墙遗址，林文英《石头城》描写地',
    '钟山': '紫金山别称，汪辟疆《江行望钟山》描写地',
    '浦口': '长江北岸交通枢纽，陈衡恪《浦口待车》场景',
    '丹风街': '南京老城区街道，张恨水《丹风街》故事发生地',
    '朝天宫': '江南现存最大古建筑群，卢前《冶城话旧》关联地',
    '鼓楼': '南京历史地标，胡适《外交》提及地点',
    '太平门': '明城墙重要城门，鲍明路《太平门外》描写地',
    '老虎山': '城北工业区，仇相彬《铁水奔流在老虎山顶》场景',
    '南京长江大桥': '长江上第一座自主设计大桥，工人写作组描写对象',
    '魁光阁': '夫子庙著名景点，梁晴《魁光阁小憩》描写地',
    '周处台': '南京历史遗迹，薛冰《从周处台到芥子园》提及',
    '芥子园': '清代名士李渔故居，薛冰文章中提及',
    '江东门': '大屠杀纪念馆所在地，冯亦同《江东门沉思》关联地',
    '大方巷': '鼓楼区历史街区，梁晴《大方巷里的烟火》描写地',
    '梅园新村': '周恩来纪念馆所在地，唐圭璋词作关联地',
    '石头城外': '中华门瓮城周边，张恨水《石头城外》场景',
    '白下': '南京古称，诸荣会《凤生白下》描写地',
    '南京': '江苏省省会，六朝古都，中国现代文学重要城市',

};

// 作家数据
const authorsData = {
    '匡亚明': {
        name: '匡亚明',
        intro: '革命家、教育家，曾任南京大学校长',
        works: [
            {id: 1, title: '血祭', location: '南京', coord: [118.8, 32.05], excerpt: '以南京为背景的革命历史题材小说'}
        ]
    },
    '陈衡哲': {
        name: '陈衡哲',
        intro: '新文学史上中国第一位白话文女作家',
        works: [
            {id: 2, title: '小雨点', location: '南京', coord: [118.8, 32.05], excerpt: '早期白话小说代表作'},
            {id: 3, title: '一日', location: '南京', coord: [118.8, 32.05], excerpt: '比《狂人日记》早一年发表的白话小说'}
        ]
    },
    '倪贻德': {
        name: '倪贻德',
        intro: '作家、美术理论家',
        works: [
            {id: 4, title: '玄武湖之秋', location: '玄武湖', coord: nanjingCoords['玄武湖'], excerpt: '以南京生活经历为原型的自叙传小说'}
        ]
    },
    '胡适': {
        name: '胡适',
        intro: '新文化运动领袖',
        works: [
            {id: 5, title: '我们三个朋友', location: '南京', coord: [118.8, 32.05], excerpt: '赠予东南大学友人任鸿隽夫妇的诗作'},
            {id: 6, title: '湖上', location: '玄武湖', coord: nanjingCoords['玄武湖'], excerpt: '描写玄武湖景色的诗歌'},
            {id: 7, title: '外交', location: '鼓楼', coord: nanjingCoords['鼓楼'], excerpt: '以南京鼓楼为场景的政治讽刺诗'}
        ]
    },
    '卢前': {
        name: '卢前',
        intro: '诗人、学者',
        works: [
            {id: 8, title: '春雨', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京春雨景象的诗歌'},
            {id: 9, title: '绿帘', location: '南京', coord: [118.8, 32.05], excerpt: '南京生活题材的诗歌'},
            {id: 10, title: '民族诗歌论集', location: '南京', coord: [118.8, 32.05], excerpt: '在南京完成的诗歌理论著作'}
        ]
    },
    '丘逢甲': {
        name: '丘逢甲',
        intro: '晚清爱国诗人',
        works: [
            {id: 11, title: '谒明孝陵', location: '明孝陵', coord: [118.850, 32.058], excerpt: '1911年游历明孝陵所作'},
            {id: 12, title: '登扫叶楼', location: '扫叶楼', coord: [118.748, 32.065], excerpt: '描写清凉山扫叶楼景色的诗作'},
            {id: 13, title: '雪中游莫愁湖', location: '莫愁湖', coord: [118.761, 32.040], excerpt: '雪中游莫愁湖的感怀之作'}
        ]
    },
    '周岸登': {
        name: '周岸登',
        intro: '清末民初词人',
        works: [
            {id: 14, title: '台城路·重过金陵', location: '台城', coord: [118.802, 32.063], excerpt: '重游金陵台城的怀旧词作'}
        ]
    },
    '徐震堮': {
        name: '徐震堮',
        intro: '现代学者、诗人',
        works: [
            {id: 15, title: '忆旧游·台城秋柳', location: '台城', coord: [118.802, 32.063], excerpt: '描写台城秋日柳色的怀旧词'}
        ]
    },
    '柳诒徵': {
        name: '柳诒徵',
        intro: '历史学家、诗人',
        works: [
            {id: 16, title: '独往灵谷寺', location: '灵谷寺', coord: [118.868, 32.070], excerpt: '描写灵谷寺清幽景致的诗作'},
            {id: 17, title: '庚申四月十日游牛首山', location: '牛首山', coord: [118.781, 31.899], excerpt: '记录牛首山游览经历的诗篇'},
            {id: 18, title: '校东楼灾诗以吊之', location: '南京大学', coord: [118.784, 32.060], excerpt: '悼念南京大学校东楼火灾的诗作'},
            {id: 19, title: '甲子六月十六日吴雨僧吴碧柳观龙膊子湘军轰城处作', location: '龙膊子', coord: [118.820, 32.040], excerpt: '观太平天国战场遗址有感'}
        ]
    },
    '向楚': {
        name: '向楚',
        intro: '学者、诗人',
        works: [
            {id: 20, title: '过金陵', location: '南京', coord: [118.8, 32.05], excerpt: '途经金陵的感怀诗作'}
        ]
    },
    '陈衡恪': {
        name: '陈衡恪',
        intro: '画家、诗人',
        works: [
            {id: 21, title: '浦口待车·是时闻临城盗劫', location: '浦口', coord: [118.625, 32.058], excerpt: '浦口车站等候时的时事感怀'}
        ]
    },
    '吴芳吉': {
        name: '吴芳吉',
        intro: '现代诗人',
        works: [
            {id: 22, title: '寄答陈鼎芬君南京慰其升学之失意也', location: '南京', coord: [118.8, 32.05], excerpt: '安慰友人升学失意的赠答诗'}
        ]
    },
    '陈三立': {
        name: '陈三立',
        intro: '同光体诗派代表',
        works: [
            {id: 23, title: '散原精舍诗', location: '南京', coord: [118.8, 32.05], excerpt: '在南京创作的诗词集'},
            {id: 24, title: '散原精舍诗续集', location: '南京', coord: [118.8, 32.05], excerpt: '散原精舍诗作的续编'}
        ]
    },
    '曹经沅': {
        name: '曹经沅',
        intro: '诗人',
        works: [
            {id: 25, title: '南京杂诗四首', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京风物的组诗'}
        ]
    },
    '潜社': {
        name: '潜社',
        intro: '吴梅等创建的文学社团',
        works: [
            {id: 26, title: '潜社词刊', location: '南京', coord: [118.8, 32.05], excerpt: '潜社成员创作的词集'},
            {id: 27, title: '秦淮舟中联句', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '秦淮河上集体创作的联句诗'}
        ]
    },
    '觉余': {
        name: '觉余',
        intro: '散文作家',
        works: [
            {id: 28, title: '游灵谷寺记', location: '灵谷寺', coord: [118.868, 32.070], excerpt: '描写灵谷寺景致的游记'}
        ]
    },
    '朱自清': {
        name: '朱自清',
        intro: '现代散文家',
        works: [
            {id: 29, title: '背影', location: '浦口火车站', coord: [118.740, 32.150], excerpt: '描写父亲在浦口车站送别的经典散文'},
            {id: 30, title: '桨声灯影里的秦淮河', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '与俞平伯同游秦淮河后所作的名篇'},
            {id: 31, title: '南京', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京风物的散文'}
        ]
    },
    '鲁迅': {
        name: '鲁迅',
        intro: '现代文学奠基人',
        works: [
            {id: 32, title: '琐记', location: '江南水师学堂', coord: [118.772, 32.095], excerpt: '回忆南京求学经历的散文'},
            {id: 33, title: '戛剑生杂记', location: '南京', coord: [118.8, 32.05], excerpt: '早期文学创作笔记'},
            {id: 34, title: '莳花杂志', location: '南京', coord: [118.8, 32.05], excerpt: '植物相关的随笔札记'},
            {id: 35, title: '呐喊·自序', location: '南京', coord: [118.8, 32.05], excerpt: '《呐喊》小说集的自序'},
            {id: 36, title: '忽然想到', location: '南京', coord: [118.8, 32.05], excerpt: '杂文随笔集'}
        ]
    },
    '包天笑': {
        name: '包天笑',
        intro: '报人、小说家',
        works: [
            {id: 37, title: '钏影楼回忆录', location: '南京', coord: [118.8, 32.05], excerpt: '记录南京生活经历的回忆录'}
        ]
    },
    '俞平伯': {
        name: '俞平伯',
        intro: '诗人、散文家',
        works: [
            {id: 38, title: '桨声灯影里的秦淮河', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '与朱自清同题创作的经典散文'}
        ]
    },
    '侯曜': {
        name: '侯曜',
        intro: '戏剧家、电影导演',
        works: [
            {id: 39, title: '山河泪', location: '南京', coord: [118.8, 32.05], excerpt: '为东南大学火灾筹款创作的戏剧'},
            {id: 40, title: '人间乐园', location: '东南大学', coord: [118.796, 32.060], excerpt: '在东南大学创作的校园剧'},
            {id: 41, title: '弃妇', location: '东南大学', coord: [118.796, 32.060], excerpt: '反映社会问题的校园剧'},
            {id: 42, title: '复活的玫瑰', location: '东南大学', coord: [118.796, 32.060], excerpt: '爱情题材的校园剧'},
            {id:43,title: '月老离婚', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺婚姻制度的合著戏剧'},
        ]
    },
    '濮舜卿': {
        name: '濮舜卿',
        intro: '女戏剧家',
        works: [
            {id: 44, title: '人间的乐园', location: '东南大学', coord: [118.796, 32.060], excerpt: '在东南大学排演的女性主义戏剧'},
            {id: 45, title: '她的新生命', location: '南京', coord: [118.8, 32.05], excerpt: '描写女性觉醒的戏剧'},
            {id: 46, title: '芙蓉泪', location: '南京', coord: [118.8, 32.05], excerpt: '爱情悲剧题材的戏剧'},
            {id: 47, title: '月老离婚', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺婚姻制度的合著戏剧'}
        ]
    },
    '陈瘦竹': {
            name: '陈瘦竹',
            intro: '戏剧理论家、作家',
            works: [
                {id: 48, title: '奈何天', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京知识分子生活的小说'},
                {id: 49, title: '灿烂的火花', location: '南京', coord: [118.8, 32.05], excerpt: '以南京为背景的中篇小说'}
            ]
        },
        '叶灵凤': {
            name: '叶灵凤',
            intro: '小说家、藏书家',
            works: [
                {id: 50, title: '内疚', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京都市生活的小说'},
                {id: 51, title: '摩伽的试探', location: '南京', coord: [118.8, 32.05], excerpt: '心理题材的短篇小说'},
                {id: 52, title: '昙花庵的春风', location: '南京', coord: [118.8, 32.05], excerpt: '南京宗教背景的爱情故事'},
                {id: 53, title: '处女的梦', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京青年情感生活的小说'},
                {id: 54, title: '鸠绿媚', location: '南京', coord: [118.8, 32.05], excerpt: '以南京为背景的奇幻小说'},
                {id: 55, title: '未完的忏悔录', location: '南京', coord: [118.8, 32.05], excerpt: '南京背景的长篇小说'}
            ]
        },
      
        '丁玲': {
            name: '丁玲',
            intro: '现代女作家',
            works: [
                {id: 58, title: '意外集', location: '南京', coord: [118.8, 32.05], excerpt: '在南京创作的短篇小说集'}
            ]
        },
        '沈祖棻': {
            name: '沈祖棻',
            intro: '词人、学者',
            works: [
                {id: 59, title: '辩才禅师', location: '南京', coord: [118.8, 32.05], excerpt: '南京佛教题材的创作'},
                {id: 60, title: '茂陵的雨夜', location: '南京', coord: [118.8, 32.05], excerpt: '历史题材的文学作品'}
            ]
        },
        '赛珍珠': {
            name: '赛珍珠',
            intro: '诺贝尔文学奖得主，南京生活多年',
            works: [
                {id: 61, title: '也在中国', location: '南京', coord: [118.8, 32.05], excerpt: '记录南京生活经历的散文'},
                {id: 62, title: '美在中国', location: '南京', coord: [118.8, 32.05], excerpt: '描写中国文化的散文'},
                {id: 63, title: '中国学生的思想状态', location: '南京', coord: [118.8, 32.05], excerpt: '基于南京高校观察的随笔'},
                {id: 64, title: '一位中国女子说', location: '南京', coord: [118.8, 32.05], excerpt: '记录南京女性生活的作品'}
            ]
        },
        '关露': {
            name: '关露',
            intro: '女诗人',
            works: [
                {id: 65, title: '太平洋上的歌声', location: '南京', coord: [118.8, 32.05], excerpt: '在南京创作的诗歌作品'}
            ]
        },
        '吴奔星': {
            name: '吴奔星',
            intro: '诗人、学者',
            works: [
                {id: 66, title: '晓望', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京晨景的诗歌'},
                {id: 67, title: '门里关着一个春天', location: '南京', coord: [118.8, 32.05], excerpt: '南京生活题材的诗歌'},
                {id: 68, title: '保卫南京', location: '南京', coord: [118.8, 32.05], excerpt: '抗战题材的爱国诗篇'}
            ]
        },
        '陈独秀': {
            name: '陈独秀',
            intro: '新文化运动领袖',
            works: [
                {id: 69, title: '金粉泪', location: '南京', coord: [118.8, 32.05], excerpt: '在南京创作的诗歌作品'}
            ]
        },
     
        '王焕镳': {
            name: '王焕镳',
            intro: '学者',
            works: [
                {id: 71, title: '明孝陵志', location: '明孝陵', coord: [118.850, 32.058], excerpt: '关于明孝陵的历史研究著作'}
            ]
        },
        '朱偰': {
            name: '朱偰',
            intro: '历史学家',
            works: [
                {id: 72, title: '金陵览古', location: '南京', coord: [118.8, 32.05], excerpt: '南京历史地理研究著作'},
                {id: 73, title: '钟山行', location: '钟山', coord: [118.853, 32.062], excerpt: '描写紫金山的游记'}
            ]
        },
        '林文英': {
            name: '林文英',
            intro: '诗人',
            works: [
                {id: 74, title: '石头城', location: '石头城', coord: [118.750, 32.065], excerpt: '咏叹南京古城遗址的诗作'},
                {id: 75, title: '燕子矶与三台洞', location: '燕子矶', coord: [118.751, 32.148], excerpt: '描写南京江景名胜的诗篇'}
            ]
        },
        '朱氏家族': {
            name: '朱氏家族',
            intro: '文学家族',
            works: [
                {id: 76, title: '金陵百咏', location: '南京', coord: [118.8, 32.05], excerpt: '歌咏南京风物的组诗'}
            ]
        },
        '汪辟疆': {
            name: '汪辟疆',
            intro: '学者、诗人',
            works: [
                {id: 77, title: '江行望钟山', location: '钟山', coord: [118.853, 32.062], excerpt: '描写紫金山的诗作'},
                {id: 78, title: '后湖集', location: '玄武湖', coord: [118.796, 32.078], excerpt: '关于玄武湖的诗文集'}
            ]
        },
        '梁公约': {
            name: '梁公约',
            intro: '学者',
            works: [
                {id: 79, title: '与祭钟山书院飨堂礼成有作', location: '钟山书院', coord: [118.8, 32.05], excerpt: '书院祭祀仪式的记录'}
            ]
        },
        '邵祖平': {
            name: '邵祖平',
            intro: '诗人',
            works: [
                {id: 80, title: '开岁二日同人游扫叶楼', location: '扫叶楼', coord: [118.748, 32.065], excerpt: '新年游扫叶楼的诗作'}
            ]
        },
        '叶玉森': {
            name: '叶玉森',
            intro: '学者、诗人',
            works: [
                {id: 81, title: '予病怔仲翼谋邀游鸡鸣寺归赋一诗并示步曾梦炎', location: '鸡鸣寺', coord: [118.798, 32.060], excerpt: '游鸡鸣寺的感怀诗'}
            ]
        },
        '李思纯': {
            name: '李思纯',
            intro: '诗人',
            works: [
                {id: 82, title: '思游诗', location: '南京', coord: [118.8, 32.05], excerpt: '南京游览题材的组诗'}
            ]
        },
        '吴梅': {
            name: '吴梅',
            intro: '戏曲理论家',
            works: [
                {id: 83, title: '翠楼吟·秦淮遇京华故人', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '秦淮河偶遇故人的词作'}
            ]
        },
        '传统文学社团': {
            name: '传统文学社团',
            intro: '梅社、如社、白下诗社',
            works: [
                {id: 84, title: '社团创作', location: '南京', coord: [118.8, 32.05], excerpt: '传统文学社团集体创作'}
            ]
        },
        '袁昌英': {
            name: '袁昌英',
            intro: '作家、学者',
            works: [
                {id: 85, title: '游新都后的感想', location: '南京', coord: [118.8, 32.05], excerpt: '游南京的感想随笔'},
                {id: 86, title: '再游新都后的感想', location: '南京', coord: [118.8, 32.05], excerpt: '重游南京的散文'}
            ]
        },
        '巴金': {
            name: '巴金',
            intro: '现代文学大师',
            works: [
                {id: 87, title: '从南京回上海', location: '南京', coord: [118.8, 32.05], excerpt: '记录南京旅程的散文'}
            ]
        },
        '曹聚仁': {
            name: '曹聚仁',
            intro: '记者、作家',
            works: [
                {id: 88, title: '南京印象', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京城市风貌的散文'}
            ]
        },
        
        '钟敬文': {
            name: '钟敬文',
            intro: '民俗学家、作家',
            works: [
                {id: 90, title: '金陵记游', location: '南京', coord: [118.8, 32.05], excerpt: '南京游记散文'}
            ]
        },
        '陈大悲': {
            name: '陈大悲',
            intro: '剧作家、戏剧活动家',
            works: [
                {id: 91, title: '英雄与美人', location: '南京', coord: [118.8, 32.05], excerpt: '南京创作的英雄主义题材戏剧'},
                {id: 92, title: '双解放', location: '南京', coord: [118.8, 32.05], excerpt: '反映社会解放的戏剧'},
                {id: 93, title: '爱国贼', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺伪爱国者的戏剧'},
                {id: 94, title: '五三碧血', location: '南京', coord: [118.8, 32.05], excerpt: '纪念济南惨案的戏剧'},
                {id: 95, title: '可怜的查别麟', location: '南京', coord: [118.8, 32.05], excerpt: '社会批判题材的戏剧'},
                {id: 96, title: '真解放', location: '南京', coord: [118.8, 32.05], excerpt: '探讨妇女解放的戏剧'},
                {id: 97, title: '红绿灯的威信', location: '南京', coord: [118.8, 32.05], excerpt: '城市交通题材的现代剧'},
                {id: 98, title: '病夫', location: '南京', coord: [118.8, 32.05], excerpt: '国民性批判的戏剧'},
                {id: 99, title: '西施', location: '南京', coord: [118.8, 32.05], excerpt: '历史题材的戏剧创作'}
            ]
        },
        '吴祖光': {
            name: '吴祖光',
            intro: '剧作家、导演',
            works: [
                {id: 100, title: '凤凰城', location: '南京', coord: [118.8, 32.05], excerpt: '抗战题材的爱国戏剧'}
            ]
        },
        '陈楚淮': {
            name: '陈楚淮',
            intro: '剧作家',
            works: [
                {id: 101, title: '金丝笼', location: '南京', coord: [118.8, 32.05], excerpt: '社会批判题材的戏剧'},
                {id: 102, title: '药', location: '南京', coord: [118.8, 32.05], excerpt: '改编鲁迅作品的戏剧'},
                {id: 103, title: '浦口之悲剧', location: '浦口', coord: [118.625, 32.058], excerpt: '以浦口为背景的悲剧作品'},
                {id: 104, title: '骷髅的迷恋者', location: '南京', coord: [118.8, 32.05], excerpt: '心理题材的戏剧创作'},
                {id: 105, title: '韦菲君', location: '南京', coord: [118.8, 32.05], excerpt: '女性题材的戏剧'},
                {id: 106, title: '桐子落', location: '南京', coord: [118.8, 32.05], excerpt: '南京乡土题材的戏剧'}
            ]
        },
        '集体创作': {
            name: '集体创作',
            intro: '活报剧创作团队',
            works: [
                {id: 107, title: '内战内行', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺内战的活报剧'},
                {id: 108, title: '社会贤达', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺社会名流的活报剧'},
                {id: 109, title: '他们为什么死去', location: '南京', coord: [118.8, 32.05], excerpt: '社会问题题材的活报剧'},
                {id: 110, title: '耍猴记', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺现实的活报剧'}
            ]
        },
        '阿垅': {
            name: '阿垅',
            intro: '七月派诗人',
            works: [
                {id: 111, title: '南京血祭', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京大屠杀的纪实文学'}
            ]
        },
        '路翎': {
            name: '路翎',
            intro: '七月派小说家',
            works: [
                {id: 112, title: '财主底儿女们', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京富商家族的长篇小说'}
            ]
        },
        '张天翼': {
            name: '张天翼',
            intro: '讽刺小说家',
            works: [
                {id: 113, title: '谭九先生的工作', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺知识分子的小说'},
                {id: 114, title: '华威先生', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺官僚的经典小说'},
                {id: 115, title: '新生', location: '南京', coord: [118.8, 32.05], excerpt: '描写知识分子觉醒的小说'}
            ]
        },
        '张恨水': {
            name: '张恨水',
            intro: '民国时期著名小说家',
            works: [
                {id: 116, title: '八十一梦', location: '南京', coord: [118.8, 32.05], excerpt: '抗战时期的讽刺小说'},
                {id: 117, title: '石头城外', location: '石头城外', coord: [118.775, 32.008], excerpt: '以南京古城墙为背景的小说'},
                {id: 118, title: '丹风街', location: '丹风街', coord: [118.788, 32.055], excerpt: '描写南京老城区市井生活'},
                {id: 119, title: '热血之花', location: '南京', coord: [118.8, 32.05], excerpt: '抗战题材小说'},
                {id: 120, title: '九月十八', location: '南京', coord: [118.8, 32.05], excerpt: '纪念九一八事变的小说'},
                {id: 121, title: '大江东去', location: '南京', coord: [118.8, 32.05], excerpt: '以长江为背景的小说'},
                {id: 122, title: '秦淮世家', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '描写秦淮河畔人家的生活'},
                {id: 123, title: '白门十记', location: '南京', coord: [118.8, 32.05], excerpt: '记录南京风土人情的散文集'},
                {id: 124, title: '两都赋', location: '南京', coord: [118.8, 32.05], excerpt: '南京与北京的双城记'}
            ]
        },
       
        '张爱玲': {
            name: '张爱玲',
            intro: '现代文学大师',
            works: [
                {id: 129, title: '对照记', location: '南京', coord: [118.8, 32.05], excerpt: '含南京家族记忆的图文集'},
                {id: 130, title: '私语', location: '南京', coord: [118.8, 32.05], excerpt: '含南京童年记忆的散文'},
                {id: 131, title: '半生缘', location: '南京', coord: [118.8, 32.05], excerpt: '部分场景在南京的小说'},
                {id: 132, title: '小团圆', location: '南京', coord: [118.8, 32.05], excerpt: '含南京家族背景的自传体小说'}
            ]
        },
        '张资平': {
            name: '张资平',
            intro: '小说家',
            works: [
                {id: 133, title: '青鳞屑', location: '南京', coord: [118.8, 32.05], excerpt: '南京背景的小说'},
                {id: 134, title: '新红A字', location: '南京', coord: [118.8, 32.05], excerpt: '情感题材的小说'}
            ]
        },
        '无名氏': {
            name: '无名氏',
            intro: '神秘小说家',
            works: [
                {id: 135, title: '塔里的女人', location: '南京', coord: [118.8, 32.05], excerpt: '南京背景的爱情悲剧'},
                {id: 136, title: '北极风情画', location: '南京', coord: [118.8, 32.05], excerpt: '南京知识分子的爱情故事'},
                {id: 137, title: '一百万年以前', location: '南京', coord: [118.8, 32.05], excerpt: '科幻题材小说'},
                {id: 138, title: '无名书', location: '南京', coord: [118.8, 32.05], excerpt: '哲理性长篇小说'}
            ]
        },
        '臧克家': {
            name: '臧克家',
            intro: '现实主义诗人',
            works: [
                {id: 139, title: '生命的零度', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京底层生活的诗歌'},
                {id: 140, title: '警员向老百姓说', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺当局的诗歌'},
                {id: 141, title: '胜利风', location: '南京', coord: [118.8, 32.05], excerpt: '抗战胜利题材的诗歌'},
                {id: 142, title: '谢谢了，国大代表们', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺国民大会的诗歌'}
            ]
        },
        '袁可嘉': {
            name: '袁可嘉',
            intro: '诗人、翻译家',
            works: [
                {id: 143, title: '死', location: '南京', coord: [118.8, 32.05], excerpt: '哲理抒情诗'},
                {id: 144, title: '南京', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京城市的诗歌'}
            ]
        },
        '汪伪时期旧体诗词创作': {
            name: '汪伪时期旧体诗词创作',
            intro: '梁鸿志、李戡释、龙沐勋等',
            works: [
                {id: 145, title: '旧体诗词', location: '南京', coord: [118.8, 32.05], excerpt: '汪伪时期文人在南京创作的旧体诗词'}
            ]
        },
        '报告文学': {
            name: '报告文学',
            intro: '集体创作',
            works: [
                {id: 146, title: '敌蹂躏下的南京', location: '南京', coord: [118.8, 32.05], excerpt: '南京大屠杀纪实文学'},
                {id: 147, title: '敌军暴行记', location: '南京', coord: [118.8, 32.05], excerpt: '记录日军暴行的报告文学'},
                {id: 148, title: '陷落后的南京', location: '南京', coord: [118.8, 32.05], excerpt: '南京沦陷时期的记录'},
                {id: 149, title: '首都沦陷记', location: '南京', coord: [118.8, 32.05], excerpt: '南京作为沦陷首都的记录'},
                {id: 150, title: '陷京三月记', location: '南京', coord: [118.8, 32.05], excerpt: '南京沦陷初期的纪实'},
                {id: 151, title: '血泪话金陵', location: '南京', coord: [118.8, 32.05], excerpt: '南京大屠杀见证者口述'},
                {id: 152, title: '陷京五月记', location: '南京', coord: [118.8, 32.05], excerpt: '南京沦陷五个月的记录'},
                {id: 153, title: '陷都血泪录', location: '南京', coord: [118.8, 32.05], excerpt: '南京沦陷时期的血泪记录'},
                {id: 154, title: '今日之南京', location: '南京', coord: [118.8, 32.05], excerpt: '沦陷时期南京现状报告'}
            ]
        },
        '艾芜': {
            name: '艾芜',
            intro: '流浪派作家',
            works: [
                {id: 155, title: '沪杭路上', location: '南京', coord: [118.8, 32.05], excerpt: '途经南京的旅行笔记'}
            ]
        },
        '范长江': {
            name: '范长江',
            intro: '新闻记者',
            works: [
                {id: 156, title: '感慨过金陵', location: '南京', coord: [118.8, 32.05], excerpt: '南京见闻的新闻报道'}
            ]
        },
        '聂绀弩': {
            name: '聂绀弩',
            intro: '杂文家、诗人',
            works: [
                {id: 157, title: '怀南京', location: '南京', coord: [118.8, 32.05], excerpt: '怀念南京的散文'}
            ]
        },
        '吴浊流': {
            name: '吴浊流',
            intro: '台湾作家',
            works: [
                {id: 158, title: '南京杂感', location: '南京', coord: [118.8, 32.05], excerpt: '南京旅行见闻杂记'}
            ]
        },
        '王平陵': {
            name: '王平陵',
            intro: '作家',
            works: [
                {id: 159, title: '陵园明月夜', location: '中山陵', coord: [118.853, 32.062], excerpt: '描写中山陵夜景的散文'}
            ]
        },
     
        '黄裳': {
            name: '黄裳',
            intro: '散文家、藏书家',
            works: [
                {id: 162, title: '白门秋柳', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京秋景的散文'}
            ]
        },
        '郭沫若': {
            name: '郭沫若',
            intro: '文学家、历史学家',
            works: [
                {id: 163, title: '南京印象', location: '南京', coord: [118.8, 32.05], excerpt: '战后访问南京的纪实散文'}
            ]
        },

        '首都模范戏剧研究会': {
            name: '首都模范戏剧研究会',
            intro: '南京戏剧演出团体',
            works: [
                {id: 164, title: '白马坡', location: '南京', coord: [118.8, 32.05], excerpt: '传统戏曲剧目排演'},
                {id: 165, title: '铁公鸡', location: '南京', coord: [118.8, 32.05], excerpt: '清代历史剧排演'},
                {id: 166, title: '吊金龟', location: '南京', coord: [118.8, 32.05], excerpt: '经典京剧排演'}
            ]
        },
        '陈大悲': {
            name: '陈大悲',
            intro: '剧作家、戏剧活动家',
            works: [
                {id: 167, title: '花烛之后', location: '南京', coord: [118.8, 32.05], excerpt: '婚姻家庭题材的戏剧'}
            ]
        },
        
        '路翎': {
            name: '路翎',
            intro: '七月派小说家',
            works: [
                {id: 169, title: '云雀', location: '南京', coord: [118.8, 32.05], excerpt: '描写知识分子的戏剧作品'}
            ]
        },
        '陆文夫': {
        name: '陆文夫',
        intro: '苏州作家，多部作品涉及南京',
        works: [
            {id: 170, title: '葛师傅', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京工匠生活的小说'},
            {id: 171, title: '二遇周泰', location: '南京', coord: [118.8, 32.05], excerpt: '南京工人题材的小说'},
            {id: 172, title: '修车记', location: '南京', coord: [118.8, 32.05], excerpt: '南京交通行业背景的小说'},
            {id: 173, title: '棋高一着', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京知识分子生活'},
            {id: 174, title: '向师傅告别的晚上', location: '南京', coord: [118.8, 32.05], excerpt: '工厂师徒情谊的小说'},
            {id: 175, title: '小巷深处', location: '南京', coord: [118.8, 32.05], excerpt: '南京巷弄生活题材小说'},
            {id: 176, title: '平原的颂歌', location: '南京', coord: [118.8, 32.05], excerpt: '南京郊区农村题材作品'}
        ]
    },
    '方之': {
        name: '方之',
        intro: '江苏作家',
        works: [
            {id: 177, title: '兄弟团圆', location: '南京', coord: [118.8, 32.05], excerpt: '南京家庭伦理题材小说'},
            {id: 178, title: '在泉边', location: '南京', coord: [118.8, 32.05], excerpt: '南京乡村生活题材'},
            {id: 179, title: '浪头与石头', location: '南京', coord: [118.8, 32.05], excerpt: '社会变革题材小说'},
            {id: 180, title: '杨妇道', location: '南京', coord: [118.8, 32.05], excerpt: '女性题材短篇小说'},
            {id: 181, title: '岁交春', location: '南京', coord: [118.8, 32.05], excerpt: '新年题材的短篇'},
            {id: 182, title: '看瓜人', location: '南京', coord: [118.8, 32.05], excerpt: '南京农村生活小说'},
            {id: 183, title: '出山', location: '南京', coord: [118.8, 32.05], excerpt: '农村干部题材小说'}
        ]
    },
    '高晓声': {
        name: '高晓声',
        intro: '乡土文学代表作家',
        works: [
            {id: 184, title: '解约', location: '南京', coord: [118.8, 32.05], excerpt: '南京农村婚恋题材小说'},
            {id: 185, title: '不幸', location: '南京', coord: [118.8, 32.05], excerpt: '描写农民命运的小说'},
            {id: 186, title: '万尼亚舅舅', location: '南京', coord: [118.8, 32.05], excerpt: '契诃夫作品改编的戏剧'}
        ]
    },
    '黄清江': {
        name: '黄清江',
        intro: '作家',
        works: [
            {id: 187, title: '死亡', location: '南京', coord: [118.8, 32.05], excerpt: '生命题材的文学作品'}
        ]
    },
    '白先勇': {
        name: '白先勇',
        intro: '台湾作家',
        works: [
            {id: 188, title: '一把青', location: '南京', coord: [118.8, 32.05], excerpt: '南京空军眷村题材小说'},
            {id: 189, title: '游园惊梦', location: '南京', coord: [118.8, 32.05], excerpt: '南京历史变迁背景小说'},
            {id: 190, title: '国葬', location: '南京', coord: [118.8, 32.05], excerpt: '民国将领葬礼题材小说'}
        ]
    },
    '吴强': {
        name: '吴强',
        intro: '军旅作家',
        works: [
            {id: 191, title: '红日', location: '南京', coord: [118.8, 32.05], excerpt: '解放战争题材长篇小说'}
        ]
    },
    '艾煊': {
        name: '艾煊',
        intro: '作家',
        works: [
            {id: 192, title: '战斗在长江三角洲', location: '南京', coord: [118.8, 32.05], excerpt: '南京地区战斗纪实'},
            {id: 193, title: '大江风雷', location: '南京', coord: [118.8, 32.05], excerpt: '长江流域革命历史小说'}
        ]
    },
    '曾华': {
        name: '曾华',
        intro: '作家',
        works: [
            {id: 194, title: '菊影', location: '南京', coord: [118.8, 32.05], excerpt: '南京生活题材小说'},
            {id: 195, title: '七朵红花', location: '南京', coord: [118.8, 32.05], excerpt: '革命题材小说'}
        ]
    },
    '李冠武': {
        name: '李冠武',
        intro: '作家',
        works: [
            {id: 196, title: '风雨桃花洲', location: '南京', coord: [118.8, 32.05], excerpt: '南京乡村题材小说'}
        ]
    },
    '啸平': {
        name: '啸平',
        intro: '军旅作家',
        works: [
            {id: 197, title: '马少清和他的连长', location: '南京', coord: [118.8, 32.05], excerpt: '部队生活题材小说'},
            {id: 198, title: '恩情', location: '南京', coord: [118.8, 32.05], excerpt: '军民关系题材作品'}
        ]
    },
    '朱定': {
        name: '朱定',
        intro: '作家',
        works: [
            {id: 199, title: '兄弟', location: '南京', coord: [118.8, 32.05], excerpt: '家庭伦理题材小说'}
        ]
    },
    '胡石言': {
        name: '胡石言',
        intro: '军旅作家',
        works: [
            {id: 200, title: '柳堡的故事', location: '南京', coord: [118.8, 32.05], excerpt: '南京郊区背景的战争爱情故事'}
        ]
    },
    '茹志鹃': {
        name: '茹志鹃',
        intro: '女作家',
        works: [
            {id: 201, title: '百合花', location: '南京', coord: [118.8, 32.05], excerpt: '战争背景下的人性描写'}
        ]
    },
    '周而复': {
        name: '周而复',
        intro: '作家',
        works: [
            {id: 202, title: '上海的早晨', location: '南京', coord: [118.8, 32.05], excerpt: '部分场景涉及南京'}
        ]
    },
    '蒋光炘': {
        name: '蒋光炘',
        intro: '作家',
        works: [
            {id: 203, title: '梅英', location: '南京', coord: [118.8, 32.05], excerpt: '南京生活题材小说'}
        ]
    },
    '黎汝清': {
        name: '黎汝清',
        intro: '军旅作家',
        works: [
            {id: 204, title: '万山红遍', location: '南京', coord: [118.8, 32.05], excerpt: '革命历史题材长篇小说'}
        ]
    },
    '赵瑞蕻': {
        name: '赵瑞蕻',
        intro: '诗人、翻译家',
        works: [
            {id: 205, title: '十月欢歌为庆——祝中华人民共和国成立作', location: '南京', coord: [118.8, 32.05], excerpt: '庆祝建国题材的诗歌'},
            {id: 206, title: '红色的虎踞龙盘颂——为庆祝南京解放十五周年作', location: '南京', coord: [118.8, 32.05], excerpt: '南京解放纪念诗作'}
        ]
    },
    '丁汉稼': {
        name: '丁汉稼',
        intro: '诗人',
        works: [
            {id: 207, title: '战歌啊!唱吧!唱吧!——南京解放十五周年而作', location: '南京', coord: [118.8, 32.05], excerpt: '南京解放纪念诗歌'}
        ]
    },
    '鲍明路': {
        name: '鲍明路',
        intro: '诗人',
        works: [
            {id: 208, title: '太平门外', location: '太平门', coord: [118.820, 32.070], excerpt: '描写明城墙景色的诗作'}
        ]
    },
    '忆明珠': {
        name: '忆明珠',
        intro: '诗人',
        works: [
            {id: 209, title: '苏可海斯蜜打', location: '南京', coord: [118.8, 32.05], excerpt: '异国情调的诗歌'}
        ]
    },
    '王德安': {
        name: '王德安',
        intro: '工人诗人',
        works: [
            {id: 210, title: '工厂光圈', location: '南京', coord: [118.8, 32.05], excerpt: '描写工厂生活的诗歌'}
        ]
    },
    '渠天流': {
        name: '渠天流',
        intro: '诗人',
        works: [
            {id: 211, title: '元月十一不寻常', location: '南京', coord: [118.8, 32.05], excerpt: '历史事件纪念诗'},
            {id: 212, title: '时代的鼓手', location: '南京', coord: [118.8, 32.05], excerpt: '歌颂劳动者的诗歌'}
        ]
    },
    '朱光第': {
        name: '朱光第',
        intro: '工人作家',
        works: [
            {id: 213, title: '机械工人握住炼钢工人的手——参观钢厂小记', location: '南京', coord: [118.8, 32.05], excerpt: '工业题材的散文'}
        ]
    },
    '仇相彬': {
        name: '仇相彬',
        intro: '作家',
        works: [
            {id: 214, title: '铁水奔流在老虎山顶', location: '老虎山', coord: [118.800, 32.110], excerpt: '工业建设题材的诗歌'}
        ]
    },
    '张正': {
        name: '张正',
        intro: '诗人',
        works: [
            {id: 215, title: '东方巨龙上九重', location: '南京', coord: [118.8, 32.05], excerpt: '时代赞歌题材的诗歌'}
        ]
    },
    '吴白匋': {
        name: '吴白匋',
        intro: '学者、诗人',
        works: [
            {id: 216, title: '卜算子·读毛主席〈咏梅〉词有得', location: '南京', coord: [118.8, 32.05], excerpt: '学习毛主席诗词的感悟'}
        ]
    },
    '程小青': {
        name: '程小青',
        intro: '侦探小说作家',
        works: [
            {id: 217, title: '雨花台吊烈士墓', location: '雨花台', coord: [118.778, 31.994], excerpt: '凭吊雨花台革命烈士的诗作'}
        ]
    },
    '金启华': {
        name: '金启华',
        intro: '学者',
        works: [
            {id: 218, title: '访十月人民公社', location: '南京', coord: [118.8, 32.05], excerpt: '农村访问记'}
        ]
    },
    '唐圭璋': {
        name: '唐圭璋',
        intro: '词学家',
        works: [
            {id: 219, title: '鹧鸪天·题鹧鸪赋笺释', location: '南京', coord: [118.8, 32.05], excerpt: '词学研究的作品'},
            {id: 220, title: '采桑子·远游', location: '南京', coord: [118.8, 32.05], excerpt: '旅行题材的词作'},
            {id: 221, title: '采桑子·庆祝建国十四周年', location: '南京', coord: [118.8, 32.05], excerpt: '国庆题材的词作'},
            {id: 222, title: '减字木兰花·瞻仰梅园新村,怀念周总理', location: '梅园新村', coord: [118.804, 32.044], excerpt: '怀念周总理的词作'}
        ]
    },
 
    '高加索': {
        name: '高加索',
        intro: '诗人',
        works: [
            {id: 224, title: '江南谣', location: '南京', coord: [118.8, 32.05], excerpt: '江南风情的诗歌'}
        ]
    },
    '张贤亮': {
        name: '张贤亮',
        intro: '作家',
        works: [
            {id: 225, title: '大风歌', location: '南京', coord: [118.8, 32.05], excerpt: '历史题材的诗歌'}
        ]
    },
    '余光中': {
        name: '余光中',
        intro: '台湾诗人',
        works: [
            {id: 226, title: '乡愁', location: '南京', coord: [118.8, 32.05], excerpt: '思念故土的经典诗歌'},
            {id: 227, title: '春天，遂想起', location: '南京', coord: [118.8, 32.05], excerpt: '怀念江南的诗歌'},
            {id: 228, title: '大江东去', location: '南京', coord: [118.8, 32.05], excerpt: '长江题材的诗歌'}
        ]
    },
    '曾如清': {
        name: '曾如清',
        intro: '军事作家',
        works: [
            {id: 229, title: '追歼黄伯韬兵团六十三军', location: '南京', coord: [118.8, 32.05], excerpt: '解放战争题材的报告文学'}
        ]
    },
    '夏阳': {
        name: '夏阳',
        intro: '作家',
        works: [
            {id: 230, title: '南京,换了人间', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京变迁的散文'}
        ]
    },
    '魏毓庆': {
        name: '魏毓庆',
        intro: '女作家',
        works: [
            {id: 231, title: '雨花台抒情——问苍茫大地,谁主沉浮?', location: '雨花台', coord: [118.778, 31.994], excerpt: '雨花台感怀的散文'},
            {id: 232, title: '秋夜', location: '南京', coord: [118.8, 32.05], excerpt: '南京秋夜题材的散文'}
        ]
    },
    '袁飞': {
        name: '袁飞',
        intro: '作家',
        works: [
            {id: 233, title: '苦难的童年', location: '南京', coord: [118.8, 32.05], excerpt: '回忆南京童年生活的散文'}
        ]
    },
    '啸平': {
        name: '啸平',
        intro: '军旅作家',
        works: [
            {id: 234, title: '两个功臣', location: '南京', coord: [118.8, 32.05], excerpt: '部队生活题材小说'},
            {id: 235, title: '初升的太阳', location: '南京', coord: [118.8, 32.05], excerpt: '建设题材的文学作品'},
            {id: 236, title: '钢铁英雄传', location: '南京', coord: [118.8, 32.05], excerpt: '工业建设题材作品'},
            {id: 237, title: '在飞跃的时代里', location: '南京', coord: [118.8, 32.05], excerpt: '时代变革题材作品'}
        ]
    },
   
    '叶圣陶': {
        name: '叶圣陶',
        intro: '教育家、作家',
        works: [
            {id: 240, title: '游了三个湖', location: '南京', coord: [118.8, 32.05], excerpt: '南京湖泊游记散文'}
        ]
    },
    '沈蔚德': {
        name: '沈蔚德',
        intro: '女作家',
        works: [
            {id: 241, title: '庐山小品', location: '南京', coord: [118.8, 32.05], excerpt: '旅行题材的散文'}
        ]
    },
    '杨苡': {
        name: '杨苡',
        intro: '翻译家、作家',
        works: [
            {id: 242, title: '秋行散记', location: '南京', coord: [118.8, 32.05], excerpt: '南京秋天题材的散文'}
        ]
    },
    '锦路': {
        name: '锦路',
        intro: '工人作家',
        works: [
            {id: 243, title: '红旗号轧钢机', location: '南京', coord: [118.8, 32.05], excerpt: '工业题材的报告文学'}
        ]
    },
    '陆九如': {
        name: '陆九如',
        intro: '作家',
        works: [
            {id: 244, title: '又是一个早晨', location: '南京', coord: [118.8, 32.05], excerpt: '日常生活题材的散文'}
        ]
    },
    '陆文夫': {
        name: '陆文夫',
        intro: '苏州作家',
        works: [
            {id: 245, title: '通考古今编新书', location: '南京', coord: [118.8, 32.05], excerpt: '文化研究文章'}
        ]
    },
  
    '吴盛': {
        name: '吴盛',
        intro: '作家',
        works: [
            {id: 247, title: '请准谈风月', location: '南京', coord: [118.8, 32.05], excerpt: '文学评论文章'},
            {id: 248, title: '雨花', location: '南京', coord: [118.8, 32.05], excerpt: '文艺评论'}
        ]
    },
    '刘金': {
        name: '刘金',
        intro: '文学评论家',
        works: [
            {id: 249, title: '赞美吧,但不要粉饰!', location: '南京', coord: [118.8, 32.05], excerpt: '文学批评文章'}
        ]
    },
    '以铮': {
        name: '以铮',
        intro: '评论家',
        works: [
            {id: 250, title: '论"费厄泼赖"可以施行', location: '南京', coord: [118.8, 32.05], excerpt: '文艺政策评论'}
        ]
    },
    '南京工人写作组': {
        name: '南京工人写作组',
        intro: '工人作家集体',
        works: [
            {id: 251, title: '南京长江大桥', location: '南京长江大桥', coord: [118.744, 32.115], excerpt: '歌颂南京长江大桥的报告文学'}
        ]
    },
    '路翎': {
        name: '路翎',
        intro: '七月派小说家',
        works: [
            {id: 252, title: '人民万岁', location: '南京', coord: [118.8, 32.05], excerpt: '戏剧作品'}
        ]
    },
    '沈西蒙': {
        name: '沈西蒙',
        intro: '剧作家',
        works: [
            {id: 253, title: '霓虹灯下的哨兵', location: '南京', coord: [118.8, 32.05], excerpt: '经典军旅题材话剧'}
        ]
    },
    '石汉与张锐': {
        name: '石汉与张锐',
        intro: '编剧与作曲家',
        works: [
            {id: 254, title: '红霞', location: '南京', coord: [118.8, 32.05], excerpt: '歌剧作品'}
        ]
    },
    '顾宝璋与所云平': {
        name: '顾宝璋与所云平',
        intro: '剧作家组合',
        works: [
            {id: 255, title: '东进序曲', location: '南京', coord: [118.8, 32.05], excerpt: '革命历史题材话剧'}
        ]
    },
    '白文与所云平': {
        name: '白文与所云平',
        intro: '剧作家组合',
        works: [
            {id: 256, title: '我是一个兵', location: '南京', coord: [118.8, 32.05], excerpt: '军旅题材话剧'},
            {id: 257, title: '哥俩好', location: '南京', coord: [118.8, 32.05], excerpt: '部队生活题材话剧'}
        ]
    },
    '张泽易与杨履方': {
        name: '张泽易与杨履方',
        intro: '剧作家组合',
        works: [
            {id: 258, title: '海防万里', location: '南京', coord: [118.8, 32.05], excerpt: '海防题材话剧'}
        ]
    },
    '杨履方': {
        name: '杨履方',
        intro: '剧作家',
        works: [
            {id: 259, title: '布谷鸟又叫了', location: '南京', coord: [118.8, 32.05], excerpt: '农村题材话剧'}
        ]
    },
    '岳野': {
        name: '岳野',
        intro: '剧作家',
        works: [
            {id: 260, title: '同甘共苦', location: '南京', coord: [118.8, 32.05], excerpt: '家庭伦理题材话剧'}
        ]
    },
    '海默': {
        name: '海默',
        intro: '剧作家',
        works: [
            {id: 261, title: '洞萧横吹', location: '南京', coord: [118.8, 32.05], excerpt: '农村题材话剧'}
        ]
    },
    '鲁彦周': {
        name: '鲁彦周',
        intro: '作家、剧作家',
        works: [
            {id: 262, title: '归来', location: '南京', coord: [118.8, 32.05], excerpt: '话剧作品'}
        ]
    },
    
    '陈白尘与贾霁': {
        name: '陈白尘与贾霁',
        intro: '编剧组合',
        works: [
            {id: 264, title: '宋景诗', location: '南京', coord: [118.8, 32.05], excerpt: '历史题材电影剧本'}
        ]
    },
    '沈西蒙与沈默君': {
        name: '沈西蒙与沈默君',
        intro: '编剧组合',
        works: [
            {id: 265, title: '南征北战', location: '南京', coord: [118.8, 32.05], excerpt: '战争题材电影剧本'}
        ]
    },
    '沈默君': {
        name: '沈默君',
        intro: '编剧',
        works: [
            {id: 266, title: '渡江侦察记', location: '南京', coord: [118.8, 32.05], excerpt: '经典战争电影剧本'}
        ]
    },
    '刘川': {
        name: '刘川',
        intro: '剧作家',
        works: [
            {id: 267, title: '第二个春天', location: '南京', coord: [118.8, 32.05], excerpt: '工业题材话剧'},
            {id: 268, title: '青春之歌', location: '南京', coord: [118.8, 32.05], excerpt: '改编自杨沫小说的剧本'}
        ]
    },
    '宋词': {
        name: '宋词',
        intro: '剧作家',
        works: [
            {id: 269, title: '喝面叶', location: '南京', coord: [118.8, 32.05], excerpt: '地方戏曲剧本'},
            {id: 270, title: '穆桂英挂帅', location: '南京', coord: [118.8, 32.05], excerpt: '京剧改编剧本'},
            {id: 271, title: '花枪缘', location: '南京', coord: [118.8, 32.05], excerpt: '戏曲剧本'},
            {id: 272, title: '状元打更', location: '南京', coord: [118.8, 32.05], excerpt: '传统戏曲改编剧本'}
        ]
    },
  
    '方之': {
        name: '方之',
        intro: '江苏作家',
        works: [
            {id: 282, title: '阁楼上', location: '南京', coord: [118.8, 32.05], excerpt: '描写城市生活的小说'},
            {id: 283, title: '内奸', location: '南京', coord: [118.8, 32.05], excerpt: '历史反思题材小说'}
        ]
    },
    '赵本夫': {
        name: '赵本夫',
        intro: '江苏作家',
        works: [
            {id: 284, title: '卖驴', location: '南京', coord: [118.8, 32.05], excerpt: '农村题材短篇小说'},
            {id: 285, title: '寨堡', location: '南京', coord: [118.8, 32.05], excerpt: '乡土题材小说'},
            {id: 286, title: '绝药', location: '南京', coord: [118.8, 32.05], excerpt: '传奇故事小说'},
            {id: 287, title: '刀客与女人', location: '南京', coord: [118.8, 32.05], excerpt: '江湖题材小说'},
            {id: 288, title: '混沌世界', location: '南京', coord: [118.8, 32.05], excerpt: '长篇小说'},
            {id: 289, title: '涸辙', location: '南京', coord: [118.8, 32.05], excerpt: '生态题材小说'},
            {id: 290, title: '仇恨的魅力', location: '南京', coord: [118.8, 32.05], excerpt: '人性探索小说'},
            {id: 291, title: '无门城', location: '南京', coord: [118.8, 32.05], excerpt: '寓言小说'},
            {id: 292, title: '蝙蝠', location: '南京', coord: [118.8, 32.05], excerpt: '象征主义小说'},
            {id: 293, title: '陆地的围困', location: '南京', coord: [118.8, 32.05], excerpt: '现实主义小说'},
            {id: 294, title: '走出蓝水河', location: '南京', coord: [118.8, 32.05], excerpt: '女性题材小说'},
            {id: 295, title: '黑蚂蚁蓝眼睛', location: '南京', coord: [118.8, 32.05], excerpt: '地母三部曲第一部'},
            {id: 296, title: '天地月亮地', location: '南京', coord: [118.8, 32.05], excerpt: '地母三部曲第二部'},
            {id: 297, title: '无土时代', location: '南京', coord: [118.8, 32.05], excerpt: '地母三部曲第三部'},
            {id: 298, title: '天下无贼', location: '南京', coord: [118.8, 32.05], excerpt: '改编电影的原著小说'},
            {id: 299, title: '安岗之梦', location: '南京', coord: [118.8, 32.05], excerpt: '农村青年题材小说'},
            {id: 300, title: '带蜥蜴的钥匙', location: '南京', coord: [118.8, 32.05], excerpt: '悬疑题材小说'},
            {id: 301, title: '寻找月亮', location: '南京', coord: [118.8, 32.05], excerpt: '追寻理想题材小说'},
            {id: 302, title: '洛女', location: '南京', coord: [118.8, 32.05], excerpt: '女性题材小说'}
        ]
    },
    '苏童': {
        name: '苏童',
        intro: '先锋派代表作家',
        works: [
            {id: 303, title: '妻妾成群', location: '南京', coord: [118.8, 32.05], excerpt: '民国家族题材经典小说'},
            {id: 304, title: '红粉', location: '南京', coord: [118.8, 32.05], excerpt: '妓女改造题材小说'},
            {id: 305, title: '米', location: '南京', coord: [118.8, 32.05], excerpt: '人性堕落题材长篇小说'},
            {id: 306, title: '我的帝王生涯', location: '南京', coord: [118.8, 32.05], excerpt: '历史架空题材小说'},
            {id: 307, title: '黄雀记', location: '南京', coord: [118.8, 32.05], excerpt: '茅盾文学奖获奖作品'}
        ]
    },
    '叶兆言': {
        name: '叶兆言',
        intro: '南京本土作家',
        works: [
            {id: 308, title: '一九三七年的爱情', location: '南京', coord: [118.8, 32.05], excerpt: '战争爱情题材长篇小说'},
            {id: 309, title: '花影', location: '南京', coord: [118.8, 32.05], excerpt: '家族衰败题材小说'},
            {id: 310, title: '没有玻璃的花房', location: '南京', coord: [118.8, 32.05], excerpt: '文革记忆题材小说'}
        ]
    },
    '朱苏进': {
        name: '朱苏进',
        intro: '军旅作家',
        works: [
            {id: 311, title: '射天狼', location: '南京', coord: [118.8, 32.05], excerpt: '军旅题材中篇小说'},
            {id: 312, title: '接近于无限透明', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材小说'}
        ]
    },
   
  
    '胡石言': {
        name: '胡石言',
        intro: '军旅作家',
        works: [
            {id: 316, title: '漆黑的羽毛', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材小说'},
            {id: 317, title: '秋雪湖之恋', location: '南京', coord: [118.8, 32.05], excerpt: '军旅爱情题材小说'}
        ]
    },
    '海笑': {
        name: '海笑',
        intro: '作家',
        works: [
            {id: 318, title: '红红的雨花石', location: '南京', coord: [118.8, 32.05], excerpt: '儿童文学经典'}
        ]
    },
    '梅汝恺': {
        name: '梅汝恺',
        intro: '翻译家、作家',
        works: [
            {id: 319, title: '青青羊河草', location: '南京', coord: [118.8, 32.05], excerpt: '乡土题材小说'}
        ]
    },
    '张贤亮': {
        name: '张贤亮',
        intro: '作家',
        works: [
            {id: 320, title: '绿化树', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子改造题材小说'}
        ]
    },
    '薛冰': {
        name: '薛冰',
        intro: '作家、藏书家',
        works: [
            {id: 321, title: '金陵女儿', location: '南京', coord: [118.8, 32.05], excerpt: '南京女性题材散文集'}
        ]
    },
    '徐乃建': {
        name: '徐乃建',
        intro: '女作家',
        works: [
            {id: 322, title: '杨柏的污梁', location: '南京', coord: [118.8, 32.05], excerpt: '文革题材小说'}
        ]
    },
    '黄蓓佳': {
        name: '黄蓓佳',
        intro: '儿童文学作家',
        works: [
            {id: 323, title: '我要做好孩子', location: '南京', coord: [118.8, 32.05], excerpt: '儿童成长题材小说'},
            {id: 324, title: '亲亲我的妈妈', location: '南京', coord: [118.8, 32.05], excerpt: '单亲家庭题材小说'}
        ]
    },
    '刘健屏': {
        name: '刘健屏',
        intro: '儿童文学作家',
        works: [
            {id: 325, title: '我要我的雕刻刀', location: '南京', coord: [118.8, 32.05], excerpt: '艺术教育题材小说'}
        ]
    },
    '程炜': {
        name: '程炜',
        intro: '儿童文学作家',
        works: [
            {id: 326, title: '少女的红发卡', location: '南京', coord: [118.8, 32.05], excerpt: '青春期成长小说'}
        ]
    },
    '祁智': {
        name: '祁智',
        intro: '作家',
        works: [
            {id: 327, title: '芝麻开门', location: '南京', coord: [118.8, 32.05], excerpt: '儿童成长题材长篇小说'}
        ]
    },
    '韩青辰': {
        name: '韩青辰',
        intro: '儿童文学作家',
        works: [
            {id: 328, title: '我们之间', location: '南京', coord: [118.8, 32.05], excerpt: '青少年友谊题材小说'}
        ]
    },

    // 诗歌部分
    '高加索': {
        name: '高加索',
        intro: '诗人',
        works: [
            {id: 329, title: '风·花·雪·月', location: '南京', coord: [118.8, 32.05], excerpt: '自然题材组诗'},
            {id: 330, title: '烈士,在雨花台前独白', location: '雨花台', coord: [118.778, 31.994], excerpt: '革命烈士题材诗歌'}
        ]
    },
    '丁芒': {
        name: '丁芒',
        intro: '诗人',
        works: [
            {id: 331, title: '军中吟草', location: '南京', coord: [118.8, 32.05], excerpt: '军旅题材诗集'}
        ]
    },
   
    '贺东久': {
        name: '贺东久',
        intro: '军旅诗人',
        works: [
            {id: 333, title: '带刺刀的爱神', location: '南京', coord: [118.8, 32.05], excerpt: '军旅爱情诗歌'}
        ]
    },
    '沙白': {
        name: '沙白',
        intro: '诗人',
        works: [
            {id: 334, title: '大江东去', location: '南京', coord: [118.8, 32.05], excerpt: '长江题材诗歌'}
        ]
    },
    '孙友田': {
        name: '孙友田',
        intro: '诗人',
        works: [
            {id: 335, title: '矿山的孩子', location: '南京', coord: [118.8, 32.05], excerpt: '煤矿题材诗歌'}
        ]
    },
    '杨苡': {
        name: '杨苡',
        intro: '翻译家、诗人',
        works: [
            {id: 336, title: '知识', location: '南京', coord: [118.8, 32.05], excerpt: '哲理抒情诗'}
        ]
    },
    '韩冬': {
        name: '韩冬',
        intro: '诗人',
        works: [
            {id: 337, title: '有关大雁塔', location: '南京', coord: [118.8, 32.05], excerpt: '后现代主义诗歌'}
        ]
    },
    '小海': {
        name: '小海',
        intro: '诗人',
        works: [
            {id: 338, title: '村子', location: '南京', coord: [118.8, 32.05], excerpt: '乡土题材诗歌'}
        ]
    },

    // 诗歌团体
    '日常主义诗群': {
        name: '日常主义诗群',
        intro: '南京诗歌团体',
        works: [
            {id: 339, title: '路轨', location: '南京', coord: [118.8, 32.05], excerpt: '诗歌合集'}
        ]
    },
    '超感觉诗团体': {
        name: '超感觉诗团体',
        intro: '南京先锋诗歌团体',
        works: [
            {id: 340, title: '超感觉诗', location: '南京', coord: [118.8, 32.05], excerpt: '油印诗歌刊物'}
        ]
    },
    '阐释主义诗群': {
        name: '阐释主义诗群',
        intro: '南京诗歌团体',
        works: [
            {id: 341, title: '无心集', location: '南京', coord: [118.8, 32.05], excerpt: '自编诗集'},
            {id: 342, title: '东方潮', location: '南京', coord: [118.8, 32.05], excerpt: '自办诗歌刊物'}
        ]
    },
    '新自然主义诗群': {
        name: '新自然主义诗群',
        intro: '南京诗歌团体',
        works: [
            {id: 343, title: '百花园', location: '南京', coord: [118.8, 32.05], excerpt: '诗歌合集'},
            {id: 344, title: '觅', location: '南京', coord: [118.8, 32.05], excerpt: '诗歌合集'}
        ]
    },
    '呼吸诗团体': {
        name: '呼吸诗团体',
        intro: '南京诗歌团体',
        works: [
            {id: 345, title: '青春的白码', location: '南京', coord: [118.8, 32.05], excerpt: '铅印诗歌合集'},
            {id: 346, title: '我们', location: '南京', coord: [118.8, 32.05], excerpt: '油印诗歌刊物'}
        ]
    },
    '蒋元春与魏玉翠': {
        name: '蒋元春与魏玉翠',
        intro: '作家组合',
        works: [
            {id: 347, title: '钟山风雨起苍黄', location: '钟山', coord: [118.853, 32.062], excerpt: '描写紫金山历史风云的散文'}
        ]
    },
   
    '张晓风': {
        name: '张晓风',
        intro: '台湾作家',
        works: [
            {id: 354, title: '愁乡石', location: '南京', coord: [118.8, 32.05], excerpt: '乡愁题材散文'},
            {id: 355, title: '玉想', location: '南京', coord: [118.8, 32.05], excerpt: '哲理散文集'}
        ]
    },
    '郭枫': {
        name: '郭枫',
        intro: '作家',
        works: [
            {id: 356, title: '老家的树', location: '南京', coord: [118.8, 32.05], excerpt: '故乡题材散文'}
        ]
    },
  
    '海笑': {
        name: '海笑',
        intro: '作家',
        works: [
            {id: 359, title: '春夜苦闹思银杏', location: '南京', coord: [118.8, 32.05], excerpt: '南京植物题材散文'}
        ]
    },
    '苏叶': {
        name: '苏叶',
        intro: '女作家',
        works: [
            {id: 360, title: '能不忆江南', location: '南京', coord: [118.8, 32.05], excerpt: '江南记忆散文集'}
        ]
    },
    '魏毓庆': {
        name: '魏毓庆',
        intro: '女作家',
        works: [
            {id: 361, title: '秦淮月·春蚕篇', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '秦淮河题材散文'}
        ]
    },
    '忆明珠': {
        name: '忆明珠',
        intro: '诗人',
        works: [
            {id: 362, title: '鸡鸣寺', location: '鸡鸣寺', coord: [118.798, 32.060], excerpt: '鸡鸣寺题材的散文'}
        ]
    },
    '程千帆': {
        name: '程千帆',
        intro: '学者',
        works: [
            {id: 363, title: '玄武湖忆旧', location: '玄武湖', coord: [118.796, 32.078], excerpt: '回忆玄武湖的散文'}
        ]
    },
    '梅汝恺': {
        name: '梅汝恺',
        intro: '翻译家、作家',
        works: [
            {id: 364, title: '石城花树', location: '南京', coord: [118.8, 32.05], excerpt: '南京风物散文'}
        ]
    },
   
    '梁晴': {
        name: '梁晴',
        intro: '作家',
        works: [
            {id: 366, title: '魁光阁小憩', location: '魁光阁', coord: [118.793, 32.023], excerpt: '夫子庙景点散文'}
        ]
    },
    '黄蓓佳': {
        name: '黄蓓佳',
        intro: '儿童文学作家',
        works: [
            {id: 367, title: '樱花大道', location: '南京', coord: [118.8, 32.05], excerpt: '南京校园题材散文'}
        ]
    },
   
    '黄裳': {
        name: '黄裳',
        intro: '散文家、藏书家',
        works: [
            {id: 369, title: '秦淮拾梦记', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '秦淮河历史追忆'}
        ]
    },
    '王德安': {
        name: '王德安',
        intro: '工人诗人',
        works: [
            {id: 370, title: '秦淮河边拾瓷乐', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '秦淮河畔寻瓷记'}
        ]
    },
    '赵翼如': {
        name: '赵翼如',
        intro: '女作家',
        works: [
            {id: 371, title: '哦,十里秦淮', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '秦淮河抒情散文'}
        ]
    },
    '杨旭': {
        name: '杨旭',
        intro: '报告文学作家',
        works: [
            {id: 372, title: '田野上的风', location: '南京', coord: [118.8, 32.05], excerpt: '农村变革题材报告文学'}
        ]
    },
    '庞瑞垠': {
        name: '庞瑞垠',
        intro: '作家',
        works: [
            {id: 373, title: '姚迁之死', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材报告文学'}
        ]
    },
    '赵翼如': {
        name: '赵翼如',
        intro: '女作家',
        works: [
            {id: 374, title: '她给生活带来了美', location: '南京', coord: [118.8, 32.05], excerpt: '人物特写散文'}
        ]
    },
    '南京市话剧团': {
        name: '南京市话剧团',
        intro: '专业话剧演出团体',
        works: [
            {id: 375, title: '九十九间半', location: '南京', coord: [118.8, 32.05], excerpt: '南京老城南题材话剧'}
        ]
    },
    '江苏省与南京市话剧团': {
        name: '江苏省与南京市话剧团',
        intro: '联合演出团体',
        works: [
            {id: 376, title: '天上飞的鸭子', location: '南京', coord: [118.8, 32.05], excerpt: '联合创作演出的话剧'}
        ]
    },
    '姚远': {
        name: '姚远',
        intro: '剧作家',
        works: [
            {id: 377, title: '商鞅', location: '南京', coord: [118.8, 32.05], excerpt: '历史题材话剧'}
        ]
    },
    '赵耀民': {
        name: '赵耀民',
        intro: '剧作家',
        works: [
            {id: 378, title: '天才与疯子', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材话剧'}
        ]
    },
    '赵家捷': {
        name: '赵家捷',
        intro: '剧作家',
        works: [
            {id: 379, title: '天上飞的鸭子', location: '南京', coord: [118.8, 32.05], excerpt: '都市生活题材话剧'}
        ]
    },
    '沙叶新': {
        name: '沙叶新',
        intro: '剧作家',
        works: [
            {id: 380, title: '陈毅市长', location: '南京', coord: [118.8, 32.05], excerpt: '革命家传记话剧'}
        ]
    },
    '张弦': {
        name: '张弦',
        intro: '编剧',
        works: [
            {id: 381, title: '被爱情遗忘的角落', location: '南京', coord: [118.8, 32.05], excerpt: '农村爱情题材电影剧本'}
        ]
    },
    '范小青': {
        name: '范小青',
        intro: '江苏省作家协会主席，南京题材代表作家',
        works: [
            {id: 382, title: '裤裆巷风流记', location: '南京', coord: [118.8, 32.05], excerpt: '南京老巷生活的经典小说'},
            {id: 383, title: '个体部落纪事', location: '南京', coord: [118.8, 32.05], excerpt: '改革开放初期个体户题材'},
            {id: 384, title: '顾氏传人', location: '南京', coord: [118.8, 32.05], excerpt: '家族传承题材长篇小说'},
            {id: 385, title: '栀子花开六瓣头', location: '南京', coord: [118.8, 32.05], excerpt: '女性命运题材小说'},
            {id: 386, title: '瑞云', location: '南京', coord: [118.8, 32.05], excerpt: '历史传奇小说'},
            {id: 387, title: '沧浪之水', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材长篇小说'},
            {id: 388, title: '城市民谣', location: '南京', coord: [118.8, 32.05], excerpt: '都市生活题材小说集'},
            {id: 389, title: '城市片断', location: '南京', coord: [118.8, 32.05], excerpt: '城市生活短篇小说集'},
            {id: 390, title: '城市之光', location: '南京', coord: [118.8, 32.05], excerpt: '都市题材长篇小说'},
            {id: 391, title: '城市表情', location: '南京', coord: [118.8, 32.05], excerpt: '当代城市生活小说'},
            {id: 392, title: '城乡简史', location: '南京', coord: [118.8, 32.05], excerpt: '城乡变迁题材小说'},
            {id: 393, title: '女同志', location: '南京', coord: [118.8, 32.05], excerpt: '女性官场题材长篇小说'},
            {id: 394, title: '赤脚医生万泉和', location: '南京', coord: [118.8, 32.05], excerpt: '农村医疗题材小说'},
            {id: 395, title: '我的名字叫王村', location: '南京', coord: [118.8, 32.05], excerpt: '乡村叙事实验小说'},
            {id: 396, title: '桂香街', location: '南京', coord: [118.8, 32.05], excerpt: '社区生活题材长篇小说'}
        ]
    },
    '毕飞宇': {
        name: '毕飞宇',
        intro: '茅盾文学奖得主，南京题材代表作家',
        works: [
            {id: 397, title: '孤岛', location: '南京', coord: [118.8, 32.05], excerpt: '先锋小说代表作'},
            {id: 398, title: '是谁在黑夜说话', location: '南京', coord: [118.8, 32.05], excerpt: '中短篇小说集'},
            {id: 399, title: '雨天的棉花糖', location: '南京', coord: [118.8, 32.05], excerpt: '战争创伤题材中篇'},
            {id: 400, title: '哺乳期的女人', location: '南京', coord: [118.8, 32.05], excerpt: '鲁迅文学奖获奖短篇'},
            {id: 401, title: '青衣', location: '南京', coord: [118.8, 32.05], excerpt: '京剧演员题材中篇'},
            {id: 402, title: '上海往事', location: '南京', coord: [118.8, 32.05], excerpt: '上海题材长篇小说'},
            {id: 403, title: '玉米', location: '南京', coord: [118.8, 32.05], excerpt: '农村女性三部曲之一'},
            {id: 404, title: '玉秀', location: '南京', coord: [118.8, 32.05], excerpt: '农村女性三部曲之二'},
            {id: 405, title: '玉秧', location: '南京', coord: [118.8, 32.05], excerpt: '农村女性三部曲之三'},
            {id: 406, title: '推拿', location: '南京', coord: [118.8, 32.05], excerpt: '茅盾文学奖获奖长篇'},
            {id: 407, title: '生活在天上', location: '南京', coord: [118.8, 32.05], excerpt: '都市生活题材小说'},
            {id: 408, title: '生活在边缘', location: '南京', coord: [118.8, 32.05], excerpt: '社会边缘群体小说'},
            {id: 409, title: '和阿来生活的二十二天', location: '南京', coord: [118.8, 32.05], excerpt: '作家生活纪实'},
            {id: 410, title: '架起飞机飞行', location: '南京', coord: [118.8, 32.05], excerpt: '实验性短篇小说'},
            {id: 411, title: '九层电梯', location: '南京', coord: [118.8, 32.05], excerpt: '都市生活短篇'},
            {id: 412, title: '相爱的日子', location: '南京', coord: [118.8, 32.05], excerpt: '爱情题材短篇'},
            {id: 413, title: '家里乱了', location: '南京', coord: [118.8, 32.05], excerpt: '家庭生活短篇'},
            {id: 414, title: '遥控', location: '南京', coord: [118.8, 32.05], excerpt: '现代生活题材短篇'},
            {id: 415, title: '火车里的天堂', location: '南京', coord: [118.8, 32.05], excerpt: '旅途题材短篇'},
            {id: 416, title: '男人还剩下什么', location: '南京', coord: [118.8, 32.05], excerpt: '男性题材短篇集'},
            {id: 417, title: '平原', location: '南京', coord: [118.8, 32.05], excerpt: '乡村史诗题材长篇'}
        ]
    },
    '周梅森': {
        name: '周梅森',
        intro: '政治小说代表作家，《人民的名义》作者',
        works: [
            {id: 418, title: '沉沦的土地', location: '南京', coord: [118.8, 32.05], excerpt: '工业题材长篇小说'},
            {id: 419, title: '庄严的毁灭', location: '南京', coord: [118.8, 32.05], excerpt: '历史题材长篇小说'},
            {id: 420, title: '崛起的群山', location: '南京', coord: [118.8, 32.05], excerpt: '改革题材长篇小说'},
            {id: 421, title: '喧露的旷野', location: '南京', coord: [118.8, 32.05], excerpt: '乡村题材长篇小说'},
            {id: 422, title: '黑色的太阳', location: '南京', coord: [118.8, 32.05], excerpt: '煤矿题材长篇小说'},
            {id: 423, title: '国殇', location: '南京', coord: [118.8, 32.05], excerpt: '历史题材中篇小说'},
            {id: 424, title: '大捷', location: '南京', coord: [118.8, 32.05], excerpt: '战争题材中篇小说'},
            {id: 425, title: '日祭', location: '南京', coord: [118.8, 32.05], excerpt: '历史题材小说'},
            {id: 426, title: '军歌', location: '南京', coord: [118.8, 32.05], excerpt: '军事题材长篇小说'},
            {id: 427, title: '冷血', location: '南京', coord: [118.8, 32.05], excerpt: '商战题材长篇小说'},
            {id: 428, title: '人间正道', location: '南京', coord: [118.8, 32.05], excerpt: '改革题材长篇小说'},
            {id: 429, title: '至高利益', location: '南京', coord: [118.8, 32.05], excerpt: '政治题材长篇小说'},
            {id: 430, title: '绝对权力', location: '南京', coord: [118.8, 32.05], excerpt: '反腐题材长篇小说'},
            {id: 431, title: '国家公诉', location: '南京', coord: [118.8, 32.05], excerpt: '司法题材长篇小说'},
            {id: 432, title: '我主沉浮', location: '南京', coord: [118.8, 32.05], excerpt: '政经题材长篇小说'},
            {id: 433, title: '梦想与疯狂', location: '南京', coord: [118.8, 32.05], excerpt: '资本题材长篇小说'},
            {id: 434, title: '中国制造', location: '南京', coord: [118.8, 32.05], excerpt: '工业改革题材小说'},
            {id: 435, title: '我本英雄', location: '南京', coord: [118.8, 32.05], excerpt: '政经题材长篇小说'},
            {id: 436, title: '天下财富', location: '南京', coord: [118.8, 32.05], excerpt: '资本运作题材小说'},
            {id: 437, title: '人民的名义', location: '南京', coord: [118.8, 32.05], excerpt: '现象级反腐题材小说'}
        ]
    },
    '储福金': {
        name: '储福金',
        intro: '江苏代表作家，围棋文学开创者',
        works: [
            {id: 438, title: '石门二柳', location: '南京', coord: [118.8, 32.05], excerpt: '早期短篇小说代表作'},
            {id: 439, title: '生命交响诗', location: '南京', coord: [118.8, 32.05], excerpt: '生命哲思题材小说'},
            {id: 440, title: '绿井', location: '南京', coord: [118.8, 32.05], excerpt: '乡村题材中篇小说'},
            {id: 441, title: '羊群的领头狮', location: '南京', coord: [118.8, 32.05], excerpt: '社会寓言小说'},
            {id: 442, title: '奇异的情感', location: '南京', coord: [118.8, 32.05], excerpt: '心理探索小说集'},
            {id: 443, title: '花野', location: '南京', coord: [118.8, 32.05], excerpt: '自然题材小说集'},
            {id: 444, title: '紫楼', location: '南京', coord: [118.8, 32.05], excerpt: '都市题材长篇小说'},
            {id: 445, title: '青衣', location: '南京', coord: [118.8, 32.05], excerpt: '戏曲题材长篇小说'},
            {id: 446, title: '心之门', location: '南京', coord: [118.8, 32.05], excerpt: '心理探索小说'},
            {id: 447, title: '细雨中的阳光', location: '南京', coord: [118.8, 32.05], excerpt: '青春题材小说集'},
            {id: 448, title: '婆娑之舞', location: '南京', coord: [118.8, 32.05], excerpt: '女性题材长篇小说'},
            {id: 449, title: '黑白', location: '南京', coord: [118.8, 32.05], excerpt: '围棋题材长篇小说代表作'}
        ]
    },
'庞瑞垠': {
        name: '庞瑞垠',
        intro: '作家，南京历史题材代表作家',
        works: [
            {id: 450, title: '危城', location: '南京', coord: [118.8, 32.05], excerpt: '民国南京题材长篇小说'},
            {id: 451, title: '寒星', location: '南京', coord: [118.8, 32.05], excerpt: '革命历史题材小说'},
            {id: 452, title: '落日', location: '南京', coord: [118.8, 32.05], excerpt: '抗战题材长篇小说'},
            {id: 453, title: '逐鹿金陵', location: '南京', coord: [118.8, 32.05], excerpt: '民国首都历史小说'},
            {id: 454, title: '钞库街', location: '钞库街', coord: [118.792, 32.025], excerpt: '秦淮河历史街区题材小说'},
            {id: 455, title: '桃叶渡', location: '桃叶渡', coord: [118.796, 32.020], excerpt: '秦淮名胜题材小说'},
            {id: 456, title: '乌衣巷', location: '乌衣巷', coord: [118.787, 32.025], excerpt: '六朝文化题材小说'},
            {id: 457, title: '鸳梦难言', location: '南京', coord: [118.8, 32.05], excerpt: '民国爱情题材小说'}
        ]
    },
    '王朔': {
        name: '王朔',
        intro: '京派作家代表，痞子文学开创者',
        works: [
            {id: 458, title: '空中小姐', location: '南京', coord: [118.8, 32.05], excerpt: '早期爱情题材中篇小说'},
            {id: 459, title: '玩的就是心跳', location: '南京', coord: [118.8, 32.05], excerpt: '都市青年题材长篇小说'},
            {id: 460, title: '千万别把我当人', location: '南京', coord: [118.8, 32.05], excerpt: '讽刺幽默长篇小说'},
            {id: 461, title: '看上去很美', location: '南京', coord: [118.8, 32.05], excerpt: '童年回忆题材长篇小说'},
            {id: 462, title: '动物凶猛', location: '南京', coord: [118.8, 32.05], excerpt: '青春残酷题材中篇小说'},
            {id: 463, title: '无知者无畏', location: '南京', coord: [118.8, 32.05], excerpt: '文化批评随笔集'},
            {id: 464, title: '我是你爸爸', location: '南京', coord: [118.8, 32.05], excerpt: '父子关系题材长篇小说'},
            {id: 465, title: '我的千岁寒', location: '南京', coord: [118.8, 32.05], excerpt: '实验性长篇小说'},
            {id: 466, title: '浮出海面', location: '南京', coord: [118.8, 32.05], excerpt: '早期中篇小说'},
            {id: 467, title: '一半是焰火一半是海水', location: '南京', coord: [118.8, 32.05], excerpt: '青春爱情小说集'},
            {id: 468, title: '顽主', location: '南京', coord: [118.8, 32.05], excerpt: '都市青年题材中篇小说'}
        ]
    },
    '鲁羊': {
        name: '鲁羊',
        intro: '先锋派作家，南京代表性小说家',
        works: [
            {id: 469, title: '银色老虎', location: '南京', coord: [118.8, 32.05], excerpt: '实验性短篇小说集'},
            {id: 470, title: '黄金夜色', location: '南京', coord: [118.8, 32.05], excerpt: '都市生活题材小说集'},
            {id: 471, title: '佳人相见一千年', location: '南京', coord: [118.8, 32.05], excerpt: '历史幻想题材小说'},
            {id: 472, title: '在北京奔跑', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材小说'},
            {id: 473, title: '鸣指', location: '南京', coord: [118.8, 32.05], excerpt: '音乐题材中篇小说'},
            {id: 474, title: '风和水', location: '南京', coord: [118.8, 32.05], excerpt: '自然哲理题材小说集'}
        ]
    },
    '王心丽': {
        name: '王心丽',
        intro: '女作家，南京都市文学代表',
        works: [
            {id: 475, title: '越轨年龄', location: '南京', coord: [118.8, 32.05], excerpt: '青春成长题材小说'},
            {id: 476, title: '陌生世界', location: '南京', coord: [118.8, 32.05], excerpt: '都市生活题材小说'},
            {id: 477, title: '雾水情缘', location: '南京', coord: [118.8, 32.05], excerpt: '都市爱情题材小说'},
            {id: 478, title: '青春崇拜', location: '南京', coord: [118.8, 32.05], excerpt: '青少年题材小说'},
            {id: 479, title: '单身逃亡', location: '南京', coord: [118.8, 32.05], excerpt: '都市女性题材小说'},
            {id: 480, title: '无聊约会', location: '南京', coord: [118.8, 32.05], excerpt: '都市情感题材小说'},
            {id: 481, title: '夜色天街', location: '南京', coord: [118.8, 32.05], excerpt: '都市夜生活题材小说'},
            {id: 482, title: '无奈恋情', location: '南京', coord: [118.8, 32.05], excerpt: '情感困境题材小说'},
            {id: 483, title: '紫色梦魔', location: '南京', coord: [118.8, 32.05], excerpt: '心理探索题材小说'},
            {id: 484, title: '白色水鸟', location: '南京', coord: [118.8, 32.05], excerpt: '自然意象小说'},
            {id: 485, title: '落红三部曲', location: '南京', coord: [118.8, 32.05], excerpt: '女性成长系列小说'}
        ]
    },
    '姜耕玉': {
        name: '姜耕玉',
        intro: '诗人、作家',
        works: [
            {id: 486, title: '风吹过来', location: '南京', coord: [118.8, 32.05], excerpt: '自然意象诗集'}
        ]
    },
    '黄梵': {
        name: '黄梵',
        intro: '诗人、小说家，南京理工大学教授',
        works: [
            {id: 487, title: '第十一诫', location: '南京', coord: [118.8, 32.05], excerpt: '高校知识分子题材小说'}
        ]
    },
    '余一鸣': {
        name: '余一鸣',
        intro: '作家，南京外国语学校教师',
        works: [
            {id: 488, title: '种桃种李种春风', location: '南京', coord: [118.8, 32.05], excerpt: '教育题材小说'}
        ]
    },
    '姚鄂梅': {
        name: '姚鄂梅',
        intro: '女作家',
        works: [
            {id: 489, title: '像天一样高', location: '南京', coord: [118.8, 32.05], excerpt: '理想主义题材小说'}
        ]
    },
    '修白': {
        name: '修白',
        intro: '女作家',
        works: [
            {id: 490, title: '金川河', location: '金川河', coord: [118.760, 32.082], excerpt: '南京城北河流题材散文'}
        ]
    },
    '姜琍敏': {
        name: '姜琍敏',
        intro: '作家',
        works: [
            {id: 491, title: '苏舒的武器', location: '南京', coord: [118.8, 32.05], excerpt: '都市女性题材小说'}
        ]
    },
    '张生': {
        name: '张生',
        intro: '作家，南京大学教授',
        works: [
            {id: 492, title: '地铁一号线', location: '地铁一号线', coord: [118.796, 32.065], excerpt: '南京城市生活题材小说'}
        ]
    },
    '潘向黎': {
        name: '潘向黎',
        intro: '女作家',
        works: [
            {id: 493, title: '穿心莲', location: '南京', coord: [118.8, 32.05], excerpt: '都市女性题材小说'}
        ]
    },
    '韩东': {
        name: '韩东',
        intro: '诗人、小说家，"他们"文学社创始人',
        works: [
            {id: 494, title: '扎根', location: '南京', coord: [118.8, 32.05], excerpt: '知青题材小说代表作'}
        ]
    },
    '朱辉': {
        name: '朱辉',
        intro: '作家，《雨花》杂志主编',
        works: [
            {id: 495, title: '七层宝塔', location: '南京', coord: [118.8, 32.05], excerpt: '鲁迅文学奖获奖小说'}
        ]
    },
    '王大进': {
        name: '王大进',
        intro: '作家',
        works: [
            {id: 496, title: '欲望之路', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材长篇小说'}
        ]
    },
    '黄孝阳': {
        name: '黄孝阳',
        intro: '作家',
        works: [
            {id: 497, title: '众生·设计师', location: '南京', coord: [118.8, 32.05], excerpt: '科幻题材小说'}
        ]
    },
    '丁捷': {
        name: '丁捷',
        intro: '作家',
        works: [
            {id: 498, title: '追问', location: '南京', coord: [118.8, 32.05], excerpt: '反腐纪实文学作品'}
        ]
    },
    '魏微': {
        name: '魏微',
        intro: '新生代作家代表',
        works: [
            {id: 499, title: '在明孝陵乘凉', location: '明孝陵', coord: [118.850, 32.058], excerpt: '南京历史遗迹题材小说'}
        ]
    },
    '李凤群': {
        name: '李凤群',
        intro: '女作家',
        works: [
            {id: 500, title: '大江边', location: '南京', coord: [118.8, 32.05], excerpt: '长江边生活题材小说'}
        ]
    },
    '葛亮': {
        name: '葛亮',
        intro: '香港作家',
        works: [
            {id: 501, title: '朱雀', location: '南京', coord: [118.8, 32.05], excerpt: '南京百年历史题材小说'}
        ]
    },
    '曹寇': {
        name: '曹寇',
        intro: '先锋作家',
        works: [
            {id: 502, title: '十七年表', location: '南京', coord: [118.8, 32.05], excerpt: '自传体小说'}
        ]
    },
    '崔曼莉': {
        name: '崔曼莉',
        intro: '女作家',
        works: [
            {id: 503, title: '浮沉', location: '南京', coord: [118.8, 32.05], excerpt: '职场商战题材小说'}
        ]
    },
    '姞文': {
        name: '姞文',
        intro: '作家',
        works: [
            {id: 504, title: '琉璃世琉璃塔', location: '大报恩寺', coord: [118.786, 32.018], excerpt: '南京历史题材小说'}
        ]
    },
    '朱庆和': {
        name: '朱庆和',
        intro: '诗人、作家',
        works: [
            {id: 505, title: '山羊的胡子', location: '南京', coord: [118.8, 32.05], excerpt: '乡村题材小说集'}
        ]
    },
    '汪明明': {
        name: '汪明明',
        intro: '作家',
        works: [
            {id: 506, title: '零度诱惑', location: '南京', coord: [118.8, 32.05], excerpt: '都市情感题材小说'}
        ]
    },
    '孙频': {
        name: '孙频',
        intro: '新生代女作家',
        works: [
            {id: 507, title: '盐', location: '南京', coord: [118.8, 32.05], excerpt: '女性生存困境题材小说集'},
            {id: 508, title: '松林夜宴图', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材小说'}
        ]
    },
    '张嘉佳': {
        name: '张嘉佳',
        intro: '畅销书作家，南京大学毕业',
        works: [
            {id: 509, title: '从你的全世界路过', location: '南京', coord: [118.8, 32.05], excerpt: '现象级都市情感故事集'}
        ]
    },
    '朱婧': {
        name: '朱婧',
        intro: '青年作家',
        works: [
            {id: 510, title: '美术馆旁边的动物园', location: '美术馆', coord: [118.798, 32.045], excerpt: '都市生活题材小说'}
        ]
    },
    '庞羽': {
        name: '庞羽',
        intro: '青年作家',
        works: [
            {id: 511, title: '佛罗伦萨的狗', location: '南京', coord: [118.8, 32.05], excerpt: '现代生活题材小说'}
        ]
    },
    '鲁敏': {
        name: '鲁敏',
        intro: '鲁迅文学奖得主',
        works: [
            {id: 512, title: '六人晚餐', location: '南京', coord: [118.8, 32.05], excerpt: '都市家庭题材小说'},
            {id: 513, title: '奔月', location: '南京', coord: [118.8, 32.05], excerpt: '都市悬疑题材长篇小说'}
        ]
    },
    '朱山坡': {
        name: '朱山坡',
        intro: '广西作家',
        works: [
            {id: 514, title: '风暴预警期', location: '南京', coord: [118.8, 32.05], excerpt: '南方小镇题材小说集'}
        ]
    },
    '岳红': {
        name: '岳红',
        intro: '女作家',
        works: [
            {id: 515, title: '我吃的是草', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子题材小说'}
        ]
    },
    '宋世明': {
        name: '宋世明',
        intro: '作家',
        works: [
            {id: 516, title: '死街风筝', location: '南京', coord: [118.8, 32.05], excerpt: '城市边缘题材小说'}
        ]
    },
    '伊歌': {
        name: '伊歌',
        intro: '女作家',
        works: [
            {id: 517, title: '琉璃年代', location: '南京', coord: [118.8, 32.05], excerpt: '青春成长题材小说'}
        ]
    },
    '刘国欣': {
        name: '刘国欣',
        intro: '作家',
        works: [
            {id: 518, title: '城客', location: '南京', coord: [118.8, 32.05], excerpt: '都市移民题材小说'}
        ]
    },
    '韩东': {
        name: '韩东',
        intro: '第三代诗歌代表诗人，"他们"文学社创始人',
        works: [
            {id: 519, title: '美好的日子', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京日常生活的诗作'},
            {id: 520, title: '我们坐在街上', location: '南京', coord: [118.8, 32.05], excerpt: '南京街头观察的诗歌'}
        ]
    },
    '叶辉': {
        name: '叶辉',
        intro: '诗人',
        works: [
            {id: 521, title: '山谷中', location: '南京', coord: [118.8, 32.05], excerpt: '自然意象诗歌'},
            {id: 522, title: '面孔', location: '南京', coord: [118.8, 32.05], excerpt: '城市人物速写诗'}
        ]
    },
    '鲁羊': {
        name: '鲁羊',
        intro: '诗人、小说家',
        works: [
            {id: 523, title: '退缩之诗', location: '南京', coord: [118.8, 32.05], excerpt: '内心探索的诗歌'},
            {id: 524, title: '接近夜晚的祷词', location: '南京', coord: [118.8, 32.05], excerpt: '暮色时分的沉思'}
        ]
    },
    '代薇': {
        name: '代薇',
        intro: '女诗人',
        works: [
            {id: 525, title: '我没有哭,只是在流泪', location: '南京', coord: [118.8, 32.05], excerpt: '情感抒怀诗作'}
        ]
    },
    '子川': {
        name: '子川',
        intro: '诗人',
        works: [
            {id: 526, title: '秋歌', location: '南京', coord: [118.8, 32.05], excerpt: '南京秋景题材诗歌'},
            {id: 527, title: '糟糕的生活', location: '南京', coord: [118.8, 32.05], excerpt: '城市生活反思诗'}
        ]
    },
    '化铁': {
        name: '化铁',
        intro: '七月派诗人',
        works: [
            {id: 528, title: '不朽的城墙—南京屠城的63周年', location: '南京城墙', coord: [118.798, 32.050], excerpt: '纪念南京大屠杀的反思诗作'}
        ]
    },
    '吴其盛': {
        name: '吴其盛',
        intro: '诗人',
        works: [
            {id: 529, title: '城市和它的纪念馆', location: '南京大屠杀纪念馆', coord: [118.748, 32.035], excerpt: '城市历史记忆题材诗歌'}
        ]
    },
    '王德安': {
        name: '王德安',
        intro: '工人诗人',
        works: [
            {id: 530, title: '庄严的凭吊', location: '雨花台', coord: [118.778, 31.994], excerpt: '雨花台烈士悼念诗'}
        ]
    },
    '叶庆瑞': {
        name: '叶庆瑞',
        intro: '诗人',
        works: [
            {id: 531, title: '拒绝遗忘', location: '南京', coord: [118.8, 32.05], excerpt: '历史记忆题材组诗'},
            {id: 532, title: '中华门', location: '中华门', coord: [118.775, 32.008], excerpt: '南京古城门题材诗歌'},
            {id: 533, title: '南京城墙', location: '明城墙', coord: [118.798, 32.050], excerpt: '咏叹明城墙的诗歌'}
        ]
    },
    '冯亦同': {
        name: '冯亦同',
        intro: '诗人、作家',
        works: [
            {id: 534, title: '江东门沉思', location: '江东门', coord: [118.748, 32.035], excerpt: '南京大屠杀纪念馆的沉思'},
            {id: 535, title: '亚洲的飘蓬', location: '南京', coord: [118.8, 32.05], excerpt: '亚洲历史题材长诗'}
        ]
    },
    '胡弦': {
        name: '胡弦',
        intro: '诗人，《扬子江诗刊》主编',
        works: [
            {id: 536, title: '十年灯', location: '南京', coord: [118.8, 32.05], excerpt: '南京生活十年纪念诗集'},
            {id: 537, title: '寻墨记', location: '南京', coord: [118.8, 32.05], excerpt: '文化追寻题材诗歌'}
        ]
    },
    '马永波': {
        name: '马永波',
        intro: '诗人、翻译家',
        works: [
            {id: 538, title: '树篱上的雪', location: '南京', coord: [118.8, 32.05], excerpt: '冬日南京景象诗歌'}
        ]
    },
    '半岛': {
        name: '半岛',
        intro: '诗人',
        works: [
            {id: 539, title: '孤独与沉思', location: '南京', coord: [118.8, 32.05], excerpt: '城市孤独主题诗歌'}
        ]
    },
    '古筝': {
        name: '古筝',
        intro: '女诗人',
        works: [
            {id: 540, title: '水街', location: '南京', coord: [118.8, 32.05], excerpt: '南京水乡题材诗歌'}
        ]
    },
    '方政': {
        name: '方政',
        intro: '诗人',
        works: [
            {id: 541, title: '诗羽栖霞', location: '栖霞山', coord: [118.964, 32.154], excerpt: '栖霞山红叶题材诗歌'},
            {id: 542, title: '人生况味', location: '南京', coord: [118.8, 32.05], excerpt: '生活感悟诗歌'}
        ]
    },
    '诸荣会': {
        name: '诸荣会',
        intro: '作家、文化学者',
        works: [
            {id: 543, title: '凤生白下：南京人文笔记', location: '白下', coord: [118.798, 32.040], excerpt: '关于南京历史文化的散文集'}
        ]
    },
    '邓海南': {
        name: '邓海南',
        intro: '诗人、作家',
        works: [
            {id: 544, title: '东郊的风韵', location: '钟山', coord: [118.853, 32.062], excerpt: '描写紫金山风景的散文'}
        ]
    },
    '王干': {
        name: '王干',
        intro: '文学评论家',
        works: [
            {id: 545, title: '闲话南京', location: '南京', coord: [118.8, 32.05], excerpt: '南京城市文化随笔'}
        ]
    },
    '范小青': {
        name: '范小青',
        intro: '江苏省作家协会主席',
        works: [
            {id: 546, title: '苏州小巷', location: '南京', coord: [118.8, 32.05], excerpt: '江南小巷题材散文'}
        ]
    },
    '梁晴': {
        name: '梁晴',
        intro: '作家',
        works: [
            {id: 547, title: '大方巷里的烟火', location: '大方巷', coord: [118.776, 32.060], excerpt: '南京老街巷生活散文'}
        ]
    },
    '储福金': {
        name: '储福金',
        intro: '作家',
        works: [
            {id: 548, title: '晋陀', location: '南京', coord: [118.8, 32.05], excerpt: '历史文化题材散文'}
        ]
    },
    '冯亦同': {
        name: '冯亦同',
        intro: '诗人、作家',
        works: [
            {id: 549, title: '在紫金山星座上', location: '紫金山', coord: [118.853, 32.062], excerpt: '紫金山题材散文'}
        ]
    },
    '王德安': {
        name: '王德安',
        intro: '工人诗人',
        works: [
            {id: 550, title: '寻觅在秦淮河边', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '秦淮河畔文化寻踪'}
        ]
    },
    '魏微': {
        name: '魏微',
        intro: '新生代作家',
        works: [
            {id: 551, title: '街景与人物', location: '南京', coord: [118.8, 32.05], excerpt: '南京城市生活散文'}
        ]
    },
 
   
    '贾振钟': {
        name: '贾振钟',
        intro: '文化学者',
        works: [
            {id: 557, title: '金陵颂', location: '南京', coord: [118.8, 32.05], excerpt: '南京城市礼赞'}
        ]
    },
    '丁帆': {
        name: '丁帆',
        intro: '南京大学教授、文学评论家',
        works: [
            {id: 558, title: '江南悲歌', location: '南京', coord: [118.8, 32.05], excerpt: '江南历史散文集'}
        ]
    },
    '傅宁军': {
        name: '傅宁军',
        intro: '报告文学作家',
        works: [
            {id: 559, title: '南京先生', location: '南京', coord: [118.8, 32.05], excerpt: '南京人物传记作品'}
        ]
    },
    '丁捷': {
        name: '丁捷',
        intro: '作家',
        works: [
            {id: 560, title: '追问', location: '南京', coord: [118.8, 32.05], excerpt: '反腐题材纪实文学'}
        ]
    }  
};
// 毕飞宇作品补充
authorsData['毕飞宇'].works.push(
    {id: 561, title: '人类的动物园', location: '南京', coord: [118.8, 32.05], excerpt: '城市文化随笔集'}
);

authorsData['高尔泰'] = {
    name: '高尔泰',
    intro: '美学家、作家',
    works: [
        {id: 562, title: '寻找家园', location: '南京', coord: [118.8, 32.05], excerpt: '回忆录散文集'}
    ]
};
authorsData['叶兆言'].works.push(
    {id: 553, title: '旧影秦淮', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '秦淮河历史影像散文'},
    {id: 554, title: '南京人', location: '南京', coord: [118.8, 32.05], excerpt: '南京城市文化研究'}

);
authorsData['叶兆言'].works.push(
    {id: 563, title: '流浪之夜', location: '南京', coord: [118.8, 32.05], excerpt: '城市生活散文'},
    {id: 564, title: '动物的意志', location: '南京', coord: [118.8, 32.05], excerpt: '自然观察随笔'}
);

authorsData['朱自清'].works.push = (
    {id: 89, title: '南京', location: '南京', coord: [118.8, 32.05], excerpt: '描写南京风物的散文'}
   
)
// 王彬彬作品
authorsData['王彬彬'] = {
    name: '王彬彬',
    intro: '南京大学教授、文学评论家',
    works: [
        {id: 572, title: '并未远去的背影', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子研究文集'}
    ]
};

authorsData['叶兆言'].works.push(
    {id: 565, title: '悬挂的绿苹果', location: '南京', coord: [118.8, 32.05], excerpt: '叶兆言的短篇小说代表作', collection: '叶兆言中篇小说选'},
    {id: 566, title: '枣树的故事', location: '南京', coord: [118.8, 32.05], excerpt: '南京历史变迁中的人物命运故事', collection: '叶兆言中篇小说选'},
    {id: 567, title: '夜泊秦淮', location: '秦淮河', coord: [118.792, 32.0107], excerpt: '民国题材系列小说作品集', series: '夜泊秦淮系列'},
    {id: 568, title: '我们的心多么顽固', location: '南京', coord: [118.8, 32.05], excerpt: '探讨人性与道德的当代长篇小说'},
    {id: 569, title: '苏珊的微笑', location: '南京', coord: [118.8, 32.05], excerpt: '知识分子生存境遇的长篇小说'},
    {id: 570, title: '别人的爱情', location: '南京', coord: [118.8, 32.05], excerpt: '都市男女情感纠葛的长篇小说'},
    {id: 571, title: '很久以来', location: '南京', coord: [118.8, 32.05], excerpt: '反思历史记忆的长篇小说'}
);


const locationToWorks = {};
Object.values(authorsData).forEach(author => {
    author.works.forEach(work => {
        // 标准化地点名称处理
        let locationName = work.location;
        
        // 特殊地点名称映射
        const locationMapping = {
            '浦口车站': '浦口火车站',
            '紫金山': '钟山',
            '白下区': '白下',
            '中华门瓮城': '中华门'
        };
        
        if (locationMapping[locationName]) {
            locationName = locationMapping[locationName];
        }
        
        if (!locationToWorks[locationName]) {
            locationToWorks[locationName] = [];
        }
        
        locationToWorks[locationName].push({
            author: author.name,
            work: work
        });
    });
});

$(document).ready(function() {
    const myChart = echarts.init(document.getElementById('mapContainer'));
    
    myChart.showLoading({
        text: '正在加载南京文学地图...',
        color: '#4a6cf7',
        textColor: '#4a5568',
        maskColor: 'rgba(255, 255, 255, 0.9)'
    });
    
    const buildAllMarkers = () => {
        return Object.keys(nanjingCoords).map(locationName => {
            // 收集所有与该地点相关的作品
            const works = [];
            Object.values(authorsData).forEach(author => {
                author.works.forEach(work => {
                    if (work.location === locationName) {
                        works.push({
                            title: work.title,
                            author: author.name,
                            excerpt: work.excerpt
                        });
                    }
                });
            });
    
            // 收集所有相关作家（去重）
            const authors = [...new Set(works.map(work => work.author))];
            
            return {
                id: `loc_${locationName}`,
                name: locationName,
                value: nanjingCoords[locationName],
                excerpt: locationDescriptions[locationName] || '南京文学地标',
                works: works,
                authors: authors,
                symbol: 'pin',
                symbolSize: [40, 50],
                itemStyle: { color: '#ff6b6b' },
                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#1a3d66',
                    fontSize: 12
                }
            };
        });
    };
    
    const allMarkers = buildAllMarkers();
    
    fetch('./data/nanjing.json')
        .then(response => response.json())
        .then(nanjingGeoJSON => {
            // 注册南京地图
            echarts.registerMap('nanjing', nanjingGeoJSON);
            
            // 配置地图选项
            const option = {
                title: {
                    text: '南京文学地图',
                    subtext: `收录${allMarkers.length}个文学地标`,
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
                            const marker = params.data;
                            const worksCount = marker.works ? marker.works.length : 0;
                            const authorsCount = marker.authors ? marker.authors.length : 0;
                            
                            return `<div style="font-weight:bold;margin-bottom:5px;">${marker.name}</div>
                                    <div>${marker.excerpt}</div>
                                    <div style="margin-top:8px;color:#4a5568;">
                                        ${worksCount}部作品 · ${authorsCount}位作家
                                    </div>
                                    <div style="margin-top:5px;color:#4a6cf7;">点击查看详情</div>`;
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
                    data: allMarkers,
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
            updateCounter(allMarkers.length);
            
            // 地图点击事件
            myChart.on('click', function(params) {
                if (params.componentType === 'series') {
                    const location = params.data;
                    
                    // 修复: 显示地点信息
                    showLocationInfo(location);
                    
                    // 高亮当前选中区域
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        name: location.name
                    });
                }
            });
        })
       
    // 响应窗口大小变化
    window.addEventListener('resize', function() {
        myChart.resize();
    });
    
    // 搜索按钮点击事件（增强版）
    $('#searchBtn').click(function() {
        const query = $('#searchInput').val().trim().toLowerCase();
        if (!query) {
            resetToInitialView();
            return;
        }
        
        // 先取消之前所有高亮
        myChart.dispatchAction({ type: 'downplay' });
        
        // 1. 首先尝试精确匹配作者名
        const exactAuthorMatch = Object.keys(authorsData).find(author => 
            author.toLowerCase() === query
        );
        
        if (exactAuthorMatch) {
            // 精确匹配作者时，只显示该作者的相关地点
            const author = authorsData[exactAuthorMatch];
            const authorLocations = new Set(
                author.works.map(work => work.location)
            );
            
            const filteredMarkers = allMarkers.filter(marker => 
                authorLocations.has(marker.name)
            );
            
            myChart.setOption({
                series: [{
                    data: filteredMarkers
                }]
            });
            
            // 高亮所有匹配点
            filteredMarkers.forEach(marker => {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    name: marker.name
                });
            });
            
            // 显示该作家的所有作品
            showAuthorWorks(author, filteredMarkers);
            updateCounter(filteredMarkers.length);
            return;
        }
        
        // 2. 尝试部分匹配作者名
        const partialAuthorMatches = Object.keys(authorsData).filter(author => 
            author.toLowerCase().includes(query)
        );
        
        if (partialAuthorMatches.length > 0) {
            // 部分匹配作者名，显示所有匹配作者的相关地点
            const authorLocations = new Set();
            partialAuthorMatches.forEach(authorName => {
                authorsData[authorName].works.forEach(work => {
                    authorLocations.add(work.location);
                });
            });
            
            const filteredMarkers = allMarkers.filter(marker => 
                authorLocations.has(marker.name)
            );
            
            myChart.setOption({
                series: [{
                    data: filteredMarkers
                }]
            });
            
            // 高亮所有匹配点
            filteredMarkers.forEach(marker => {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    name: marker.name
                });
            });
            
            // 显示匹配的作者信息
            showMatchedAuthors(partialAuthorMatches, filteredMarkers);
            updateCounter(filteredMarkers.length);
            return;
        }
        
        // 3. 尝试匹配作品名
        const workMatches = [];
        Object.values(authorsData).forEach(author => {
            author.works.forEach(work => {
                if (work.title.toLowerCase().includes(query)) {
                    workMatches.push({
                        author: author.name,
                        work: work
                    });
                }
            });
        });
        
        if (workMatches.length > 0) {
            const workLocations = new Set(
                workMatches.map(item => item.work.location)
            );
            
            const filteredMarkers = allMarkers.filter(marker => 
                workLocations.has(marker.name)
            );
            
            myChart.setOption({
                series: [{
                    data: filteredMarkers
                }]
            });
            
            // 高亮所有匹配点
            filteredMarkers.forEach(marker => {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    name: marker.name
                });
            });
            
            // 显示匹配的作品信息
            showWorkMatches(workMatches, filteredMarkers);
            updateCounter(filteredMarkers.length);
            return;
        }
        
        // 4. 尝试匹配地点名
        const locationMatches = allMarkers.filter(marker => 
            marker.name.toLowerCase().includes(query)
        );
        
        if (locationMatches.length > 0) {
            myChart.setOption({
                series: [{
                    data: locationMatches
                }]
            });
            
            // 高亮所有匹配点
            locationMatches.forEach(marker => {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    name: marker.name
                });
            });
            
            // 显示第一个匹配地点的信息
            showLocationInfo(locationMatches[0]);
            updateCounter(locationMatches.length);
            return;
        }
        
        // 5. 没有匹配结果
        $('#infoPanel').html(`<div class="no-results">
            <h3>未找到相关结果</h3>
            <p>请尝试搜索：</p>
            <ul>
                <li>作家姓名（如：叶兆言、朱自清）</li>
                <li>作品名称（如：桨声灯影里的秦淮河）</li>
                <li>地点名称（如：秦淮河、夫子庙）</li>
            </ul>
        </div>`);
        
        myChart.setOption({
            series: [{
                data: allMarkers
            }]
        });
        updateCounter(allMarkers.length);
    });
    
    function resetToInitialView() {
        myChart.setOption({
            series: [{
                data: allMarkers
            }]
        });
        updateCounter(allMarkers.length);
        
        $('#infoPanel').html(`<div class="default-message">
            <h3>南京文学地图数字导览</h3>
            <div class="stats">
                <div><span class="stat-number">${Object.keys(authorsData).length}</span>位作家</div>
                <div><span class="stat-number">${Object.values(authorsData).reduce((sum, author) => sum + author.works.length, 0)}</span>部作品</div>
                <div><span class="stat-number">${allMarkers.length}</span>个文学地标</div>
            </div>
            <p>在搜索框中输入作家、作品或地点名称，探索南京文学足迹</p>
            <p>点击地图上的标记点，查看详情</p>
        </div>`);
    }
    
    function showLocationInfo(location) {
        console.log('Location data:', location); // 调试用
        
        let worksHtml = '';
        if (location.works && location.works.length > 0) {
            worksHtml = '<div class="literary-works"><h4>相关作品:</h4><ul>';
            
            location.works.forEach(work => {
                // 确保正确提取作品属性
                const title = work.title || work.name || "未知作品";
                const author = work.author || "未知作者";
                const excerpt = work.excerpt || work.description || "暂无描述";
                
                worksHtml += `
                    <li class="work-item">
                        <div class="work-title">《${title}》</div>
                        <div class="work-author">作者：${author}</div>
                        <div class="work-excerpt">${excerpt}</div>
                    </li>
                `;
            });
            
            worksHtml += '</ul></div>';
        } else {
            worksHtml = '<p class="no-works">暂无相关作品信息</p>';
        }
        
        $('#infoPanel').html(`
            <div class="location-info">
                <h3>${location.name || "未知地点"}</h3>
                <p class="location-description">${location.excerpt || location.description || "江苏省会，六朝古都，中国现代文学重要城市"}</p>
                ${worksHtml}
            </div>
        `);
    }
    // 显示匹配的作者作品
    function showAuthorWorks(author, markers) {
        let worksHtml = '<div class="literary-works"><h4>作品列表:</h4><ul>';
        
        author.works.forEach(work => {
            worksHtml += `<li>
                <div class="work-title">${work.title}</div>
                <div class="work-author">创作地点：${work.location}</div>
                <div class="work-excerpt">${work.excerpt}</div>
            </li>`;
        });
        
        worksHtml += '</ul></div>';
        
        $('#infoPanel').html(`
            <div class="author-info">
                <h3>${author.name}</h3>
                <p>${author.intro}</p>
                <div class="location-meta">
                    <span>${author.works.length}部作品</span>
                    <span>${markers.length}个相关地点</span>
                </div>
                ${worksHtml}
            </div>
        `);
    }
    
    // 显示部分匹配的作者
    function showMatchedAuthors(authorNames, markers) {
        let authorsHtml = '<div class="literary-works"><h4>匹配的作家:</h4><ul>';
        
        authorNames.forEach(authorName => {
            const author = authorsData[authorName];
            authorsHtml += `<li>
                <div class="work-title">${author.name}</div>
                <div class="work-excerpt">${author.intro}</div>
                <div class="work-meta">${author.works.length}部作品</div>
            </li>`;
        });
        
        authorsHtml += '</ul></div>';
        
        $('#infoPanel').html(`
            <div class="author-info">
                <h3>找到${authorNames.length}位匹配的作家</h3>
                <div class="location-meta">
                    <span>${markers.length}个相关地点</span>
                </div>
                ${authorsHtml}
            </div>
        `);
    }
    
    // 显示匹配的作品
    function showWorkMatches(workMatches, markers) {
        let worksHtml = '<div class="literary-works"><h4>匹配的作品:</h4><ul>';
        
        workMatches.forEach(match => {
            worksHtml += `<li>
                <div class="work-title">${match.work.title}</div>
                <div class="work-author">作者：${match.author}</div>
                <div class="work-location">创作地点：${match.work.location}</div>
                <div class="work-excerpt">${match.work.excerpt}</div>
            </li>`;
        });
        
        worksHtml += '</ul></div>';
        
        $('#infoPanel').html(`
            <div class="author-info">
                <h3>找到${workMatches.length}部匹配的作品</h3>
                <div class="location-meta">
                    <span>${markers.length}个相关地点</span>
                </div>
                ${worksHtml}
            </div>
        `);
    }
    
    // 更新计数器
    function updateCounter(count) {
        $('.counter-number').text(count);
    }
});
window.getNanjingMarkers = getAllMarkers;