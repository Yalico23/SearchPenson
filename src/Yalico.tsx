import { useState } from "react"
import { users as u } from "./users"
import type { UsersTypes } from "./type/index"
import SearchIcon from "./icons/SearchIcon"

const Yalico = () => {
    const [users] = useState<UsersTypes[]>(u)
    const [shadow, setShadow] = useState<string | null>(null)
    const [searchUsers, setSearchUsers] = useState<string>("")

    const handleClick = (id: string) => {
        setShadow(prevId => (prevId === id ? null : id))
    }
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchUsers(e.target.value.toLowerCase())
    }

    const filteredUsers = users.filter(us => us.name.toLowerCase().includes(searchUsers))


    return (
        <>
            <main className="relative py-10 min-h-screen">
                <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

                <div className="container mx-auto px-20">
                    <h1 className="text-white/80 text-5xl text-center pt-5">Usuarios</h1>
                    <form className="mt-10 ">
                        <div className="relative flex items-center">
                            <label className="absolute ml-2" htmlFor="buscar"><SearchIcon /></label>
                            
                            <input className="py-2 pl-10 rounded-xl w-[400px] border-gray-400 border" type="text" placeholder="Buscar Usuario por Nombre"
                                onChange={handleSearchChange}
                                id="buscar"
                            />
                        </div>
                    </form>

                    <div className="grid lg:grid-cols-2 gap-5">
                        {filteredUsers.map(u => (
                            <div key={u.id} className={`rounded-xl flex flex-col lg:flex-row items-center p-2 border mt-5 border-white/80 hover:shadow-xl hover:shadow-[green] cursor-pointer ${shadow === u.id ? 'shadow-xl shadow-[green]' : ''
                                }`} onClick={() => handleClick(u.id)}>
                                <div className="flex justify-center items-center px-5">
                                    <div className="rounded-full overflow-hidden size-[140px]">
                                        <img className="w-full h-full" src={`/images/${u.image}`} alt={`${u.name}`} onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/images/image.png";
                                        }} />
                                    </div>
                                </div>

                                <div className="flex flex-col h-full justify-between">
                                    <div className="pt-2">
                                        <h2 className="text-2xl text-white font-semibold">{u.name}</h2>
                                        <span className="text-lg text-gray-400">{u.role}</span>
                                    </div>
                                    <p className="py-5 text-white ">{u.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Yalico