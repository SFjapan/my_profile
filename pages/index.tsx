import Link from 'next/link'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import vehicle from '@/imgs/vehicle.png'
import escape from '@/imgs/3d_escape.png'
export default function Index() {
    /*書くこと
        ・書いていることリストlinkで飛ぶようにする
        ・自己紹介
        ・スキル
        ・制作物
    */
    //最終的には書いていることの更新も考えてデータ化してループ分でhtml化する
    return (
        <div className="flex flex-col justify-center items-center text-center min-h-screen bg-gray-100">
            <div className="border-solid border-2 border-gray-400 flex flex-col w-3/4 p-4 bg-white rounded-md shadow-md">
                <Link href="#profile" className='hover:text-red-600 font-bold py-2'>自己紹介</Link>
                <Link href="#skill" className='hover:text-red-600 font-bold py-2'>スキル</Link>
                <Link href="#developed" className='hover:text-red-600 font-bold py-2'>制作物</Link>
            </div>
            <section className="profile-section p-6 my-6 bg-white rounded-md shadow-md" id="profile">

                <div className="profile p-6 my-6 bg-white rounded-md shadow-md" id="profile">
                    <h1 className='text-4xl font-bold mb-4'>自己紹介</h1>
                    <ruby className="text-xl block">福永 司音<rt className="text-base">フクナガ シオン</rt></ruby>
                    <p className="mb-2">誕生日 2003/12/26</p>
                    <p className="mb-2">趣味</p>
                    <ul className="list-disc list-inside text-left">
                        <li>ゲーム(APEX LEGENDS,VALORANT,ARK)</li>
                        <li>Unityでのゲーム制作</li>
                    </ul>
                </div>
            </section>
            <section className="profile-section p-6 my-6 bg-white rounded-md shadow-md" id="skill">

                <div className="skills p-6 my-6 bg-white rounded-md shadow-md" id="skill">
                    <h1 className='text-4xl font-bold mb-4'>スキル</h1>
                    <div className="mb-4">
                        <h2 className='text-2xl font-bold'>プログラミング言語</h2>
                        <ul className="list-disc list-inside text-left">
                            <li>Java(1年以上)</li>
                            <li>C#(2年以上)</li>
                            <li>php(2年以上)</li>
                            <li>JavaScript(2年以上)</li>
                            <li>typeScript(半年以上)</li>
                            <li>Unity(2年以上)</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-2xl font-bold'>フレームワーク</h2>
                        <ul className="list-disc list-inside text-left">
                            <li>Laravel(1年以上)</li>
                            <li>next.js(半年以上)</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-2xl font-bold'>データベース</h2>
                        <ul className="list-disc list-inside text-left">
                            <li>MySql(2年以上)</li>
                            <li>FireBase(半年以上)</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="profile-section p-6 my-6 bg-white rounded-md shadow-md" id="developed">

                <div className="developed p-6 my-6 bg-white rounded-md shadow-md" id="developed">
                    <h1 className='text-4xl font-bold mb-4'>制作物</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="bg-gray-200 p-4 rounded-md shadow-md">
                            <h2 className='text-2xl font-bold'>車ゲーム</h2>
                            <div className='developed-img w-40 h-32 md:w-20 md:h-10'>
                                <Link href={'https://unityroom.com/games/vehicle'} target='blank'>
                                    <Image
                                        src={vehicle}
                                        alt='game image'
                                        className='object-cover w-full h-full'
                                    />
                                </Link>
                            </div>
                            <span className='description'>上から降ってくる乗り物をくっつけてスコアを競うゲームです。</span>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md shadow-md">
                            <h2 className='text-2xl font-bold'>3D脱出ゲーム</h2>
                            <div className='developed-img w-40 h-32 md:w-20 md:h-10'>
                                <Link href={'https://unityroom.com/games/3d_escape'} target='blank' >
                                    <Image
                                        src={escape}
                                        alt='game image'
                                        className='object-cover w-full h-full'
                                    />
                                </Link>
                            </div>

                            <span className='description'>落ちている箱を運んで謎を解き脱出するゲームです。</span>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md shadow-md">a</div>
                        <div className="bg-gray-200 p-4 rounded-md shadow-md">a</div>
                        <div className="bg-gray-200 p-4 rounded-md shadow-md">a</div>
                    </div>
                </div>
            </section>
        </div>


    )
}