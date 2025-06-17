import Button from "../components/button"

export default function Home(){
  return(
    <div className="text-center">
      <h1>Hello World</h1>
      <p>This is my first NextJS project</p>
      <ol>
        <li>NextJS</li>
      </ol>
      <Button text="Click Me" classname="cursor-pointer bg-green-500 text-white p-2 rounded-md hover:bg-green-800"/>
      <Button text="Maybe Click Me" classname="cursor-pointer bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"/>
      <Button text="Don't Click Me" classname="cursor-pointer bg-red-600 text-white p-2 rounded-md hover:bg-red-800"/>
    </div>
  )
}