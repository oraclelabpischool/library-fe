'use client'

import Navbar from "@/components/Navbar"
import { useFetchBook } from "./-mutation"
import { BookType } from "./type"

const Book = () => {

  const { data, isLoading, isSuccess } = useFetchBook()

  return (
    <>
      <Navbar />
      {
        isLoading &&
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-b-transparent border-blue-500" />
        </div>
      }
      {
        isSuccess &&
        <div className="container pt-4">
          <h2 className="text-3xl text-center my-3">
            List Book
          </h2>
          <div className="flex justify-center">
            <input placeholder="Cari Buku" className="w-100 border-2 border-blue-300 rounded mr-3" />
            <button className="bg-blue-300 text-white">
              Cari Buku
            </button>
          </div>
          <div className="w-full">
            <div className="flex justify-center mt-4">
              <table className="responsive border-1">
                <thead>
                  <tr>
                    <th className="border-1">No</th>
                    <th className="border-1">Judul</th>
                    <th className="border-1">Kategori</th>
                    <th className="border-1">Penulis</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data?.data?.map((d: BookType, i: number) => <tr
                      className="border-1"
                      key={i}>
                      <td className="border-1">{i + 1}</td>
                      <td className="border-1">{d?.title}</td>
                      <td className="border-1">{d?.category_name}</td>
                      <td className="border-1">{d?.author}</td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Book