import Image from "next/image";
import Link from "next/link";
import CopyEmailButton from "./components/CopyEmailButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-10 text-align-center gap-4 sm:gap-8">
      <header className="flex flex-col justify-center sm:gap-2 row-start-1 tracking-wide">
        <h1 className="text-6xl font-bold">NOT ANOTHER WEDDING VIDEO</h1>
        <div className="mt-6 sm:mt-2 gap-0">
          <p className="text-lg">- Not a checklist type of video</p>
          <p className="text-lg">- Mixed media, analog, documentary</p>
        </div>
      </header>
      <main className="flex flex-col gap-8">
        <div className="">
          <ul className="m-0 p-0 gap-4">
            <li className="block-item">
              <h2 className="uppercase font-semibold text-4xl my-6">VHS</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 w-half list-none">
                <li>
                  <video className="block w-full h-auto" autoPlay muted loop playsInline src="/videos/vhs/vhs_clip_01_mobile.mp4" />
                </li>
                <li>
                  <video className="block w-full h-auto" autoPlay muted loop playsInline src="/videos/vhs/vhs_clip_02_mobile.mp4" />
                </li>
                <li>
                  <video className="block w-full h-auto" autoPlay muted loop playsInline src="/videos/vhs/vhs_clip_03_mobile.mp4" />
                </li>
              </ul>
            </li>
            <li className="block-item">
              <h2 className="uppercase font-semibold text-4xl mt-6">Canon Powershot</h2>
              <p className="mt-2 pl-1 mb-6">Early 2000s camera</p>
              <video className="block w-full sm:w-1/2 h-auto" autoPlay muted loop playsInline src="/videos/alaska/maggieb_linefishing.MOV" />
            </li>
            <li className="block-item">
              <h2 className="uppercase font-semibold text-4xl my-6">35mm Film Photos</h2>
              <video className="block w-full sm:w-1/2 h-auto" autoPlay muted loop playsInline src="/videos/35/calkristin_35mm_photosonly_360.mp4" />
            </li>
            <li className="mb-6 block-item">
              <h2 className="uppercase font-semibold text-4xl mt-6">Audio</h2>
              <p className="mt-4 mb-6">This is how I'd use a <span className="italic">phone interview</span></p>
              <audio className="block w-half h-auto" controls style={{height: 56}}>
                <source src="/audio/thesurprisewedding_audio.wav" type="audio/wav" />
              </audio>
            </li>
            <li className="block-item">
              <h2 className="uppercase font-semibold text-4xl mt-6">Guest Interviews</h2>
              <p className="mt-2 pl-1 mb-6">The groom's father</p>
              <video className="block w-full sm:w-1/2 h-auto" autoPlay muted loop playsInline src="/videos/doc/guest_interview_01.mp4" />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-4xl font-semibold">ABOUT ME</h3>
          <ul className="mt-4 ml-2">
            <li className="mt-1">- Jared Lamont</li>
            <li className="mt-1">- Bay Area</li>
            <li className="mt-1">- Doc Filmmaker</li>
            <li className="mt-1">- Photographer</li>
            <li className="mt-1">- Commercial Fisherman</li>
            <li className="mt-1">- Tomato Sauce Pop-Up Curator</li>
            <li className="mt-1">
              <a href="https://onewaytix.film" target="_blank">- ONE WAY TIX</a>
            </li>
             <li className="mt-1">
              <a href="mailto:jaredlamont90@gmail.com">- Email</a>
            </li>
          </ul>
          <Image className="border ml-4 mt-4" width={100} height={200} src="/hardcountryselfie.jpeg" alt="About Me" />
        </div>
        <div>
          <h3 className="text-4xl font-semibold">RATES & PKGS</h3>
          <ul className="mt-4 ml-2">
            <li className="mt-1">- <span className="italic font-semibold">Custom quotes</span> and options available</li>
            <li className="mt-1">- No set packages</li>
            <li className="mt-1">- Day rates starting at <span className="font-semibold">$1,000</span> [ No Editing ]</li>
            <li className="mt-1">- Full-Coverage, 3-10 Minute <span className="font-semibold">Highlight Video</span>, starting at <span className="font-semibold">$3,000</span></li>
            <li className="mt-1">- Travel fees may apply</li>
            <li className="mt-1">- 50% <span className="font-semibold">retainer</span> to book</li>
            <li className="mt-1">- <span className="font-semibold">Final payment</span> day of event</li>
          </ul>
          <p className="mt-4"></p>
        </div>
      </main>
      <footer className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-semibold mb-4">CONTACT</h3>
          <Link 
            href="mailto:notanotherweddingvideo@gmail.com" 
            className="text-xl sm:text-3xl underline"
            >  
            notanotherweddingvideo@gmail.com
          </Link>
          <CopyEmailButton email="notanotherweddingvideo@gmail.com" />
        </div>
      </footer>
    </div>
  );
}
