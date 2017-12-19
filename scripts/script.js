var cs = document.createElement("link");
cs.rel="stylesheet";
cs.href="/styles/quiz.css";
cs.type="text/css";
document.getElementsByTagName('head')[0].appendChild(cs);

//問題と解答
qa = new Array();
qa[0] = ["はるすぎて<br>なつきにけらし<br>しろたえの","ころもほすてふ<br>あまのかぐやま","あまりてなどか<br>ひとのこいしき","みかさのやまに<br>いでしつきかも",1];
qa[1] = ["天の原<br>ふりさけ見れば<br>春日なる","行くへも知らぬ<br>恋の道かな","三笠の山に<br>出でし月かも","夢の通ひ路<br>人めよくらむ",2];
qa[2] = ["これやこの<br>行くも帰るも<br>別れては","霧立ちのぼる<br>秋の夕暮れ","閨のひまさへ<br>つれなかりけり","知るも知らぬも<br>逢坂の関",3];
qa[3] = ["住の江の<br>岸による波<br>よるさへや","夢の通ひ路<br>人めよくらむ","霧立ちのぼる<br>秋の夕暮れ","流れもあへぬ<br>紅葉なりけり",1];
qa[4] = ["山川に<br>風のかけたる<br>しがらみは","ふりゆくものは<br>わが身なりけり","流れもあへぬ<br>紅葉なりけり","閨のひまさへ<br>つれなかりけり",2];
qa[5] = ["ひさかたの<br>光のどけき<br>春の日に","忍ぶることの<br>よわりもぞする","ふるさと寒く<br>衣うつなり","静心なく<br>花の散るらむ",3];
qa[6] = ["白露に<br>風の吹きしく<br>秋の野は","人こそ見えね<br>秋は来にけり","つらぬきとめぬ<br>玉ぞ散りける","もれ出づる月の<br>影のさやけさ",2];
qa[7] = ["浅茅生の<br>小野の篠原<br>しのぶれど","あまりてなどか<br>人の恋しき","まだふみもみず<br>天の橋立","衣ほすてふ<br>天の香具山",1];
qa[8] = ["由良のとを<br>渡る舟人<br>かぢをたえ","三笠の山に<br>出でし月かも","知るも知らぬも<br>逢坂の関","行くへも知らぬ<br>恋の道かな",3];
qa[9] = ["八重葎<br>しげれる宿の<br>さびしきに","静心なく<br>花の散るらむ","人こそ見えね<br>秋は来にけり","名こそ流れて<br>なほ聞こえけれ",2];
qa[10] = ["滝の音は<br>絶えて久しく<br>なりぬれど","名こそ流れて<br>なほ聞こえけれ","ふりゆくものは<br>わが身なりけり","ふるさと寒く<br>衣うつなり",1];
qa[11] = ["大江山<br>いく野の道の<br>遠ければ","あまりてなどか<br>人の恋しき","まだふみもみず<br>天の橋立","もれ出づる月の<br>影のさやけさ",2];
qa[12] = ["淡路島<br>かよふ千鳥の<br>鳴く声に","夢の通ひ路<br>人めよくらむ","ふるさと寒く<br>衣うつなり","いく夜寝覚めぬ<br>須磨の関守",3];
qa[13] = ["秋風に<br>たなびく雲の<br>絶え間より","もれ出づる月の<br>影のさやけさ","いく夜寝覚めぬ<br>須磨の関守","あまりてなどか<br>人の恋しき",1];
qa[14] = ["ほととぎす<br>鳴きつる方を<br>ながむれば","あまりてなどか<br>人の恋しき","ただ有明の<br>月ぞ残れる","ふりゆくものは<br>わが身なりけり",2];
qa[15] = ["村雨の<br>露もまだひぬ<br>真木の葉に","三笠の山に<br>出でし月かも","名こそ流れて<br>なほ聞こえけれ","霧立ちのぼる<br>秋の夕暮れ",3];
qa[16] = ["み吉野の<br>山の秋風<br>さ夜ふけて","三笠の山に<br>出でし月かも","ふるさと寒く<br>衣うつなり","つらぬきとめぬ<br>玉ぞ散りける",2];
qa[17] = ["花さそふ<br>嵐の庭の<br>雪ならで","ふりゆくものは<br>わが身なりけり","ふるさと寒く<br>衣うつなり","衣ほすてふ<br>天の香具山",1];
qa[18] = ["夜もすがら<br>もの思ふころは<br>明けやらで","あまりてなどか<br>人の恋しき","名こそ流れて<br>なほ聞こえけれ","閨のひまさへ<br>つれなかりけり",3];
qa[19] = ["玉の緒よ<br>絶えなば絶えね<br>ながらへば","あまりてなどか<br>人の恋しき","忍ぶることの<br>よわりもぞする","名こそ流れて<br>なほ聞こえけれ",2];



