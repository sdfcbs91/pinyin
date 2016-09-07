﻿/*
* demo1:common.pinyin.verifyInitials(common.pinyin.makeWord('wo ai ni'),'我哎你');空格规则的全拼
* demo2:common.pinyin.verifyInitials(common.pinyin.makeInitials('wan'),'我哎你');首字母
* demo3:common.pinyin.verifyInitials1(common.pinyin.makeWord1('faker'),"发可二");全拼+首字母
*/
if (!common) {
    var common = {};
}
//搜索拼音返回汉字
common.pinyin = {}
common.pinyin.data = [["A","啊阿呵吖锕嗄腌"],["Ai","爱矮挨哎碍癌艾唉哀蔼隘埃皑呆捱嗳嫒瑷暧砹锿霭嗌"],["An","按安暗岸俺案鞍氨胺厂广谙埯揞犴庵桉铵鹌黯"],["Ang","昂肮盎"],["Ao","袄凹傲奥熬懊敖翱澳嚣坳嗷岙廒遨媪骜獒聱螯鏊鳌鏖拗"],["B","不把被百比边白本并变半帮八包蹦表别宾拨办棒抱北奔绷笔便标憋病波步吧摆班绑报倍苯甭闭鳖濒兵播补爸败般磅"],["Ba","把八吧爸拔罢跋巴芭扒坝霸叭靶笆疤耙捌茇菝岜灞钯粑鲅魃"],["Bai","百白摆败柏拜佰伯稗捭掰呗"],["Ban","半办班般拌搬版斑板伴扳扮瓣颁绊阪坂钣瘢癍舨"],["Bang","帮棒绑磅镑邦榜蚌傍梆膀谤蒡浜"],["Bao","包抱报饱保暴薄宝爆剥豹刨雹褒堡苞胞鲍炮瀑葆孢煲鸨褓趵龅"],["Bei","被北倍杯背悲备碑卑贝辈钡焙狈惫臂孛邶蓓悖碚鹎褙鐾鞴陂呗"],["Ben","本奔苯笨夯畚坌锛贲"],["Beng","蹦绷甭崩迸蚌泵嘣甏"],["Bi","比笔闭鼻碧必避逼毕臂彼鄙壁蓖币弊辟蔽毙庇敝陛毖痹秘泌匕俾芘荜荸萆薜哔狴庳愎滗濞弼妣婢嬖璧畀铋秕筚箅篦舭襞跸髀吡贲裨"],["Bian","边变便遍编辩扁贬鞭卞辨辫匾弁苄忭汴煸砭碥窆褊蝙笾鳊缏"],["Biao","表标彪膘婊杓飑飙飚镖镳瘭裱鳔骠"],["Bie","别憋鳖瘪蹩"],["Bin","宾濒摈彬斌滨傧豳缤殡膑镔髌鬓玢槟"],["Bing","并病兵冰丙饼屏秉柄炳禀邴摒槟"],["Bo","拨波播泊博伯驳玻剥薄勃菠钵搏脖帛般柏舶渤铂箔膊魄卜亳啵饽檗擘礴钹鹁簸跛踣蕃"],["Bu","不步补布部捕卜簿哺堡埠怖埔卟逋瓿晡钚钸醭"],["C","才出吃次成车长从擦查册处穿此村曾藏草侧层插柴产朝趁冲抽揣船窗吹春戳凑粗窜催错菜蚕仓操拆拆缠唱抄撤称乘"],["Ca","擦拆礤嚓"],["Cai","才菜采材财裁猜踩睬蔡彩"],["Can","蚕残掺参惨惭餐灿骖璨粲黪孱"],["Cang","藏仓沧舱苍伧"],["Cao","草操曹槽糙嘈漕螬艚"],["Ce","册侧策测厕恻"],["Cen","参岑涔"],["Ceng","曾层蹭噌"],["Ch","出吃成车长查处穿插柴产朝趁冲抽揣船窗吹春戳拆缠唱抄撤称乘尺愁床垂唇重叉差掺常超扯辰迟虫臭初传闯炊纯绰"],["Cha","查插叉茶差岔搽察茬碴诧馇汊姹杈槎檫锸镲衩刹嚓楂"],["Chai","柴拆差豺侪钗虿瘥"],["Chan","产缠掺搀阐颤铲谗蝉馋冁谄蒇廛忏潺澶羼婵骣觇蟾躔单孱禅镡"],["Chang","长唱常场厂尝肠畅昌敞倡猖偿伥鬯苌菖徜怅惝阊娼嫦昶氅鲳裳"],["Chao","朝抄超吵潮巢炒嘲剿钞怊晁耖绰焯"],["Che","车撤扯掣彻尺澈坼砗"],["Chen","趁称辰臣尘晨沉陈衬橙郴忱谌谶抻嗔宸琛榇碜龀伧"],["Cheng","成乘盛撑称城程呈诚秤惩承逞骋丞埕枨柽塍瞠铖裎蛏酲橙澄噌晟铛"],["Chi","吃尺迟池翅痴赤齿耻持斥弛驰侈炽傺墀茌叱哧啻嗤彳饬媸敕眵鸱瘛褫蚩螭笞篪豉踟魑匙坻"],["Chong","冲重虫充宠崇茺忡憧铳舂艟涌种"],["Chou","抽愁臭仇丑稠绸酬筹踌畴瞅俦惆瘳雠帱"],["Chu","出处初锄除触橱楚础储畜厨躇雏滁矗搐亍刍怵憷绌杵楮樗蜍蹰黜"],["Chuai","揣搋膪踹啜嘬"],["Chuan","穿船传串川喘椽舛遄巛氚钏舡"],["Chuang","窗床闯创疮幢怆"],["Chui","吹垂炊锤捶椎陲棰槌"],["Chun","春唇纯蠢醇淳椿莼鹑蝽"],["Chuo","戳绰辍踔龊啜"],["Ci","次此词瓷慈雌磁辞刺茨疵赐呲祠鹚糍差伺兹"],["Cong","从丛葱匆聪囱苁淙骢琮璁枞"],["Cou","凑楱辏腠"],["Cu","粗醋簇促卒蔟徂猝殂蹙酢蹴"],["Cuan","窜蹿篡攒汆撺爨镩"],["Cui","催脆摧翠崔淬衰瘁粹萃啐悴璀榱毳"],["Cun","村寸存蹲忖皴"],["Cuo","错撮搓挫措磋厝嵯脞锉矬痤鹾蹉瘥"],["D","的到地大地都对但当多带等点掉党爹顶丢动读段吨答代单道灯得第电钓跌定东斗度短队顿朵达呆蛋挡倒邓底店叼叠"],["Da","大答达打搭瘩塔耷哒怛妲褡笪靼鞑嗒沓疸"],["Dai","带代呆戴待袋逮歹贷怠傣大殆埭甙岱迨绐玳黛呔骀"],["Dan","但单蛋担弹掸胆淡丹耽旦氮诞郸惮石儋萏啖殚赕眈瘅聃箪澹疸"],["Dang","当党挡档荡谠凼菪宕砀裆铛"],["Dao","到道倒刀岛盗稻捣悼导蹈祷忉氘纛叨帱焘"],["De","的地得德底锝"],["Dei","得"],["Deng","等灯邓登澄瞪凳蹬噔嶝戥磴镫簦"],["Di","地第底低敌抵滴帝递嫡弟缔堤的涤提笛迪狄翟蒂氐籴诋谛邸荻嘀娣柢棣觌砥碲睇镝羝骶坻"],["Dia","嗲"],["Dian","点电店殿淀掂颠垫碘惦奠典佃靛滇甸坫巅玷癜癫簟踮阽钿"],["Diao","掉钓叼吊雕调刁碉凋鸟铞貂鲷铫"],["Die","爹跌叠碟蝶迭谍垤堞揲牒瓞耋蹀鲽喋"],["Ding","顶定盯订叮丁钉鼎锭仃啶玎腚碇疔耵酊町铤"],["Diu","丢铥"],["Dong","动东懂洞冻冬董栋侗恫咚岽氡胨胴硐鸫垌峒"],["Dou","都斗豆逗陡抖痘兜读蔸窦蚪篼"],["Du","读度毒渡堵独肚镀赌睹杜督都犊妒顿芏嘟渎椟牍蠹笃髑黩"],["Duan","段短断端锻缎椴煅簖"],["Dui","对队堆兑敦怼憝碓镦"],["Dun","吨顿蹲墩敦钝盾囤遁炖砘礅盹趸沌镦"],["Duo","多朵夺舵剁垛跺惰堕掇哆驮度躲咄哚沲缍铎裰踱"],["E","饿哦额鹅蛾扼俄讹阿遏峨娥恶厄鄂噩谔垩苊莪萼呃愕屙婀轭腭锇锷鹗颚鳄阏"],["Ei","诶"],["En","恩蒽摁"],["Er","而二耳儿饵尔贰洱迩珥铒鸸鲕佴"],["F","发放非飞分反饭否副法翻房份风幅防封肥芬逢扶罚番纺费粉缝浮伐犯芳肺坟蜂富乏凡方废奋丰福帆访匪愤枫负筏返"],["Fa","发法罚伐乏筏阀珐垡砝"],["Fan","反饭翻番犯凡帆返泛繁烦贩范樊藩矾钒蘩幡梵燔畈蹯蕃"],["Fang","放房防纺芳方访仿坊妨肪邡枋钫舫鲂彷"],["Fei","非飞肥费肺废匪吠沸菲诽啡狒悱淝妃绯榧腓斐扉镄痱蜚篚翡霏鲱芾"],["Fen","分份芬粉坟奋愤纷忿粪酚焚吩氛汾偾瀵棼鲼鼢玢"],["Feng","风封逢缝蜂丰枫疯冯奉讽凤峰锋烽俸酆葑唪沣砜"],["Fo","佛"],["Fou","否缶"],["Fu","副幅扶浮富福负伏付复服附俯斧赴缚拂夫父符孵敷赋辅府腐腹妇抚覆辐肤氟佛俘傅讣弗涪袱甫釜脯腑阜咐匐凫郛芙苻茯菔拊呋幞怫滏艴孚驸绂绋桴赙祓砩黻黼罘稃馥蚨蜉蝠蝮麸趺跗鲋鳆芾莩"],["G","个过给国该刚高各更光跟工赶够古挂怪关归滚改干钢搞根耕公沟股刮拐管广贵棍盖感纲告歌功狗鼓瓜乖官逛鬼果颈"],["Ga","噶胳夹嘎咖轧尬尕尜旮钆伽呷"],["Gai","该改盖概钙芥溉丐陔垓戤赅"],["Gan","赶干感敢竿甘肝柑杆赣秆坩苷尴擀泔淦澉绀橄旰矸疳酐"],["Gang","刚钢纲港缸岗杠冈肛扛罡筻戆"],["Gao","高搞告稿膏篙羔糕镐皋睾诰郜藁缟槔槁杲锆"],["Ge","个各歌割哥搁格阁隔革咯胳葛蛤戈鸽疙盖屹合铬哿圪塥嗝搿膈镉袼虼舸骼纥硌颌鬲仡"],["Gei","给"],["Gen","跟根亘茛哏艮"],["Geng","更耕颈梗耿庚羹埂哽赓绠鲠"],["Gong","工公功共弓攻宫供恭拱贡躬巩汞龚红珙肱蚣觥"],["Gou","够沟狗钩勾购构苟垢句佝诟岣遘媾缑觏彀笱篝鞲枸"],["Gu","古股鼓谷故孤箍姑顾固雇估咕骨辜沽蛊贾菇诂菰崮汩梏轱牯牿臌毂瞽罟钴锢鸪痼蛄酤觚鲴呱鹄鹘嘏"],["Gua","挂刮瓜寡剐褂卦诖胍鸹呱栝"],["Guai","怪拐乖掴"],["Guan","关管官观馆惯罐灌冠贯棺纶倌掼涫盥鹳鳏莞矜"],["Guang","光广逛咣犷桄胱"],["Gui","归贵鬼跪轨规硅桂柜龟诡闺瑰圭刽傀癸炔匦刿庋宄妫桧炅晷皈簋鲑鳜"],["Gun","滚棍辊衮绲磙鲧"],["Guo","过国果裹锅郭涡馘埚呙帼崞猓椁虢聒蜾蝈掴"],["H","和还好很红后话或换行坏回会混海横喊号喝黄黑狠恒轰厚湖户花嘿怀还慌昏活害含哈汗合恨哼哄吼呼化淮唤晃灰荤"],["Ha","哈蛤虾铪"],["Hai","还海害咳氦孩骇咳骸亥嗨胲醢"],["Han","喊含汗寒汉旱酣韩焊涵函憨翰罕撼捍憾悍邯邗菡撖瀚晗焓顸颔蚶鼾阚"],["Hang","行巷航夯杭吭沆绗颃"],["Hao","好号浩嚎壕郝毫豪耗貉镐蒿薅嗥嚆濠灏昊皓颢蚝"],["He","和喝合河禾核何呵荷贺赫褐盒鹤菏貉阂涸吓诃劾壑嗬阖曷盍翮纥颌"],["Hei","黑嘿"],["Hen","很狠恨痕"],["Heng","横恒哼衡亨行蘅桁珩"],["Hong","红轰哄虹洪宏烘鸿弘黉訇讧荭蕻薨闳泓"],["Hou","后厚吼喉侯候猴堠後逅瘊篌糇鲎骺"],["Hu","湖户呼虎壶互胡护糊弧忽狐蝴葫沪乎戏核和瑚唬冱唿囫岵猢怙惚滹琥槲轷觳烀煳戽扈祜瓠鹕鹱笏醐斛浒鹄鹘"],["Hua","话花化画华划滑哗猾豁骅桦铧砉"],["Huai","坏怀淮槐徊划踝"],["Huan","换还唤环患缓欢幻宦涣焕豢桓痪奂萑擐獾洹浣漶寰逭缳锾鲩鬟郇圜"],["Huang","黄慌晃荒簧凰皇谎惶蝗磺恍煌幌隍徨湟潢遑璜肓癀蟥篁鳇"],["Hui","回会灰绘挥汇辉毁悔惠晦徽恢秽慧贿蛔讳徊卉烩诲诙茴荟蕙咴哕喙隳洄彗缋晖恚虺蟪麾浍珲"],["Hun","混昏荤浑婚魂诨馄阍溷珲"],["Huo","或活火伙货和获祸豁霍惑劐藿攉嚯夥钬锪镬耠蠖"],["I",""],["J","就几家见将叫接及讲进九近节急既即机今仅竟句卷决军窘加件脚街紧静炯举绝君圈鸡假减江交借金井酒巨倦觉均价"],["Ji","几及急既即机鸡积记级极计挤己季寄纪系基激吉脊际击圾畸箕肌饥迹讥姬绩棘辑籍集疾汲嫉蓟技冀伎剂悸济寂忌妓继丌乩剞佶墼芨芰蒺蕺掎叽咭哜唧岌嵴洎屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠虮笈笄暨跻跽霁鲚鲫髻麂革给稽缉祭期其奇齐偈诘荠亟"],["Jia","家加假价架甲佳夹嘉驾嫁枷荚颊钾稼郏葭岬浃迦珈戛胛恝铗镓痂瘕蛱笳袈跏贾茄伽嘏"],["Jian","见件减尖间键贱肩兼建检箭煎简剪歼监坚奸健艰荐剑笺缄茧柬碱硷拣捡俭鉴践舰饯渐溅涧僭谏谫菅蒹搛囝湔蹇謇缣枧楗戋戬牮毽腱睑锏鹣裥笕翦趼踺鲣鞯槛浅"],["Jiang","将讲江奖降浆僵姜酱蒋疆匠强桨茳洚绛缰犟礓耩糨豇虹"],["Jiao","叫脚交角教较缴觉焦胶娇绞校搅骄狡浇矫郊嚼蕉椒礁铰饺酵轿窖佼僬艽茭挢噍峤徼姣敫皎鹪蛟醮跤鲛侥剿湫"],["Jie","接节街借皆截解界结届姐揭戒介阶劫芥竭洁疥秸杰捷睫藉诫讦拮喈婕孑桀碣疖蚧羯鲒骱家价桔楷偈诘嗟颉"],["Jin","进近今仅紧金斤尽劲禁浸锦晋筋津谨巾襟靳烬卺荩堇噤馑妗缙瑾槿赆觐衿廑矜"],["Jing","竟静井惊经镜京净敬精景警竞境径荆晶鲸粳颈兢茎睛痉靖刭儆阱菁獍憬泾迳弪婧肼胫腈旌劲靓"],["Jiong","窘炯迥扃"],["Jiu","就九酒旧久揪救纠舅究韭厩臼玖灸咎疚僦啾阄柩桕鸠鹫赳鬏蹴"],["Ju","句举巨局具距锯剧居聚拘菊矩沮拒惧鞠狙驹疽据踞俱炬倨讵苴莒掬遽屦琚椐榘榉橘犋飓钜锔窭裾醵踽龃雎鞫车柜桔咀且苣枸趄"],["Juan","卷圈倦鹃捐娟眷绢鄄狷涓桊蠲锩镌隽"],["Jue","决绝觉角爵掘诀撅倔抉攫嚼脚厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖嗟噱"],["Jun","军君均菌俊峻龟竣骏钧浚郡捃皲筠麇"],["K","可看靠口哭开快克空块棵宽矿亏肯捆库科卡颗阔喀揩砍孔跨抗坑炕考刻啃吭扣苦垮款筐愧困扩凯堪扛烤恳控抠挎筷"],["Ka","卡喀咯咖佧咔胩"],["Kai","开揩凯慨楷剀垲蒈忾恺铠锎锴"],["Kan","看砍堪刊嵌坎槛勘侃莰戡龛瞰阚"],["Kang","抗炕扛糠康慷亢伉闶钪"],["Kao","靠考烤拷尻栲犒铐"],["Ke","可克棵科颗刻课客壳渴苛柯磕咳坷呵嗑岢恪溘骒缂珂轲氪瞌钶锞稞疴窠颏蚵蝌髁"],["Ken","肯啃恳垦裉"],["Keng","坑吭铿"],["Kong","空孔控恐倥崆箜"],["Kou","口扣抠寇芤蔻叩眍筘"],["Ku","哭库苦枯裤窟酷刳堀喾绔骷"],["Kua","跨垮挎夸胯侉"],["Kuai","快块筷会侩蒯郐哙狯脍浍"],["Kuan","宽款髋"],["Kuang","矿筐狂框况旷匡眶诓诳邝圹夼哐纩贶"],["Kui","亏愧奎窥溃葵魁馈盔傀岿馗匮夔蒉揆喹喟愦逵暌睽聩蝰篑跬隗悝"],["Kun","捆困昆坤悃阃琨锟醌鲲髡"],["Kuo","阔扩括廓适蛞栝"],["L","了里俩拉来老另离类冷连两列林力立六龙楼路蓝了绿乱略论李落啦赖浪令兰狼例捞乐累联亮料裂临领流留拢搂露率"],["La","拉啦辣蜡腊喇垃蓝剌邋旯砬瘌落"],["Lai","来赖莱崃徕涞濑赉睐铼癞籁"],["Lan","蓝兰烂拦篮懒栏揽缆滥阑谰婪澜览岚漤榄斓罱镧褴"],["Lang","浪狼廊郎朗榔琅蒗啷阆锒稂螂莨"],["Lao","老捞牢劳烙涝落姥酪络佬唠崂栳铑铹痨耢醪潦"],["Le","了乐勒肋仂叻泐鳓"],["Lei","类累泪雷垒勒擂蕾肋镭磊儡羸诔嘞嫘缧檑耒酹"],["Leng","冷棱楞塄愣"],["Li","里离力立李例哩理利梨厘礼历丽吏犁黎篱狸漓鲤莉荔栗厉励砾傈俐痢粒沥隶璃俪俚郦坜苈莅蓠藜呖唳喱猁溧澧逦娌嫠骊缡枥轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧悝栎鬲"],["Lia","俩"],["Lian","连联练莲恋脸炼链敛怜廉帘镰涟蔹奁潋濂琏楝殓臁裢裣蠊鲢"],["Liang","两亮辆凉粮梁量良晾谅俩粱墚椋踉魉莨靓"],["Liao","了料撩聊撂疗廖燎辽僚寥镣尥嘹獠寮缭钌鹩潦蓼"],["Lie","列裂猎劣烈冽埒捩咧洌趔躐鬣"],["Lin","林临淋邻磷鳞赁吝拎琳霖凛蔺啉嶙廪懔遴檩辚膦瞵粼躏麟"],["Ling","另令领零铃玲灵岭龄凌陵菱伶羚酃苓呤囹泠绫柃棂瓴聆蛉翎鲮棱"],["Liu","六流留刘柳溜硫瘤榴琉馏浏遛骝绺旒熘锍镏鹨鎏碌陆"],["Lo","咯"],["Long","龙拢笼聋隆垄弄咙窿陇垅茏珑栊胧砻癃泷"],["Lou","楼搂漏陋露娄篓蒌喽嵝镂瘘耧蝼髅偻"],["Lu","路露录鹿陆炉卢鲁卤芦颅庐掳虏麓赂潞禄戮垆撸噜泸渌漉逯璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈六碌绿蓼"],["Luan","乱卵滦峦孪挛脔娈栾鸾銮"],["Lue","略掠锊"],["Lun","论轮抡伦沦仑纶囵"],["Luo","落罗锣裸骡烙箩螺萝洛骆逻络倮蠃荦摞猡泺珞椤脶镙瘰雒咯捋漯硌"],["Lv","绿率铝驴旅屡滤吕律氯缕侣履虑闾榈膂稆褛偻捋"],["M","没每满门某吗买慢忙妈们米面秒灭民名谬摸木卖么猛芒毛梦密棉苗冒抿明磨谋母马迈瞒帽煤闷蒙迷免庙敏命抹亩嘛"],["Ma","吗妈马嘛麻骂抹码玛蚂摩唛犸嬷蟆杩"],["Mai","买卖迈埋麦脉劢荬霾"],["Man","满慢瞒漫蛮蔓曼馒埋谩墁幔缦熳镘颟螨鳗鞔"],["Mang","忙芒盲莽茫氓邙漭硭蟒"],["Mao","毛冒帽猫矛卯貌茂贸铆锚茅袤茆峁泖昴牦耄旄懋瞀蝥蟊髦瑁"],["Me","么"],["Mei","没每煤镁美酶妹枚霉玫眉梅寐昧媒糜媚谜莓嵋猸浼湄楣镅鹛袂魅"],["Men","门们闷扪焖懑钔"],["Meng","猛梦蒙锰孟盟檬萌氓勐甍瞢懵朦礞虻蜢蠓艋艨"],["Mi","米密迷眯蜜谜觅秘弥幂靡糜泌醚芈谧蘼咪嘧猕汨宓弭脒敉糸縻麋祢"],["Mian","面棉免绵眠缅勉冕娩沔湎腼眄渑黾"],["Miao","秒苗庙妙描瞄藐渺喵邈缈杪淼眇鹋缪"],["Mie","灭蔑咩蠛篾乜"],["Min","民抿敏闽皿悯苠岷闵泯缗玟珉愍鳘黾"],["Ming","名明命鸣铭螟冥茗溟暝瞑酩"],["Miu","谬缪"],["Mo","摸磨抹末膜墨没莫默魔模摩摹漠陌蘑脉沫万无嘿冒寞谟茉蓦馍嫫殁镆秣瘼耱貊貘麽"],["Mou","某谋牟侔哞眸蛑鍪缪"],["Mu","木母亩幕目墓牧牟模穆暮牡拇募慕睦姆姥仫坶苜沐毪钼"],["N","年那你您能拿内难南牛乃耐男闹女呢嫩娘鸟捏拧弄怒暖虐挪哪哪哪奶脑泥念酿尿镍凝扭浓囊努疟那恼馁拟聂宁农奴"],["Na","那拿哪纳钠娜呐南捺肭镎衲"],["Nai","乃耐奶奈氖哪鼐艿萘柰佴"],["Nan","难南男喃囡楠腩蝻赧"],["Nang","囊攮囔馕曩"],["Nao","闹脑恼挠淖孬垴呶猱瑙硇铙蛲"],["Ne","呢哪那呐讷"],["Nei","内哪馁那"],["Nen","嫩恁"],["Neng","能"],["Ni","你泥拟腻逆呢溺倪尼匿妮霓伲坭猊怩昵旎睨铌鲵"],["Nian","年念捻撵拈碾蔫粘廿埝辇黏鲇鲶"],["Niang","娘酿"],["Niao","鸟尿茑嬲脲袅"],["Nie","捏镍聂孽涅镊啮陧蘖嗫颞臬蹑乜"],["Nin","您恁"],["Ning","拧凝宁柠狞泞佞咛甯聍"],["Niu","牛扭纽钮狃忸妞拗"],["Nong","弄浓农脓侬哝"],["Nou","耨"],["Nu","怒努奴弩胬孥驽"],["Nuan","暖"],["Nue","虐疟"],["Nuo","挪诺懦糯娜傩搦锘喏"],["Nv","女恧钕衄"],["O","哦噢喔"],["Ou","偶呕欧藕鸥区沤殴讴怄瓯耦"],["P","批跑片怕派破盘排旁篇平陪喷碰皮票瞥品剖扑爬拍盼胖抛配盆捧飘撇贫凭坡铺趴判耪炮赔棚披骗漂聘瓶颇谱脯啪牌"],["Pa","怕爬趴啪耙扒帕琶派葩杷筢"],["Pai","派排拍牌迫徘湃俳蒎哌"],["Pan","盘盼判攀畔潘叛磐番般胖拚爿泮袢襻蟠蹒"],["Pang","旁胖耪庞乓膀磅滂逄螃彷"],["Pao","跑抛炮泡刨袍咆匏狍庖脬疱"],["Pei","陪配赔呸胚佩培沛裴辔帔旆锫醅霈"],["Pen","喷盆湓"],["Peng","碰捧棚砰蓬朋彭鹏烹硼膨抨澎篷堋嘭怦蟛"],["Pi","批皮披匹劈辟坯屁脾僻疲痞霹琵毗啤譬砒否丕仳陴邳郫圮埤鼙擗噼庀淠媲纰枇甓睥罴铍癖蚍蜱貔陂吡裨"],["Pian","片篇骗偏便扁谝骈犏胼翩蹁缏"],["Piao","票飘漂瓢朴剽嘌嫖缥殍瞟螵莩骠"],["Pie","瞥撇苤氕"],["Pin","品贫聘拼频姘嫔榀牝颦"],["Ping","平凭瓶评屏乒萍苹坪冯俜娉枰鲆"],["Po","破坡颇婆泼迫泊魄朴繁粕叵鄱珀攴钋钷皤笸陂"],["Pou","剖裒掊"],["Pu","扑铺谱脯仆蒲葡朴菩曝莆瀑埔圃浦堡普匍噗溥濮璞氆镤镨蹼暴"],["Q","去起前切请全其却七钱千强取求桥且轻球区权缺群恰裙气卡枪墙瞧亲掐琴穷敲侵清琼秋劝确洽牵抢巧怯勤青丘娶圈"],["Qi","起其七气期齐器妻骑汽棋奇欺漆启戚柒岂砌弃泣祁凄企乞契歧祈栖畦脐崎稽迄缉沏讫旗亓芑芪萁萋葺蕲嘁屺岐汔淇骐绮琪琦杞桤槭耆祺憩碛颀蛴蜞綦鳍麒俟圻荠欹蹊亟"],["Qia","恰卡掐洽葜袷髂"],["Qian","前钱千牵浅签欠铅嵌钎迁钳乾谴谦潜歉纤扦遣黔堑仟倩佥阡芊芡荨掮岍悭骞搴褰缱椠犍肷愆钤虔箝茜慊"],["Qiang","强枪墙抢腔呛羌蔷将戕嫱樯戗炝锖锵镪襁蜣羟跄"],["Qiao","桥瞧敲巧翘锹壳鞘撬悄俏窍雀乔侨峭橇劁诮谯荞愀憔缲樵硗跷鞒"],["Qie","切且怯窃茄砌郄惬妾挈锲箧伽慊趄"],["Qin","亲琴侵勤擒寝秦芹沁禽钦芩揿吣嗪噙溱檎锓螓衾廑矜覃"],["Qing","请轻清青情晴氢倾庆擎顷亲卿氰苘圊檠磬蜻罄箐綮謦黥鲭"],["Qiong","穷琼邛茕穹蛩筇跫銎"],["Qiu","求球秋丘泅仇邱囚酋龟俅巯犰逑遒楸赇虬蚯裘糗鳅鼽湫蝤"],["Qu","去取区娶渠曲趋趣屈驱蛆躯龋戌诎劬蕖蘧岖衢阒璩觑氍朐祛磲鸲癯蛐蠼麴瞿黢苣"],["Quan","全权劝圈拳犬泉券颧痊醛诠荃悛绻辁畎铨蜷筌鬈"],["Que","却缺确雀瘸鹊炔榷阕阙悫"],["Qun","群裙逡麇"],["R","日人如入让热仍容扔软任若瑞润若染嚷饶惹忍燃绕肉绒揉阮蕊闰弱然瓤扰认融柔汝锐冉攘溶儒壤刃熔茹仁荣戎乳韧"],["Ran","染燃然冉苒蚺髯"],["Rang","让嚷瓤攘壤禳穰"],["Rao","饶绕扰荛娆桡"],["Re","热若惹喏"],["Ren","人任忍认刃仁韧妊纫壬仞荏饪轫稔衽葚"],["Reng","仍扔"],["Ri","日"],["Rong","容绒融溶熔荣戎蓉冗茸嵘狨榕肜蝾"],["Rou","肉揉柔糅蹂鞣"],["Ru","如入汝儒茹乳褥辱蠕孺蓐薷嚅洳溽濡缛铷襦颥"],["Ruan","软阮朊"],["Rui","瑞蕊锐芮蕤枘睿蚋"],["Run","润闰"],["Ruo","若弱偌箬"],["S","是上谁说使水十少手受三山四身书声树收刷所摔晒扫双顺送艘森塞数素撒桑色杀酸社岁孙洒散嫂涩沙僧筛栓闪伤烧"],["Sa","撒洒萨卅仨脎飒挲"],["Sai","塞腮鳃思赛噻"],["San","三散伞叁馓毵糁"],["Sang","桑丧嗓搡磉颡"],["Sao","扫嫂搔骚梢埽缫臊瘙鳋"],["Se","色涩瑟塞啬铯穑"],["Sen","森"],["Seng","僧"],["Sh","是上谁说使水十少手受山身书声树收刷摔晒双顺数杀社沙筛栓闪伤烧射伸省耍甩霜谁吮硕率色啥衫尚蛇深剩数睡瞬"],["Sha","杀沙啥纱傻砂刹莎厦煞杉唼歃铩痧裟霎鲨嗄挲"],["Shai","晒筛色酾"],["Shan","山闪衫善扇杉删煽单珊苫陕擅赡膳汕缮讪鄯埏芟潸姗嬗骟膻钐疝蟮舢跚鳝掺掸栅禅剡"],["Shang","上伤尚商赏晌墒汤裳垧绱殇熵觞"],["Shao","少烧捎哨勺梢稍邵韶绍芍劭潲筲艄鞘召苕蛸"],["She","社射蛇设舌摄舍折涉赊奢赦慑厍佘猞滠畲麝歙"],["Shei","谁"],["Shen","身伸深婶神甚渗肾审申沈绅砷呻娠慎诜谂哂渖胂矧蜃参什莘葚椹糁"],["Sheng","声省剩生升绳胜盛圣甥牲嵊眚笙乘渑晟"],["Shi","是使十时事室市石师试史式失狮施湿诗尸虱拾蚀实矢屎驶始示士世柿拭誓逝势嗜噬仕侍释饰恃视谥埘莳蓍弑轼贳炻铈螫舐筮豕鲥鲺匙什食识适氏似嘘殖峙酾"],["Shou","手受收首守瘦授兽售熟寿狩绶艏"],["Shu","书树数熟输梳叔属束术述蔬枢殊抒舒淑疏赎孰薯暑曙署蜀黍鼠戍竖墅庶漱恕倏塾菽摅沭澍姝纾毹腧殳秫"],["Shua","刷耍唰"],["Shuai","摔甩率帅衰蟀"],["Shuan","栓拴闩涮"],["Shuang","双霜爽孀泷"],["Shui","水谁睡税说"],["Shun","顺吮瞬舜"],["Shuo","说数硕烁朔蒴搠妁槊铄"],["Si","四死丝撕似私嘶思寺司斯肆嗣饲巳厮兕厶咝汜泗澌姒驷缌祀锶鸶耜蛳笥厕食伺俟"],["Song","送松耸宋颂诵怂讼凇菘崧嵩悚淞竦忪"],["Sou","艘搜擞嗽叟薮嗖嗾馊溲飕瞍锼螋"],["Su","素速诉塑宿俗苏肃粟酥僳溯夙谡蔌嗉愫涑簌觫稣缩"],["Suan","酸算蒜狻"],["Sui","岁随碎虽穗遂尿隋髓绥隧祟谇荽濉邃燧眭睢"],["Sun","孙损笋荪狲飧榫隼"],["Suo","所缩锁琐索梭蓑莎唆唢嗦嗍娑桫睃羧挲"],["T","他她它天听条提头太谈套特疼铁同土图腿推团吞躺拖抬叹趟掏腾替田跳贴停通偷屯脱台探堂逃藤体添挑帖挺痛透兔"],["Ta","他她它踏塔塌拓獭挞蹋闼溻遢榻铊趿鳎嗒漯沓"],["Tai","太抬台态胎苔泰酞汰邰薹肽炱钛跆鲐呔骀"],["Tan","谈叹探滩弹碳摊潭贪坛痰毯坦炭瘫谭坍檀袒郯昙忐钽锬澹镡覃"],["Tang","躺趟堂糖汤塘烫倘淌唐搪棠膛傥帑饧溏瑭樘铴镗耥螗螳羰醣"],["Tao","套掏逃桃讨淘涛滔陶绦萄鼗啕洮韬饕叨焘"],["Te","特忑慝铽忒"],["Tei","忒"],["Teng","疼腾藤誊滕"],["Ti","提替体题踢蹄剃剔梯锑啼涕嚏惕屉倜悌逖绨缇鹈醍荑裼"],["Tian","天田添填甜舔恬腆佃掭忝阗殄畋钿"],["Tiao","条跳挑调迢眺佻祧窕蜩笤粜龆鲦髫苕"],["Tie","铁贴帖萜餮"],["Ting","听停挺厅亭艇庭廷烃汀莛葶婷梃蜓霆町铤"],["Tong","同通痛铜桶筒捅统童彤桐瞳恫侗酮佟仝茼嗵恸潼砼垌峒"],["Tou","头偷透投钭骰"],["Tu","土图兔涂吐秃突徒凸途屠堍荼菟钍酴"],["Tuan","团湍抟彖疃"],["Tui","腿推退褪颓蜕煺忒"],["Tun","吞屯褪臀囤氽饨暾豚"],["Tuo","拖脱托妥驮拓驼椭唾鸵陀魄乇佗坨庹沱柝柁橐砣箨酡跎鼍"],["U",""],["V",""],["W","我问无为完五挖外位万望文瓦歪忘王往晚翁握碗未嗡闻瓮窝屋蛙网哇围稳卧物娃玩喂温舞洼弯胃吻挝雾凹挽亡微蚊"],["Wa","挖瓦蛙哇娃洼凹袜佤娲腽"],["Wai","外歪崴"],["Wan","完万晚碗玩弯挽湾丸腕宛婉烷顽豌惋娩皖蔓剜芄纨绾琬脘畹蜿莞菀"],["Wang","望忘王往网亡枉旺汪妄芒罔惘辋魍"],["Wei","为位未围喂胃微味尾伪威伟卫危违委魏唯维畏惟韦巍蔚谓尉潍纬慰桅萎苇渭遗偎诿隈葳薇帏帷嵬猥猬闱沩洧涠逶娓玮韪軎炜煨痿艉鲔隗圩崴"],["Wen","问文闻稳温吻蚊纹瘟紊刎阌汶璺雯"],["Weng","翁嗡瓮蓊蕹"],["Wo","我握窝卧挝沃蜗涡斡倭莴幄渥肟硪龌喔"],["Wu","无五屋物舞雾误捂污悟勿钨武戊务呜伍吴午吾侮乌毋恶诬芜巫晤梧坞兀仵阢邬圬芴唔庑怃忤浯寤迕妩婺骛杌牾焐鹉鹜痦蜈鋈鼯於"],["X","小下想向象写些新笑心性胸修西许选学寻洗吓先线行雄锈须悬雪讯细夏县消鞋欣型凶绣需旋血熏吸峡现项削歇信形"],["Xi","西洗细吸戏系喜席稀溪熄锡膝息袭惜习嘻夕悉矽熙希昔析硒晰牺烯汐犀檄媳隙僖兮隰郗菥葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧皙穸蜥螅蟋舄舾羲粞翕醯鼷腊栖铣茜歙裼蹊"],["Xia","下吓夏峡虾瞎霞狭匣侠辖厦暇唬狎遐瑕柙硖罅黠呷"],["Xian","先线县现显掀闲献嫌陷险鲜弦衔馅限咸锨仙腺贤纤宪舷涎羡冼苋莶藓岘猃暹娴氙燹祆鹇痫蚬筅籼酰跣跹见铣霰"],["Xiang","想向象项响香乡相像箱巷享镶厢降翔祥橡详湘襄芗葙饷庠骧缃蟓鲞飨"],["Xiao","小笑消削销萧效宵晓肖孝硝淆啸霄哮嚣哓崤潇逍骁绡枭枵筱箫魈校蛸"],["Xie","写些鞋歇斜血谢卸挟屑蟹泻懈泄楔邪协械谐蝎携胁解偕亵勰燮薤撷獬廨渫瀣邂绁缬榭榍躞契叶颉"],["Xin","新心欣信芯薪锌辛寻衅忻囟馨昕歆鑫莘镡"],["Xing","性行型形星醒姓腥刑杏兴幸邢猩惺省陉荇擤悻硎荥"],["Xiong","胸雄凶兄熊汹匈芎"],["Xiu","修锈绣休羞宿嗅袖秀朽臭咻岫馐庥溴鸺貅髹"],["Xu","许须需虚嘘蓄续序叙畜絮婿戌徐旭绪吁酗恤墟诩勖蓿洫溆顼栩煦盱胥糈醑圩浒砉"],["Xuan","选悬旋玄宣喧轩绚眩癣券儇谖萱揎泫渲漩璇楦暄炫煊碹铉镟痃"],["Xue","学雪血靴穴削薛泶踅鳕噱"],["Xun","寻讯熏训循殉旬巡迅驯汛逊勋荤询浚巽埙荀蕈薰峋徇獯恂洵浔曛醺鲟郇窨"],["Y","有一又也以用要因由月眼与远摇已应于云呀越烟欲药夜压样哟引硬涌员约运牙沿养咬业印影羊永鱼育元晕押盐洋腰"],["Ya","呀压牙押芽鸭轧崖哑亚涯丫雅衙鸦蚜讶伢垭揠岈迓娅琊桠氩砑睚痖疋"],["Yan","眼烟沿盐言演严咽淹炎掩厌宴岩研延堰验焉阉蜒颜阎奄衍艳燕砚雁唁彦焰谚厣赝俨偃兖谳郾鄢菸崦恹闫湮滟妍嫣琰檐晏胭焱罨筵酽魇餍鼹铅殷阽芫阏腌剡"],["Yang","样养羊洋仰扬秧氧痒杨漾阳殃央鸯佯疡徉怏泱炀烊恙蛘鞅"],["Yao","要摇药咬腰窑舀邀妖谣遥姚瑶耀尧钥侥夭爻吆崾徭幺珧杳轺曜肴鹞窈鳐疟陶约铫"],["Ye","也夜业野叶爷页液掖腋冶噎耶咽曳椰靥谒邺揶晔烨铘邪"],["Yi","一以已亿衣移依易医乙仪亦椅益倚姨翼译伊壹揖铱颐夷胰疑沂宜彝蚁矣艺抑邑役臆逸肄疫裔意毅忆义溢诣议谊异翌绎刈劓佚佾诒圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪轶贻旖熠眙钇镒镱痍瘗癔翊蜴舣羿翳酏黟艾蛾蛇食尾遗屹荑嗌欹仡"],["Yin","因引印银音饮阴隐荫吟尹寅茵淫殷姻胤鄞垠堙茚吲喑狺夤洇氤铟瘾蚓霪龈烟圻窨"],["Ying","应硬影营迎映蝇赢鹰英颖莹盈婴樱缨萤荧嬴郢茔莺萦蓥撄嘤膺滢潆瀛瑛璎楹媵鹦瘿颍罂荥"],["Yo","哟育唷"],["Yong","用涌永拥蛹勇雍咏泳佣踊痈庸臃恿俑壅墉喁慵邕镛甬鳙饔"],["You","有又由右油游幼优友铀忧尤犹诱悠邮酉佑幽釉卣攸侑莠莜莸呦囿宥柚猷牖铕疣蚰蚴蝣鱿黝鼬蝤繇"],["Yu","与于欲鱼雨余遇语愈狱玉渔予誉育愚羽迂淤盂榆虞舆俞逾愉渝隅娱屿禹宇域芋郁喻峪御浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄圄圉嵛狳饫馀庾阈鬻妪妤纡瑜昱觎腴欤煜燠聿钰鹆鹬瘐瘀窬窳蜮蝓竽臾舁雩龉谷蔚尉吁粥菀於熨"],["Yuan","远员元院圆原愿园援猿怨冤源缘袁渊苑鸳垣辕垸塬掾沅媛瑗橼爰眢鸢螈箢鼋芫圜"],["Yue","月越约跃阅乐岳悦曰说粤钥龠瀹樾刖钺栎"],["Yun","云运晕允匀韵陨孕耘蕴酝郧郓芸狁恽愠纭韫殒昀氲员熨筠"],["Z","在这着再做中只走最字作扎摘站张早找则真章正增周杂咱住抓拽重转怎这装追准捉自脏总组钻尊长砸暂葬造责赠炸"],["Za","杂砸咋匝扎咱咂拶"],["Zai","在再灾载栽宰哉崽甾"],["Zan","咱暂攒赞瓒昝簪糌趱錾拶"],["Zang","脏葬赃藏驵臧奘"],["Zao","早造遭糟灶燥枣凿躁藻澡蚤噪皂唣"],["Ze","则责择泽咋仄赜啧帻迮昃箦舴侧笮"],["Zei","贼"],["Zen","怎谮"],["Zeng","增赠憎曾综缯甑罾锃"],["Zh","这着中只扎摘站张找真章正周住抓拽重转这装追准捉长炸窄占阵整之种洲主爪专撞坠谆桌着挝渣债战帐照者镇睁直"],["Zha","扎炸渣闸眨榨乍轧诈喳札铡揸吒咤哳猹砟痄蚱齄查蜡栅咋喋楂柞"],["Zhai","摘窄债斋寨择翟宅侧砦瘵祭"],["Zhan","站占战盏沾粘毡展瞻詹斩辗崭蘸栈湛绽谵搌旃颤"],["Zhang","张章长帐仗丈掌涨樟彰漳杖账胀瘴障仉鄣幛嶂獐嫜璋蟑"],["Zhao","找着照招罩爪兆朝昭沼赵肇诏棹钊笊嘲召啁"],["Zhe","着这者折遮蛰哲蔗辙锗浙谪摺柘辄磔鹧褶蜇赭"],["Zhei","这"],["Zhen","真阵镇针震枕振斟珍甄砧臻贞侦疹诊圳蓁浈缜桢榛轸赈胗朕祯畛稹鸩箴椹"],["Zheng","正整睁争挣征怔证蒸狰拯政帧症郑诤峥徵钲铮筝丁鲭"],["Zhi","只之直知制指纸支芝枝蜘肢脂汁织职植执值侄址止趾旨志挚掷至致置帜智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾贽胝膣祉黹雉鸷痣蛭絷酯跖踬踯豸觯识氏吱殖峙祗"],["Zhong","中重种钟肿众终盅忠衷仲冢锺螽舯踵忪"],["Zhou","周洲皱粥州轴舟昼诌肘帚咒宙骤荮妯纣绉胄碡籀酎啁繇"],["Zhu","住主猪竹株煮筑著珠蛛朱诸诛逐烛拄瞩嘱柱助蛀贮铸注祝驻伫侏邾苎茱洙渚潴杼槠橥炷铢疰瘃褚竺箸舳翥躅麈属术"],["Zhua","抓爪挝"],["Zhuai","拽转"],["Zhuan","转专砖赚传撰篆啭馔颛沌"],["Zhuang","装撞庄壮桩状幢妆僮奘戆"],["Zhui","追坠缀锥赘椎惴骓缒隹"],["Zhun","准谆屯肫窀"],["Zhuo","捉桌着啄拙灼浊卓茁酌倬诼擢浞涿濯禚斫镯缴琢焯"],["Zi","字自子紫籽资姿吱咨滋淄孜仔滓渍谘茈嵫姊孳缁梓辎赀恣眦锱秭耔笫粢趑訾龇鲻髭兹觜"],["Zong","总纵宗棕综踪鬃偬腙粽枞"],["Zou","走揍奏邹诹陬鄹驺鲰"],["Zu","组族足阻租祖诅俎菹镞卒"],["Zuan","钻纂赚攥缵躜"],["Zui","最嘴醉罪堆咀蕞觜"],["Zun","尊遵撙樽鳟"],["Zuo","做作坐左座昨凿佐阼唑怍胙祚撮琢嘬笮酢柞"]];
//暂时先这样得出拼音的词语
common.pinyin.words = function () {
    var d = common.pinyin.data;
    var temp = [];
    for (var i = 0; i < d.length; i++) {
        temp.push(d[i][0].toLocaleLowerCase());
    }
    return temp;
} ();
//首字母搜索  根据拼音的每个首字母获取对应的数组
/*
*参数:搜索的字符串拼音
*返回:对应的中文数组
*/
common.pinyin.makeInitials = function (str) {
    if (!str) return [];
    var s = str.replace(/\W/g, ""), p = common.pinyin.data, re = [];
    if (s.length < 1) {
        return re;
    }
    s = s.toUpperCase();
    for (var i = 0; i < s.length; i++) {
        var str = "";
        for (var j = 0; j < p.length; j++) {
            if (p[j][0][0] === s[i]) {
                str += p[j][0] + p[j][1];
            }
        }
        re.push(str);
    }
    return re;
}

