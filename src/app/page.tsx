
'use client'
import { useState } from "react"
import CompareCookies from "./components/CompareCookies"

export default function Home() {
  const [aValue, setAValue] = useState('')
  const [bValue, setBValue] = useState('')
  const [result, setResult] = useState({ aValue: '', bValue: '' })
  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); setResult({ aValue, bValue }) }} className=" flex flex-col justify-around  items-center text-black  ">
        <div className="flex flex-row h-3/4 w-screen px-4 py-16">
          <textarea onChange={(e) => setAValue(e.target.value)} className="w-full h-full mr-2"></textarea>
          <textarea onChange={(e) => setBValue(e.target.value)} className="w-full h-full" ></textarea>
        </div>
        <button type="submit" className="mt-8 flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Compare Cookies</button>
      </form >
      {result.aValue && result.bValue && <CompareCookies aValue={result.aValue} bValue={result.bValue} />}

    </>
  );
}
