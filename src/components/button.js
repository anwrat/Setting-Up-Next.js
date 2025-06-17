export default function Button({text,classname}){
    return(
        // <button className="cursor-pointer bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800">
        <button className={classname}>
            {text}
        </button>
    );
}