//初期設定
q_sel = 3; //選択肢の数
q_max = 5;//出題数

setReady();

//初期設定
function setReady() {
	count = 0; //問題番号
	ansers = new Array(); //解答記録
	
	//最初の問題
	quiz();
}

//問題表示
function quiz() {
	var m, s, n;
	next  = "";
	ans = "";
	document.getElementById("text_next").innerHTML = next;
	document.getElementById("text_a").innerHTML = ans;
	//問題
	rnd = Math.floor(Math.random() * qa.length); //乱数
	m = "<div class='box'><p>" + qa[rnd][0] + "</p></div>";
	document.getElementById("text_q").innerHTML = m;
	//選択肢
	s = "";
	for (n=1;n<=q_sel;n++) {
		if (qa[rnd][n] != "") {
			s += " <a href='javascript:anser( " +  n  + " )'><div class='box'><p>" + qa[rnd][n] + "</p></div></a> ";
		}
	}
	document.getElementById("text_s").innerHTML = s;
}

//解答表示
function anser(num) {
	var s;
	correct=0;
	
	s = "";
	m = "";
	tmp = qa[rnd][q_sel+1];
	document.getElementById("text_s").innerHTML = s;
	document.getElementById("text_q").innerHTML = m;
	
	//s = (count + 1) + "問目：";
	//答え合わせ
	if (num == qa[rnd][q_sel + 1]) {
		//正解
		ansers[count] = "<div class='result'>正解<br></div>";
		correct++;
	} else {
		ansers[count] = "<div class='result'>不正解<br></div>";
	}
	s +=  ansers[count] + "<div class='ans'>" + qa[rnd][0] + "<br>"+qa[rnd][tmp] +"</div>";
	document.getElementById("text_a").innerHTML = s;
	
	
	//次の問題を表示
	count++;
	if (count < q_max) {
		next = "<a href='javascript:quiz()'><div class='next'>次の問題へ</div></a>";
		document.getElementById("text_next").innerHTML = next;
		//quiz();
	} else {
		next = "<a href='javascript:result("+correct+")'><div class='next'>結果を見る</div></a>";
		document.getElementById("text_next").innerHTML = next;
		//終了
	}
}

function result(correct){
	var s;
	s = "";
	m = "";
	document.getElementById("text_a").innerHTML = s;
	document.getElementById("text_next").innerHTML = m;
	s = "成績発表";
	s += "五問中"　+ correct + "問正解";
	document.getElementById("text_q").innerHTML = s;
}
/*
		s = "<table border='2'><caption>成績発表</caption>";
		//1行目
		s += "<tr><th>問題</th>";
		for (n=0;n<qa.length;n++) {
			s += "<th>" + (n+1) + "</th>";
		}
		s += "</tr>";
		//2行目
		s += "<tr><th>成績</th>";
		for (n=0;n<qa.length;n++) {
			s += "<td>" + ansers[n] + "</td>";
		}
		s += "</tr>";
		s += "</table>";
		document.getElementById("text_q").innerHTML = s;
		//次の選択肢
		s = "【<a href='javascript:history.back()'>前のページに戻る</a>】";
		s += "【<a href='javascript:setReady()'>同じ問題を最初から</a>】";
		s += "【<a href=''>次の問題に進む</a>】";
		document.getElementById("text_s").innerHTML = s;
	}
}
*/