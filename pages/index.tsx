import 'tailwindcss/tailwind.css'

export default function Index(){
    /*書くこと
        ・書いていることリストlinkで飛ぶようにする
        ・自己紹介
        ・スキル
        ・成果物
    */
    return(
        <div className="flex flex-col justify-center items-center text-center">
            <div className="border-solid border-2 border-gray-400 flex flex-col w-3/4 ">
                <a href="/#profile" className="font-black">自己紹介</a>
                <a href="/#skill" className="font-black">スキル</a>
                <a href="/#developed" className="font-black">制作物</a>
            </div>
            
            <div className="profile text-lg  bg-orange-200" id="profile">
                <h1>自己紹介</h1>
                <ruby>福永　司音<rt>フクナガ　シオン</rt></ruby>
                <p>誕生日 2003/12/26</p>
                <p>趣味 
                    <ul>
                        <li>ゲーム(APEX LEGENDS,VALORANT,ARK)</li>
                        <li>Unityでのゲーム制作</li>
                    </ul>
                </p>

            </div>
            <div className="skills bg-lime-200" id="skill">
                <h1>スキル</h1>
                <h2>プログラミング言語</h2>
                    <ul>
                        <li>Java(1年以上)</li>
                        <li>C#(2年以上)</li>
                        <li>php(2年以上)</li>
                        <li>JavaScript(2年以上)</li>
                        <li>typeScript(半年以上)</li>
                        <li>Unity(2年以上)</li>
                    </ul>
                <h2>フレームワーク</h2>
                    <ul>
                        <li>Laravel(1年以上)</li>
                        <li>next.js(半年以上)</li>
                    </ul>
                <h2>データベース</h2>
                    <ul>
                        <li>MySql(2年以上)</li>
                        <li>FireBase(半年以上)</li>
                    </ul>
            </div>
            <div className="developed bg-cyan-200" id="developed">
                <h1>制作物</h1>
                <div className='grid grid-cols-2'>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </div>
        </div>
    )
}