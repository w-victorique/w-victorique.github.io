const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    fixed: true,
    audio: [
	
      {
        name: 'エブリデイワールド-Ballade Arrange-Yui Solo Ver',
        artist: '東山奈央',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n1/11/62/3287069311.mp3',
        cover: 'https://i.loli.net/2019/04/19/5cb93c183d390.png',
      },
      {
        name: '恋文',
        artist: 'やなぎなぎ',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n2/52/47/1450734399.mp3',
        cover: 'https://p2.music.126.net/0-598HM8duZCapSFRQHlPw==/2351855371837270.jpg',
      }
    ]
});
