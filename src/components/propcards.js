export default function Propcards({name,age,email,status}){
    return(
        <div className="text-black bg-white border-2 px-4 rounded-2xl">
            <p className="font-bold">{name}</p>
            <p className="text-gray-500">Age: {age}</p>
            <p className="text-gray-500">Email: {email}</p>
            <p className="text-gray-500">{status}</p>
        </div>
    );
}