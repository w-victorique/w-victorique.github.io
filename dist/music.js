const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    fixed: true,
    audio: [
	
      {
        name: 'ここから、ここから',
        artist: '水瀬いのり / 花澤香菜 / 井口裕香 / 早見沙織',
        url: 'http://other.web.np01.sycdn.kuwo.cn/resource/n1/26/2/3905449784.mp3',
        cover: 'http://p2.music.126.net/DTYRx9BI0xZin4gUZXvG7Q==/109951163156090435.jpg',
      },
      {
        name: 'ウィアートル',
        artist: 'rionos',
        url: 'http://other.web.nq01.sycdn.kuwo.cn/resource/n2/64/51/3149294394.mp3',
        cover: 'http://p1.music.126.net/lWvwd_TlLeHd7e7o53s-Uw==/109951163161447987.jpg',
      }
    ]
});
