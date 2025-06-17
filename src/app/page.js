import Button from "../components/button"

export default function Home(){
  return(
    <div className="text-center">
      <h1>Hello World</h1>
      <p>This is my first NextJS project</p>
      <ol>
        <li>NextJS</li>
      </ol>
      <Button text="Click Me"/>
      <Button text="Don't Click Me"/>
    </div>
  )
}