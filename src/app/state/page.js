import Counter from "../../components/counter";

export default function State(){
    return(
        <div>
            <div className="text-center mb-4">
                <h1 className="font-bold text-4xl">React State Demo</h1>
                <p>Learn how useState works in React</p>
            </div>
            <Counter />
        </div>
    ); 
}