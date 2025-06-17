export default function Button({text,customclass}){
    return(
        <button className={`${customclass} text-white p-2 rounded-md`}>
            {text}
        </button>
    );
}