import React from "react"
import Section from "../components/Section"
import UseGetData from "../hooks/UseGetData"

const Home = () => {
  const { data } = UseGetData("/browse/new-releases", {})

  return (
    <div>
      <Section data={data} title="Novos Lançamentos" />
    </div>
  )
}

export default Home
