import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen p-8 pb-10 text-align-center gap-8">
      <header className="flex  flex-col justify-center gap-4 row-start-1">
        <h1 className=" text-4xl font-bold">NOT ANOTHER WEDDING VIDEO</h1>
        <p>Not a checklist type of video</p>
      </header>
      <main className=" flex flex-col gap-8">
        <div>
          <h3 className=" text-2xl font-semibold">Mixed Media</h3>
          <ul>
            <li className="">hi-8 (vhs)</li>
            <li className="">2013 canon powershot</li>
            <li className="">35mm film photos</li>
            <li className="">iphone</li>
            <li className="">audio</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-2xl font-semibold">Documentary</h3>
          <ul>
            <li className="">Having worked in <Link className="" href="#" target="_blank">film production</Link> in <span className="font-bold">Los Angeles</span> I offer something different</li>
            <li className="">I'm a documentary filmmaker</li>
            <li>
              <Link className="bold" href="https://onewaytix.film" target="_blank">one way tix</Link> (feature-length doc)
            </li>
            <li className="">I want to tell <span className="italic">your story</span>, not just shoot a checklist of events</li>
            <li className=""><span className="font-bold">10 years</span> of creating with cameras</li>
            <li className="">Story structure</li>
            <li className="">I may ask to do a phone interview with you a week before to use in the edit</li>
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
