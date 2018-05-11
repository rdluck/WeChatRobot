const { Wechaty, Room } = require('wechaty');
const fs = require('fs');
const {
    bindKnowledgeAnswer,
    logger,
    saveChatInfo,
    saveLoginInfo,
    randowNum,
    checkAtRobot
 } = require('./utils');

// 实例化对象
const chat = Wechaty.instance();

// 读取知识库
const knowledgeFile = JSON.parse(fs.readFileSync('knowledge/data_1.json', { encoding:'utf-8' }));

// 保存当前登录的用户名称
let userName = '';

// 扫码登录
chat.on('scan', (url, code) => {
    // logger(`请扫描二维码进行登录：${code}\n${url}`);
    if (!/201|200/.test(String(code))) {
        logger('请扫描二维码进行登录！');
        const loginUrl = url.replace(/\/qrcode\//, '/l/')
        require('qrcode-terminal').generate(loginUrl)
    }
})
.on('login', (user) => {
    userName = user.obj.name;
    saveLoginInfo(`${userName}登录成功，登录时间：${(new Date()).toLocaleString()}`);
    console.log(`用户登录成功，登录用户：${userName}`);
})
// 自动添加好友
.on('friend', async function (contact, request) {
    if (request) {
        await request.accept()
        logger(`联系人: ${contact.name()} \n好友请求信息： ${request.hello}`)
        logger('---------------------------------------');
    }
})

// 监听收到信息
.on('message', async function (m) {
    let isSend = false;
    const contact = m.from()
    const content = m.content()
    const room = m.room()

    const _name = room ? room.topic() : '';
    const _userName = contact.name();
    const _data = knowledgeFile.knowledge;
    const _warn = knowledgeFile.warn.keyword;
    if (room) {
        const _info = `${_userName}：${content}`;
        saveChatInfo(room.topic(), _info);
    } else {
        logger(`联系人: ${_userName} \n消息内容: ${content}`)
        logger('---------------------------------------');
    }
    //  自己发送的消息，直接返回
    if (m.self()) {
        return
    }
    const isSettingRoom = knowledgeFile.group.indexOf(_name) > -1;
    const isAtRobot = checkAtRobot(userName, content);
    // 判断聊天房间
    if (isSettingRoom) {
        if (isAtRobot) {
            // 自定义关键词回复，当被 @ 的时候触发
            _data.map(item => {
                bindKnowledgeAnswer(m, content, item.keyword, item.answer, () => {
                    isSend = true;
                });
            });
        }
        // 警告全群监听，只要有人说就监听
        _warn.map(item => {
            bindKnowledgeAnswer(m, content, item, knowledgeFile.warn.answer, () => {
                isSend = true;
            });
        });
        if (!isSend) {
            m.say(`你的意思我不太理解！`);
        }
    }
})


// 开始运行
.start();