//全拼搜索    根据拼音的整体字符串获取对应的数组 输入规则:空格区分
/*
*参数:搜索的字符串拼音
*返回:对应的中文数组
*/
common.pinyin.makeWord = function(str) {
    if (!str) return [];
    var strArr = str.split(" "),p = common.pinyin.data, re = [], start = 0;

    var matchArr = function (str) {
        if (!str) return [];
        var str = str.replace(/\W/g, "");
        if (str.length < 1) return [];
        var s = str[0].toUpperCase() + str.substring(1).toLowerCase();
        var re = '';
        //全拼模糊匹配
        for (var i = 0; i < p.length; i++) {
            if (p[i][0].indexOf(s)>-1) {
                re +=p[i][1];
            }
        }
        
        return re;
        
        
    }
    if (strArr.length < 1) {
        return '';
    }
    for (var i = 0; i < strArr.length; i++) {
        var temp = matchArr(strArr[i]);
        if (temp.length > 0) {
            re.push(temp);
        }
    }
    return re;
}

//全拼+首字母搜索    根据拼音的整体字符串获取对应的数组(makeWord加强版) 无需空格区分,全匹配
common.pinyin.makeWord1 = function (str) {
    if (!str) return [];
    str = str.replace(/\s+/g, '');
    var self = this;
    var words = this.words;
    var re = []; //二维数组
    var json = { child: [] };
    var setJsonTree = function (str, arr) {
        for (var i = 0; i < words.length; i++) {
            if (new RegExp("^" + words[i]).test(str)) {
                var t = { key: words[i], child: [] };
                arr.push(t);
                var ctr = str.substring(words[i].length, str.length);
                if (ctr.length > 0) {
                    setJsonTree(ctr, t.child);
                }

            }
        }
    }

    var setArrToA2 = function (json, arr, treestr) {
        var temp = "";
        if (treestr) {
            temp = treestr;
        }
        //拼凑成一个路径形式的字符串
        if (json.key) {
            temp += "." + json.key;
        }
        if (json.child.length < 1) {
            //把该字符串拆分成数组,并放到一维数组里面
            var r = temp.substring(1, temp.length).split('.');
            //获得对应的中文数组
            var rCh = function (d) {
                var rs = [];
                for (var j = 0; j < r.length; j++) {
                    for (var i = 0; i < d.length; i++) {
                        if (d[i][0].toLocaleLowerCase() === r[j]) {
                            //return d[i][1];
                            rs.push(d[i][1]);
                            break;
                        }
                    }
                }
                return rs;
            } (self.data);
            arr.push(rCh);
        }
        for (var i = 0; i < json.child.length; i++) {
            setArrToA2(json.child[i], arr, temp);
        }

    }

    setJsonTree(str, json.child);

    setArrToA2(json, re);

    return re;
}
//按顺序的 汉字数组匹配指定汉字 基于verifyInitials
/*
*参数:汉字2维数组,指定汉字
*返回:true/false
*/
common.pinyin.verifyInitials1 = function (arrd2, str) {
    for (var i = 0; i < arrd2.length; i++) {
        if (this.verifyInitials(arrd2[i], str)) {
            return true;
        }
    }
    return false;
}

