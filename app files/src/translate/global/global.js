const currentFileName_meta = document.querySelector("meta[data-file_name]");
const current_file_name = currentFileName_meta.dataset.file_name;

function getImagePath(name, fileType = "png") {
    const imagesPath = "..\\..\\images"
    const characterIconsPath = imagesPath + "\\character icons";
    return `${characterIconsPath}\\${name}.${fileType}`;
}

let characters = [
    `Alioni = アリオーニ = ${getImagePath("alioni")}`,
    `Arden = アーデン = ${getImagePath("arden")}`,
    `Arthur = アーサー = ${getImagePath("arthur")}`,
    `Athena = アテナ姫 = ${getImagePath("athena")}`,

    `Ban = バン = ${getImagePath("ban")}`,
    `Beatrice = ベアトリス = ${getImagePath("beatrice")}`,
    `Bellion = ベルリオン = ${getImagePath("bellion")}`,
    `Benimaru = ベニマル = ${getImagePath("benimaru")}`,
    `Brunhild = ブリュンヒルデ = ${getImagePath("brunhildr")}`,

    `Cain = ケイン = ${getImagePath("cain")}`,
    `Camilla = カミラ = ${getImagePath("camilla")}`,
    `Chandler = チャンドラー = ${getImagePath("chandler")}`,
    `Cusack = キューザック = ${getImagePath("cusack")}`,

    `Deathpierce = デスピアス = ${getImagePath("deathpierce")}`,
    `Deldry = デルドレー = ${getImagePath("deldry")}`,
    `Denzel = デンゼル = ${getImagePath("denzel")}`,
    `Derieri = デリエリ = ${getImagePath("derieri")}`,
    `Diane = ディアンヌ = ${getImagePath("diane")}`,
    `Dogedo = ドゲッド = ${getImagePath("dogedo")}`,
    `Dreyfus = ドレファス = ${getImagePath("dreyfus")}`,
    `Drole = ドロール = ${getImagePath("drole")}`,

    `Eastin = イースティン = ${getImagePath("eastin")}`,
    `Echidna = エキドナ = ${getImagePath("echidna")}`,
    `Elaine = エレイン = ${getImagePath("elaine")}`,
    `Eleven = 十一 = ${getImagePath("eleven")}`,
    `Elizabeth = エリザベス = ${getImagePath("elizabeth")}`,
    `Ellate = エルラッテ = ${getImagePath("ellate")}`,
    `Emilia = エミリア = ${getImagePath("emilia")}`,
    `Eren = エレン = ${getImagePath("eren")}`,
    `Escanor = エスカノール = ${getImagePath("escanor")}`,
    `Estarossa = エスタロッサ = ${getImagePath("estarossa")}`,

    `Fraudrin = フラウドリン = ${getImagePath("fraudrin")}`,
    `Freisia = フリージア = ${getImagePath("freisia")}`,
    `Freyr = フレイ = ${getImagePath("freyr")}`, 
    `Freyja = フレイヤ = ${getImagePath("freyja")}`, 

    `Galland = ガラン = ${getImagePath("galland")}`,
    `Gerheade = ゲラード = ${getImagePath("gerheade")}`,
    `Gilthunder = ギルサンダー = ${getImagePath("gilthunder")}`,
    `Gloxinia = グロキシニア = ${getImagePath("gloxinia")}`,
    `Golgius = ゴルギウス = ${getImagePath("golgius")}`,
    `Gowther = ゴウセル = ${getImagePath("gowther")}`,
    `Griamore = グリアモール = ${getImagePath("griamore")}`,
    `Guila = ギーラ = ${getImagePath("guila")}`,
    `Gustav = グスタフ = ${getImagePath("gustav")}`,

    `Harlequin = ハーレクイン = ${getImagePath("harlequin")}`,
    `Hawk = ホーク = ${getImagePath("hawk")}`,
    `Helbram = ヘルブラム = ${getImagePath("helbram")}`,
    `Hendrickson = ヘンドリクセン = ${getImagePath("hendy")}`,
    `Howzer = ハウザー = ${getImagePath("howzer")}`,
    `Hugo = ヒューゴ = ${getImagePath("hugo")}`,

    `Iori = 八神 = ${getImagePath("iori")}`,

    `Jenna = ジェンナ = ${getImagePath("jenna")}`,
    `Jericho = ジェリコ = ${getImagePath("jericho")}`,
    `Jillian = ジリアン = ${getImagePath("jillian")}`,
    `Jim = ジム = ${getImagePath("jim")}`,
    `Jormungandr = ヨルムンガンド = ${getImagePath("jormungandr")}`,
    `Jude = ジュド = ${getImagePath("jude")}`,

    `King = キング = ${getImagePath("king")}`,
    `Kyo = 草薙 = ${getImagePath("kyo")}`,

    `levi = リヴァイ = ${getImagePath("levi")}`,
    `Lilia = リリア = ${getImagePath("lilia")}`,
    `Liz = リズ = ${getImagePath("liz")}`,
    `Ludociel = リュドシエル = ${getImagePath("ludociel")}`,

    `Mai = 不知火 = ${getImagePath("mai")}`,
    `Marmas = マルマス = ${getImagePath("marmas")}`,
    `Matrona = マトローナ = ${getImagePath("matrona")}`,
    `Megelda = メゲルダ = ${getImagePath("megelda")}`,
    `Melascula = メラスキュラ = ${getImagePath("melascula")}`,
    `Meliodas = メリオダス = ${getImagePath("meliodas")}`,
    `Merlin = マーリン = ${getImagePath("merlin")}`,
    `Mikasa = ミカサ = ${getImagePath("mikasa")}`,
    `Mike = マイク = ${getImagePath("mike")}`,
    `Milim = ミリム = ${getImagePath("milim")}`,
    `Mono = モノ = ${getImagePath("mono")}`,
    `Monspeet = モンスピート = ${getImagePath("monspeet")}`,

    `Nanashi = ななし = ${getImagePath("nanashi")}`,

    `Oslo = オスロー = ${getImagePath("oslo")}`,

    `Ram = ラム = ${getImagePath("ram")}`,
    `Reinhard = ラインハルト = ${getImagePath("reinhard")}`,
    `Rem = レム = ${getImagePath("rem")}`,
    `Rimuru = リムル = ${getImagePath("rimuru")}`,
    `Roxy = ロキシー = ${getImagePath("roxy")}`,
    `Rugal = ルガール = ${getImagePath("rugal")}`,
    `Ruin = ルイン = ${getImagePath("ruin")}`,

    `Sariel = サリエル = ${getImagePath("sariel")}`,
    `Shin = シン = ${getImagePath("shin")}`,
    `Shuna = シュナ = ${getImagePath("shuna")}`,
    `Sigurd = シグルド = ${getImagePath("sigurd")}`,
    `Simon = サイモン = ${getImagePath("simon")}`,
    `Skadi = スカジ = ${getImagePath("skadi")}`,
    `Slader = スレイダー = ${getImagePath("slader")}`,

    `Taizoo = タイズー = ${getImagePath("taizoo")}`,
    `Tarmiel = タルミエル = ${getImagePath("tarmiel")}`,
    `Terry = テリー = ${getImagePath("terry")}`,
    `Thonar = ドーナル = ${getImagePath("thonar")}`,
    `Twigo = ツイーゴ = ${getImagePath("twigo")}`,

    `Valenti = バレンティ = ${getImagePath("valenti")}`,
    `Vivian = ビビアン = ${getImagePath("vivian")}`,

    `Waillo = ワイーヨ = ${getImagePath("waillo")}`,
    `Weinheidt = ワインハイト = ${getImagePath("weinheidt")}`,
    `Will = ウィル = ${getImagePath("will")}`,

    `Zaneri = ザネリ = ${getImagePath("zaneri")}`,
    `Zaratras = ザラトラス = ${getImagePath("zaratras")}`,
    `Zeldris = ゼルドリス = ${getImagePath("zeldris")}`,
];

function addCharacters(callback) {
    for (let i = 0; i < characters.length; i++) {
        let charactersArr = characters[i].split("=");
        let name = charactersArr[0].trim();
        let translated_name = charactersArr[1].trim();
        let name_and_translations = [name, translated_name];
        let image_src = charactersArr[2].trim();

        callback(image_src, name_and_translations, name);
    }
}
