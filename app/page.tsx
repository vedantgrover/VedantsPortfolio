import Greeting from "@/app/components/Greeting";

export default function Home() {
    return (
        <div className="h-screen flex flex-col justify-between">
          <section className="flex justify-center items-center border h-screen">
              <div className="">
                  <Greeting />
              </div>
          </section>
        </div>
    );
}
