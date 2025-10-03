// =================== 1. 설정 ===================
const githubId = "HAERANGMAN";
const repoName = "AnyoungKorea";
const folderPath = "mp3_1A_speaking"; // 스크린샷의 폴더 이름과 동일합니다.

// =================== 2. 오디오 파일 목록 ===================
const audioFiles = [
    "01_이름이_뭐예요.mp3", "02_어느나라_사람이에요.mp3", "03_직업이_뭐예요.mp3", "04_핸드폰이_있어요.mp3",
    "05_전화번호가_뭐예요.mp3", "06_핸드폰이_있어요.mp3", "07_핸드폰번호가_뭐예요.mp3", "08_핸드폰이_어디에_있어요.mp3",
    "09_칠판이_어디에_있어요.mp3", "10_컴퓨터가_어디에_있어요.mp3", "11_무엇을_좋아해요.mp3", "12_무슨_음식을_좋아해요.mp3",
    "13_오늘내일주말이번_주말에_무엇을_해요.mp3", "14_어디에_자주_가요.mp3", "15_어디에_자주가요.mp3", "16_마테_자주가요.mp3",
    "17_시장에_자주가요.mp3", "18_백화점에_자주가요.mp3", "19_거기에서_뭘_사요.mp3", "20_거기에서_뭘사요.mp3",
    "21_거기에서_과일을_사요.mp3", "22_거기에서_무엇을_사요.mp3", "23_우유는_어디에_가요.mp3", "24_우유를_해요.mp3",
    "25_내일_어디에_가요.mp3", "26_무엇을_해요.mp3", "27_편의점에서_무엇을_몇_개_사요.mp3", "28_마트에서_무엇을_몇_개_사요.mp3",
    "29_시장에서_무엇을_몇_개_사요.mp3", "30_백화점에서_무엇을_몇_개_사요.mp3", "31_얼마예요.mp3", "32_편의점에서_무엇을_몇_개_샀어요.mp3",
    "33_마트에서_무엇을_몇_개_샀어요.mp3", "34_시장에서_무엇을_몇_개_샀어요.mp3", "35_백화점에서_무엇을_몇_개_샀어요.mp3", "36_어디점은_어디에서_쇼핑해요.mp3",
    "37_거기에서_무엇을_사요.mp3", "38_얼마예요.mp3", "39_언제_아침을_먹어요.mp3", "40_언제_점심을_먹어요.mp3",
    "41_언제_저녁을_먹어요.mp3", "42_오늘_아침에_어디에_가요.mp3", "43_무엇을_해요.mp3", "44_오늘_점심에_어디에_가요.mp3",
    "45_무엇을_해요.mp3", "46_오늘_저녁에_어디에_가요.mp3", "47_무엇을_해요.mp3", "48_오늘_몇월_며칠이에요.mp3",
    "49_생일이_언제예요.mp3", "50_언제_생일이에요.mp3", "51_지금_몇시_몇분이에요.mp3", "52_언제_친구를_만나요.mp3",
    "53_친구하고_무엇을_해요.mp3", "54_언제_세종학당에_가요.mp3", "55_수업은_몇_시에_있어요.mp3", "56_몇시에_일어나요.mp3",
    "57_오전에_무엇을_해요.mp3", "58_몇시에_일어요.mp3", "59_오후에_무엇을_해요.mp3", "60_언제_아침을_먹어요.mp3",
    "61_언제_점심을_먹어요.mp3", "62_언제_저녁을_먹어요.mp3", "63_무슨_계절을_좋아해요.mp3", "64_어제_날씨가_어땠어요.mp3",
    "65_지금_무슨_계절이에요.mp3", "66_오늘_날씨가_어때요.mp3", "67_고향의_날씨가_어때요.mp3", "68_여러분_고향은_무슨_계절이_있어요.mp3",
    "69_그리고_날씨가_어때요.mp3", "70_고향에_사계절이_있어요.mp3", "71_날씨가_어때요.mp3", "72_사람들이_뭐해요.mp3",
    "73_편의점에_누구하고_갔어요.mp3", "74_무엇을_샀어요.mp3", "75_마트에_누구하고_갔어요.mp3", "76_무엇을_샀어요.mp3",
    "77_시장에_누구하고_갔어요.mp3", "78_무엇을_샀어요.mp3", "79_백화점에_누구하고_갔어요.mp3", "80_무엇을_샀어요.mp3",
    "81_어제_어디에_갔어요.mp3", "82_누구하고_갔어요.mp3", "83_거기에서_뭘_했어요.mp3", "84_지난주말에_어디에_갔어요.mp3",
    "85_누구하고_갔어요.mp3", "86_거기에서_뭘_했어요.mp3", "87_주말에_어디에_갔어요.mp3", "88_거기에서_무엇을_했어요.mp3",
    "89_어땠어요.mp3", "90_주말에_어디에_가고_싶어요.mp3", "91_누구하고_가고_싶어요.mp3", "92_방학에_어디에_가고_싶어요.mp3",
    "93_누구하고_가고_싶어요.mp3", "94_무엇을_하고_싶어요.mp3", "95_이번_주말에_약속이_있어요.mp3", "96_어디에_가요.mp3",
    "97_무엇을_하고_싶어요.mp3"
];

// =================== 3. 코드 실행 부분 ===================
let currentIndex = 0;
const audioPlayer = new Audio();

const prevButton = document.getElementById('prevBtn');
const replayButton = document.getElementById('replayBtn');
const nextButton = document.getElementById('nextBtn');
const scriptButton = document.getElementById('scriptBtn');
const scriptText = document.getElementById('scriptText');

function playAudio(index) {
    const fileName = audioFiles[index];
    const audioUrl = `https://media.githubusercontent.com/media/${githubId}/${repoName}/main/${folderPath}/${fileName}`;
    
    audioPlayer.src = audioUrl;
    audioPlayer.play().catch(e => console.error("오디오 재생 중 오류 발생:", e));

    scriptText.style.display = 'none';
    console.log(`재생 시도: ${fileName}`);
    console.log(`생성된 주소: ${audioUrl}`); 
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + audioFiles.length) % audioFiles.length;
    playAudio(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % audioFiles.length;
    playAudio(currentIndex);
});

replayButton.addEventListener('click', () => {
    audioPlayer.currentTime = 0;
    audioPlayer.play().catch(e => console.error("오디오 다시 재생 중 오류 발생:", e));
});

scriptButton.addEventListener('click', () => {
    let currentFile = audioFiles[currentIndex];
    let script = currentFile.replace(/\.mp3$/, '');
    script = script.replace(/^\d+_+/, '');
    script = script.replace(/_/g, ' ');

    scriptText.innerText = script;
    scriptText.style.display = scriptText.style.display === 'block' ? 'none' : 'block';
});

// 페이지가 처음 열릴 때 첫 번째 파일을 재생
playAudio(currentIndex);
