'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { Loader } from "@repo/ui/Loader";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dropdown() {
    const router = useRouter();
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);
    const user = session?.user;

    const handleButtonClick = async () => {
        setLoading(true);
        await signOut()
        router.push("/auth/signin");
    }

    return (
        <div
            className={`flex flex-col p-5 absolute right-0 top-16  w-60  backdrop-blur-md z-50 border-l-0.5 border-b-0.5 border-[#A704BF]
          transition-opacity duration-1000 ease-in-out transform ${user ? "opacity-100 translate-y-0" : "display-none translate-y-5"
                }`}
        >
            <div className="flex flex-col gap-5 justify-evenly h-full">
                
                    <div className="flex flex-col w-96 text-wrap">
                        <span className="text-slate-300 text-sm">{session?.user?.name ? session?.user?.name : "login to continue"}</span>
                        <span className="text-xs text-slate-300 hover:text-[#A704BF]">{session?.user?.email}</span>
                    </div>
            
                <div className="text-slate-300 hover:text-white text-sm flex items-center gap-3 ml-[1px] ">
                    <a
                        href="https://github.com/Urcodingbuddy/Kraken-Payments"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-[#A704BF] text-sm flex items-center gap-3 ml-[1px]"
                    >
                        <GitHubSvg />
                        Github Contribute
                    </a>
                </div>
                <div className="border-[0.1px] border-gray-600 w-full "></div>
                <button onClick={handleButtonClick}>
                    <span className="inline-flex gap-5">
                        {user ? "Logout" : "Login"}
                        {loading && <Loader />} {/* Display loader when loading is true */}
                    </span>
                </button>
            </div>
        </div>
    )
}


function GitHubSvg() {
    return (
        <svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 border-2 border-black w-7 fill-white group-hover:fill-black  transition-colors" aria-label="GitHub">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 0.405518C5.73469 0.405518 0.655029 5.50047 0.655029 11.8036C0.655029 16.8421 3.90974 21.107 8.42489 22.6165C8.9894 22.73 9.19618 22.3712 9.19618 22.0695C9.19618 21.8052 9.17757 20.8995 9.17757 19.9558C6.01659 20.6352 5.35835 18.597 5.35835 18.597C4.85036 17.2761 4.09768 16.9365 4.09768 16.9365C3.06309 16.2383 4.17304 16.2383 4.17304 16.2383C5.32067 16.3138 5.92286 17.4083 5.92286 17.4083C6.9386 19.1443 8.57538 18.6538 9.23386 18.3518C9.32782 17.6158 9.62904 17.1063 9.94886 16.8233C7.42775 16.5591 4.77523 15.5778 4.77523 11.1996C4.77523 9.95415 5.22647 8.93516 5.94146 8.14266C5.82866 7.85966 5.43348 6.68944 6.05451 5.12321C6.05451 5.12321 7.01396 4.82122 9.17733 6.2932C10.1036 6.0437 11.0587 5.91677 12.0183 5.91571C12.9777 5.91571 13.9558 6.04794 14.8589 6.2932C17.0226 4.82122 17.982 5.12321 17.982 5.12321C18.603 6.68944 18.2076 7.85966 18.0948 8.14266C18.8287 8.93516 19.2613 9.95415 19.2613 11.1996C19.2613 15.5778 16.6088 16.5401 14.0688 16.8233C14.4828 17.1818 14.8401 17.861 14.8401 18.9368C14.8401 20.4653 14.8215 21.692 14.8215 22.0692C14.8215 22.3712 15.0285 22.73 15.5928 22.6167C20.1079 21.1068 23.3626 16.8421 23.3626 11.8036C23.3813 5.50047 18.283 0.405518 12.0183 0.405518Z">
            </path>
        </svg>
    )
}