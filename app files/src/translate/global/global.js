const currentFileName_meta = document.querySelector("meta[data-file_name]");
const current_file_name = currentFileName_meta.dataset.file_name;
let lastEnteredName = "";

function getLastEnteredName(e) {
    e.target.value = lastEnteredName;
    setTimeout(() => {
        e.target.setSelectionRange(lastEnteredName.length, lastEnteredName.length);
        e.target.focus();
    }, 0)
}

function getImagePath(name, fileType = "png") {
    const imagesPath = "..\\..\\images"
    const characterIconsPath = imagesPath + "\\character icons";
    return `${characterIconsPath}\\${name}.${fileType}`;
}

function makeCharacStr(name, translation, image_type = "png", image_name = name) {
    name = name.toLowerCase();
    let capitilizedName = name[0].toUpperCase() + name.slice(1);
    return `${capitilizedName} = ${translation} = ${getImagePath(image_name, image_type)}`
}

let characters = [
    // A
    makeCharacStr("alioni", "アリオーニ"),
    makeCharacStr("arden", "アーデン"),
    makeCharacStr("arthur", "アーサー"),
    makeCharacStr("athena", "アテナ"),
    // B
    makeCharacStr("ban", "バン"),
    makeCharacStr("beatrice", "ベアトリス"),
    makeCharacStr("bellion", "ベルリオン"),
    makeCharacStr("benimaru", "ベニマル"),
    makeCharacStr("brunhild", "ブリュンヒルデ", "png", "brunhildr"),
    // C
    makeCharacStr("cain", "ケイン"),
    makeCharacStr("camilla", "カミラ"),
    makeCharacStr("chandler", "チャンドラー"),
    makeCharacStr("cusack", "キューザック"),
    // D
    makeCharacStr("deathpierce", "デスピアス"),
    makeCharacStr("deldry", "デルドレー"),
    makeCharacStr("denzel", "デンゼル"),
    makeCharacStr("derieri", "デリエリ"),
    makeCharacStr("diane", "ディアンヌ"),
    makeCharacStr("dogedo", "ドゲッド"),
    makeCharacStr("dreyfus", "ドレファス"),
    makeCharacStr("drole", "ドロール"),
    // E
    makeCharacStr("eastin", "イースティン"),
    makeCharacStr("echidna", "エキドナ"),
    makeCharacStr("elaine", "エレイン"),
    makeCharacStr("eleven", "十一"),
    makeCharacStr("elizabeth", "エリザベス"),
    makeCharacStr("ellate", "エルラッテ"),
    makeCharacStr("emilia", "エミリア"),
    makeCharacStr("eren", "エレン"),
    makeCharacStr("escanor", "エスカノール"),
    makeCharacStr("estarossa", "エスタロッサ"),
    // F
    makeCharacStr("filo", "フィーロ"),
    makeCharacStr("fraudrin", "フラウドリン"),
    makeCharacStr("freisia", "フリージア"),
    makeCharacStr("freyja", "フレイヤ"),
    makeCharacStr("freyr", "フレイ"),
    // G
    makeCharacStr("galland", "ガラン"),
    makeCharacStr("gerheade", "ゲラード"),
    makeCharacStr("gilthunder", "ギルサンダー"),
    makeCharacStr("gloxinia", "グロキシニア"),
    makeCharacStr("golgius", "ゴルギウス"),
    makeCharacStr("gowther", "ゴウセル"),
    makeCharacStr("griamore", "グリアモール"),
    makeCharacStr("guila", "ギーラ"),
    makeCharacStr("gustav", "グスタフ"),
    // H
    makeCharacStr("harlequin", "ハーレクイン"),
    makeCharacStr("hawk", "ホーク"),
    makeCharacStr("helbram", "ヘルブラム"),
    makeCharacStr("hendrickson", "ヘンドリクセン", "png", "hendy"),
    makeCharacStr("howzer", "ハウザー"),
    makeCharacStr("hugo", "ヒューゴ"),
    // I
    makeCharacStr("iori", "八神"),
    // J
    makeCharacStr("jenna", "ジェンナ"),
    makeCharacStr("jericho", "ジェリコ"),
    makeCharacStr("jillian", "ジリアン"),
    makeCharacStr("jim", "ジム"),
    makeCharacStr("jormungandr", "ヨルムンガンド"),
    makeCharacStr("jude", "ジュド"),
    // K
    makeCharacStr("king", "キング"),
    makeCharacStr("kizuna", "風山絆"),
    makeCharacStr("kyo", "草薙"),
    // L
    makeCharacStr("levi", "リヴァイ"),
    makeCharacStr("lilia", "リリア"),
    makeCharacStr("liz", "リズ"),
    makeCharacStr("ludociel", "リュドシエル"),
    // M
    makeCharacStr("mai", "不知火"),
    makeCharacStr("marmas", "マルマス"),
    makeCharacStr("matrona", "マトローナ"),
    makeCharacStr("megelda", "メゲルダ"),
    makeCharacStr("melascula", "メラスキュラ"),
    makeCharacStr("meliodas", "メリオダス"),
    makeCharacStr("merlin", "マーリン"),
    makeCharacStr("mikasa", "ミカサ"),
    makeCharacStr("mike", "マイク"),
    makeCharacStr("milim", "ミリム"),
    makeCharacStr("mono", "モノ"),
    makeCharacStr("monspeet", "モンスピート"),
    // N
    makeCharacStr("naofumi", "尚文"),
    makeCharacStr("nanashi", "ななし"),
    // O
    makeCharacStr("oslo", "オスロー"),
    // P
    // Q
    // R
    makeCharacStr("ram", "ラム"),
    makeCharacStr("raphtalia", "ラフタリア"),
    makeCharacStr("reinhard", "ラインハルト"),
    makeCharacStr("rem", "レム"),
    makeCharacStr("rimuru", "リムル"),
    makeCharacStr("roxy", "ロキシー"),
    makeCharacStr("rugal", "ルガール"),
    makeCharacStr("ruin", "ルイン"),
    // S
    makeCharacStr("sariel", "サリエル"),
    makeCharacStr("shin", "シン"),
    makeCharacStr("shuna", "シュナ"),
    makeCharacStr("sigurd", "シグルド"),
    makeCharacStr("simon", "サイモン"),
    makeCharacStr("skadi", "スカジ"),
    makeCharacStr("slader", "スレイダー"),
    // T
    makeCharacStr("taizoo", "タイズー"),
    makeCharacStr("tarmiel", "タルミエル"),
    makeCharacStr("terry", "テリー"),
    makeCharacStr("thonar", "ドーナル"),
    makeCharacStr("twigo", "ツイーゴ"),
    // U
    // V
    makeCharacStr("valenti", "バレンティ"),
    makeCharacStr("vivian", "ビビアン"),
    // W
    makeCharacStr("waillo", "ワイーヨ"),
    makeCharacStr("weinheidt", "ワインハイト"),
    makeCharacStr("will", "ウィル"),
    // X
    // Y
    // Z
    makeCharacStr("Zaneri", "ザネリ"),
    makeCharacStr("Zaratras", "ザラトラス"),
    makeCharacStr("Zeldris", "ゼルドリス"),
]

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

// --------------------------- Testing -------------------------------
// ------------------------- End Testing -----------------------------
