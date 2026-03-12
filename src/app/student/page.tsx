"use client"

import Loader from "@/components/Loader"
import { useFetchStudent } from "./-mutation"
import { Edit, Trash } from "lucide-react"

const Student = () => {

    const { data, isLoading } = useFetchStudent()

    return (
        <div className="text-center rounded-xl shadow py-4 space-y-10 p-10">
            <h1>List Student</h1>
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden p-8">
                <thead className="bg-gray-50 text-gray-700">
                    <tr>
                        <th className="px-4 py-3 text-left">No</th>
                        <th className="px-4 py-3 text-left">Nama</th>
                        <th className="px-4 py-3 text-left">Kelas</th>
                        <th className="px-4 py-3 text-left">Jurusan</th>
                        <th className="px-4 py-3 text-left"></th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {
                        isLoading &&
                        <tr className="hover:bg-gray-50">
                            <td colSpan={5}>
                                <Loader text="Loading data..." size={50} />
                            </td>
                        </tr>
                    }
                    {
                        data && data?.data?.length > 0
                        && data?.data?.map((d: {
                            name: string;
                            class_room: string;
                            major: string;
                        }, i: number) => <tr
                            className="hover:bg-gray-50"
                            key={i}>
                                <td className="px-4 py-3 text-left">{i + 1}</td>
                                <td className="px-4 py-3 text-left">{d?.name}</td>
                                <td className="px-4 py-3 text-left">{d?.class_room}</td>
                                <td className="px-4 py-3 text-left">{d?.major}</td>
                                <td className="px-4 py-3 text-left">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded">
                                        <Edit />
                                    </button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded">
                                        <Trash />
                                    </button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Student