import Counter from "../../components/counter";

export default function State(){
    return(
        <div>
            <div className="text-center mb-4 h-screen">
                <h1 className="font-bold text-4xl">React State Demo</h1>
                <p className="text-gray-500">Learn how useState works in React</p>
            </div>
            <div className="flex justify-center">
                <Counter />
            </div>
        </div>
    ); 
}