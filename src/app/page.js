import Button from "../components/button"

export default function Home(){
  return(
    <div className="text-center h-screen">
      <h1>Hello World</h1>
      <p>This is my first NextJS project</p>
      <ol>
        <li>NextJS</li>
      </ol>
      <Button text="Click Me" customclass="cursor-pointer bg-green-500 hover:bg-green-800"/>
      <Button text="Maybe Click Me" customclass="cursor-pointer bg-yellow-500 hover:bg-yellow-600"/>
      <Button text="Don't Click Me" customclass="cursor-pointer bg-red-600 hover:bg-red-800"/>
      <p>CHECK GOOGLE CHATS FOR ASSIGNMENTS</p>
    </div>
  )
}