import Propcards from "../../components/propcards";

export default function Cards(){
    return(
        <div className="text-center">
            <h1 className="font-bold text-4xl">React Props Demo</h1>
            <h1 className="text-gray-500 mb-6">Learn how props work in React</h1>
            <h1 className="text-2xl font-bold mb-6">Props Example (Data Passing)</h1>
            <div className="flex gap-2 justify-center">
                <Propcards name='Hari' age={19} status={"Online"} />
                <Propcards name='Shyam' age={19} status={"Offline"} />
            </div>
        </div>
    );
}