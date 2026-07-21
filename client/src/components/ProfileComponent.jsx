import {  LogOut, Settings, User } from "lucide-react"
import { Link } from "react-router-dom";

const ProfileComponent = ({ setProfileOpen, profileOpen, profileRef }) => {
    return (

        <div className="relative" ref={profileRef}>

            <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="
            w-11
            h-11
            rounded-full
            bg-lime-400
            flex
            items-center
            justify-center
            hover:scale-110
            transition
            duration-300
            shadow-lg
            "
            >

                <User
                    size={22}
                    className="text-slate-900"
                />

            </button>

            {profileOpen && (

                <div
                    className="
                absolute
                right-0
                mt-3
                w-56
                rounded-2xl
                bg-slate-900
                border
                border-slate-700
                shadow-2xl
                overflow-hidden
                animate-in
                fade-in
                zoom-in-95
                duration-200
                "
                >

                    <div className="p-5 border-b border-slate-700">

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center">

                                <User className="text-slate-900" />

                            </div>

                            <div>

                                <h3 className="font-semibold text-white">

                                    Abhishek

                                </h3>

                                <p className="text-xs text-slate-400">

                                    Player

                                </p>

                            </div>

                        </div>

                    </div>

                    <Link
                        to="/profile"
                        className="
                    flex
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-slate-300
                    hover:bg-slate-800
                    transition
                    "
                    >

                        <User size={18} />

                        My Profile

                    </Link>

                    <Link
                        to="/settings"
                        className="
                    flex
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-slate-300
                    hover:bg-slate-800
                    transition
                    "
                    >

                        <Settings size={18} />

                        Settings

                    </Link>

                    <button
                        className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-red-400
                    hover:bg-red-500/10
                    transition
                    "
                    >

                        <LogOut size={18} />

                        Logout

                    </button>

                </div>

            )}

        </div>
    )
}

export default ProfileComponent