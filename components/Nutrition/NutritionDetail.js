import React, { Component, PropTypes } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import { Header, Tabs, Tab } from 'native-base';
import Dimensions from 'Dimensions';
const menuImage = require('../../images/icons/menu.png');
import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity

} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import Menu from '../Shared/Menu';
import SideMenuu from 'react-native-side-menu';
export default class NutritionDetail extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.props = props;
        this.state = {
            isOpen: false,
            selectedItem: ' ',
            bgImage: ' ',
        };


    }

    renderData() {
        switch (this.props.setData) {
            case 1:
                return (
                    <Wallpaper source={require('../../images/tabsBackground.jpg')}>

                        <ScrollView style={styles.viewStyle} contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustContentInsets={false}>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }} >
                                <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}> KİLO ALMA BESLENME LİSTESİ </Text>{"\n"}{"\n"}
                                Sabah 08:00{"\n"}

                                3 Yumurta 1 Sarısı{"\n"}
                                Domates, Salatalık, Zeytin, Peynir, 3 Dilim Tahıllı Ekmek{"\n"}
                                1 Bardak Süt{"\n"}
                                {"\n"}
                                Ara 10:00{"\n"}
                                Yer Fıstığı 2 Avuç{"\n"}
                                Veya{"\n"}
                                2 Avuç Beyaz Leblebi{"\n"}
                                Kahve, Çay, Soda, Kefir Sınırsız{"\n"}
                                {"\n"}
                                Öğlen 12:30{"\n"}
                                120 gr Et, Balık, Tavuk (göğüs){"\n"}
                                1 Tabak Pilav veya Tahıllı Makarna{"\n"}
                                Salata{"\n"}
                                2 Top Haşlama Brokoli{"\n"}
                                2 Dilim Tahıllı Ekmek{"\n"}
                                {"\n"}
                                Ara 15:30{"\n"}
                                Fıstık Ezmesi 1 Dilim Ekmek Üzerine{"\n"}
                                veya{"\n"}
                                1 Yeşil Elma veya Ananas{"\n"}
                                {"\n"}
                                Akşam 19:30{"\n"}
                                100 gr. Et, Balık, Tavuk (tercihen){"\n"}
                                Sebze Yemeği 1 Tabak{"\n"}
                                Salata{"\n"}
                                1 Kase Yoğurt{"\n"}
                                4 Yemek Kaşığı Bulgur{"\n"}
                                {"\n"}
                                22:00{"\n"}
                                3 Kaşık Lor{"\n"}
                                Veya{"\n"}
                                1 Avuç Beyaz Leblebi{"\n"}{"\n"}{"\n"}
                            </Text>
                        </ScrollView>

                    </Wallpaper>
                );
                break;

            case 2:
                return (

                    <Wallpaper source={require('../../images/Detox.jpg')}>

                        <ScrollView style={styles.viewStyle} contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustContentInsets={false}>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }} >
                                <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}> DETOX </Text>{"\n"}
                                {"\n"}


                                {"\n"}   Sindirim sistemini dinlendirip,enerjiyi vücudun toksin atarak iyileşme süreci için kullanılıyor.{"\n"}

                                1.Gün{"\n"}
                                {"\n"}
                                Kahvaltı{"\n"}
                                Süper Yeşil Juice{"\n"}
                                Uyanınca limonlu ılık su içiniz. Sonra da green juice tüketiniz.{"\n"}
                                •	Büyük miktarda salatalık{"\n"}
                                •	1 armut{"\n"}
                                •	1 avuç ıspanak{"\n"}
                                •	1 tutam maydonaz{"\n"}
                                •	1/2 limon suyu{"\n"}
                                •	1/2 çay kaşığı rendelenmiş zencefil{"\n"}
                                Gün Arası{"\n"}
                                Lezzetli Hindistan Cevizli Smoothie{"\n"}
                                Malzemleri blenderdan geçirin afiyetle içiniz.{"\n"}
                                •	1 yemek kaşığı chia tohumu{"\n"}
                                •	250 ml hindistan cevizi sütü{"\n"}
                                •	1 avuç ahududu veya böğürtlen{"\n"}
                                •	1 adet muz{"\n"}
                                Dilerseniz ahududu yerine yarım elma da kullanabilirsiniz.{"\n"}
                                Öğle{"\n"}
                                Domates Çorbası (3 porsiyon){"\n"}
                                •	4 adet domates{"\n"}
                                •	5 adet lahana yaprağı{"\n"}
                                •	1 adet kırmızı biber{"\n"}
                                •	1 yemek kaşığı yulaf{"\n"}
                                •	3-4 fesleğen yaprağı{"\n"}
                                •	1 lt su{"\n"}
                                •	Yarım çay kaşığı tuz{"\n"}
                                Tüm sebzeleri  küçük parçalar halinde doğrayın. Bir tavada suyunu salana dek pişirin. Yulafı ekledikten sonra 3-5 dakika pişirin ve tencereye alarak üzerine 1 lt su ekleyin. Kaynayana kadar karıştırın. Dilediğiniz gibi tuz, karabiber ve fesleğen yaprağı ilave edin. Bu tariften 3 porsiyon çıkmaktadır.{"\n"}
                                Akşam{"\n"}
                                Somon  Ve Yeşil Salata{"\n"}
                                •	1 dilim somon{"\n"}
                                •	1 yemek kaşığı zeytinyağı{"\n"}
                                •	1/2 limon suyu{"\n"}
                                •	Tuz{"\n"}
                                •	Karabiber{"\n"}
                                1 Dilim somona 1 yemek kaşığı zeytinyağı ile tuz ,karabiber ve ½ limon suyu ekleyerek fırında pişiriniz.Yanında istediğiniz kadar yeşil salata tüketebilirsiniz. Salatada sadece 1 yemek kaşığı zeytinyağı ve limon suyu kullanınız.{"\n"}
                                {"\n"}
                                2.Gün{"\n"}
                                Kahvaltı{"\n"}
                                Dengeleyici Green Juice{"\n"}
                                Güne limonlu ılık su ile başlayın ve sonra aşağıda sıralanmış malzemelerle yapılan green juice tüketin.{"\n"}
                                •	1 elma{"\n"}
                                •	2 yaprak marul{"\n"}
                                •	1 parmak kalınlığında ananas{"\n"}
                                •	4 dal kereviz  sapı{"\n"}
                                •	1 salatalık{"\n"}
                                •	1/2  limon suyu{"\n"}
                                •	1 tutam nane yaprağı{"\n"}
                                {"\n"}
                                Gün Arası{"\n"}
                                Fıstık Ve Çilekli Smoothie{"\n"}
                                •	1 yemek kaşığı kaju veya badem{"\n"}
                                •	250 ml badem sütü veya hindistan cevizi sütü{"\n"}
                                •	2 avuç çilek{"\n"}
                                Hepsini beraber blenderdan geçirin.{"\n"}
                                {"\n"}
                                Öğle{"\n"}
                                Metabolizmayı hızlandırıcı ve yağ yakıcı özelliği olan Kabak Çorbası{"\n"}
                                •	1 adet büyük kabak{"\n"}
                                •	2 adet kırmızı soğan{"\n"}
                                •	2 adet domates{"\n"}
                                •	1 adet papaya biber{"\n"}
                                •	1 yemek kaşığı zeytinyağı{"\n"}
                                •	5-6 yaprak maydanoz{"\n"}
                                •	600 ml su{"\n"}
                                Tüm sebzeleri küçük parçalar haline gelecek şekilde doğrayın. Bir tencereye zeytinyağı ekleyin ve sebzeleri  kısa bir süre kavurun.Daha sonra suyu ilave edin ve kaynayıncaya kadar karıştırın. En son maydanozları ekleyin. 2 kase kadar tüketebilirsiniz.{"\n"}
                                {"\n"}
                                Akşam{"\n"}
                                Protein Bombası Tofu{"\n"}
                                •	100gr tofu{"\n"}
                                •	1 yemek kaşığı hindistan cevizi yağı{"\n"}
                                •	1 kırmızı soğan{"\n"}
                                •	1 diş sarımsak{"\n"}
                                •	100 gr mısır{"\n"}
                                •	100 gr bezelye{"\n"}
                                •	1 yeşil biber{"\n"}
                                •	1 kırmızı biber{"\n"}
                                •	1 yemek kaşığı tuzsuz soya sosu{"\n"}
                                Küp küp doğradığınız malzemeleri tavada orta ateşte zeytinyağı ile kızartabilirsiniz. Dilediğiniz gibi tuz, karabiber,ve pul biber ekleyebilirsiz.{"\n"}
                                {"\n"}
                                3.Gün{"\n"}
                                {"\n"}
                                Kahvaltı{"\n"}
                                Canlandırıcı Green  Juice{"\n"}
                                Güne limonlu ılık su içerek başladıktan sonra aşağıdaki malzemeleri blenderdan geçirerek elde ettiğiniz green juice içebilirsiniz.{"\n"}
                                •	1 kaşık avakado{"\n"}
                                •	1 portakalın suyu{"\n"}
                                •	1/2 limon suyu{"\n"}
                                •	2 adet salatalık{"\n"}
                                •	1 avuç maydanoz{"\n"}
                                •	1 avuç ıspanak{"\n"}
                                Gün Arası{"\n"}
                                Tropikal Smoothie{"\n"}
                                Malzemeleri blenderda karıştırın.{"\n"}
                                •	1 yemek kaşığı fındık ve badem karışımı{"\n"}
                                •	250 ml hindistan cevizi sütü{"\n"}
                                •	1 avuç dilimlenmiş ananas{"\n"}
                                •	1 avuç çilek{"\n"}
                                Öğle{"\n"}
                                Havuç Çorbası{"\n"}
                                •	4 adet havuç{"\n"}
                                •	1/2 demet dereotu{"\n"}
                                •	1 tane yumurta{"\n"}
                                •	3 diş kadar sarımsak{"\n"}
                                •	1 bardak az yağlı süt{"\n"}
                                •	1 lt su{"\n"}
                                •	2 yemek kaşığı tam buğday unu{"\n"}
                                •	1 tutam tuz ve karabiber{"\n"}
                                Hvuçların kabuğunu soyduktan sonra rendeleyiniz ve az miktarda zeytinyağı ile kavurun. İnce rendelenmiş sarımsakları  ekleyerek kavurmaya devam edin. Ardından üzerine suyu ekleyip  kaynamaya bırakın. 2 kaşık tam buğday ununu ve yumurta sarısını sütün içine ekleyip  çırpın ve çorbaya ekleyin. Baharatları ,tuzu ve en son dereotunu çorbanın üzerine ekleyin.{"\n"}
                                Akşam{"\n"}
                                Dil Balığı{"\n"}
                                •	1 dilim dil balığı{"\n"}
                                •	2 yemek kaşığı zeytinyağı{"\n"}
                                •	Az miktarda dereotu{"\n"}
                                •	3-4 damla limon suyu{"\n"}
                                •	1 çay kaşığından az miktarda hardal{"\n"}
                                •	1 adet kırmızı biber{"\n"}
                                •	Karabiber,tuz{"\n"}
                                Zeytinyağı, rendelenmiş sarımsak,tuz,karabiber,hardal,limon suyu ve ince kıyılmış dereotunu iyice karıştırın.Dil balığını yağlı kağıdın üzerine serdikten sonra zeytinyağlı karışımı sürün.Kırmızı biber dilimlerini de balığın kenarına dizdikten sonra 190 derecede, önceden ısıtılmış fırına atın. 20-25 dakika pişirdikten sonra  1 kase ıspanak sote ile tüketebilirsiniz.{"\n"}
                                {"\n"}
                                {"\n"}
                                3.Gün{"\n"}
                                {"\n"}
                                Kahvaltı (540 Kalori){"\n"}
                                Vanilyalı Protein Smoothie{"\n"}
                                •	1-2 yemek kaşığı chia tohumu{"\n"}
                                •	1/2  bardak hindistan cevizi sütü (115g){"\n"}
                                •	1/4 bardak sade veya vanilyalı protein tozu{"\n"}
                                •	1 yemek kaşığı hindistan cevizi yağı{"\n"}
                                •	1 yemek kaşığı vanilya ekstresi{"\n"}
                                •	1/4 kap su+1/2 kap buz{"\n"}
                                Hepsini blenderdan 5 dakika geçirdikten sonra,içmeye hazırdır.{"\n"}
                                Ara Öğün (155 kalori){"\n"}
                                1 adet haşlanmış yumurta ve matcha veya yeşil çay{"\n"}
                                Öğle (550 kalori){"\n"}
                                Mozzarella Salatası{"\n"}
                                Ara Öğün (100 kalori){"\n"}
                                Yarım elma ve 1 yemek kaşığı fıstık ezmesi{"\n"}
                                Akşam (375 kalori){"\n"}
                                Pestolu Yumurta Muffin (3 Adet){"\n"}
                                {"\n"}
                                4. Gün{"\n"}
                                Kahvaltı{"\n"}
                                Ispanaklı ve kekikli omlet yanında 5 cherry domates ve matcha çayı ile birlikte.{"\n"}
                                Ara Öğün (110 Kalori){"\n"}
                                2 dilim ananas{"\n"}
                                Öğle (250 kalori){"\n"}
                                2 adet pestolu yumurta muffin{"\n"}
                                Ara Öğün (250 kalori){"\n"}
                                1 bardak kefir veya 1 kap probiyotik yoğurt{"\n"}
                                Akşam (380 kalori){"\n"}
                                Greek Salata{"\n"}
                                •	1 orta boy domates{"\n"}
                                •	1 salatalık{"\n"}
                                •	1 yeşil biber{"\n"}
                                •	1 küçük kırmızı biber{"\n"}
                                •	5 adet siyah zeytin{"\n"}
                                •	50g tuzsuz beyaz peynir{"\n"}
                                •	2 yemek kaşığı zeytinyağı{"\n"}
                                •	1 dilim kızarmış tam tahıllı ekmek{"\n"}
                                {"\n"}
                                5.Gün{"\n"}
                                {"\n"}
                                Kahvaltı (570 kalori){"\n"}
                                Çikolatalı Chia Smoothie{"\n"}
                                Ara Öğün (100 kalori){"\n"}
                                10 adet badem{"\n"}
                                Öğle (420 kalori){"\n"}
                                Avakado Ve Yumurta Salatası{"\n"}
                                •	2 yumurta{"\n"}
                                •	1/2 avakado{"\n"}
                                •	2 kase karışık marul ve roka (120 g){"\n"}
                                •	1/4 bardak mayonez{"\n"}
                                •	1 yemek kaşığı zeytinyağı{"\n"}
                                Mayonez ve zeytinyağı ile karıştırdığınız salatanın üzerine avakadoyu dilimleyin.Kaynattığınız yumurtaları da yanına yerleştirerek üzerine dilediğiniz gibi baharat serpiştirebilirsiniz.{"\n"}
                                Ara Öğün (30 kalori){"\n"}
                                1 şeftali{"\n"}
                                Akşam (450 kalori){"\n"}
                                Zeytinyağlı  Enginar Yemeği{"\n"}
                                6 kaşık 1 porsiyondur. Yanında 1 kase yağsız yoğurt ile tüketebilirsiniz.{"\n"}
                                {"\n"}
                                6.Gün{"\n"}
                                Kahvaltı (240 kalori){"\n"}
                                Kuru Meyveli Yulaf Ezmesi{"\n"}
                                •	4 yemek kaşığı yulaf ezmesi{"\n"}
                                •	1,5 bardak yağsız süt,badem sütü veya hindistan cevizi sütü{"\n"}
                                •	1 adet küp şeklinde dilimlenmiş kuru incir{"\n"}
                                •	2 adet küp şeklinde dilimlenmiş kuru kayısı{"\n"}
                                Yulafı tercih ettiğiniz süt ile pişirdikten sonra kuru meyveleri ekleyin. Dilerseniz üzerine 1 çay kaşığı tarçın serpebilirsiniz.Filtre kahve ile önerilir.{"\n"}
                                Ara öğün ( 155 kalori){"\n"}
                                1muz + 1 yemek kaşığı fıstık ezmesi{"\n"}
                                Öğle (420 kalori){"\n"}
                                Mercimek yemeği (6 kaşık) + 1 kase yağsız yoğurt  veya 1 bardak ayran{"\n"}
                                Ara Öğün (85 kalori){"\n"}
                                2 tam ceviz +1 hurma{"\n"}
                                Akşam (640 kalori){"\n"}
                                5 Kaşık Patates Püresi  Ve Sebze Sote{"\n"}
                                •	1 küçük patates (püre için){"\n"}
                                •	1/4 kap mantar{"\n"}
                                •	1/4 küp doğranmış biber{"\n"}
                                •	1/4 domates{"\n"}
                                •	1/2 kap ıspanak{"\n"}
                                Zeytinyağında sebzeleri  sote yaparak patates püresinin yanında tüketebilirsiniz.{"\n"}
                                {"\n"}
                                7.Gün{"\n"}
                                Kahvaltı (350 kalori){"\n"}
                                •	2 kaynatılmış yumurta{"\n"}
                                •	5 zeytin{"\n"}
                                •	1/2 avakado{"\n"}
                                •	5 cherry domates{"\n"}
                                •	1 dilim kızarmış tam tahıllı veya ekşi maya ekmeği{"\n"}
                                •	Yeşil çay ile birlikte{"\n"}
                                Ara Öğün (75 kalori){"\n"}
                                1 bardak kefir veya 1 kap probiyotik yoğurt{"\n"}
                                Öğle (610 kalori){"\n"}
                                VEJETARYEN Burger{"\n"}
                                •	2 mantar 70 gr{"\n"}
                                •	1 yemek kaşığı zeytinyağı{"\n"}
                                •	1/2 diş sarımsak{"\n"}
                                •	Tam tahıllı hamburger ekmeği{"\n"}
                                •	1 yemek kaşığı mayonez{"\n"}
                                •	1 yumurta{"\n"}
                                •	1 dilim Amerika peyniri{"\n"}
                                •	1 yaprak marul{"\n"}
                                Zeytinyağı,sarımsak, tuz ve karabiber ile pişirdiğiniz mantar ve yumurtayı kızarmış ekmeğin üzerine yerleştirin. Ekmeğe mayonez sürün. Marul ve peyniride ekleyerek yemeye hazır hale getiriniz.{"\n"}
                                Ara Öğün (45 kalori){"\n"}
                                1 elma +yeşil çay{"\n"}
                                Akşam (370 kalori){"\n"}
                                Ispanak Yemeği (6 kaşık) +1 kase yağsız yoğurt ile tüketin.{"\n"}
                                {"\n"}
                                8.Gün{"\n"}
                                {"\n"}
                                Kahvaltı (540 kalori){"\n"}
                                Vanilyalı Smoothie{"\n"}
                                Ara Öğün{"\n"}
                                1 adet haşlanmış yumurta +yeşil çay{"\n"}
                                Öğle (450 kalori){"\n"}
                                Avakadolu Yumurta{"\n"}
                                Ara Öğün (175 kalori){"\n"}
                                2 tam ceviz ve 2 küp bitter çikolata{"\n"}
                                {"\n"}
                                Akşam (450 kalori){"\n"}
                                Mercimekli Bulgur Pilavı{"\n"}
                                İstediğiniz sebzeleri ekleyebilirsiniz. 6 kaşık tüketiniz. Yanında 1 kase yoğurt ile tüketebilirsiniz.{"\n"}
                                {"\n"}
                                9.Gün{"\n"}
                                Kahvaltı (450 kalori){"\n"}
                                •	1 adet yumurta{"\n"}
                                •	1/2 avakado{"\n"}
                                •	1 kap ıspanak{"\n"}
                                •	1 kap mantar sote{"\n"}
                                •	3o g beyaz peynir{"\n"}
                                Ara Öğün (75 kalori){"\n"}
                                1 kap probiyotik yoğurt{"\n"}
                                Öğle (250 kalori){"\n"}
                                Mercimek çorbası +1 dilim kızarmış tam tahıllı ekmek{"\n"}
                                Ara Öğün (210 kalori){"\n"}
                                1 muz+1 yemek kaşığı fıstık ezmesi{"\n"}
                                Akşam (640 kalori){"\n"}
                                Patates Püresi ve Sebze Sote{"\n"}
                                •	1/2 kap kabak{"\n"}
                                •	1/4  kap havuç{"\n"}
                                •	1/4 kap mantar{"\n"}
                                •	1/4 kap biber{"\n"}
                                •	2 yemek kaşığı tuzsuz soya sosu{"\n"}
                                Sebzeleri  soya sosunda soteledikten sonra  5 kaşık patates püresinin üzerine yerleştiriniz.{"\n"}
                                10.Gün{"\n"}
                                Kahvaltı (360 kalori){"\n"}
                                Ispanaklı Ve Çökelekli Omlet{"\n"}
                                Ara öğün{"\n"}
                                1 elma{"\n"}
                                Öğle (450 kalori){"\n"}
                                •	Mercimekli bulgur pilavı{"\n"}
                                •	1 kase yağsız yoğurt{"\n"}
                                Ara Öğün (75 kalori){"\n"}
                                3 tam ceviz +yeşil çay{"\n"}
                                Akşam (450 kalori){"\n"}
                                •	1 adet yumurta{"\n"}
                                •	1/2 avakado{"\n"}
                                •	1 kap ıspanak ve{"\n"}
                                •	1 kap mantar sote{"\n"}
                                •	30 g beyaz peynir{"\n"}
                                {"\n"}
                                11.Gün{"\n"}
                                {"\n"}
                                Kahvaltı (570 kalori){"\n"}
                                Çikolatalı Smoothie{"\n"}
                                Ara öğün (60 kalori){"\n"}
                                7 adet badem{"\n"}
                                Öğle (380 kalori){"\n"}
                                Greek Salata +1 dilim kızarmış ekmek{"\n"}
                                Ara Öğün (75 kalori){"\n"}
                                1 bardak kefir veya 1 kap probiyotik yoğurt{"\n"}
                                Akşam (250 kalori){"\n"}
                                Mercimek çorbası +1 kase yağsız yoğurt{"\n"}
                                {"\n"}
                                12. Gün{"\n"}
                                {"\n"}
                                Kahvaltı (260 kalori){"\n"}
                                Kuru meyveli  yulaf ezmesi +filtre kahve{"\n"}
                                Ara Öğün (210 kalori){"\n"}
                                1 muz +1 yemek kaşığı fıstık ezmesi{"\n"}
                                Öğle (550 kalori){"\n"}
                                Mozzarella Salatası{"\n"}
                                Ara Öğün (120 kalori){"\n"}
                                1 şeftali +5 adet kavrulmamış badem{"\n"}
                                Akşam (375 kalori){"\n"}
                                Pestolu Yumurta Muffin (3 adet){"\n"}
                                {"\n"}
                                13. Gün{"\n"}
                                Kahvaltı (370 kalori){"\n"}
                                Mantarlı Ve Peynirli Omlet{"\n"}
                                •	3 yumurta beyazı{"\n"}
                                •	1/2 kap mantar{"\n"}
                                •	1/3 kap tuzsuz beyaz peynir{"\n"}
                                •	5 adet cherry domates{"\n"}
                                Öncelikle mantarları zeytinyağında tuz ve karabiber ile pişirin. Daha sonra 3 yumurta beyazını ve peyniri ekleyerek omletinizi tamamlayınız.{"\n"}
                                Ara Öğün{"\n"}
                                1 kap probiyotik yoğurt{"\n"}
                                Öğle (250 kalori){"\n"}
                                2 Adet pestolu yumurta muffin{"\n"}
                                Ara Öğün (110 kalori){"\n"}
                                Yarım avuç kuru üzüm ve 2 tam ceviz{"\n"}
                                Akşam{"\n"}
                                Greek  Salata{"\n"}
                                {"\n"}
                                14. Gün{"\n"}
                                Kahvaltı (260 kalori){"\n"}
                                Kuru Meyveli  Yulaf Ezmesi{"\n"}
                                Ara Öğün (85 kalori){"\n"}
                                1 elma + fıstık ezmesi{"\n"}
                                Öğle (450 kalori){"\n"}
                                Avakadolu Yumurta{"\n"}
                                Ara Öğün (85 kalori){"\n"}
                                1 bardak kefir veya 1 kap probiyotik meyveli yoğurt{"\n"}
                                Akşam (550 kalori){"\n"}
                                Mozzarella Salatası{"\n"}
                                {"\n"}
                                {"\n"}
                            </Text>
                        </ScrollView>

                    </Wallpaper>

                );
                break;
            case 3:
                return (
                    <Wallpaper source={require('../../images/Kalori.jpg')}>

                        <ScrollView style={styles.viewStyle} contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustContentInsets={false}>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }} >
                                <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}> 7 Günlük 1200 Kalorilik Beslenme Planı </Text>{"\n"}
                                {"\n"}1.    Gün{"\n"}
                                KAHVALTI - 294 Kalori 41g Karbonhidrat{"\n"}
                                -     1/2 bardak yulaf, 1/2 yağsız süt veya su ile pişirin{"\n"}
                                -2 adet doğranmış kuru kayısı{"\n"}
                                -     2 tam ceviz, doğranmış{"\n"}
                                Pişirdiğiniz yulafın üzerine kayısı ve cevizi ilave ediniz. Dilerseniz tarçın ekleyebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN 96 Kalori, 18g Karbonhidrat{"\n"}
                                - 3/4 bardak küp seklinde doğranmış elma{"\n"}
                                -     1/4 yağsız yoğurt{"\n"}
                                Elmayı yoğurdun üzerine ekleyin.{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ 319 Kalori, 37g Karbonhidrat{"\n"}
                                Kaşarlı Hindi Sandviç{"\n"}
                                -     2 dilim tam tahıllı ekmek{"\n"}
                                -     2 yemek kaşığı hardal{"\n"}
                                -     1/2 orta boy elma, dilimlenmiş{"\n"}
                                -     60 gram hindi{"\n"}
                                -     2 yemek kaşığı rendelenmiş kaşar{"\n"}
                                -     1 tutam yeşillik{"\n"}
                                Ekmek dilimlerinin üzerine eşit bir şekilde, 1 yemek kaşığı kaşığı hardal, elma, hindi ve 2 yemek kaşığı peynir koyun. Açık bir şekilde peynirler eriyene kadar fırınlayın. Yeşillikleri de ekleyerek kapatın.{"\n"}

                                {"\n"}ARA ÖĞÜN 58 Kalori, 16g Karbonhidrat{"\n"}
                                -     1/2 elma, dilimlenmiş{"\n"}
                                -     1/2 çorba kaşığı bal{"\n"}
                                -B    ir tutam tarçın{"\n"}
                                Elma dilimlerinin üzerine balı dökün ve üzerine tarçın serpiştirin.{"\n"}

                                {"\n"}AKŞAM YEMEĞİ 417 Kalori, 54g Karbonhidrat {"\n"}
                                2 kase dilediğiniz sebze çorbası; brokoli önerilir.{"\n"}
                                -     1 dilim tam tahılllı kızarmış ekmek ve üzerine 2 yemek kaşığı lor peyniri ve zeytinyağı{"\n"}

                                {"\n"}
                                {"\n"}2. GÜN{"\n"}

                                {"\n"}KAHVALTI 297 Kalori, 33g karbonhidrat{"\n"}
                                -     1 dilim tam tahıllı kızarmış ekmek{"\n"}
                                - Y   arım avakado{"\n"}
                                -     1 yemek kaşığı zeytinyağı{"\n"}
                                -B    ir tutam karabiber, tuz ve pul biber{"\n"}
                                Kızarmış ekmeğin üzerine ezdiğiniz avakodoyu sürün ve üzerine zeytinyağı ve dilediğiniz baharatları serpiştirin.{"\n"}
                                -1/2 elma{"\n"}
                                -25 adet antep fıstığı{"\n"}

                                {"\n"}ARA ÖĞÜN 52 kalori, 13g karbonhidrat{"\n"}
                                -     10 adet kiraz{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ 314 Kalori{"\n"}
                                - Kremasız domates çorbası{"\n"}
                                -     2 dilim kızarmış tam tahıllı ekmek{"\n"}

                                {"\n"}ARA ÖĞÜN 95Kalori 25g Karbonhidrat{"\n"}
                                -1 adet dilimlenmiş elmanın üzerine yeterli miktarda tarçın serpiştirin.{"\n"}
                                -5 adet çiğ badem {"\n"}

                                {"\n"}AKŞAM YEMEĞİ 420 Kalori, 48g Karbonhidrat{"\n"}
                                -     2 1/2 kase mercimekli yeşil salata{"\n"}
                                -     1 adet elma ve üzerine 1 yemek kaşığı az yağlı fıstık ezmesini yemekten sonra tüketebilirsiniz.{"\n"}
                                Karışık yeşil salatanın üzerine yarım bardak pişmiş yeşil mercimek ve yarım bardak haşlanmış brokoli ekleyin. 2 yemek kaşığı zeytinyağı, tuz ve balzamik sirke ile tüketiniz.{"\n"}

                                {"\n"}
                                {"\n"}3. GÜN{"\n"}

                                {"\n"}KAHVALTI 289 Kalori, 27g Karbonhidrat{"\n"}
                                -     1 kase yağsız yoğurt üzerine 1 avuç ve 1 tatlı kaşığı süzme bal{"\n"}
                                -     3 tam ceviz{"\n"}
                                -     yeşil çay{"\n"}

                                {"\n"}ARA ÖĞÜN 30 Kalori, 8g Karbonhidrat{"\n"}
                                1 adet şeftali{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ 347 Kalori, 48g Karbonhidrat{"\n"}
                                -     3 kase karışık yeşillik ve mercimek salatası{"\n"}
                                -     1/2 elma, dilerseniz salatanın üzerinde dilimlenmiş olarak tüketebilirsiniz{"\n"}

                                {"\n"}ARA ÖĞÜN 62 Kalori, 15g Karbonhidrat{"\n"}
                                1 adet portakal{"\n"}

                                {"\n"}AKŞAM YEMEĞİ 490 Kalori, 52g Karbonhidrat{"\n"}
                                Tavuk ve Sebze Sote{"\n"}
                                -     1 adet kırmızı biber{"\n"}
                                -     1 adet sarı biber{"\n"}
                                -     1 adet yeşil biber{"\n"}
                                -     1/4 kırmızı biber{"\n"}
                                -     1/2 yarım kap domates{"\n"}
                                -     340 gram tavuk göğsü{"\n"}
                                Tüm malzemeleri küp küp doğrayarak zeytinyağı, tuz, karabiber ve dilediğiniz diğer baharatlarla karıştırarak tavada pişiriniz.{"\n"}
                                - Yanında 2 kase karışık yeşillik salata ile tüketebilirsiniz.{"\n"}

                                {"\n"}
                                {"\n"}4. GÜN{"\n"}

                                {"\n"}KAHVALTI 295 Kalori, 42g Karbonhidrat{"\n"}
                                Meyveli Yulaf{"\n"}
                                -     1/2 bardak yulafı 1/2 yağsız süt ile pişirin.{"\n"}
                                -     üzerine 1 orta boy dilimlenmiş şeftali ve{"\n"}
                                -     2 tam ceviz ekleyerek tüketin.{"\n"}

                                {"\n"}ARA ÖĞÜN 52 Kalori, 13g Karbonhidrat{"\n"}
                                10 adet kiraz{"\n"}

                                {"\n"}ÖĞLE 350 Kalori, 46g Karbonhidrat{"\n"}
                                Hindi Sandviç{"\n"}
                                -     2 dilim tam tahıllı kızarmış ekmek{"\n"}
                                -     3 dilim hindi füme{"\n"}
                                -     3 dilim dilimlenmiş kaşar peyniri{"\n"}
                                -     1 yaprak marul{"\n"}
                                -     1 tk dijon hardal{"\n"}

                                {"\n"}ARA ÖĞÜN 62 Kalori, 15g Karbonhidrat{"\n"}
                                1 adet portakal{"\n"}

                                {"\n"}AKŞAM 450 Kalori, 41g Karbonhidrat{"\n"}
                                Fırında Somon{"\n"}
                                -1 dilim somon balığı{"\n"}
                                -1/4 bardak esmer pirinç{"\n"}
                                Dilediğiniz gibi baharatlayıp fırında pişirdiğiniz somonun yanında esmer pirinçten yaptığınız pilav ve 1 kase karışık yeşil salata ile afiyetle tüketin.{"\n"}

                                {"\n"}
                                {"\n"}5. GÜN{"\n"}

                                {"\n"}KAHVALTI 276 Kalori, 13g Karbonhidrat{"\n"}
                                -     1 dilim tam tahıllı kızarmış ekmek{"\n"}
                                -     yarım avakado{"\n"}
                                -     1 yemek kaşığı zeytinyağı{"\n"}
                                -     bir tutam karabiber, tuz ve pul biber{"\n"}
                                Kızarmış ekmeğin üzerine ezdiğiniz avakodoyu sürün ve üzerine zeytinyağı ve dilediğiniz baharatları serpiştirin.{"\n"}
                                -     20 adet kiraz{"\n"}

                                {"\n"}ARA ÖĞÜN 51 Kalori, 13g Karbonhidrat{"\n"}
                                6 adet kuru kayısı ve yeşil çay{"\n"}

                                {"\n"}ÖĞLEN 350 Kalori, 41g Karbonhidrat{"\n"}
                                Kızarmış Tavuk Göğsü ve Tatlı Patates Püresi{"\n"}
                                -     300 g. tavuk göğsünü zeytinyağı ve dilediğiniz baharatlar ile kızartın{"\n"}
                                -     1 küçük boy tatlı patatesi fırında kumpir şeklinde kızartın. Ortadan kesin ve 1/4 kap az yağlı rendelenmiş kaşar peyniri ekleyin. Tatlandırmak için zeytinyağı, tuz, karabiber kullanabilirsiniz.{"\n"}
                                Yanında 1 kase yeşil salata ilave edebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN 51 Kalori, 13g Karbonhidrat{"\n"}
                                -     1/2 Armut{"\n"}
                                Dilimleyerek üzerine tarçın serpiştirebilirsiniz.{"\n"}

                                {"\n"}AKŞAM YEMEĞİ 448 Kalori, 38g Karbonhidrat{"\n"}
                                Kıymalı Mercimek Yemeği{"\n"}
                                -6 yemek kaşığı kaşığı mercimek yemeği 1 porsiyondur.{"\n"}
                                -     1 kase yağsız yoğurt veya 1 bardak ayran{"\n"}

                                {"\n"}
                                {"\n"}6. GÜN{"\n"}

                                {"\n"}KAHVALTI 291 Kalori, 28g Karbonhidrat{"\n"}
                                -     1 kase yağsız yoğurt{"\n"}
                                -     1/2 bardak çilek{"\n"}
                                -     1 tatlı kaşığı bal{"\n"}
                                -     2 tam ceviz{"\n"}
                                Malzemeleri yoğurdun üzerine ekliyerek tüketebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN 72 Kalori, 18g Karbonhidrat{"\n"}
                                14 adet kiraz{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ 337 Kalori, 42g Karbonhidrat{"\n"}
                                Kremasız Domates Çorbası{"\n"}
                                2 kase tüketebilirsiniz. Üzerine yağız peynir ilave ederseniz, 1 kase de sınırlı kalınız.{"\n"}

                                {"\n"}ARA ÖĞÜN 70 Kalori, 15g Karbonhidrat{"\n"}
                                1 Muz{"\n"}

                                {"\n"}AKŞAM YEMEĞİ 422 Kalori, 53g Karbonhidrat{"\n"}
                                Ispanak Soteli Tavuk{"\n"}
                                -3 kap ıspanak{"\n"}
                                -250 g. tavuk göğsü{"\n"}
                                - 1 kase yağsız yoğurt{"\n"}
                                Zeytinyağı, tuz, biber ve sarımsak kullanarak ıspanakları soteleyiniz ve haşladığınız tavuk göğsü ile pişiriniz.{"\n"}

                                {"\n"}
                                {"\n"}
                                {"\n"}7. GÜN{"\n"}
                                KAHVALTI 300 Kalori, 40g Karbonhidrat{"\n"}
                                Meyveli Yulaf{"\n"}
                                -     1/2 bardak yulafı 1/2 yağsız süt ile pişirin.{"\n"}
                                -     üzerine 1 orta boy dilimlenmiş muz ve{"\n"}
                                -     2 tam ceviz ekleyerek tüketin.{"\n"}

                                {"\n"}
                                {"\n"}ARA ÖĞÜN 62 Kalori, 15g Karbonhidrat{"\n"}
                                1 orta boy şeftali{"\n"}

                                {"\n"}ÖĞLEN 325 Kalori, 35g Karbonhidrat{"\n"}
                                -     2 1/2 kase mercimekli yeşil salata{"\n"}
                                Karışık yeşil salatanın üzerine yarım bardak pişmiş yeşil mercimek ve yarım bardak haşlanmış brokoli ekleyin. 2 yemek kaşığı zeytinyağı, tuz ve balzamık sirke ile tüketiniz.{"\n"}
                                -     1 dilim tam tahıllı kızarmış ekmek{"\n"}

                                {"\n"}ARA ÖĞÜN 95 Kalori, 25g Karbonhidrat{"\n"}
                                1 adet elma{"\n"}

                                {"\n"}AKŞAM YEMEĞİ 444 Kalori, 48g Karbonhidrat{"\n"}
                                Kuzu Pirzola{"\n"}
                                -4 adet kuzu pirzola{"\n"}
                                -     1/2 bardak pişmiş esmer pirinç{"\n"}
                                -     3/4 kap sebze sote{"\n"}
                                Etleri dilediğiniz gibi baharatlandırıp zeytinyağında pişirin ve esmer pirinçten yaptınız pilav ve sebze sote ile afiyetle tüketiniz.{"\n"}
                                {"\n"}{"\n"}
                            </Text>
                        </ScrollView>

                    </Wallpaper>

                );
                break;
            case 4:
                return (
                    <Wallpaper source={require('../../images/tabsBackground.jpg')}>

                        <ScrollView style={styles.viewStyle} contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustContentInsets={false}>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }} >
                                <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}> STANDART BESLENME LİSTESİ </Text>{"\n"}{"\n"}


                                {"\n"}Sabah 08:00{"\n"}
                                5 Yemek Kaşığı Yulaf Ezmesi{"\n"}
                                4 Yemek Kaşığı Yoğurt veya 250ml Süt (içine tarçın){"\n"}
                                veya{"\n"}
                                2 Yumurta, 2 Salatalık, 1 Domates, İki Parmak Peynir, 5 Zeytin{"\n"}
                                1 Dilim Tahıllı Ekmek{"\n"}
                                Yeşillik{"\n"}

                                {"\n"}Ara 10:00{"\n"}
                                Kahve veya Yeşil çay + 2 Yarım Ceviz{"\n"}

                                {"\n"}Öğlen 14:00 – 15:00{"\n"}
                                150 gr. Tavuk Göğüs ( Izgara ){"\n"}
                                Yeşillik{"\n"}
                                1 Dilim Tahıllı Ekmek{"\n"}
                                Veya{"\n"}
                                160 gr. Ton Balıklı Salata{"\n"}
                                4 Yemek Kaşığı Haşlama Bulgur{"\n"}

                                {"\n"}Ara 16:30{"\n"}
                                2 Parmak Dilim Ananas{"\n"}
                                Veya{"\n"}
                                5 Çilek{"\n"}

                                {"\n"}Akşam 19:30{"\n"}
                                8 Çatal Zeytinyağlı Fasulye{"\n"}
                                4 Yemek Kaşığı Yoğurt{"\n"}
                                Yeşillik Salata{"\n"}
                                Veya{"\n"}
                                8 Yemek Kaşığı Yeşil Mercimek{"\n"}
                                Salata İle İçine Ufak Peynir{"\n"}

                                {"\n"}Gece{"\n"}
                                Biberiye Çayı{"\n"}
                                {"\n"}{"\n"}

                            </Text>
                        </ScrollView>

                    </Wallpaper>

                );
                break;

            case 5:
                return (
                    <Wallpaper source={require('../../images/LaktoOvo.jpg')}>

                        <ScrollView style={styles.viewStyle} contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustContentInsets={false}>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }} >
                                <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}> LAKTO - OVA VEJETARYEN DİYET LİSTESİ </Text>{"\n"}{"\n"}


                                {"\n"}
                                {"\n"} Hayvan eti yok, sadece süt ürünleri ve peynir ürünleri içerir.{"\n"}

                                {"\n"}1. GÜN{"\n"}

                                {"\n"}KAHVALTI    , 297 Kalori{"\n"}
                                Elmalı ve Cevizli Yulaf Ezmesi{"\n"}
                                -yarım bardak yulaf ezmesini yarım bardak yağsız süt veya yarım bardak su ile pişirin{"\n"}
                                -yarım bir elmayı üstüne doğrayın{"\n"}
                                -1 tam ceviz ve 1 çay kaşığı tarçın üzerine ilave edin{"\n"}

                                {"\n"} ARA ÖĞÜN, 40 kalori{"\n"}
                                Bir orta boy elmanın yarısı{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 337 kalori{"\n"}
                                Baharatlı nohutlu yeşil salata{"\n"}
                                -2 kase karışık yeşillik{"\n"}
                                -5 çeri domates{"\n"}
                                -1/2 kap dilimlenmiş salatalık{"\n"}
                                -1/4 kap baharatlı nohut{"\n"}
                                -1 kaşık yağsız beyaz peynir{"\n"}
                                Tüm malzemeleri 1 kaşık zeytinyağı ve balzamik ile karıştırın.{"\n"}

                                {"\n"} ARA ÖĞÜN, 80 Kalori{"\n"}
                                -1/2 kase yağsız yoğurt{"\n"}
                                -1/4 kase dilimlenmiş çilek{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 431 Kalori {"\n"}
                                Mozeralla ve Izgara kabak{"\n"}
                                -1 büyük top mozeralla peyniri ve Izgara kabak{"\n"}
                                -1 kap karışık yeşillik 1 yemek kaşığı zeytinyağı ve balsamik eşliğinde{"\n"}
                                -1 dilim kepekli ekmek{"\n"}

                                {"\n"}
                                {"\n"}
                                {"\n"}======={"\n"}
                                2. GÜN{"\n"}

                                {"\n"}KAHVALTI, 264 Kalori{"\n"}
                                -1 kap yağsız yoğurt{"\n"}
                                -1/4 kap müsli{"\n"}
                                -1/4 kap müz{"\n"}

                                {"\n"}ARA ÖĞÜN, 70 Kalori{"\n"}
                                2 adet mandalina{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 320 Kalori{"\n"}
                                2 Dilim Peynirli ve Domatesli Tost{"\n"}
                                -2 Dilim çavdar veya ekşi maya ekmeği üzerine çökelek ve dilimlenmiş domates ile fırınlayın{"\n"}
                                -1/2 kap salatalık{"\n"}
                                -1/4 kap havuç{"\n"}
                                -2 kap karışık yeşilliği diğer malzemeleri karıştırarak, zeytinyağı ve balsamik ekleyin.{"\n"}

                                {"\n"}ARA ÖĞÜN, 75 Kalori{"\n"}
                                3 tam ceviz ve yeşilçay{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 400 Kalori{"\n"}
                                Tatlı Patates ve Siyah Fasulye Güveci{"\n"}
                                -1 adet küp seklinde doğranmış tatlı patates{"\n"}
                                -1 adet küçük boy ince kıyılmış soğan{"\n"}
                                - yarım diş sarımsak{"\n"}
                                -1 çay kaşığı kimyon{"\n"}
                                -yarım çay kaşığı tuz{"\n"}
                                -     yarım kap siyah fasulye{"\n"}
                                -     bir tutam maydanoz{"\n"}
                                -     yarım limon{"\n"}
                                -     3/4 kap şu{"\n"}
                                Tüm malzemeleri zeytinyağı kullanarak tavada orta ateşte 30 dk pişirin. Yanında 1 kase yağsız yoğurt ile tüketebilirsiniz.{"\n"}

                                {"\n"}GECE ATIŞTIRMASI, 70 Kalori{"\n"}
                                2 küp siyah çikolata{"\n"}

                                {"\n"}=========={"\n"}
                                3.GÜN{"\n"}

                                {"\n"}KAHVALTI, 285 Kalori{"\n"}
                                -     1 dilim kızarmış çavdarlı veya ekşi maya ekmeği{"\n"}
                                -     1 yemek kaşığı fıstık ezmesi{"\n"}
                                -     1 adet muz{"\n"}
                                -     yeşil çay veya filtre kahve{"\n"}

                                {"\n"}ARA ÖĞÜN, 70 Kalori{"\n"}
                                -     1 adet kaynatılmış yumurta ve isteğe bağlı olarak baharat ekleyebilirsiniz{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 340 Kalori{"\n"}
                                Nohutlu Yeşil Salata{"\n"}
                                -2 kap karışık yeşil salata{"\n"}
                                -     1 adet domates{"\n"}
                                -     1/2 salatalık{"\n"}
                                -     1/4 kap baharatlı nohut{"\n"}
                                -     1 küp yağsız beyaz peynir{"\n"}
                                Malzemeleri zeytinyağı ile karıştırarak tüketebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 100 Kalori{"\n"}
                                - 2/3 kap yağsız yoğurt{"\n"}
                                -3 kaşık nar veya 1 dilim ananas{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 450 Kalori{"\n"}
                                Zeytinyağlı Enginar Yemeği{"\n"}
                                -1 porisyon 6 kaşıktır{"\n"}
                                Yanında yağsız yoğurt ile tüketebilirsiniz.{"\n"}

                                {"\n"}===={"\n"}
                                4.GÜN{"\n"}

                                {"\n"}KAHVALTI, 210 Kalori{"\n"}
                                -     3 yumurta beyazından ıspanaklı ve lor peynirli omlet{"\n"}
                                -     5 çeri domates{"\n"}
                                -     1/2 kap salatalık{"\n"}

                                {"\n"}ARA ÖĞÜN, 200 Kalori{"\n"}
                                -10 adet kavrulmamış badem ve 1 adet kuru incir{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 330 Kalori{"\n"}
                                Zeytinyağlı Kabak Yemeği{"\n"}
                                -1 kase yağsız yoğurt{"\n"}
                                -1 dilim kızarmış çavdar, tam tahıl veya ekşi mayalı ekmek{"\n"}

                                {"\n"}ARA ÖĞÜN,  50 Kalori{"\n"}
                                Mevsimine göre:{"\n"}
                                -1/2 kap kiraz  veya{"\n"}
                                -1 portakal{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 420 Kalori{"\n"}
                                Yeşil mercimek yemeği{"\n"}
                                Yanında:{"\n"}
                                -1 dilim kızarmış tahıl veya ekşi maya ekmeği ve{"\n"}
                                -1 kase yağsız yoğurt veya ayran{"\n"}

                                {"\n"}===={"\n"}

                                {"\n"}5. GÜN{"\n"}

                                {"\n"}KAHVALTI, 260 Kalori{"\n"}
                                Yumurtalı Açık Tost{"\n"}
                                -1 kayısı yumurta{"\n"}
                                -1/4 avokado{"\n"}
                                -1 tatlı kaşığı zeytinyağı{"\n"}
                                -1 dilim tam tahıllı kızarmış ekmek{"\n"}
                                -1 kaşık lor peyniri{"\n"}
                                Kızarmış ekmeğin üstüne zeytinyağı ile ezdiğiniz avokadoyu sürün ve üstüne lor peynirini ekleyin. Tercihen yeşil çay veya macha çayı ile tüketin.{"\n"}

                                {"\n"} ARA ÖĞÜN, 70 Kalori{"\n"}
                                -1 yeşil tatlı biber{"\n"}
                                - 2 yemek kaşığı humuş{"\n"}

                                {"\n"}
                                {"\n"}ÖĞLE YEMEĞİ, 350 – 400 Kalori{"\n"}
                                Karışık Sebzeli Mantar Dolması{"\n"}
                                -4 adet büyük mantar{"\n"}
                                -1 yemek kaşığı zeytinyağ{"\n"}
                                -1 diş sarmısak{"\n"}
                                -1/2 kuru soğan{"\n"}
                                -1/2 yeşil tatlı biber{"\n"}
                                -1/2 sarı biber{"\n"}
                                -1/4 demet maydanoz{"\n"}
                                -1/4 çay kaşığı tuz ve karabiber{"\n"}
                                Küçük küp halinde kesilip bir tavada kızaran sebzeleri mantarların içine yerleştirip önceden 250 derecede ısıtılmış fırında 10 dk kızartın. Dilerseniz az miktarda mantarların üstüne az yağlı kaşar peyniri ekleyerek fırına verebilirsiniz.{"\n"}
                                Yanında,{"\n"}
                                -1/2 kap lapa pirinç{"\n"}

                                {"\n"}ARA ÖĞÜN, 100 Kalori{"\n"}
                                -1/2 elma{"\n"}
                                -4 yarım ceviz{"\n"}
                                -yeşil çay{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 440 Kalori{"\n"}
                                Kabak Spagetti{"\n"}
                                -1 adet orta boy girit kabağı{"\n"}
                                -4 adet cherry domates{"\n"}
                                -5 adet fesleğen yaprağı{"\n"}
                                -1 yemek kaşığı rendelenmiş parmesan peyniri{"\n"}
                                -2 yemek kaşığı sızma zeytinyağı{"\n"}
                                -1 yemek kaşığı balzamik sirke{"\n"}
                                -1/4 çay kaşığı tuz{"\n"}
                                Kabakları, boyuna ince bir şekilde spagetti gibi dilimledikten sonra kaynar suyu kaynatın ve kabakları suyun içine atın. Tekrar kaynadıktan 1 dk sonra çıkarıp soğuk suya atın. Daha sonra diğer malzemeler ile birlikte harmanlayarak tüketebilirsiniz.{"\n"}

                                {"\n"}======{"\n"}

                                {"\n"}6. GÜN{"\n"}

                                {"\n"}KAHVALTI, 260 Kalori{"\n"}
                                Kuru Meyveli Yulaf Ezmesi{"\n"}
                                -4 yemek kaşığı yulaf{"\n"}
                                -1.5 bardak yağsız süt veya badem sütü{"\n"}
                                -     1 adet küp seklinde dilimlenmiş kuru incir{"\n"}
                                -     2 adet küp seklinde dilimlenmiş kayısı{"\n"}
                                Tercih ettiğiniz süt ile pişirdikten sonra üstüne kuru meyvelerle ve dilerseniz 1/2 çay kaşığı tarçın koyarak tüketebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 150 Kalori{"\n"}
                                1 adet muz ve 1 yemek kaşığı fıstık ezmesi veya hurma{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 300 Kalori{"\n"}
                                -     Zeytinyağlı Ispanak Yemeği{"\n"}
                                6 yemek kaşığı kadar tüketiniz. Dilerseniz 1 kase yoğurt ve 1 dilim kızarmış tam tahıl ekmek ile yiyebilirsiniz.{"\n"}

                                {"\n"} ARA ÖĞÜN, 150 Kalori{"\n"}
                                -1 orta boy elma{"\n"}
                                -5 adet kavrulmamış badem{"\n"}

                                {"\n"} AKŞAM YEMEĞİ, 390 Kalori{"\n"}
                                Karnıbahar Pizza{"\n"}
                                -     1 adet küçük boy karnabahar{"\n"}
                                -     1 adet yumurta{"\n"}
                                -     1/2 şu bardağı rendelenmiş kaşar peyniri{"\n"}
                                -     1/2 çay kaşığı tuz{"\n"}
                                -     1/4 çay kaşığı karabiber{"\n"}
                                -     1 tatlı kaşığı dilediğiniz diğer baharatlar{"\n"}
                                -     1 adet orta boy domates{"\n"}
                                -     4 adet mantar{"\n"}
                                -     200 gram rendelenmiş mozeralla peyniri{"\n"}
                                -     3 yemek kaşığı domates sosu{"\n"}
                                -     1 yemek kaşığı zeytinyağı{"\n"}
                                Yıkayıp üzerlerini kuruladığınız karnabaharları, blenderdan geçirip kum haline getirin. kaynar su dolu bir tencerede kısa süre haşlayın. Haşlanmış karnabaharları; yumurta, rendelenmiş kaşar peyniri, tuz, karabiber ve baharat karışımıyla derin bir kasede karıştırarak hamur haline getirin. Karnabahardan oluşan pizza tabanını yağlı kağıt serili fırın tepsisi üzerine yuvarlak şeklinde yayın. Domates sosunu üzerine yayın. Domatesi halka şeklinde incecik dilimleyin ve mantarları ince ince kestikten sonra pizzanın üzerine yerleştirin. Son olarak rendelenmiş mozzarella peynirini üzerine serpiştirdikten sonra hazırladığınız pizzayı önceden ısıtılmış 200 derece fırında 20-25 dakika kadar pişirin. 1 porsiyon 3 dilimdir.{"\n"}

                                {"\n"}======={"\n"}
                                7. GÜN{"\n"}

                                {"\n"}KAHVALTI, 290 Kalori{"\n"}
                                Soğanlı Menemen{"\n"}
                                -2 adet domates{"\n"}
                                -1/2 kuru soğan{"\n"}
                                -1 adet sivri biber{"\n"}
                                -3 adet yumurta akı{"\n"}
                                -1 yemek kaşığı zeytinyağı{"\n"}
                                -1 dilim kızarmış ekşi maya ekmeği veya tam tahıllı ekmek{"\n"}
                                Malzemeleri kavurup, üzerine dilerseniz 1 yumurtayı sarısı ile beraber kırabilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 70 Kalori{"\n"}
                                -1 adet şeftali{"\n"}
                                -4 adet badem{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 310 Kalori{"\n"}
                                -Zeytinyağlı Barbunya{"\n"}
                                6 yemek kaşığı 1 porsiyondur. Yanında dilerseniz 1 kase yoğurt veya 1 dilim ekmek ile tüketebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 75 Kalori{"\n"}
                                -     1 top dondurma veya{"\n"}
                                -     1 kase probiyotik meyveli yoğurt{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 465 Kalori {"\n"}
                                Sebzeli Kızarmış Pilav{"\n"}
                                -2 büyük boy yumurta{"\n"}
                                -     1/2 dış sarımsak{"\n"}
                                -     1 bardak pişmiş esmer pirinç{"\n"}
                                -     4 adet cherry domates{"\n"}
                                -     1 yemek kaşığı soya sosu{"\n"}
                                -     1/4 maydanoz{"\n"}
                                -     1/4 kap arpacık soğanı{"\n"}
                                -     1/2 kap havuç{"\n"}
                                -     2 brüksel lahanası{"\n"}
                                Sebzeleri baharat ve zeytinyağı ile kavurduktan sonra, üzerine pişmiş esmer pirinci ve yumurtaları ekleyerek, soya sosu ile birlikte karıştırarak pişirin.{"\n"}

                                {"\n"}GECE ATIŞTIRMASI, 70 kalori{"\n"}
                                -2 küp bitter çikolata{"\n"}
                                - Papatya veya yasemin çayı{"\n"}

                                {"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}Öneriler:{"\n"}
                                -Sabahları uyanınca limonlu ılık su metoblizmanın hızlanmasına yardımcı olur.{"\n"}
                                -Filtre kahvenize veya Amerikano kahvenize 1 çay kaşığı hindistan cevizi yağı ekleyerek, spordan yarım saat önce içildiği takdirde yağ yakım oranını arttırabilirsiniz.{"\n"}
                                - Kahve ve çayınızı yemekle 2 saat aralıklı olarak tüketerek besin öğelerinin emilimini arttırabilirsiniz. {"\n"}



                                {"\n"}{"\n"}

                            </Text>
                        </ScrollView>

                    </Wallpaper>


                );
                break;
            case 6:
                return (
                    <Wallpaper source={require('../../images/Pesketeryan.jpg')}>

                        <ScrollView style={styles.viewStyle} contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustContentInsets={false}>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }} >
                                <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}> PESKETERYAN VEJETARYEN DİYET LİSTESİ </Text>{"\n"}{"\n"}

                                Balık ürünleri içerir.
{"\n"}{"\n"}
                                1. GÜN{"\n"}

                                {"\n"}KAHVALTI,   297 kalori{"\n"}
                                Elmalı ve Cevizli Yulaf Ezmesi{"\n"}
                                -yarım bardak yulaf ezmesini yarım bardak yağsız süt veya yarım bardak su ile pişirin{"\n"}
                                -yarım bir elmayı üstüne doğrayın{"\n"}
                                -1 tam ceviz ve 1 çay kaşığı tarçın üzerine ilave edin. {"\n"}

                                {"\n"}ARA ÖĞÜN, 40 kalori{"\n"}
                                Bir orta boy elmanın yarısı{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 337 kalori{"\n"}
                                Baharatlı Nohutlu Yeşil Salata{"\n"}
                                -2 kase karışık yeşillik{"\n"}
                                -5 çeri domates{"\n"}
                                -1/2 kap dilimlenmiş salatalık{"\n"}
                                -1/4 kap baharatlı nohut{"\n"}
                                -1 kaşık yağsız beyaz peynir{"\n"}
                                Tüm malzemeleri 1 kaşık zeytinyağı ve balsamik ile karıştırın.{"\n"}

                                {"\n"}ARA ÖĞÜN, 80 kalori{"\n"}
                                -1/2 kase yağsız yoğurt{"\n"}
                                -1/4 kase dilimlenmiş çilek{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 431 kalori{"\n"}
                                Mozeralla ve Izgara kabak{"\n"}
                                -1 büyük top mozeralla peyniri ve Izgara kabak{"\n"}
                                -1 kap karışık yeşillik 1 yemek kaşığı zeytinyağı ve balsamik eşliğinde{"\n"}
                                -1 dilim kepekli ekmek{"\n"}

                                {"\n"}
                                {"\n"}
                                {"\n"}======={"\n"}
                                2. GÜN{"\n"}

                                {"\n"}KAHVALTI, 264 Kalori{"\n"}
                                -1 kap yağsız yoğurt{"\n"}
                                -1/4 kap müsli{"\n"}
                                -1/4 kap muz{"\n"}

                                {"\n"}ARA ÖĞÜN, 70 Kalori{"\n"}
                                2 adet mandalina{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 320 Kalori{"\n"}
                                Ton Balıklı Mevsim Salata{"\n"}
                                -1 porsiyon yağsız ton balığı{"\n"}
                                -karışık yeşillik{"\n"}
                                -1/4 kap mısır{"\n"}
                                -2 yemek kaşığı zeytinyağı{"\n"}
                                Yanında 1 dilim ekşi maya ekmeği veya tam tahıl ekmeği tüketebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 75 Kalori{"\n"}
                                -1 adet kuru incir veya 3 adet kuru erik{"\n"}
                                -2 tam ceviz{"\n"}
                                ve yeşilçay ile tüketebilirsiniz.{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 400 Kalori{"\n"}
                                Tatlı Patates ve Siyah Fasulye Güveci{"\n"}
                                -1 adet küp seklinde doğranmış tatlı patates{"\n"}
                                -1 adet küçük boy ince kıyılmış soğan{"\n"}
                                - yarım diş sarımsak{"\n"}
                                -1 çay kaşığı kimyon{"\n"}
                                -yarım çay kaşığı tuz{"\n"}
                                -     yarım kap siyah fasulye{"\n"}
                                -     bir tutam maydanoz{"\n"}
                                -     yarım limon{"\n"}
                                -     3/4 kap su{"\n"}
                                Tüm malzemeleri zeytinyağı kullanarak tavada orta ateşte 30 dk pişirin. Yanında 1 kase yağsız yoğurt ile tüketebilirsiniz.{"\n"}

                                {"\n"}GECE ATIŞTIRMASI, 70 Kalori{"\n"}
                                2 küp siyah çikolata ve uyku çayı{"\n"}

                                {"\n"}=========={"\n"}
                                3.GÜN{"\n"}

                                {"\n"}KAHVALTI, 285 Kalori{"\n"}
                                -     1 dilim kızarmış çavdarlı veya ekşi maya ekmeği{"\n"}
                                -     1 yemek kaşığı fıstık ezmesi{"\n"}
                                -     1 adet muz{"\n"}
                                -     yeşil çay veya filtre kahve ile tüketiniz{"\n"}

                                {"\n"}ARA ÖĞÜN, 70 Kalori{"\n"}
                                -     1 adet kaynatılmış yumurta ve isteğe bağlı olarak baharat ekleyebilirsiniz{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 340 Kalori{"\n"}
                                Nohutlu Yeşil Salata{"\n"}
                                -2 kap karışık yeşil salata{"\n"}
                                -     1 adet domates{"\n"}
                                -     1/2 salatalık{"\n"}
                                -     1/4 kap baharatlı nohut{"\n"}
                                -     1 küp yağsız beyaz peynir{"\n"}
                                -     Malzemeleri zeytinyağı ile karıştırarak tüketebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 100 Kalori{"\n"}
                                - 2/3 kap yağsız yoğurt{"\n"}
                                -3 kaşık nar veya 1 dilim ananas{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 450 Kalori{"\n"}
                                -     Fırında Somon{"\n"}
                                -     1 dilim somon{"\n"}
                                -     1/2 kap patates{"\n"}
                                -     1/2 kap biber{"\n"}
                                -     1/2 domates{"\n"}
                                -     2 yemek kaşığı zeytinyağı{"\n"}
                                Patatesleri tavada kavurduktan sonra diğer malzemelerle karıştırıp, somon ile birlikte 200 derecede 10-15 dk pişirin. Üzerine dilediğiniz baharatı ekleyerek tükebilirisiniz.{"\n"}

                                {"\n"}
                                {"\n"}===={"\n"}
                                4.GÜN{"\n"}

                                {"\n"}KAHVALTI, 210 Kalori{"\n"}
                                -     3 yumurta beyazından ıspanaklı ve lor peynirli omlet{"\n"}
                                -     5 çeri domates{"\n"}
                                -     1/2 kap salatalık{"\n"}
                                -     yeşil çay ile tükebilirisiniz.{"\n"}

                                {"\n"}
                                {"\n"}ARA ÖĞÜN, 200 Kalori{"\n"}
                                -10 adet çiğ badem ve 2 adet kuru kayısı{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 330 Kalori{"\n"}
                                Zeytinyağlı Kabak Yemeği{"\n"}
                                -1 kase yağsız yoğurt{"\n"}
                                -1 dilim kızarmış çavdar, tam tahıl veya ekşi mayalı ekmek{"\n"}

                                {"\n"}ARA ÖĞÜN,  50 Kalori{"\n"}
                                Mevsimine göre:{"\n"}
                                -1/2 kap kiraz  veya{"\n"}
                                -1 portakal{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 420 Kalori{"\n"}
                                Yeşil Mercimek Yemeği{"\n"}
                                Yanında:{"\n"}
                                -1 dilim kızarmış tahıl veya ekşi maya ekmeği ve{"\n"}
                                -1 kase yağsız yoğurt veya ayran tavsiye edilir. {"\n"}

                                {"\n"}===={"\n"}

                                {"\n"}5. GÜN{"\n"}

                                {"\n"}
                                {"\n"}KAHVALTI, 260 Kalori{"\n"}
                                Yumurtalı Açık Tost{"\n"}
                                -1 kayısı yumurta{"\n"}
                                -1/4 avokado{"\n"}
                                -1 tatlı kaşığı zeytinyağı{"\n"}
                                -1 dilim tam tahıllı kızarmış ekmek{"\n"}
                                -1 kaşık lor peyniri{"\n"}
                                Kızarmış ekmeğin üstüne zeytinyağı ile ezdiğiniz avokadoyu sürün ve üstüne lor peynirini ekleyin. Tercihen yeşil çay veya macha çayı ile tüketin.{"\n"}

                                {"\n"}ARA ÖĞÜN, 90 Kalori{"\n"}
                                -1 adet büyük havuç{"\n"}
                                - 2 yemek kaşığı humus{"\n"}

                                {"\n"}
                                {"\n"}ÖĞLE YEMEĞİ, 350 – 400 Kalori{"\n"}
                                Karışık Sebzeli Mantar Dolması{"\n"}
                                -4 adet büyük mantar{"\n"}
                                -1 yemek kaşığı zeytinyağ{"\n"}
                                -1 diş sarmısak{"\n"}
                                -1/2 kuru soğan{"\n"}
                                -1/2 yeşil tatlı biber{"\n"}
                                -1/2 sarı biber{"\n"}
                                -1/4 demet maydanoz{"\n"}
                                -1/4 çay kaşığı tuz ve karabiber{"\n"}
                                Küçük küp halinde kesilip bir tavada kızaran sebzeleri mantarların içine yerleştirip önceden 250 derecede ısıtılmış fırında 10 dk kızartın. Dilerseniz az miktarda mantarların üstüne az yağlı kaşar ekleyerek fırına verebilirsiniz.{"\n"}
                                Yanında,{"\n"}
                                -1/2 kap lapa pirinç ile tükebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 100 Kalori{"\n"}
                                -1/2 elma{"\n"}
                                -4 yarım ceviz{"\n"}
                                -Yeşil çay{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 440 Kalori{"\n"}
                                Kağıtta Levrek{"\n"}
                                -1 adet levret fileto{"\n"}
                                -1/4 kap küp halinde doğranmış havuç{"\n"}
                                -2 adet mini çiçek brokoli{"\n"}
                                -2 adet mini karnıbahar{"\n"}
                                -3 adet çeri domates{"\n"}
                                -1 adet küçük biber{"\n"}
                                -1/2 kırmızı soğan{"\n"}
                                -1 diş sarımsak{"\n"}
                                -     3 yemek kaşığı zeytinyağı{"\n"}
                                -     1/2 yemek kaşığı beyaz sirke{"\n"}
                                -     1 çay kaşığı rezene tohumu{"\n"}
                                -     1/2 çay kaşığı tuz ve karabiber{"\n"}
                                Domates hariç, soğanı yuvarlak yuvarlak, havuç dışındaki sebzeleri iri parçalar halinde doğrayın. Bir yemek kaşığı zeytinyağında, domates hariç bütün sebzeleri hafifçe soteleyin. Büyük bir parça yağlı kağıt kesin, sebzeleri kağıda dökün, domatesleri de ortadan ikiye bölüp ekleyin. Ezilmiş sarımsak, zeytinyağı, sirke, tuz ve baharatları bir kasede harmanlayın. Balık filetoyu sebzelerin üzerine yerleştirin. Zeytinyağı ve baharat karışımını balıkların üzerinde gezdirin.Yağlı kağıdı, içindeki malzemeler hava almayacak şekilde katlayın. 200 derecede önceden ısınmış fırında 20-25 dakika pişirerek hazırlayabilirsiniz.{"\n"}

                                {"\n"}GECE ATIŞTIRMASI, 74 Kalori{"\n"}
                                1 kutu meyveli probiyotik yoğurt{"\n"}
                                ======{"\n"}

                                {"\n"}6. GÜN{"\n"}

                                {"\n"}KAHVALTI, 260 Kalori{"\n"}
                                Kuru Meyveli Yulaf Ezmesi{"\n"}
                                -4 yemek kaşığı yulaf{"\n"}
                                -1.5 bardak yağsız süt veya badem sütü{"\n"}
                                -     1 adet küp seklinde dilimlenmiş kuru incir{"\n"}
                                -     2 adet küp seklinde dilimlenmiş kayısı{"\n"}
                                Tercih ettiğiniz süt ile pişirdikten sonra üstüne kuru meyvelerle ve dilerseniz 1/2 çay kaşığı tarçın koyarak tüketebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 65 Kalori{"\n"}
                                1 adet muz ve 1 yemek kaşığı fıstık ezmesi veya hurma{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 300 Kalori{"\n"}
                                Zeytinyağlı Ispanak Yemeği{"\n"}
                                6 yemek kaşığı kadar tüketiniz. Dilerseniz 1 kase yoğurt ile yiyebilirsiniz.{"\n"}
                                - 1 dilim kızarmış tam tahıl ekmek{"\n"}

                                {"\n"}ARA ÖĞÜN, 150 Kalori{"\n"}
                                -1 orta boy elma{"\n"}
                                -5 adet kavrulmamış badem{"\n"}

                                {"\n"} AKŞAM YEMEĞİ, 390 Kalori{"\n"}
                                Karnıbahar Pizza{"\n"}
                                -     1 adet küçük boy karnabahar{"\n"}
                                -     1 adet yumurta{"\n"}
                                -     1/2 şu bardağı rendelenmiş kaşar peyniri{"\n"}
                                -     1/2 çay kaşığı tuz{"\n"}
                                -     1/4 çay kaşığı karabiber{"\n"}
                                -     1 tatlı kaşığı dilediğiniz diğer baharatlar{"\n"}
                                -     1 adet orta boy domates{"\n"}
                                -     4 adet mantar{"\n"}
                                -     200 gram rendelenmiş mozeralla peyniri{"\n"}
                                -     3 yemek kaşığı domates sosu{"\n"}
                                -     1 yemek kaşığı zeytinyağı{"\n"}
                                Yıkayıp üzerlerini kuruladığınız karnabaharları, blenderdan geçirip kum haline getirin. kaynar su dolu bir tencerede kısa süre haşlayın. Haşlanmış karnabaharları; yumurta, rendelenmiş kaşar peyniri, tuz, karabiber ve baharat karışımıyla derin bir kasede karıştırarak hamur haline getirin. Karnabahardan oluşan pizza tabanını yağlı kağıt serili fırın tepsisi üzerine yuvarlak şeklinde yayın. Domates sosunu da üzerine yayın. Domatesi halka şeklinde incecik dilimleyin ve mantarları ince ince kestikten sonra pizzanın üzerine yerleştirin. Son olarak rendelenmiş mozzarella peynirini üzerine serpiştirdikten sonra hazırladığınız pizzayı önceden ısıtılmış 200 derece fırında 20-25 dakika kadar pişirin. 1 porsiyon 3 dilimdir.{"\n"}

                                {"\n"}======={"\n"}
                                7. GÜN {"\n"}

                                {"\n"}KAHVALTI, 290 Kalori{"\n"}
                                Soğanlı Menemen{"\n"}
                                -2 adet domates{"\n"}
                                -1/2 kuru soğan{"\n"}
                                -1 adet sivri biber{"\n"}
                                -3 adet yumurta akı{"\n"}
                                -1 yemek kaşığı zeytinyağı{"\n"}
                                -1 dilim kızarmış ekşi maya ekmeği veya tam tahıllı ekmek{"\n"}
                                Malzemeleri kavurup, üzerine dilerseniz 1 yumurtayı sarısı ile beraber kırabilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 70 Kalori{"\n"}
                                -1 adet şeftali{"\n"}
                                -4 adet badem{"\n"}

                                {"\n"}ÖĞLE YEMEĞİ, 310 Kalori{"\n"}
                                -Zeytinyağlı Barbunya{"\n"}
                                6 yemek kaşığı 1 porsiyondur. Yanında dilerseniz 1 kase yoğurt veya 1 dilim ekmek ile tüketebilirsiniz.{"\n"}

                                {"\n"}ARA ÖĞÜN, 70 Kalori{"\n"}
                                -     1 top dondurma veya{"\n"}
                                -     1 kase probiyotik meyveli yoğurt{"\n"}

                                {"\n"}AKŞAM YEMEĞİ, 420 Kalori{"\n"}
                                Fırında Sardalya{"\n"}
                                -250 gram sardalya{"\n"}
                                -5 adet çeri domates{"\n"}
                                -1 diş sarımsak{"\n"}
                                - 1/2 kuru soğan{"\n"}
                                -3 yemek kaşığı zeytinyağı{"\n"}
                                -1/4 demet maydanoz{"\n"}
                                -½ limon{"\n"}
                                -tuz ve karabiber{"\n"}
                                -1 dilim kızarmış ekmek{"\n"}
                                -1 kase karışık yeşillik salata{"\n"}
                                Fırında malzemeleri harmanlayarak önceden ısıtılmış 200 derece fırında 30 dakika kadar pişirin.{"\n"}

                                {"\n"}GECE ATIŞTIRMASI, 50 Kalori{"\n"}
                                -2  küp bitter çikolata{"\n"}
                                - yasemin çayı ile tüketebilirsiniz.{"\n"}

                                {"\n"}{"\n"}


                            </Text>
                        </ScrollView>

                    </Wallpaper>

                );
                break;
            case 7:
                return (
                    <Wallpaper source={require('../../images/TamVejeyeryan.jpg')}>

                        <ScrollView style={styles.viewStyle} contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustContentInsets={false}>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }} >
                                <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>TAMAMEN VEJETARYEN 7 GÜNLÜK DİYET MENÜSÜ </Text>{"\n"}{"\n"}


                                {"\n"}1.GÜN {"\n"}

                                {"\n"} {"\n"}

                                {"\n"}KAHVALTI, 694 kal {"\n"}
                                Meyveli ve Bademli Yoğurt  {"\n"}
                                Malzemeler: {"\n"}
                                -3 yemek kaşığı karışık çiğ kuru yemiş {"\n"}
                                -1 yemek kaşığı ay çekirdeği {"\n"}
                                -1 yemek kaşığı kabak çekirdeği {"\n"}
                                -1 adet dilimlenmiş muz {"\n"}
                                -1, 2 avuç frambuaz veya yabanmersini (taze bulamazsanız donmuş olarak alıp çözebilirsiniz) {"\n"}
                                -200g yoğurt {"\n"}
                                Hazırlanışı: yoğurdun üzerine dilediğiniz gibi meyve ve kuru yemişlerinizi ekleyerek keyifle yiyebilirsiniz. Yanında 1 bardak sade filtre kahve önerilir.  {"\n"}

                                {"\n"}ARA ÖĞÜN, 200 kal. {"\n"}
                                3 adet ceviz, 5 adet badem ve 2 adet hurma .  {"\n"}

                                {"\n"}ÖĞLE, 222 kal. {"\n"}
                                Yeşil Mercimek Yemeği  {"\n"}
                                -8 yemek kaşığı kadar tüketiniz {"\n"}
                                -4 yemek kaşığı yağsız yoğurt ile tüketiniz. {"\n"}
                                {"\n"}
                                ARA ÖĞÜN, 116 kal {"\n"}
                                1 adet havuç ve 3 yemek kaşığı humuş {"\n"}

                                {"\n"}AKŞAM, 431 kal {"\n"}
                                Kızarmış Tofu Noodle (Tarif 2 kişiliktir.)  {"\n"}
                                Malzemeler: {"\n"}
                                -2 Parça Egg Noodle; paketin üzerindeki pişirme talimatlarına uygun olarak pişirilmiş {"\n"}
                                -100g. Tofu Peyniri, küp halinde kesilmiş {"\n"}
                                -1 adet kırmızı biber, İnce şeritler halinde kesilmiş {"\n"}
                                -3-4 dilim Ananas, küp kesilmiş {"\n"}
                                -1 adet soğan, ince dilimlenmiş (yarım ay şeklinde) {"\n"}
                                3 diş sarımsak , ince kıyılmış {"\n"}
                                2 Tatlı kaşığı taze zencefil rendesi {"\n"}
                                1 Avuç taze kişnis, ince kıyılmış {"\n"}
                                3 yk. Ananas Suyu {"\n"}
                                3 yk. Soya sosu {"\n"}
                                1 yk. Zeytinyağı {"\n"}

                                {"\n"}Hazırlanışı: {"\n"}
                                Tofu peynirlerini altın sarısı olana kadar 4,5 dk yüksek ateşte kızartın, tabağa alın. Zeytinyağı ile soğan ve kırmızı biberleri 1,2 dk soteleyin ve ardından sarımsak ve zencefili ilave edin. Küp şeklinde kesilmiş ananas, tofu ve noodleları tavanıza ilave edip, bir kez daha karıştırın ve üzerine sosları ilave ederek hepsini 1,2 dk karıştırdıktan sonra, sıcakken servis edin. {"\n"}

                                {"\n"}
                                {"\n"}2. GÜN  {"\n"}

                                {"\n"}KAHVALTI, 520 kal. {"\n"}
                                Hindistan Cevizi ve Muzlu Vegan Pankek {"\n"}
                                Malzemeler: {"\n"}
                                -150 g. Soya Unu veya yulaf unu {"\n"}
                                -2 çay kaşığı kabartma tozu {"\n"}
                                -3 yemek kaşığı pekmez {"\n"}
                                -300 ml hindistan cevizi sütü {"\n"}
                                -Zeytinyağı ( kızartmak için ) {"\n"}
                                -1-2 muz {"\n"}
                                -1 avuç böğürtlen veya arzu ettiğiniz başka bir meyve {"\n"}
                                -1 tutam tuz {"\n"}

                                {"\n"}Hazırlanışı: {"\n"}
                                Ince ince dilimlediğiniz muz, un ve kabartma tozunu bir kaba koyun ve pekmez ve tuzu ekleyerek hepsini hindistan cevizi sütü ile blendarda karıştırın. Karışımınızı kızartma tavasına dökün ve üzerine muz dilimlerini yerleştirin. Kabarcıklar yüzeye çıkıp kenarları kızarana dek pişirin, ardından tersini çevirerek pankekin arka kısmını da pişirin. İstediğiniz meyveden 1 porsiyon üzerine ilave ederek afiyetle yiyebilirsiniz. {"\n"}

                                {"\n"}
                                {"\n"}ARA ÖĞÜN, 110 kal. {"\n"}
                                Probiyotik yoğurt ve 1 adet elma {"\n"}

                                {"\n"}ÖĞLE, 260 kal {"\n"}
                                Egzotik Avokado Salatası {"\n"}
                                Malzemeler: {"\n"}
                                -1 avokado {"\n"}
                                -3 dilim ananas veya 1 kap çilek {"\n"}
                                -2 yemek kaşığı ay çekirdeği {"\n"}
                                -50 g. baby ıspanak {"\n"}
                                -yarım limon suyu {"\n"}
                                -1 yemek kaşığı zeytinyağı {"\n"}

                                {"\n"}Hazırlanışı: {"\n"}
                                Dilimlediğiniz avokado ve meyveleri zeytinyağı ile ıspanaklarla karıştırın, üzerine limon suyu, ay cekirdeklerini ekleyin, yemeğe hazır. {"\n"}

                                {"\n"} {"\n"}
                                ARA ÖĞÜN, 128 kal. {"\n"}
                                1 kap popcorn. Farklı tatlar için dilerseniz üzerine baharatlar ekleyip fırınlayabilirsiniz. {"\n"}
                                {"\n"}
                                AKŞAM, 380 kal.  {"\n"}
                                Baharatlı, Kırmızı Biberli ve Domatesli Vegan Çorba {"\n"}
                                Malzemeler: {"\n"}
                                -290g. Kavrulmuş kırmızı biber {"\n"}
                                -270g. Kiraz domates {"\n"}
                                -2 sarımsak {"\n"}
                                -3 Su bardağı sebze suyu {"\n"}
                                -1 çay kaşığı kırmızı biber {"\n"}
                                -Yarım çay kaşığı karabiber {"\n"}
                                -1 çorba kaşığı zeytinyağı {"\n"}
                                -4 çorba kaşığı öğütülmüş badem {"\n"}

                                {"\n"}Hazırlanışı: {"\n"}
                                Kavrulmuş biberleri, kiraz domatesleri, sarımsağı, kırmızı biber, karabiber, zeytinyağı ve öğütülmüş bademi sebze suyu ile karıştırarak pürüzsüz olana dek blenderdan geçirin. Kaynayana dek pişirin, ardından altını kısıp yaklaşık 3 -4 dakika kısık ateşte pişirin ve yemeğe hazır. Yanında 1 dilim tahıllı ekmek ile tüketebilirsiniz. {"\n"}

                                {"\n"}3.GÜN {"\n"}

                                {"\n"}KAHVALTI, 383 {"\n"}
                                Kuru Meyveli Müsli {"\n"}
                                Malzemeler: {"\n"}
                                -5 yemek kaşığı yulaf {"\n"}
                                -1 avuç çiğ kuru yemiş {"\n"}
                                -2 adet kuru kayısı {"\n"}
                                -2 adet kuru incir {"\n"}
                                -1 bardak soya veya badem sütü {"\n"}

                                {"\n"}Hazırlanışı:  {"\n"}
                                Tercih ettiğiniz süt ile yulafı orta ateşte pişirdikten sonra, üzerine küp sekilinde doğradınız kuru meyve ve kuru yemişleri ekleyerek yanında yeşil çay veya sade filtre kahve ile afiyetle yiyebilirsiniz.  {"\n"}

                                {"\n"}ARA ÖĞÜN, 180 kal {"\n"}
                                1 yemek kaşığı fıstık ezmesi ve 1 adet muz. {"\n"}

                                {"\n"}ÖĞLE, 360 kal.  {"\n"}
                                Nohutlu Semizotu {"\n"}
                                Malzemeler: {"\n"}
                                -2 demet semizotu {"\n"}
                                -2 adet havuç (rendelenmiş) {"\n"}
                                -1 bardak haşlanmış nohut {"\n"}
                                -2 çorba kaşığı pirinç {"\n"}
                                -1 adet soğan {"\n"}
                                -3 adet domates (rendelenemiş) {"\n"}
                                -2 bardak su {"\n"}
                                -Zeytinyağı {"\n"}
                                -Tuz {"\n"}

                                {"\n"}Hazırlanışı: {"\n"}
                                Önce soğanları kavurun, sonra havuçları da ekleyin, yumuşayınca domatesleri ekleyin ve biraz pişince üzerine semizotunu da ilave edin. Suyunu çekince nohutları ve pirinci ekleyin, suyunu ve tuzunu ekleyip pişmeye bırakın. Dilerseniz biraz limon sıkabilirsiniz. Yanında 3 yemek kaşığı yağsız yoğurt ile tüketebilirsiniz. {"\n"}

                                {"\n"}
                                {"\n"}ARA ÖĞÜN, 64 kal. {"\n"}
                                1 bardak çikolatalı badem sütü {"\n"}

                                {"\n"} {"\n"}
                                AKŞAM, 620 kal. {"\n"}
                                Fesleğen ve Domatesli Pizza {"\n"}
                                Malzemeler: {"\n"}
                                •Tam buğday unlu pizza hamuru {"\n"}
                                •Gerektiği kadar mısır unu {"\n"}
                                •2 büyük sarımsak {"\n"}
                                •Yarım fincan mozarella peyniri {"\n"}
                                •1/4 fincan parmesan peyniri {"\n"}
                                •3 dilim jambon {"\n"}
                                •Çeşitli domatesler (sarı, cherry, yeşil domates kullanabilirsiniz. ) {"\n"}
                                •Taze fesleğen yaprakları {"\n"}
                                •1/8 çay kaşığı ezilmiş kırmızı biber {"\n"}

                                {"\n"}Hazırlanışı: {"\n"}
                                Peynirleri rendeleyin. Domatesleri doğrayın. Hamuru hafifçe unlanmış düz bir yüzeye yerleştirin. Fırın tepsinizin üzerine mısır unu serpin ve pizza hamurunuzu yayın. Kalan malzemeleri gelişigüzel pizza hamurunuzun üzerine yerleştirerek hamurunuz pişip peynirler eriyene dek önceden 200 derecede ısıttığınız fırında pişirin. {"\n"}

                                {"\n"}
                                {"\n"}4.GÜN {"\n"}

                                {"\n"}KAHVALTI, 425kal. {"\n"}
                                Nohut Unlu Omlet {"\n"}
                                Malzemeler: {"\n"}
                                -1/2 çorba kaşığı öğütülmüş keten tohumu {"\n"}
                                -1 çorba kaşığı içme suyu {"\n"}
                                -1/2 bardak nohut unu {"\n"}
                                -1 diş ince doğranmış sarımsak {"\n"}
                                -1 sap ince doğranmış yeşil soğan (veya yarım minik kuru soğan) {"\n"}
                                -1/2 çay kaşığı zerdecal {"\n"}
                                -1/2 bardak minik doğranmış sebzeler (kırmızı biber, yeşil biber, domates, dereotu, maydanoz) {"\n"}
                                -1/2 bardak kadar şu (gerekirse bir iki kaşık daha su) {"\n"}
                                (İsteğe bağlı olarak 1 çorba kaşığı nutritional yeast) {"\n"}
                                İsteğe göre tuz, karabiber veya diğer baharatlar. {"\n"}
                                Hazırlanışı: {"\n"}
                                Keten tohumu ile bir çorba kaşığı suyu karıştırıp 5 dakika bekleyin. Bu arada şu hariç diğer malzemeleri bir kapta harmanlayın. Üzerine keten tohumu karışımını ekleyin. Azar azar şu ilave edin ki cıvık olmasın. Yağladığınız ve ısıttığınız tavada omlet gibi pişirin. {"\n"}
                                {"\n"}

                                {"\n"}ARA ÖĞÜN, 220 kal. {"\n"}
                                5 adet kuru erik ve 10 badem {"\n"}
                                {"\n"}
                                ÖĞLE, 335 kal. {"\n"}
                                Şeftatlili Semiz Otu Salatası {"\n"}
                                -1 adet şeftali {"\n"}
                                -1 kap çilek {"\n"}
                                -3 kap semizotu {"\n"}
                                -3 yemek kaşığı zeytinyağı {"\n"}
                                -Limon suyu {"\n"}
                                -1 yemek kaşığı ay çekirdeği {"\n"}
                                Hazırlanışı: {"\n"}
                                şeftatlileri ve çilekleri küp küp doğrayarak, zeytinyağı ve limon suyu ile hazırladığınız semizotu ile karıştırın ve üzerine ay çekirdeklerini ekleyin. {"\n"}
                                {"\n"}

                                {"\n"}ARA ÖĞÜN, 160 kal.  {"\n"}
                                Muz Sorbe {"\n"}
                                Malzemeler: {"\n"}
                                -1 adet küçük muz {"\n"}
                                -1/2 greyfurt {"\n"}
                                Hazırlanış̧ı : {"\n"}
                                Malzemeleri blendirdan geçirip tüketebilirsiniz. Yanında mate veya yeşil çay tavsiye edilir. {"\n"}

                                {"\n"}
                                {"\n"}AKŞAM, 118 kal. {"\n"}
                                Sebze Çorbası {"\n"}
                                Malzemeler: {"\n"}
                                -Ispanak yada semizotu ve maydanoz yada taze soğ̆an ve brokoli {"\n"}
                                -Kuş̧konmaz {"\n"}
                                Hazırlanış̧ı : {"\n"}
                                Malzemelerin hepsini bir tencerede haşlayın. Daha sonra blendirdan geçirip kıvamına göre biraz su ekleyin. 1 kase tüketebilmesi tavsiye ediler. Yanında 1 dilim tahıllı ekmek yiyebilirsiniz. {"\n"}

                                {"\n"}
                                {"\n"}5.GÜN {"\n"}

                                {"\n"}KAHVALTI, 230 kal.  {"\n"}
                                Chia Tohumu Pudingi {"\n"}
                                Malzemeler: {"\n"}
                                -3 bardak badem sütü (şekersiz),{"\n"}
                                -Yarım bardak chia tohumu, {"\n"}
                                -1-3 çay kaşığı akçaağaç şurubu {"\n"}
                                -3 yemek kaşığı çiğ yemişler veya taze meyveler ile tatlandırabilirsiniz. {"\n"}
                                Hazırlanış̧ı : {"\n"}
                                Badem şütünü, chia tohumlarını ve akçaağaç şurubunu bir kâsede çırpın. 2-3 saat kadar buzlukta bekletin. Malzemeler dondukları zaman daha iyi karışırlar ama donduracak vaktiniz yoksa önemli değil. {"\n"}
                                Pudingi servis etmeden önce tekrar iyice karıştırın. Seçtiğiniz tatlandırıcılar ile süsleyin. {"\n"}

                                {"\n"} {"\n"}
                                ARA ÖĞÜN, 110 kal.  {"\n"}
                                1 avuç beyaz leblebi, 1 bardak kefir  {"\n"}

                                {"\n"}ÖĞLE, 470 kal. {"\n"}
                                Vegan Burger {"\n"}
                                Malzemeler : {"\n"}
                                •2 adet havuç {"\n"}
                                •1 adet kuru soğan {"\n"}
                                •1 adet kabak {"\n"}
                                •Yarım şu bardağı yeşil mercimek {"\n"}
                                •3 diş sarımsak {"\n"}
                                •3 yemek kaşığı zeytinyağı {"\n"}
                                •2 çay kaşığı kimyon {"\n"}
                                •1 tutam tuz {"\n"}
                                •1 çay kaşığı kekik {"\n"}
                                •Yarım çay kaşığı karabiber {"\n"}
                                •Yarım çay bardağı ayçiçeği içi {"\n"}
                                •2 adet domates {"\n"}
                                •1 adet kıvırcık marul {"\n"}
                                •Hamburger ekmeği {"\n"}
                                Hazırlanışı: {"\n"}
                                Yeşil mercimeği iyice yumuşayana kadar haşlayın. Ayrı bir tarafta kabak ve havuçları rendeleyin. Kuru soğanı piyazlık olacak şekilde doğrayın. Sarımsakları rendeleyin. Bir tavada zeytinyağını kızdırdıktan sonra, önce soğanları biraz kavurun ardından sarımsakları birer dakika, havucu birer dakika, kabağı birer dakika kavrulacak şekilde sırasıyla ekleyin. Kavrulan karışımı kenara alarak soğumasını bekleyin. {"\n"}
                                Soğuyan harcın içerisine haşlanmış mercimekleri, ay çekirdeği içi, kimyon, kekik, karabiber ve tuzu ekleyerek karıştırın. Karışımınızdan küçük parçalar alarak hamburger köftesi şekli verin hafif yağlı tavada önlü arkalı kızaracak şekilde pişirin. {"\n"}
                                Domatesleri halka olacak şekilde dilimleyin, marulları yapraklarına ayırın. Hamburger ekmeklerinin tabanına marul yaprağı, üzerine halka domates ve üzerine de vegan hamburger köftenizi ekleyerek hazırlayın. Dilerseniz sos da ekleyebilirsiniz. {"\n"}

                                {"\n"} ARA ÖĞÜN, 90 kal.  {"\n"}
                                2 adet grisini, 1 bardak ayran  {"\n"}

                                {"\n"}AKŞAM, 300 kal. {"\n"}
                                Kabak salatası {"\n"}
                                Malzemeleri {"\n"}
                                Yarım havuç {"\n"}
                                1 adet kabak {"\n"}
                                2 adet küçük boy salatalık {"\n"}
                                1 adet limon {"\n"}
                                Yarım dış̧ sarımsak (isteğinize bağlı) {"\n"}
                                Taze fesleğ̆en {"\n"}
                                1 tutam ince kıyılmış̧ dereotu {"\n"}
                                Yarım enginar {"\n"}
                                Hazırlanış̧ı: {"\n"}
                                Kabakları soymadan uzunlamasına ince kesiniz. Sarımsak, taze fesleğ̆en, dereotu ve limon suyunu blendirdan geçirip kabaklarla harmanlayınız. 1 saat kadar bekletin. Havuç ve salatalıkları da uzunlamasına kesip beklettığ̆imiz kabaklarla karış̧tırıp servis ediniz. {"\n"}

                                {"\n"}
                                {"\n"}6.GÜN {"\n"}

                                {"\n"}KAHVALTI, 318 kal {"\n"}
                                Meyve Salatası  {"\n"}
                                Malzemeler: {"\n"}
                                -3 dilim Ananas {"\n"}
                                -1 Kivi {"\n"}
                                -1 avuç böğürtlen {"\n"}
                                -3 adet Çilek {"\n"}
                                Hazırlanışı: {"\n"}
                                Meyveleri küp küp doğrayıp böğürtlenlerle süsleyiniz. {"\n"}
                                Yanında 1 bardak sade filtre kahve önerilir. {"\n"}
                                {"\n"}

                                {"\n"}ARA ÖĞÜN, 220 kal. {"\n"}
                                Muzlu Kurabiye {"\n"}
                                Malzemeler : {"\n"}
                                •1 adet iri muz {"\n"}
                                •2 şu bardağı yulaf unu {"\n"}
                                •1 çay kaşığı karbonat {"\n"}
                                •1 şu bardağı şeker (isteğe göre daha eksik de yapabilirsiniz) {"\n"}
                                •1 yemek kaşığı vanilya {"\n"}
                                •150 gram bitkisel margarin (oda sıcaklığında) {"\n"}
                                Hazırlanışı: {"\n"}
                                Muzu soyup çatalla ezin, başka bir kapta margarin ve şekeri birbirine iyice yedirin, üzerine muzu ve vanilyayı da ilave edin . Unun içerisine karbonatı ekleyerek karıştırın ve ardından karışıma ekleyerek yumuşak bir hamur elde edene kadar iyice yoğurun. Hamurdan küçük toplar alıp kurabiye şekli vererek, yağlı kağıt serilmiş fırın tepsisine koyun ve 180 derecede ısıtılmış fırında 12 – 15 dakika kenarları kızarana kadar pişirin. {"\n"}
                                1 fincan sade veya badem sütlü kahve yanında önerilir. {"\n"}

                                {"\n"} {"\n"}
                                ÖĞLE, 386 kal.  {"\n"}
                                Mantar ve Brokolili Vegan Noodle Tarifi {"\n"}
                                Malzemeler : {"\n"}
                                •3 su bardağı sebze suyu {"\n"}
                                •1 paket egg noodle {"\n"}
                                •1 küçük baş brokoli {"\n"}
                                •1 yemek kaşığı susam yağı {"\n"}
                                •250 gr kestane mantarı {"\n"}
                                •1 büyük sarımsak {"\n"}
                                •½ çay kaşığı kırmızı biber {"\n"}
                                •2 sap taze soğan {"\n"}
                                •Kavrulmuş kaju {"\n"}
                                Hazırlanışı: {"\n"}
                                Sebze suyunu küçük bir tencereye alıp kaynatın, kaynayan suyun içerisine noodle ekleyip yaklaşık 2 dakika boyunca kaynatmaya devam edin. Ardından içine brokolileri koyun ve 2 dakika daha kaynatın. Kaynamış sudan yarım bardak kadar ayırın ve kalan suyun içerisindeki noodle ve brokoliyi süzüp bir kaba alın. Bir tavaya susam yağını ve mantarları ekleyin. Yaklaşık 2 dakika kadar altın rengini alana dek mantarları kızartıp kavurun. İçerisine sarımsağı, taze soğanın bir kısmını, kırmızı biberi ekleyin 1 dakika daha pişirin ve içerisine brokolili noodle ‘i ekleyin. Yarım bardak suyu da içerisine ilave ederek tahta kaşık yardımı ile 1 -2 dakika daha pişirin. {"\n"}

                                {"\n"} {"\n"}
                                ARA ÖĞÜN, 164 kal. {"\n"}
                                3 kuru kayısı ve 2 parça ceviz {"\n"}
                                {"\n"}

                                {"\n"}AKŞAM,  250-300 kal. {"\n"}
                                Detoks Sebze Çorbası {"\n"}
                                Malzemeler: {"\n"}
                                Enginar {"\n"}
                                Taze dereotu {"\n"}
                                Kabak {"\n"}
                                Soğ̆an {"\n"}
                                Pancar {"\n"}
                                Hazırlanışı :  {"\n"}
                                Ağız tadınıza göre dilediğiniz kadar sebze miktarlarını ayarlayabiliriniz.{"\n"}
                                Malzemelerin hepsini bir tencerede haşlayın. Haşlama iş̧leminden sonra blendırdan geçirin ve üzerine kıvama göre biraz şu ekleyin. 1 kase tüketmeniz önerilir. {"\n"}

                                {"\n"}
                                {"\n"}7.GÜN  {"\n"}

                                {"\n"}KAHVALTI,  375 kal.{"\n"}
                                Muzlu Yulaf Ezmesi {"\n"}
                                Malzemeler: {"\n"}
                                -5 yemek kaşığı yulaf {"\n"}
                                -1  muz {"\n"}
                                -2 yemek kaşığı bal {"\n"}
                                -1 çk hindistan cevizi rendesi{"\n"}
                                -1 bardak soya veya badem sütü {"\n"}
                                Hazırlanışı :{"\n"}
                                Tercih ettiğiniz süt ile yulafı orta ateşte pişirdikten sonra, üzerine küp şeklinde doğradınız meyveleri ekleyerek üzerine süzme balı dökünüz. Yanında yeşil çay veya sade filtre kahve ile afiyetle yiyebilirsiniz. {"\n"}

                                {"\n"} {"\n"}
                                ARA ÖĞÜN,  160 kal.{"\n"}
                                1 bardak kefir, 10 fındık {"\n"}
                                {"\n"}
                                ÖĞLE, 360 kal.{"\n"}
                                Elmalı Karabuğday {"\n"}
                                Malzemeler: {"\n"}
                                -1 adet orta boy elma {"\n"}
                                -3 kaş̧ık karabuğday {"\n"}
                                -1 çay kaş̧ığı kadar tarçın {"\n"}
                                Hazırlanış̧ı: Karabuğdayları haşlayın. Elmayı kabuklarıyla beraber üzerine rendeleyin ve 1 çay kaş̧ığı tarçın ilave edin. Karabuğday ile karıştırın.{"\n"}

                                {"\n"}ARA ÖĞÜN, 70 kal. {"\n"}

                            </Text>
                        </ScrollView>

                    </Wallpaper>

                );
                break;

            default:
                break;
        }

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,

        });
    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (


            <SideMenuu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={isOpen => this.updateMenuState(isOpen)}
            >
                <View style={{ left: 0, right: 0, top: 0 }}>
                    <Header style={{ backgroundColor: '#ff0055' }}>
                        <TouchableOpacity
                            onPress={this.toggle}
                            style={styles.button}
                        >
                            <Image
                                source={menuImage}
                                style={{ width: 32, height: 32 }}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../../images/headerLogo.png')}
                            style={{ left: 130, width: '35%', height: '80%', top: 5 }}
                        />
                    </Header>
                </View>

                <View style={styles.container}>

                    {this.renderData()}

                </View>


            </SideMenuu>


        );
    }
}

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 2,
        padding: 10,
        left: 10,
    },
    images: {
        width: DEVICE_WIDTH,
        height: 230,

    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    viewStyle: {
        borderRadius: 10,
        width: DEVICE_WIDTH - 40,
        margin: 20,
        padding: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    }
});