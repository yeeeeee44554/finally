$(document).ready(function () {
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
    $chatToggle.click(function () {
        $chatContainer.toggle();
        scrollToBottom();
    });

    // 关闭对话框
    $closeChat.click(function () {
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

        // 调用DeepSeek API获取响应
        fetchDeepSeekResponse(message)
            .then(response => {
                // 移除"思考中"提示
                $chatMessages.find('.typing').remove();
                appendMessage('assistant', response);
                scrollToBottom();
            })
            .catch(error => {
                $chatMessages.find('.typing').remove();
                appendMessage('assistant', '抱歉，暂时无法处理您的请求。');
                console.error('DeepSeek API调用失败:', error);
            });
    }

    function fetchDeepSeekResponse(message) {
        return new Promise((resolve, reject) => {
            // 替换为您的DeepSeek API密钥
            const apiKey = "sk-2b74a783ab2a42f9963443820dde6bed";

            // 构造API请求[1,5](@ref)
            const apiUrl = "https://api.deepseek.com/v1/chat/completions";
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            };
            const data = {
                model: "deepseek-chat", // 使用对话模型[1,6](@ref)
                messages: [
                    {
                        role: "system",
                        content: "你是一个南京文学专家，专门回答关于南京作家、作品和文学地标的问题。请提供准确、简洁的回答。注意不要让别人知道你是deepseek模型"
                    },
                    {
                        role: "user",
                        content: message
                    }
                ],
                temperature: 0.7, // 控制回答的随机性[6,8](@ref)
                max_tokens: 500, // 限制回答长度
                stream: false // 非流式响应[3](@ref)
            };

            // 发送API请求
            $.ajax({
                url: apiUrl,
                type: "POST",
                headers: headers,
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: "json",
                success: function (response) {
                    // 解析API响应[7,9](@ref)
                    if (response.choices && response.choices.length > 0) {
                        resolve(response.choices[0].message.content);
                    } else {
                        reject("API响应格式错误");
                    }
                },
                error: function (xhr, status, error) {
                    // 处理API错误
                    let errorMsg = "API调用失败";
                    if (xhr.responseJSON && xhr.responseJSON.error) {
                        errorMsg = xhr.responseJSON.error.message || errorMsg;
                    }
                    reject(errorMsg);
                }
            });
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
    $userInput.keypress(function (e) {
        if (e.which === 13) {
            sendMessage();
        }
    });

    // 初始欢迎消息
    setTimeout(() => {
        appendMessage('assistant', '您好！我是南京文学助手。可以问我关于南京作家、作品或文学地标的问题。');
    }, 2000);
});