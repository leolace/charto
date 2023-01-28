import React from "react"
import UseFetch from "./UseFetch"
import UseParseData from "./UseParseData"

const UseGetData = (endpoint: string, params: IParams) => {
  const [data, setData] = React.useState<IAlbumData[] | null>(null)
  const { fetchedData, loading, error } = UseFetch(endpoint, params)

  React.useEffect(() => {
    if (fetchedData) {
      setData(UseParseData(fetchedData))
    }
  }, [fetchedData])

  return { data, loading, error }
}

export default UseGetData
