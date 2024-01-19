import img1 from "@/imgs/php-typinggame-1.png"
import img2 from "@/imgs/php-typinggame-2.png"
import img3 from "@/imgs/php-typinggame-3.png"
import Image from "next/image";
import 'tailwindcss/tailwind.css'
/*
    書くこと
    ・名前
    ・使用技術
    ・説明
    ・感想
*/
export default function Page() {
    return (
        <div className="p-6 bg-gray-100 rounded-md shadow-lg">
            <h1 className="text-4xl text-center mb-6">タイピングゲーム</h1>

            <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">使用技術</h2>
                <ul className="text-left list-disc pl-4">
                    <li className="mb-1">js・・・ゲームとしての機能を大半、ログイン時のモダル</li>
                    <li className="mb-1">php・・・データベースに結果の入力や成績一覧のデータ取得</li>
                    <li className="mb-1">mysql・・・ユーザーのデータやタイピングする問題の管理</li>
                </ul>
            </div>

            <div className="flex flex-col">
                <h2 className="text-2xl text-center font-semibold mb-2">概要</h2>
                <div className="flex font-bold items-center">
                    <Image
                        src={img1}
                        alt="image 1"
                        className="w-1/4  object-cover rounded-md relative"
                    />
                    <span>
                        メイン画面です。ログインしていない場合ゲームをプレイしても結果は保存されません。<br />
                        結果の保存方法はゲーム画面右下の保存ボタンを押すことでデータベースにユーザー名、正解率、かかった時間が保存されます。
                    </span>
                </div>
                <div className="flex font-bold items-center">
                    <Image
                        src={img2}
                        alt="image 2"
                        className="w-1/4  object-cover rounded-md relative"
                    />
                    <span>
                        成績画面です。メイン画面上部の成績一覧を押すとゲーム画面右に出てきます。<br />
                        データベースのソート機能で正打率順で表示されます。
                    </span>
                </div>
                <div className="flex font-bold items-center">
                    <Image
                        src={img3}
                        alt="image 3"
                        className="w-1/4  object-cover rounded-md relative"
                    />
                    <span>
                        ログイン画面です。メイン画面上部のログインまたは新規登録を押すと画面中央に出てきます。<br />
                        モダルを使ってメイン画面の上に浮いているように作っています。
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">作ってみて</h2>
                <span className="font-bold">
                    現在は特定の入力じゃないと間違いになってしまっているので(ち:ti)今後は複数の入力パターンを想定した成語判定にしたいです(ち:ti,chi)。<br/>
                    デザインはあまり凝っていないのでユーザーが見やすいデザインや印象に残るようなデザインを今後学んで行こうと思います。
                </span>
            </div>
        </div>

    );
}