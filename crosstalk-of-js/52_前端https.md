对称加密和非对称加密：
对称加密：共用一个钥匙；
非对称加密：把自建的公钥（锁），扔给对方，对方加完密给自己发过来。

数字签名：非对称加密和数字摘要

数字签名是一段由发送者生成的特殊加密校验码，用于确定报文的完整性，数字签名的生成涉及两种技术：非对称加密和数字摘要。

数字摘要可以将变长的报文提取为定长的摘要，报文内容不同提取的摘要也将不同，常用的摘要算法有 MD5 和 SHA。签名和校验的过程总共分为 5 步，如下如。（私钥加密，公钥解密）

1:发送方用摘要算法对报文进行提取，生成一段摘要

2：然后用私钥对摘要进行加密，加密后的摘要作为数字签名附加在报文上，一起发送给接收方

3:接收方收到报文后，用同样的摘要算法提取出摘要

4:再用接收到的公钥对报文中的数字签名进行解密

5:如果两个摘要相同，那么就能证明报文没有被篡改



数字证书



数字证书相当于网络上的身份证，用于身份识别，由权威的数字认证机构（CAlendar）负责颁发和管理、数字证书的格式普遍遵循 X.509 国际标准，证书的内容包括：

有效期

颁发机构

颁发机构的签名

证书所有者的名称

证书所有者的公开密钥

版本号和唯一序列号



客户端（如浏览器）会预先植入一个受信任的颁发机构列表，如果收到的证书来自陌生的机构，那么会弹出一个安全警报对话框，如下图时IE浏览器的安全警报。


一般数字证书都会被安装在服务器处，当客户端发起安全请求时，服务器就会返回数字证书。客户端从受信机构列表中找到相应的公开密钥，解开数字证书。然后验证数字证书中的信息，如果验证通过，就说明请求来自意料之中的服务器；如果不通过，就说明证书被冒用，来源可疑，客户端立刻发出警告。下图描绘了这个认证过程。







安全通信机制



客户端和服务器将通过好几个步骤建立起安全连接，然后开始通信，下面时精简过的步骤：

客户端发送 Client Hello 报文开始 SSL 通信，报文中还包括协议版本号、加密算法等信息

服务器发送 Server Hello 报文作为应答，在报文中也会包括协议版本号、加密算法等信息

服务器发送数字证书，数字证书中包括服务器中的公开密钥

客户端解开并验证数字证书，验证通过后，生成一个随机密码串（premaster secure）,再用收到的服务器公钥进行解密，发送给服务器

客户端再次发送 Change Cipher 报文，提示服务器在此条报文之后，采用刚刚生成的随机密码串进行数据加密

服务器也发送 Change Cipher Spec 报文



SSL 连接建立完成，接下来就可以开始传输数据了，下图描绘了这些步骤







03

—

常见笔试面试题



HTTPS有哪些缺点？



HTTPS有如下4个缺点

通信两端都需要进行加密和解密，会消耗大量的CPU、内存等资源，增加了服务器的负载

加密运算和多次握手降低了访问速度

在开发阶段，加大了页面调试难度。由于信息都被加密了，所以用代理工具的话，需要先解密然后才能看到真实信息。

用 HTTPS 访问的页面，页面内的外部资源都得用HTTPS请求，包括脚本中的AJAX请求



什么是运营商劫持？有什么办法预防？



运营商是指提供网络服务的ISP（Internet Service Provider），例如三大基础运营商:中国电信、中国移动和中国联通。



运营商为了牟取经济利益，有时候会劫持用户的HTTP访问最明显的特征就是在页面上植入广告，有些是购物广告，有些却是淫秽广告，非常影响界面体验和公司形象。为了避免被劫持，可以让服务器支持 HTTPS HTTPS 协议，HTTPS传输的数据都被加密过了，运营商就无法再注入广告代码，这样页面就不会再被劫持。




