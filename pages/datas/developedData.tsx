import Link from "next/link";
import Image from "next/image";
import vehicle from "@/imgs/vehicle.png"
import escape from "@/imgs/3d_escape.png"
import php_typing from "@/imgs/php_typing/php-typinggame-1.png" 
import kaomangai from "@/imgs/kaomangai/kaomangai-1.png"
/*
    メモ
        ・ゲームはunityroomのリンク
        ・サイトなど公開できていないものはそれ用のページを作る
            ・productsに作る
*/
const data =[
    {
      name:"車ゲーム",
      description:"上から降ってくる乗り物をくっつけてスコアを競うゲームです。",
      img:vehicle,
      link:"https://unityroom.com/games/vehicle",
    },
    {
      name:"3D脱出ゲーム",
      description:"落ちている箱を運んで謎を解き脱出するゲームです。",
      img:escape,
      link:"https://unityroom.com/games/3d_escape",
    },
    {
      name:"タイピングゲーム",
      description:"jsとphpを使ったタイピングゲームです。",
      img:php_typing,
      link:"/php_typing",
    },
    {
      name:"チーム制作",
      description:"6人チームでの制作です。",
      img:kaomangai,
      link:"/kaomangai",
    },

]
export default function getDevData(){
    return data.map((element,index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-md shadow-md">
          <h2 className='text-2xl font-bold'>{element.name}</h2>
          <div className='developed-img md:w-40 md:h-32 sm:w-20 sm:h-1'>
            <Link href={element.link} target='_blank'>
              <Image
                src={element.img}
                alt='game image'
                width={500}
                height={500}
                className='object-cover w-full h-full'
              />
            </Link>
          </div>
          <span className='description'>{element.description}</span>
        </div>
      ));
    
}