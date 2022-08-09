const imagesPath = "..\\..\\images"
const characterIconsPath = imagesPath + "\\character icons";
const currentFileName_meta = document.querySelector("meta[data-file_name]");
const current_file_name = currentFileName_meta.dataset.file_name;

let characters = [
    `Alioni = アリオーニ = ${characterIconsPath}\\alioni.png`,
    `Arden = アーデン = ${characterIconsPath}\\arden.png`,
    `Arthur = アーサー = ${characterIconsPath}\\arthur.png`,
    `Athena = アテナ姫 = ${characterIconsPath}\\athena.png`,

    `Ban = バン = ${characterIconsPath}\\ban.png`,
    `Beatrice = ベアトリス = ${characterIconsPath}\\beatrice.png`,
    `Bellion = ベルリオン = ${characterIconsPath}\\bellion.png`,
    `Benimaru = ベニマル = ${characterIconsPath}\\benimaru.png`,
    `Brunhildr = ブリュンヒルデ = ${characterIconsPath}\\brunhildr.png`,

    `Cain = ケイン = ${characterIconsPath}\\cain.png`,
    `Camilla = カミラ = ${characterIconsPath}\\camilla.png`,
    `Chandler = チャンドラー = ${characterIconsPath}\\chandler.png`,
    `Cusack = キューザック = ${characterIconsPath}\\cusack.png`,

    `Deathpierce = デスピアス = ${characterIconsPath}\\deathpierce.png`,
    `Deldry = デルドレー = ${characterIconsPath}\\deldry.png`,
    `Denzel = デンゼル = ${characterIconsPath}\\denzel.png`,
    `Derieri = デリエリ = ${characterIconsPath}\\derieri.png`,
    `Diane = ディアンヌ = ${characterIconsPath}\\diane.png`,
    `Dogedo = ドゲッド = ${characterIconsPath}\\dogedo.png`,
    `Dreyfus = ドレファス = ${characterIconsPath}\\dreyfus.png`,
    `Drole = ドロール = ${characterIconsPath}\\drole.png`,

    `Eastin = イースティン = ${characterIconsPath}\\eastin.png`,
    `Elaine = エレイン = ${characterIconsPath}\\elaine.png`,
    `Eleven = 十一 = ${characterIconsPath}\\eleven.png`,
    `Elizabeth = エリザベス = ${characterIconsPath}\\elizabeth.png`,
    `Ellate = エルラッテ = ${characterIconsPath}\\ellate.png`,
    `Emilia = エミリア = ${characterIconsPath}\\emilia.png`,
    `Eren = エレン = ${characterIconsPath}\\eren.png`,
    `Escanor = エスカノール = ${characterIconsPath}\\escanor.png`,
    `Estarossa = エスタロッサ = ${characterIconsPath}\\estarossa.png`,

    `Fraudrin = フラウドリン = ${characterIconsPath}\\fraudrin.png`,
    `Freisia = フリージア = ${characterIconsPath}\\freisia.png`,
    `Freyr = フレイ = ${characterIconsPath}\\freyr.png`, 
    `Freyja = フレイヤ = ${characterIconsPath}\\freyja.png`, 

    `Galland = ガラン = ${characterIconsPath}\\galand.png`,
    `Gerheade = ゲラード = ${characterIconsPath}\\gerhead.png`,
    `Gilthunder = ギルサンダー = ${characterIconsPath}\\gilthunder.png`,
    `Gloxinia = グロキシニア = ${characterIconsPath}\\gloxinia.png`,
    `Golgius = ゴルギウス = ${characterIconsPath}\\golgius.png`,
    `Gowther = ゴウセル = ${characterIconsPath}\\gowther.png`,
    `Griamore = グリアモール = ${characterIconsPath}\\griamore.png`,
    `Guila = ギーラ = ${characterIconsPath}\\guila.png`,
    `Gustav = グスタフ = ${characterIconsPath}\\gustav.png`,

    `Harlequin = ハーレクイン = ${characterIconsPath}\\harlequin.png`,
    `Hawk = ホーク = ${characterIconsPath}\\hawk.png`,
    `Helbram = ヘルブラム = ${characterIconsPath}\\helbram.png`,
    `Hendrickson = ヘンドリクセン = ${characterIconsPath}\\hendy.png`,
    `Howzer = ハウザー = ${characterIconsPath}\\howzer.png`,
    `Hugo = ヒューゴ = ${characterIconsPath}\\hugo.png`,

    `Iori = 八神 = ${characterIconsPath}\\iori.png`,

    `Jenna = ジェンナ = ${characterIconsPath}\\jenna.png`,
    `Jericho = ジェリコ = ${characterIconsPath}\\jericho.png`,
    `Jillian = ジリアン = ${characterIconsPath}\\jillian.png`,
    `Jim = ジム = ${characterIconsPath}\\jim.png`,
    `Jormungandr = ヨルムンガンド = ${characterIconsPath}\\jormungandr.png`,
    `Jude = ジュド = ${characterIconsPath}\\jude.png`,

    `King = キング = ${characterIconsPath}\\king.png`,
    `Kyo = 草薙 = ${characterIconsPath}\\kyo.png`,

    `levi = リヴァイ = ${characterIconsPath}\\levi.png`,
    `Lilia = リリア = ${characterIconsPath}\\lilia.png`,
    `Liz = リズ = ${characterIconsPath}\\liz.png`,
    `Ludociel = リュドシエル = ${characterIconsPath}\\ludociel.png`,

    `Mai = 不知火 = ${characterIconsPath}\\mai.png`,
    `Marmas = マルマス = ${characterIconsPath}\\marmas.png`,
    `Matrona = マトローナ = ${characterIconsPath}\\matrona.png`,
    `Megelda = メゲルダ = ${characterIconsPath}\\megelda.png`,
    `Melascula = メラスキュラ = ${characterIconsPath}\\melascula.png`,
    `Meliodas = メリオダス = ${characterIconsPath}\\meliodas.png`,
    `Merlin = マーリン = ${characterIconsPath}\\merlin.png`,
    `Mikasa = ミカサ = ${characterIconsPath}\\mikasa.png`,
    `Mike = マイク = ${characterIconsPath}\\mike.png`,
    `Milim = ミリム = ${characterIconsPath}\\milim.png`,
    `Mono = モノ = ${characterIconsPath}\\mono.png`,
    `Monspeet = モンスピート = ${characterIconsPath}\\monspeet.png`,

    `Nanashi = ななし = ${characterIconsPath}\\nanashi.png`,

    `Oslo = オスロー = ${characterIconsPath}\\oslo.png`,

    `Ram = ラム = ${characterIconsPath}\\ram.png`,
    `Rem = レム = ${characterIconsPath}\\rem.png`,
    `Rimuru = リムル = ${characterIconsPath}\\rimuru.png`,
    `Roxy = ロキシー = ${characterIconsPath}\\roxy.png`,
    `Rugal = ルガール = ${characterIconsPath}\\rugal.png`,
    `Ruin = ルイン = ${characterIconsPath}\\ruin.png`,

    `Sariel = サリエル = ${characterIconsPath}\\sariel.png`,
    `Shin = シン = ${characterIconsPath}\\shin.png`,
    `Shuna = シュナ = ${characterIconsPath}\\shuna.png`,
    `Sigurd = シグルド = ${characterIconsPath}\\sigurd.png`,
    `Simon = サイモン = ${characterIconsPath}\\simon.png`,
    `Skadi = スカジ = ${characterIconsPath}\\skadi.png`,
    `Slader = スレイダー = ${characterIconsPath}\\slader.png`,

    `Taizoo = タイズー = ${characterIconsPath}\\taizoo.png`,
    `Tarmiel = タルミエル = ${characterIconsPath}\\tarmiel.png`,
    `Terry = テリー = ${characterIconsPath}\\terry.png`,
    `Thonar = ドーナル = ${characterIconsPath}\\thonar.png`,
    `Twigo = ツイーゴ = ${characterIconsPath}\\twigo.png`,

    `Valenti = バレンティ = ${characterIconsPath}\\valenti.png`,
    `Vivian = ビビアン = ${characterIconsPath}\\vivian.png`,

    `Waillo = ワイーヨ = ${characterIconsPath}\\waillo.png`,
    `Weinheidt = ワインハイト = ${characterIconsPath}\\weinheidt.png`,
    `Will = ウィル = ${characterIconsPath}\\will.png`,

    `Zaneri = ザネリ = ${characterIconsPath}\\zaneri.png`,
    `Zaratras = ザラトラス = ${characterIconsPath}\\zaratras.png`,
    `Zeldris = ゼルドリス = ${characterIconsPath}\\zeldris.png`,
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
