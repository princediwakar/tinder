import React from 'react'
import Logo from './Logo'

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-white shadow-md p-2">
            <div className="h-8 w-8">
                <button type="button">
                    <img src="/images/misc/user.png" alt="User Settings"/>
                </button>
            </div>

            <div className="h-8 flex items-center">
                <Logo />
            </div>

            <div className="h-8 w-8">
                <button type="button">
                    <img src="/images/misc/messages.png" alt="View Messages"/>
                </button>
            </div>
        </div>
    )
}

export default Header
