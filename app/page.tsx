import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen p-8 pb-10 text-align-center gap-4 sm:gap-8">
      <header className="flex  flex-col justify-center sm:gap-2 row-start-1">
        <h1 className="text-6xl font-bold">NOT ANOTHER WEDDING VIDEO</h1>
        <div className="mt-6 sm:mt-2 gap-0">
          <p className="text-lg">- Not a checklist type of video</p>
          <p className="text-lg">- Mixed media, analog, documentary</p>
        </div>
      </header>
      <main className=" flex flex-col gap-8">
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
              <video className="block w-full sm:w-1/2 h-auto" autoPlay muted loop playsInline src="/videos/alaska/maggieb_linefishing.mov" />
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
          <h3 className=" text-4xl font-semibold">ABOUT ME</h3>
          <ul>
            <li className="">- Having worked in <Link className="" href="#" target="_blank">film production</Link> in <span className="font-bold">Los Angeles</span> I offer something different</li>
            <li className="">- I'm a documentary filmmaker</li>
            <li>
              <Link className="bold" href="https://onewaytix.film" target="_blank">- one way tix</Link> (feature-length doc)
            </li>
            <li className="">- I want to tell <span className="italic">your story</span>, not just shoot a checklist of events</li>
            <li className="">- <span className="font-bold">10 years</span> of creating with cameras</li>
            <li className="">- Story structure</li>
            <li className="">- I may ask to do a phone interview with you a week before to use in the edit</li>
            <li className="italic">Interview guests, etc</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-2xl font-semibold">Rates</h3>
          <h3 className=" text-xl font-semibold">SF City Hall</h3>
          <ul className=" flex flex-col list-disc list-inside">
            <li>$1000 for event coverage</li>
            <li className="">Highlight video (2-5 minutes)</li>
            <li>50% deposit to book, balance due the day of the event</li>
          </ul>
          <h3 className=" text-xl font-semibold">General</h3>
          <ul className=" flex flex-col list-disc list-inside">
            <li>$3500 for full day coverage (8 hours)</li>
            <li className="">Highlight video (3-8 minutes), ceremony, speeches, footage on USB-drive</li>
            <li>50% deposit to book, balance due the day of the event</li>
          </ul>
          <h3 className=" text-xl font-semibold">Budget-Friendly</h3>
          <ul className=" flex flex-col list-disc list-inside">
            <li>$1000 for full day coverage (8 hours)</li>
            <li className="">No edit, just file transfer</li>
            <li>50% deposit to book, balance due the day of the event</li>
          </ul>
        </div>
      </main>
      <footer className=" row-start-3 flex gap-[24px] flex-wrap  justify-center">
        <div>
          <h3 className=" text-2xl font-semibold">Footer</h3>
        </div>
      </footer>
    </div>
  );
}
