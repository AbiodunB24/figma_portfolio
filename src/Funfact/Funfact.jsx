import React from 'react'
import rectangle from '../assets/Rectangle 45.png'
import './Funfact.css'
import calendar from '../assets/icons8_calendar_240px_1 1.svg'
import location from '../assets/icons8_marker_240px_1 1.png'
import left from '../assets/Group 73.png'

const Funfact = () => {
    

    const icons = [
        {
            image: "https://s3-alpha-sig.figma.com/img/b0ea/c093/3f3ef6516428185cc59ed5d757e763bf?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neRs6jxkOMNVP9~Ban-liSiGU1vW2HJs6R456yjy8NBJoBViLSL3VRlBKN4~oI7CyVRhAjnKkDUNkfxxmypDh-pWPeCzkKberJKOPcdx9VssjAmg3fP7BSzRKmNZPrghjGYsjTqGPy7KjyGgLKK94Uv9K-7EJ9ze8WX9qQJxIY4rUcSxwhI6pRgVm9LDNo7cML34IPFgTLB5qHBGbnjRMR4zShVZOcyNFg00UnRLVx76mQ0ksaxEaluat6ZJjYi8YDGun0s5Wqy3Jned3302xn9WlF9ToAwJXT7OsX~8k54yLbw5k9RWuVxn3DOxsJ1GZq8kYoeindWy1o7c2NTYRg__",
            text: "Got my first camera at 8 years old"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/4c45/654d/c58b02d06ba644a41ad5a826db8e8df8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~SnNm0cwEpaNb2f~sTeMpkNNffTUXQXNY6c~LCae~WdTBH624BheGgPCWt7olNhZR~LsZ9ASLzOUamujNONAbu5FXO3IueoL5YV9be308arRvhBgc8UYT5l1KOmLkMYQGUxHZvWXkzQ6qzkzdxdDGVYFzYv0y-8p69FP0e3raFaOZF4s25Ri-IyC0QghxFyhgJ-mitg4DOidvjpZBEiQv2X2qUPc6u8FIgr5ikfXjyzVRj3wJOgVshflrNfbwAdphDBCQh9iZn4pKhOR0SdwRCuSyBOtYaYcRukmB3hFlB3iV7MwfeDGpfTBgPH8G4V8yzfhQUfvZ8AisFOTy0l0A__",
            text: "Photo of Nature are my favorites"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/a5f6/03b5/e4db96c4f2ce9b43129a55f5ee5d42a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XwOKUnBhAswLsJdogD8QOvf0wnzEhKGUQZbL5LkLyL7D-FARJrjlPKClMhvxnmRSdFuSuTTGOq9iXam04Q06xngFXXSalUIvqlOsAEsMEwAU2xWe8Asx-DRcHk9slut2nADa2pLoyMkQ-g4ooFF7MSC8B~RQBkTfsvAtfNNQ4yayeFWSSqmz77PiCfLEZVei5kSTYWbVP~OM8TLPcpyGmAE46YRUa25oIzQrltyBS8AuEUr-FprERHzsxerO1DSKaaR5VBsPo4RDYNWtQCpCpiK1DfLwngHbDuqkXyJOZmYNJXF0eipJ7ehSaZevGbHnYJHNwe74X-DTBrMyQBOjPw__",
            text: "Love for photography has taken me to 15 countries"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/a8e2/511e/c8810a0ddae95a9994835e1f98b22dff?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YnPNnOl8CHK7iFcbGviGSR-GE7~PDpiFwmrc46cfz8rfIr6Ybrjk-U0vf38OSU5gTuSJMQ8eWr7KwKqoCl0cjorJitdR7-cf9d~vo94QTPxcQbFKzw9uqNs7BnrHRnh6THIeZ93TpbOyGJ76WrQBsVje3jBmnSldje8JMD-8-NMY-g5M6qhMwV7g2chSke~QNLzx0mZnGLnLfqOik-ibymCDOXjSdzr0r7j0DRXjIakxVeqFS-FsEwZZJ9p2e55DLSTq-9HN3THWOrfNemOt3rSBCpXWvpHyu5qEEi4I0UozotViVOEUW4KwqC6M9nb~PWPfAdkati-9pCxPGvrzdA__",
            text: "Have won 5 international photography contests"
        }
    ]

  return (
    <div className='h-screen'>
        <div className='' >
            <p className='funfacts mt-[100px] '>FUN FACTS
            <hr className='text-green-700 h-1 w-[100px] bg-green-900 ' /></p>
            <div className='map px-[100px] pt-9  '>
                {icons.map((item, i) => (
                    <div className='' key={i}>
                        <img className='icon__image ml-[100px]' src={item.image} alt="" />
                        <p className='icon__text leading-8 pt-2' >{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className=' bg-[#F6F6F6] h-full mt-[70px]'>
            <div>
            <p className='funfacts pt-[90px] '>PORTFOLIO
            <hr className='text-green-700 h-1 w-[100px] bg-green-900 ' /></p>
            </div>
            <div className='flex gap-[100px] '>
            <div>
                <img className='w-[720px] pt-9' src={rectangle} alt="" />
            </div>
            <div className='flex-col pt-[100px] '>
                <p className='featured pt-9'>FEATURED WORK</p>
                <h1 className=' featured__text text-[#858585] w-[450px] h-[90px] pt-9'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis  enim velit  vetxercitation veniam consequat sunt nostrud amet.</h1>
                <div>
                <div className='flex mt-[70px] gap-[60px]'>
                   <div className='flex items-center gap-3'>
                   <img className='w-[24px]' src={calendar} alt="" />
                    <p className='fun__date '>June, 2024</p>
                   </div>
                   <div className='flex items-center gap-3'>
                   <img className='w-[24px] ' src={location} alt="" />
                    <p className='fun__date '>Lagos, Nigeria</p>
                   </div>
                </div>
            </div>
            <button className='see__button bg-green-700 py-[23px] px-[81px] mt-[50px] rounded-md text-white '>SEE FEATURED WORK</button>
            </div>
            
           
            </div>


            <div className='flex justify-end gap-[100px] '>
            <div className='flex-col  pt-[100px]  '>
                <p className='featured pt-9 flex items-end justify-end '>OTHER WORKS</p>
                <h1 className=' other__text text-[#858585] w-[450px] h-[90px] pt-9'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis  enim velit  vetxercitation veniam consequat sunt nostrud amet.</h1>
                <div>
            </div>
            <button className='see__button bg-green-700 py-[23px] px-[81px] mt-[100px] rounded-md text-white '>SEE FULL PORTFOLIO</button>
            </div>
            <div>
                <img className='w-[720px] ' src={left} alt="" />
            </div>
     </div>
            
        </div>
    </div>
  )
}

export default Funfact