//按顺序的 汉字数组匹配指定汉字
/*
*参数:汉字数组,指定汉字
*返回:true/false
*/
common.pinyin.verifyInitials = function (arr, str) {
    if (!arr || !str) return false;
    if (arr.length < 1) return false;
    var temp = "", num = 0, str = str.toLowerCase();

    var funstr = function (val, n) {
        //汉字集合数组
        var valWArr = val.split(/\w+/g),
        //单词集合数组
            valwArr = val.match(/\w+/g),
            reW = -1,
            rew = -1;

        if (valWArr) {
            var val = '';
            for (var i = 0; i < valWArr.length; i++) {
                val += valWArr[i];
            }
            for (var j = n; j < str.length; j++) {
                if (val.indexOf(str[j]) > -1) {
                    
                    reW = j;
                    break;
                }
            }
        }
        if (valwArr) {
            for (var i = 0; i < valwArr.length; i++) {
                var val = valwArr[i];
                for (var j = n; j < str.length; j++) {
                    if (val === str[j]) {
                        
                        rew = j;
                        break;
                    }
                }
            }
        }
        if (rew !== -1 && reW !== -1) {
            if (rew > reW) {
                return reW;
            } else {
                return rew;
            }
        } else if (rew !== -1 ) {
            return rew;
        } else if (reW !== -1) {
            return reW;
        } 
        return -1;
        
    };

    for (var i = 0; i < arr.length; i++) {
        var t = funstr(arr[i].toLowerCase(), num);
        if (t === -1) {
            return false;
        } else {
                
            num = t + 1;
            if (num >= str.length) {
                if (arr.length - 1 === i) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    
    return true;
}

/*去除字符串开始与结束的字符*/
if (!String.prototype.trim) {
    
    String.prototype.trim = function (c) {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
} 

//全拼搜索2 -- 反向拼凑
/*
*把结果中的中文反译成拼音的全拼
*参数:[搜索时输入的英文拼音][被匹配的结果字符串]
*返回:true/false
*/
common.pinyin.makeWord2 = function (ens, cns) {
    if (arguments.length < 2) return false;
    //去除非中文的内容
    cns = cns.replace(/[^\u4e00-\u9fa5]/gi, '');
    if (cns.length < 1) return false;
    var p = common.pinyin.data,
        alones = ['A', 'O', 'E'],
        res = [[]];

    for (var i = 0; i < cns.length; i++) {
        var bool = false;
        for (var j = 0; j < p.length; j++) {
            if (p[j][1].indexOf(cns[i]) > -1) {
                if (p[j][0].length === 1) {
                    for (var x = 0; x < alones.length; x++) {
                        if (alones[x] === p[j][0]) {
                            //如果出现同音字,开辟新的数组
                            if (bool) {
                                var len = res.length;
                                for (var y = 0; y < len; y++) {
                                    res.push(res[y].slice(0, res[y].length - 1));
                                    res[res.length - 1].push(p[j][0]);
                                }
                            } else {
                                for (var y = 0; y < res.length; y++) {
                                    res[y].push(p[j][0]);
                                }
                            }
                            bool = true;
                        }
                    }
                } else {
                    //如果出现同音字,开辟新的数组
                    if (bool) {
                        var len = res.length;
                        for (var y = 0; y < len; y++) {
                            res.push(res[y].slice(0, res[y].length - 1));
                            res[res.length - 1].push(p[j][0]);
                        }
                    } else {
                        for (var y = 0; y < res.length; y++) {
                            res[y].push(p[j][0]);
                        }
                    }
                    bool = true;
                }
            }
        }
        
    }
    var temp = [];
    for (var i = 0; i < res.length; i++) {
        var str = '';
        for (var j = 0; j < res[i].length;j++){
            str += res[i][j];
        }
        temp.push(str);
    }
    var bl = false;
    ens = ens.toLocaleUpperCase();
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].toLocaleUpperCase().indexOf(ens) > -1) {
            bl = true;
            break;
        }
    }
    return bl;
    
}