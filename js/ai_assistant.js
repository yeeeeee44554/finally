$(document).ready(function() {
    const $aiAssistant = $('#ai-assistant');
    const $chatToggle = $('#chat-toggle');
    const $chatContainer = $('#chat-container');
    const $chatMessages = $('#chat-messages');
    const $userInput = $('#user-input');
    const $sendBtn = $('#send-btn');
    const $closeChat = $('#close-chat');
    
    // 确保对话框初始位置正确（针对地图应用优化）
    $aiAssistant.css({
        'position': 'absolute',
        'bottom': '30px',
        'right': '30px',
        'z-index': 1000
    });
    
    // 初始隐藏对话框
    $chatContainer.hide();
    
    // 切换对话框显示
    $chatToggle.click(function() {
        $chatContainer.toggle();
        scrollToBottom();
    });
    
    // 关闭对话框
    $closeChat.click(function() {
        $chatContainer.hide();
    });
    
    // 发送消息
    function sendMessage() {
        const message = $userInput.val().trim();
        if (!message) return;
        
        // 添加用户消息
        appendMessage('user', message);
        $userInput.val('');
        scrollToBottom();
        
        // 显示正在输入提示
        appendMessage('assistant', '思考中...', true);
        scrollToBottom();
        
        // 调用本地AI响应
        fetchLocalAIResponse(message)
            .then(response => {
                // 移除"思考中"提示
                $chatMessages.find('.typing').remove();
                appendMessage('assistant', response);
                scrollToBottom();
            })
            .catch(error => {
                $chatMessages.find('.typing').remove();
                appendMessage('assistant', '抱歉，暂时无法处理您的请求。');
                console.error('AI处理失败:', error);
            });
    }
    
    // 本地AI响应（使用南京文学数据集）
    function fetchLocalAIResponse(message) {
        return new Promise((resolve) => {
            const aiResponses = {
                "叶兆言": "叶兆言是南京著名作家，他的《南京传》被誉为了解南京的百科全书。作品生动描绘了秦淮河、总统府等地标，展现了南京作为历史名城的沧桑变迁。",
                "朱自清": "朱自清先生的《背影》描绘了在南京浦口火车站的感人场景，《桨声灯影里的秦淮河》则是与俞平伯同游后创作的经典散文。",
                "南京文学": "南京文学源远流长，从六朝时期谢朓的山水诗到明清小说，再到现代文学中的叶兆言、苏童等作家，无不与这座城市息息相关。",
                "秦淮河": "秦淮河被称为南京的母亲河，朱自清、俞平伯等作家都曾在此留下名篇。它也是张恨水《秦淮世家》等小说的背景地点。",
                default: `关于"${message}"，我可以告诉您：南京作为六朝古都，有着深厚的文学传统。许多作家如叶兆言、朱自清、张恨水都在作品中描绘过南京的风貌。您想了解哪位作家或哪个文学地点？`
            };
            
            // 匹配关键词
            const lowerMessage = message.toLowerCase();
            const matchedKey = Object.keys(aiResponses).find(key => 
                key !== "default" && lowerMessage.includes(key.toLowerCase())
            );
            
            // 返回匹配结果或默认响应
            setTimeout(() => {
                resolve(matchedKey ? aiResponses[matchedKey] : aiResponses.default);
            }, 1200);
        });
    }
    
    // 添加消息到聊天框
    function appendMessage(role, content, isTyping = false) {
        const messageClass = isTyping ? "typing" : "";
        const message = `
            <div class="chat-message ${role} ${messageClass}">
                ${content}
            </div>
        `;
        $chatMessages.append(message);
    }
    
    // 滚动到底部
    function scrollToBottom() {
        $chatMessages.scrollTop($chatMessages[0].scrollHeight);
    }
    
    // 发送按钮点击事件
    $sendBtn.click(sendMessage);
    
    // 输入框回车事件
    $userInput.keypress(function(e) {
        if (e.which === 13) {
            sendMessage();
        }
    });
    
    // 初始欢迎消息
    setTimeout(() => {
        appendMessage('assistant', '您好！我是南京文学助手，可以问我关于南京作家、作品或文学地标的问题。例如："叶兆言写过哪些关于南京的作品？"');
    }, 2000);
});