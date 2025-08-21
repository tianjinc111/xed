import React, { useEffect, useRef, useState } from "react";
import "./App.css";

export default function LoveConfessionApp() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesClicks, setYesClicks] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState([]);

  const yesScale = Math.min(1 + noCount * 0.2, 4.0);
  const showFinal = yesClicks > 0;

  const YES_BASE = { font: 16, padX: 24, padY: 12 }; // px
  const yesFontPx = Math.min(YES_BASE.font * yesScale, 36); 
  const yesPadX  = Math.min(YES_BASE.padX  * yesScale, 40);
  const yesPadY  = Math.min(YES_BASE.padY  * yesScale, 20);


  const releaseHeart = () => {
    setFloatingHearts((h) => [
      ...h,
      { id: Date.now(), x: Math.random() * 80 + 10 },
    ]);
  };

  const handleStart = async () => {
    setStarted(true);
    releaseHeart();
    try {
      await audioRef.current?.play();
    } catch (e) {}
  };

  const handleNo = async () => {
    if (!started) await handleStart();
    setNoCount((c) => c + 1);
    releaseHeart();
  };

  const handleYes = async () => {
    if (!started) await handleStart();
    setYesClicks((c) => c + 1);
    releaseHeart();
  };

  useEffect(() => {
    const t = setInterval(() => {
      setFloatingHearts((h) => h.slice(-15));
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const noOffset = {
    transform: `translate(${Math.sin(noCount * 1.2) * 40}px, ${-Math.min(
      noCount * 6,
      120
    )}px) rotate(${noCount * 2}deg)`,
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-rose-100 via-pink-100 to-white flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingHearts.map((h) => (
          <span
            key={h.id}
            className="absolute text-3xl animate-[floatUp_2.5s_ease-in_forwards]"
            style={{ left: `${h.x}%`, bottom: "-2rem" }}
          >
            
          </span>
        ))}
      </div>


      <div className="absolute top-4 right-4 text-right">
    <div className="text-sm font-semibold text-gray-700 mb-2">
      这是我写给你的一首歌 🎶 ，当然，用了一些工具～
    </div>
    
    
    <audio controls className="w-48">
  <source src={`${import.meta.env.BASE_URL}unsent-confessions.mp3`} type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>

  
    {/* <div className="mt-2">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        去听完整歌曲
      </a>
    </div> */}
  </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-rose-200 p-8 text-right">


        <div className="flex flex-row items-center justify-center gap-3 mb-4">
        <img src={`${import.meta.env.BASE_URL}pic1.jpg`} alt="decoration" />

  <h1 className="text-3xl md:text-4xl font-extrabold">
    一个傻瓜程序员想说的话
  </h1>
</div>
         

          <p style={{ textAlign: 'left' , fontSize: '18px'}} > 孙逸菲</p>          

          <p style={{ textAlign: 'left' ,fontSize: '18px'}} >最近这两天晚上辗转反侧难以入睡，闭上眼睛满脑子全是和你在一起的过往
                你说之前给你说的那些话你不认同，其实我都能明白，这段感情从始至终都是你更加的热情和纯粹的去表达爱，可是我的回馈太慢热和温吞了。
                </p>

          <p style={{ textAlign: 'left' ,fontSize: '18px'}}>在这段感情里，我有很多问题。两个月时间我本来感觉一眨眼就过去了，回想起来才发现发生了好多好多事儿。</p>

          <p style={{ textAlign: 'left' ,fontSize: '18px'}}>第一点就是回应，我一直说我是真诚的，我很珍惜这段关系，但是其实我没有在过程中去表达出我的爱意，我以为只要是每周见你的，
            能够长期坚定的陪伴，就是能够表达我的喜欢。但是这样确实忽略了喜欢我的人的情感需求</p>

          <p style={{ textAlign: 'left' ,fontSize: '18px'}}>然后我也有点迟钝，当你说出不知道怎么和我相处的时候，我的第一反应是你觉得有压力，不知道怎么继续，所以我才说希望不要给你压力，希望你和我是轻松的。但是我没有理解你是在讨厌这种不清不楚的关系，
            我们已经很亲密了，为什么我还是没有更近一步。</p>

            <p style={{ textAlign: 'left' ,fontSize: '18px'}}> 
            还有很多时候我都是在心里想，但是并没有说出来，比如说你和我说你朋友家里催生小孩，你说如果这个时候男生能够维护女生，让家长不要催，会被尊重到，我当时心里想着，如果是我女朋友，我会很坚定的让双方父母知道，
            这是她自己的意愿，是我们两个的事儿，我当时应该也坚定的告诉你，我就是这样的人。
            </p>

            <p style={{ textAlign: 'left' ,fontSize: '18px'}}>
            当你和我说你孙姐想谈恋爱然后对方没有想好，我当时觉得，我不是这样的人，如果是我，不想谈恋爱我才不会对人家好，一直见对方，
            可是却忽略了这是你对我的暗示，忽略了我们也已经date 很久了，这个时候你已经很不开心了。
            </p>

            <p style={{ textAlign: 'left' ,fontSize: '18px'}}>
            还有一次你说演唱会如果在8/18号，那可以见面，抢不到的话，你没说完，然后我因为在公司，没有捕捉到这句话的意思，然后你游泳回来说，
            不过你也不在乎，我一下子有点慌，所以，但是我只有道歉，却没有认真的告诉你，我是很在乎你的，我刚刚因为在公司，没有反应过来你话里的意思，回到家也没有认真的去回应

            </p>
            <p style={{ textAlign: 'left' ,fontSize: '18px'}}>
            之前我觉得你每天都有安排，所以我不想我太push，如果和你说周末都想见面，会让你觉得没有自己的时间，我其实心里是一个很粘人的人，我也一直都很自信，很洒脱，我也一直觉得我的过去没有什么不能说的，可是和你相处，我变得非常小心翼翼，你问我的我的前女友的事儿，我舍不舍得，为什么分手，我都有点含糊，一是因为你说你不想听太具体的，我怕我和你说了太多，你会对我们的感情有迟疑， 二是因为不知道怎么的，我对你有点小心翼翼。 当时我就应该坚定的告诉你，我选择了你，孙逸菲，我的过去都不会影响我对你的感觉，
            你值得最好的，你选择了我，也应该值得最好的我，比过去都要好的我
            </p>

            <p style={{ textAlign: 'left' ,fontSize: '18px'}}>
            还有一个很大的问题就是我觉得自己intp，哪怕拖一点，但是我能力强，我很多事儿也能搞定，我现在才意识到要做的事就是要抓紧做， 别等到太晚了，你和我说了好几次我的车窗膜，我一直想等假期，或者有多的时间的时候再去，我终于意识到，不是没时间，而是我太拖拉。所以我前几天抽空中午把车送去店里把车窗膜也贴好了。包括我们聊过，路上看到被撞死小猫你会说有时间可以停下来抱到路边， 我前天开车回家又看到了，我每次都会很难过，但是就开车走了，这次我停下来了，我打了双闪，然后用袋子把它装起来，
            带到马路边上绿化带，我抱着那小小的碎掉的身躯，我的心也很痛。
            </p>

            <p style={{ textAlign: 'left' ,fontSize: '18px'}}> 
            不过你不知道的是，我知道自己P，所以我之前会每天在工作之间抽空不停的看小红书，找我们周末去哪儿，想带你做不一样的事儿，吃不一样的东西。
            我也怕我自己一忙一周就这么过去了，我也会在周五约会的白天尽力的把事情做完，然后早点出发去见你，虽然我还是有的时候做的不好，但我有在努力的改变自己的坏毛病。
            </p>

            <p style={{ textAlign: 'left' ,fontSize: '18px'}}>
            我觉得尊重对方的想法非常重要，我也一直以为我做的很好。你的每句话我都会引用回复，我也会尊重你的想法，会希望你可以做自己，可是我还是忽略了很多细节，也忽略了在感情里，我不光要尊重，还要勇敢大胆的表达我的爱意，要积极的回应对方热烈的情绪，爱就是要有占有欲的，
            爱就是不讲逻辑的。同时要在遇到问题的时候不只是哄，还要提出我真心的想法和解决问题的结果。
            </p>


          <p style={{ textAlign: 'left' ,fontSize: '18px'}}>
          你真的改变我很多，你真的是一个很好的人，你有一个非常柔软，温暖的内心，你外在又很乐观坚强，我想到你说你上一两段工作不开心，
          然后你辞职在家，一定也承受了很大的压力吧，我也会很心疼，你还会说你如果一直在家也会看不起自己，我真的很想告诉你，不喜欢的事情你就不用做，
          我也会支持你的所有决定，你就是我心里那个独一无二的小鹅蛋呀。能遇到你，是我很大的福气，能够在这个年纪还能遇到一个这么真诚，善良，漂亮，热爱生活，喜欢我，
          敢爱敢恨的人，我是一个多么幸运的人
          </p>

          <p style={{ textAlign: 'left',fontSize: '18px'}}>
          我真正深刻认识到原来我做的一切，都是这么的愚蠢和无知，辜负了一个对爱情充满美好的女生的一片真心，和一次又一次的信任。
          无论是因为什么原因，我都不应该这么做。


          </p>

          <p style={{ textAlign: 'left' ,fontSize: '18px'}}>
          说了这么多，都是我单方面的情绪，我依然希望你能够给我一次机会，我只是想告诉你，无论作为朋友还是爱人，我都想陪你走过一些日子，就像在我难过焦虑时，你陪我走过来一样。所以就算以后真的不在一起了，我也不会对此有任何的不甘和怨恨。我只是单纯的想这么做而已，
          不是缓兵之计。我不希望这种心情再次构成你的压力，让你觉得耽误和辜负。
          </p>


          <p className="text-right mt-6" style={{ textAlign: 'right' ,fontSize: '18px'}} >—— 田锦程</p>


          <div className="flex items-center justify-center gap-6 mt-2">
            <button
              onClick={handleYes}
              className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow px-6 py-3 transition-transform"
              style={{
                fontSize: `${yesFontPx}px`,
                padding: `${yesPadY}px ${yesPadX}px`,
                lineHeight: 1.1,
              }}
            >
              给他一个机会吧
            </button>

            <button
              onClick={handleNo}
              className="rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold shadow px-6 py-3 relative"
              style={noOffset}
            >
              不要
            </button>
          </div>

      
          {showFinal && (
  <div className="flex items-center justify-center mt-6 space-x-4">

<img src={`${import.meta.env.BASE_URL}love.png`} alt="love" />


   
    <div className="big-text">
  那我们见一面吧！！！
</div>
  </div>
)}

        </div>

      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.9); opacity: 0.0; }
          20% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
