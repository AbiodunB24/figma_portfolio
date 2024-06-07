import bg from "../assets/Background.png"
import './About.css'
import facebook from '../assets/icons8_facebook_f_48px 1.svg'
import twitter from '../assets/icons8_twitter_48px 1.svg'
import instagram from '../assets/icons8_instagram_old_60px 1.svg'
import eclipse from '../assets/Ellipse 9.png'

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='h-screen bg-cover overflow-hidden'>
        <div>
            <div className="head flex justify-between items-center  ">
                <div>
                <h1 className="Cyberphym text-white mt-[54px] ml-9">Cyberphym<span className="photography">Photography</span></h1>
                </div>
                <div className=" text-white flex mr-9 justify-evenly gap-2">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div>
                <div className=" mt-[201px] ml-[648px] ">
                    <img className="w-[144px]"  src={eclipse} alt="" />
                    <h2 className="jimoh text-white ml-[-30px]">Jimoh Lawal</h2>
                    <h1 className="amet text-white ml-[-400px] w-[900px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis  enim velit mollit. Exercitation v  enim velit mollit. Exercitation v  enim vetxercitation veniam consequat sunt nostrud amet.</h1>
                    <div className="bhome text-white flex gap-4 pt-9 ml-[-280px]">
                        <button className="portfolio py-[23px] px-[81px] border-2">SEE PORTFOLIO</button>
                        <button className="hire py-[23px] px-[81px] bg-green-700 rounded-md">HIRE ME</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About