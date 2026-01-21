import { Menu } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="bg-gray-600 text-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidde">
                        <button>
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar