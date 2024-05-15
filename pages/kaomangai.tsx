import Image from "next/image"
import img1 from "@/imgs/kaomangai/kaomangai-1.png"
import img2 from "@/imgs/kaomangai/kaomangai-2.png"
import img3 from "@/imgs/kaomangai/kaomangai-3.png"
import img4 from "@/imgs/kaomangai/kaomangai-4.png"
import img5 from "@/imgs/kaomangai/kaomangai-5.png"

import 'tailwindcss/tailwind.css'
export default function Page(){
    return(
        <div className="p-6 bg-gray-100 rounded-md shadow-lg">
            <h1 className="text-4xl text-center mb-6">食べログサイト</h1>

            <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">使用技術</h2>
                <ul className="text-left list-disc pl-4">
                    <li className="mb-1">Next.js・・・フロントエンド全般、typescriptを使用しました。</li>
                    <li className="mb-1">firebase・・・ユーザーデータの管理</li>
                    <li className="mb-1">google cloud storage・・・画像の管理</li>
                    <li className="mb-1">グルナビAPI・・・店舗情報取得</li>
                </ul>
            </div>

            <div className="flex flex-col">
                <h2 className="text-2xl text-center font-semibold mb-2">概要</h2>
                <div className="flex flex-col md:flex-row font-bold items-center mb-3">
                    <Image
                        src={img1}
                        alt="image 1"
                        className="object-cover rounded-md relative"
                        height={300}
                    />
                    <span>
                        メイン画面です。APIから取得してきた店舗情報を表示しています。<br />
                    </span>
                </div>
                <div className="flex flex-col md:flex-row font-bold items-center mb-3">
                    <Image
                        src={img2}
                        alt="image 2"
                        className="object-cover rounded-md relative"
                        height={300}
                    />
                    <span>
                        右にスワイプすると気になるリストに登録され、左にスワイプすると次の店舗情報を表示しましす。<br />
                        ボタンタッチでの操作も可能です。
                    </span>
                </div>
                <div className="flex flex-col md:flex-row font-bold items-center mb-3">
                    <Image
                        src={img3}
                        alt="image 3"
                        className="object-cover rounded-md relative"
                        height={300}
                    />
                    <span>
                        検索画面です。主にジャンルでの検索を可能としています。<br />
                    </span>
                </div>
                <div className="flex flex-col md:flex-row font-bold items-center mb-3">
                    <Image
                        src={img4}
                        alt="image 4"
                        className="object-cover rounded-md relative"
                        height={300}
                    />
                    <span>
                        マップ機能です。気になる店舗は黄色いピン、お気に入りの店舗はオレンジのピンで表示しています。<br />
                        ほかのユーザーのマップの閲覧も可能にしています。
                    </span>
                </div>
                <div className="flex flex-col md:flex-row font-bold items-center mb-3">
                    <Image
                        src={img5}
                        alt="image 5"
                        className="object-cover rounded-md relative"
                        height={300}
                    />
                    <span>
                        ユーザ情報の画面です。気になった店舗とお気に入りの店舗を表示しています。
                    </span>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">作ってみて</h2>
                <span className="font-bold">
                    担当はフロントエンド全般とマップ機能、メイン画面のスワイプです。<br />
                    初めてのチームでの開発でした。進捗管理などが難しかったのですが週2回会議を開くことで解決しました。<br />
                </span>
            </div>
        </div>
    )
}